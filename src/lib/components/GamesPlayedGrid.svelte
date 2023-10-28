<script lang="ts">
	import type { Lineup, NBA_Team, Season_Averages } from '$lib';
	import { GLOBAL_LINEUPS, selectedWeek } from '$lib/stores';
	import { calculateAverageFantasyPoints } from '$lib';
	import getPlayerSeasonAverages from '$lib/utils/ball_dont_lie_provider';

	export let lineup: Lineup;
	export let lineupKey: string;
	export let teams: { [key: number]: NBA_Team };

	let players_sorted_by_games_played: string[] = [];
	const player_averages: { [key: string]: Season_Averages } = lineup.averages;
	updatePlayerAverages();

	$: if ($selectedWeek > 0) {
		players_sorted_by_games_played = lineup.players.sort((a, b) => {
			const a_games_played = getGamesPlayed(a);
			const b_games_played = getGamesPlayed(b);

			if (
				player_averages === undefined ||
				player_averages[a] === undefined ||
				player_averages[b] === undefined
			) {
				if (a_games_played > b_games_played) {
					return -1;
				} else if (a_games_played < b_games_played) {
					return 1;
				} else {
					return 0;
				}
			} else {
				const player_a_production =
					calculateAverageFantasyPoints(player_averages[a]) * a_games_played;
				const player_b_production =
					calculateAverageFantasyPoints(player_averages[b]) * b_games_played;

				if (player_a_production > player_b_production) {
					return -1;
				} else if (player_a_production < player_b_production) {
					return 1;
				} else {
					return 0;
				}
			}
		});
	}

	function updatePlayerAverages(): void {
		const last_updated_time = lineup.ball_dont_lie_refreshed_at;
		const today1am = new Date();
		today1am.setHours(1, 0, 0, 0);
		if (!(typeof last_updated_time === 'undefined') && last_updated_time < today1am) {
			return;
		} else {
			lineup.players.forEach(async (player_name) => {
				const average = await getPlayerSeasonAverages(player_name, lineup);
				player_averages[player_name] = average;
			});
			lineup.ball_dont_lie_refreshed_at = new Date();
			lineup.averages = player_averages;
			$GLOBAL_LINEUPS[lineupKey] = lineup;
			console.log(
				'[updatePlayerAverages()]: updated averages for lineup: ',
				JSON.stringify(lineup)
			);
		}

		// Fill in any holes
		let holeMustBeFilled = false;
		lineup.players.forEach(async (player_name) => {
			if (player_averages[player_name] !== undefined) {
				return;
			} else {
				holeMustBeFilled = true;
				const average = await getPlayerSeasonAverages(player_name, lineup);
				player_averages[player_name] = average;
			}
		});

		if (holeMustBeFilled) {
			lineup.averages = player_averages;
			$GLOBAL_LINEUPS[lineupKey] = lineup;
		}
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
		let player_map = lineup.map;
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
		{lineup.name} | Fantasy 🏀 Assistant
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
					{lineup.map[player_name].team_name}
				</p>
			</span>
			<img
				class=" hidden w-[40px] md:block md:w-[55px]"
				alt="{lineup.map[player_name].team_name} logo"
				src={getTeamImage(lineup.map[player_name].team_name)}
			/>
			<!-- AVERAGE FANTASY POINTS BOX -->
			<span class="-mt-0 ml-auto mr-1 h-full bg-gradient-to-br from-red to-rose-600 md:mr-3">
				{#if typeof player_averages[player_name] !== 'undefined'}
					<p class="px-2 text-[18px] md:text-[26px]">
						{calculateAverageFantasyPoints(player_averages[player_name]).toFixed(1)}
					</p>
				{:else}
					<div class="loading px-1 py-1"></div>
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
			{#if typeof player_averages[player_name] !== 'undefined'}
				<p
					class="w-[6.4rem] bg-gradient-to-br from-[#9819d7] to-[#7518a1] px-2 text-center text-[18px] md:text-[26px]"
				>
					{(
						calculateAverageFantasyPoints(player_averages[player_name]) *
						getGamesPlayed(player_name)
					).toFixed(2)}
				</p>
			{:else}
				<div class="loading px-1 py-1"></div>
			{/if}
		</div>
		<div class="divider -mt-[3px]"></div>
	{/each}
</div>
