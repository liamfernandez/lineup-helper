<script lang="ts">
	import type { Lineup, NBA_Team, Season_Averages } from '$lib';
	import { GLOBAL_LINEUPS, selectedWeek, viewing_lineup } from '$lib/stores';
	import { calculateAverageFantasyPoints } from '$lib';
	import getPlayerSeasonAverages from '$lib/utils/ball_dont_lie_provider';
	import { onMount } from 'svelte';

	export let lineupKey: string;
	export let teams: { [key: number]: NBA_Team };

	let players_sorted_by_games_played: string[] = [];
	$: averagesLoaded = validateAverages($viewing_lineup);

	onMount(async () => {
		await refreshPlayerAverages();
		await spotHolesInLineup();
	});

	function spotHolesInLineup() {
		$viewing_lineup.players.forEach((player_name) => {
			const average_4_player = $viewing_lineup.averages[player_name];
			if (average_4_player === undefined) {
				// console.log(
				// 	'[spotHolesInLineup]: Found a hole in the lineup, retrieving averages for player: ',
				// 	player_name
				// );
				getPlayerSeasonAverages(player_name, $viewing_lineup).then((average) => {
					const tempAverages = $viewing_lineup.averages;
					tempAverages[player_name] = average;

					viewing_lineup.setAverages(tempAverages);
					// $viewing_lineup.setAverage(player_name, average);
					$GLOBAL_LINEUPS[lineupKey] = $viewing_lineup;
				});
			}
		});
	}
	function validateAverages(lineup: Lineup) {
		// console.log(
		// 	'[validateAverages]: lineup.averages keys: ',
		// 	Object.keys(lineup.averages),
		// 	' & ',
		// 	Object.keys(lineup.averages).length
		// );
		return Object.keys(lineup.averages).length > 0;
	}

	async function refreshPlayerAverages() {
		const today1am = new Date();
		today1am.setHours(1, 0, 0, 0);

		if (Object.keys($viewing_lineup.averages).length === 0) {
			const tempAverages = await retrieveAveragesForWholeLineup($viewing_lineup);

			console.log('retrieve averages for whole lineup & about to call store.set ', tempAverages);
			viewing_lineup.setAverages(tempAverages);
			viewing_lineup.updateLastRefreshedAt(new Date());

			$GLOBAL_LINEUPS[lineupKey] = $viewing_lineup;
		} else if (
			$viewing_lineup.ball_dont_lie_refreshed_at &&
			$viewing_lineup.ball_dont_lie_refreshed_at < today1am
		) {
			const tempAverages = await retrieveAveragesForWholeLineup($viewing_lineup);
			viewing_lineup.setAverages(tempAverages);
			viewing_lineup.updateLastRefreshedAt(new Date());

			$GLOBAL_LINEUPS[lineupKey] = $viewing_lineup;
		}

		return true;
	}

	async function retrieveAveragesForWholeLineup(
		lineup: Lineup
	): Promise<{ [key: string]: Season_Averages }> {
		const tempAverages: { [key: string]: Season_Averages } = {};
		const playerAverages = await Promise.all(
			lineup.players.map((player_name) => getPlayerSeasonAverages(player_name, $viewing_lineup))
		);

		lineup.players.forEach((player_name, index) => {
			tempAverages[player_name] = playerAverages[index];
		});

		// console.log(
		// 	'[retrieveAveragesForWholeLineup]: Finished retrieving averages for whole lineup: ',
		// 	tempAverages
		// );
		return tempAverages;
	}

	$: if ($selectedWeek > 0 && averagesLoaded) {
		players_sorted_by_games_played = $viewing_lineup.players.sort((a, b) => {
			const a_games_played = getGamesPlayed(a);
			const b_games_played = getGamesPlayed(b);

			if ($viewing_lineup.averages[a] === undefined || $viewing_lineup.averages[b] === undefined) {
				// console.log(
				// 	'[SORT] Something is undefined, check player_averages: ',
				// 	$viewing_lineup.averages
				// );

				if (a_games_played > b_games_played) {
					return -1;
				} else if (a_games_played < b_games_played) {
					return 1;
				} else {
					return 0;
				}
			} else {
				// console.log(
				// 	`Starting sort by production for ${a} and ${b} | ${$viewing_lineup.averages[a]} | ${$viewing_lineup.averages[b]}`
				// );
				const player_a_production =
					calculateAverageFantasyPoints($viewing_lineup.averages[a]) * a_games_played;
				const player_b_production =
					calculateAverageFantasyPoints($viewing_lineup.averages[b]) * b_games_played;

				if (player_a_production > player_b_production) {
					return -1;
				} else if (player_a_production < player_b_production) {
					return 1;
				} else {
					return 0;
				}
			}
		});
		// console.log('Sorting the list of players by total production finished!');
	}

	// $: showTotals = areAveragesLoaded(players_sorted_by_games_played);
	$: totalGamesPlayed = getTop10GamesPlayedSum(players_sorted_by_games_played);
	$: totalProjectedPoints = getTop10ProjectedPointsSum(players_sorted_by_games_played);

	function getTop10GamesPlayedSum(players: string[]) {
		if (players === undefined || players.length === 0) {
			return 0;
		}
		let sum = 0;
		for (let i = 0; i < 10; i++) {
			sum += getGamesPlayed(players[i]);
		}
		return sum;
	}

	function getTop10ProjectedPointsSum(players: string[]) {
		if (players === undefined || players.length === 0) {
			return 0;
		}
		let sum = 0;

		for (let i = 0; i < 10; i++) {
			sum +=
				calculateAverageFantasyPoints($viewing_lineup.averages[players[i]]) *
				getGamesPlayed(players[i]);
		}
		return sum;
	}

	function getPlayerImage(player: string) {
		const lower = player.toLowerCase().replaceAll(' ', '_');
		return '/player_headshots/' + lower + '.png';
	}

	function getTeamImage(team_name: string) {
		const lower = team_name.toLowerCase().replaceAll(' ', '_');
		return '/team-logos/' + lower + '.png';
	}

	function getGamesPlayed(player: string) {
		let player_map = $viewing_lineup.map;
		const player_info = player_map[player];
		if (typeof player_info === 'undefined') {
			return 0;
		} else {
			const team_id = player_info.team_id;
			return teams[team_id].schedule[$selectedWeek - 1];
		}
	}
</script>

<svelte:head>
	<title>
		{$viewing_lineup.name} | Fantasy 🏀 Assistant
	</title>
</svelte:head>

<!-- Header -->
<div class="mt-10 flex flex-col md:mt-8">
	<span class="flex flex-row items-end justify-between">
		<p class="text-xs opacity-50">Players</p>
		<span class="flex flex-row items-end gap-1 md:gap-[28px]">
			<p class="max-w-[4rem] text-center text-xs opacity-50">Fantasy Pts Average</p>
			<p class="max-w-[4rem] text-center text-xs opacity-50">Games Played</p>
			<p class="max-w-[4rem] text-center text-xs opacity-50 md:max-w-none">Total Pts for Week</p>
		</span>
	</span>
	<div class="h-[2px] w-full bg-orange"></div>
</div>
<div class="mt-5 flex flex-col md:mt-2 md:pt-4">
	{#each players_sorted_by_games_played as player_name, key}
		<p class="-mt-4 mb-2 text-xs text-orange">{key + 1}</p>
		<div class="-mt-3 flex flex-row items-center md:-mt-5">
			<img
				class="hidden w-[70px] rounded-full md:block"
				alt={player_name}
				src={getPlayerImage(player_name)}
			/>
			<span
				class="flex w-full max-w-[16rem] flex-col overflow-ellipsis text-[18px] md:w-[16rem] md:max-w-none md:pl-10 md:text-[20px]"
			>
				<p class="">
					{player_name}
				</p>
				<p class="text-[10px] opacity-60 md:text-[12px]">
					{$viewing_lineup.map[player_name].team_name}
				</p>
			</span>
			<img
				class=" hidden w-[40px] md:block md:w-[55px]"
				alt="{$viewing_lineup.map[player_name].team_name} logo"
				src={getTeamImage($viewing_lineup.map[player_name].team_name)}
			/>
			<!-- AVERAGE FANTASY POINTS BOX -->
			<span class="-mt-0 ml-auto mr-1 h-full bg-gradient-to-br from-red to-rose-600 px-2 md:mr-3">
				{#if averagesLoaded && $viewing_lineup.averages[player_name]}
					<p class=" text-[18px] md:text-[26px]">
						{calculateAverageFantasyPoints($viewing_lineup.averages[player_name]).toFixed(1)}
					</p>
				{:else}
					<div class="loading"></div>
				{/if}
			</span>
			<p class="md:text-md mr-1 text-xs md:mr-3">X</p>
			<!-- GAMES PLAYED BOX -->
			{#key $selectedWeek}
				<span
					class="-mt-0 mr-1 h-full bg-gradient-to-br from-blue to-[#2763e9] px-3 text-[18px] md:mr-3 md:px-4 md:text-[26px]"
				>
					{getGamesPlayed(player_name)}
				</span>
			{/key}
			<p class="md:text-md mr-1 text-xs md:mr-3">=</p>
			<!-- TOTAL PRODUCTION BOX -->
			{#if averagesLoaded && $viewing_lineup.averages[player_name]}
				<p
					class="w-[6.4rem] bg-gradient-to-br from-[#9819d7] to-[#7518a1] px-2 text-center text-[18px] md:text-[26px]"
				>
					{(
						calculateAverageFantasyPoints($viewing_lineup.averages[player_name]) *
						getGamesPlayed(player_name)
					).toFixed(2)}
				</p>
			{:else}
				<div class="loading bg-purple-600 px-1 py-1"></div>
			{/if}
		</div>
		<div class="divider -mt-[3px]"></div>
	{/each}
</div>
<!-- TOTALS -->
{#if averagesLoaded}
	<div>
		<p class="text-center text-lg italic text-white md:text-2xl">Totals for the week</p>
		<div class="flex flex-col border border-white pb-2">
			<p class="px-2 py-2 text-center text-xs md:text-lg">
				Based on 2023 season averages, the best lineup you could start for this week is players 1-10
				above.
			</p>
			<span class="mt-2 flex flex-row items-center justify-center gap-6 md:gap-20">
				<span class=" flex flex-col items-center gap-1">
					<p
						class="-mt-0 h-full w-fit bg-gradient-to-br from-blue to-[#2763e9] px-3 text-center text-[18px] md:text-[26px]"
					>
						{totalGamesPlayed}
					</p>
					<p class="text-center text-[10px] opacity-50 md:text-[16px]">Games Played</p>
				</span>
				<span class="flex flex-col items-center gap-1">
					<p
						class="w-fit bg-gradient-to-br from-[#9819d7] to-[#7518a1] px-2 text-center text-[18px] md:text-[26px]"
					>
						{totalProjectedPoints.toFixed(2)}
					</p>
					<p class="text-center text-[10px] opacity-50 md:text-[16px]">Projected points</p>
				</span>
			</span>
		</div>
	</div>
{/if}
