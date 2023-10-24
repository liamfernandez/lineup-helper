<script lang="ts">
	import { current_lineup_advanced_info_map, type NBA_Player } from '$lib/Client_Models';

	export let player_name: string;

	async function get_player_info(player_name: string) {
		const response = await fetch('/api/players?player_name=' + player_name);

		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const nba_player_info: NBA_Player = await response.json();
		$current_lineup_advanced_info_map.set(player_name, nba_player_info);
		return nba_player_info;
	}
</script>

<div class="flex w-full flex-row items-center justify-center gap-4 pt-4">
	<div class="loading loading-ring bg-orange"></div>
	<p class="text-center text-gray-300">Retrieving Player Info</p>
	<div class="loading loading-ring bg-orange"></div>
</div>
