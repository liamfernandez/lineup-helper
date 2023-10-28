<script lang="ts">
	import type { NBA_Player } from '$lib';
	import { in_progress_lineup } from '$lib/stores';
	import { BASE_DURATION } from '$lib/transitions';
	import { fly } from 'svelte/transition';

	export let player_name: string;

	async function get_player_info(player: string) {
		const response = await fetch('/api/players?player_name=' + player);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const nba_player_info: NBA_Player = await response.json();
		let player_map = $in_progress_lineup.map;
		player_map[player] = nba_player_info;
		return nba_player_info;
	}

	function getPlayerImage(player: string) {
		const lower = player.toLowerCase().replaceAll(' ', '_');
		return '/player_headshots/' + lower + '.png';
	}

	function getTeamImage(team_name: string) {
		const lower = team_name.toLowerCase().replaceAll(' ', '_');
		return '/team-logos/' + lower + '.png';
	}
</script>

{#await get_player_info(player_name)}
	<div class="flex w-full flex-row items-center justify-center gap-4 pt-4">
		<div class="loading loading-ring bg-orange"></div>
		<p class="text-center text-gray-300">Retrieving Player Info</p>
		<div class="loading loading-ring bg-orange"></div>
	</div>
{:then NBA_Player_Data}
	<div in:fly={{ duration: BASE_DURATION / 2, x: -40 }} class="flex w-full flex-col">
		<div class="relative flex max-h-[65px] w-full flex-row items-center gap-4 md:justify-between">
			<img alt={player_name} src={getPlayerImage(player_name)} class=" h-[65px] translate-y-3" />
			<span class="z-20 flex translate-y-3 flex-col md:min-w-[15rem]">
				<p class="overflow-clip text-xl">{player_name}</p>
				<p class="text-xs opacity-50">{NBA_Player_Data.team_name}</p>
				<button
					on:click={() => {
						in_progress_lineup.removePlayer(player_name);
					}}
					class="z-10 translate-y-[6px] self-start rounded-2xl text-xs text-rose-600 decoration-rose-600 opacity-50 hover:underline hover:opacity-90"
				>
					Remove Player
				</button>
			</span>
			<img
				alt={NBA_Player_Data.team_name}
				src={getTeamImage(NBA_Player_Data.team_name)}
				class="absolute right-1 z-0 w-[68px] translate-y-3 pr-2 md:relative"
			/>
		</div>
	</div>
{:catch error}
	<div class="flex max-h-[50px] w-full flex-row items-center justify-center gap-4 pt-4 text-2xl">
		<p>{player_name}</p>
	</div>
{/await}
