<script lang="ts">
	import { current_lineup_advanced_info_map, type NBA_Player } from '$lib/Client_Models';

	export let player_name: string;

	async function get_player_info(player: string) {
		const response = await fetch('/api/players?player_name=' + player);

		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const nba_player_info: NBA_Player = await response.json();
		$current_lineup_advanced_info_map.set(player, nba_player_info);
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
	<div class="flex w-full flex-col">
		<button class="self-end rounded-full pt-2 text-lg text-rose-700 md:hidden"> X </button>
		<div
			class="relative flex max-h-[50px] w-full flex-row items-center gap-4 pt-4 md:justify-between"
		>
			<img alt={player_name} src={getPlayerImage(player_name)} class=" h-[58px]" />
			<span class="z-20 flex translate-y-1 flex-col md:min-w-[10rem]">
				<p class="overflow-clip text-xl">{player_name}</p>
				<p class="text-xs opacity-50">{NBA_Player_Data.team_name}</p>
			</span>
			<img
				alt={NBA_Player_Data.team_name}
				src={getTeamImage(NBA_Player_Data.team_name)}
				class="absolute right-2 z-0 h-[57px] w-[68px] pr-2 opacity-40 md:relative"
			/>
		</div>
	</div>
{:catch error}
	<div class="flex max-h-[50px] w-full flex-row items-center justify-center gap-4 pt-4 text-2xl">
		<p>{player_name}</p>
	</div>
{/await}
