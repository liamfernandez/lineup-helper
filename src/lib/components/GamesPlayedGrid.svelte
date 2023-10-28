<script lang="ts">
	import { calculateAverageFantasyPoints, type Lineup, type NBA_Player, type NBA_Team } from '$lib';
	import { selectedWeek } from '$lib/stores';

	export let lineup: Lineup;
	export let teams: { [key: number]: NBA_Team };

	let players_sorted_by_games_played: string[] = [];
	const player_averages = new Map<string, number>();

	$: if ($selectedWeek > 0) {
		players_sorted_by_games_played = lineup.players.sort((a, b) => {
			const a_games_played = getGamesPlayed(a);
			const b_games_played = getGamesPlayed(b);
			if (a_games_played > b_games_played) {
				return -1;
			} else if (a_games_played < b_games_played) {
				return 1;
			} else {
				return 0;
			}
		});
	}

	// $: if (typeof lineup !== 'undefined') {
	// 	lineup.players.forEach(async (player_name) => {
	// 		const average = await getFantasyPtsAverage(player_name);
	// 		player_averages.set(player_name, average);
	// 	});
	// }

	async function getFantasyPtsAverage(player: string) {
		console.log('[getFantasyPtsAverage]: player: ' + player, ' | lineup.map: ', lineup.map);
		const player_info = lineup.map[player];

		const response = await fetch(
			`https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=${player_info.ball_dont_lie_id}`
		);

		const data = await response.json();
		const data_json = data['data'][0];

		return calculateAverageFantasyPoints(
			data_json['pts'],
			data_json['ast'],
			data_json['reb'],
			data_json['stl'],
			data_json['blk'],
			data_json['turnover']
		);
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
<div class="mt-8 flex flex-col">
	<span class="flex flex-row items-end justify-between">
		<p class="text-xs opacity-50">Players</p>
		<p class="max-w-[4rem] text-center text-xs opacity-50 md:max-w-none">Games Played</p>
	</span>
	<div class="h-[2px] w-full bg-orange"></div>
</div>
<div class="mt-5 flex flex-col md:mt-2 md:pt-4">
	{#each players_sorted_by_games_played as player_name}
		<div class="-mt-3 flex flex-row items-center md:-mt-5">
			<img
				class="hidden w-[70px] rounded-full md:block"
				alt={player_name}
				src={getPlayerImage(player_name)}
			/>
			<span
				class="flex w-full max-w-[16rem] flex-col overflow-ellipsis text-[18px] md:max-w-none md:pl-10 md:text-[20px]"
			>
				<p class="">
					{player_name}
				</p>
				<p class="text-[10px] opacity-60 md:text-[12px]">
					{lineup.map[player_name].team_name}
				</p>
			</span>
			<img
				class="ml-auto mr-8 w-[40px] md:mr-20 md:w-[55px]"
				alt="{lineup.map[player_name].team_name} logo"
				src={getTeamImage(lineup.map[player_name].team_name)}
			/>
			<!-- <span
				class="-mt-0 ml-auto mr-3 h-full bg-gradient-to-br from-blue to-[#2763e9] px-3 text-[24px] md:px-4 md:text-[28px]"
			>
				{player_averages.get(player_name)?.toFixed(1)}
			</span> -->
			{#key $selectedWeek}
				<span
					class="-mt-0 ml-auto mr-3 h-full bg-gradient-to-br from-blue to-[#2763e9] px-3 text-[24px] md:px-4 md:text-[28px]"
				>
					{getGamesPlayed(player_name)}
				</span>
			{/key}
		</div>
		<div class="divider -mt-[3px]"></div>
	{/each}
</div>
