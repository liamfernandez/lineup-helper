<script lang="ts">
	import type { NBA_Player } from '$lib/Lineup_Model';
	import OnMount from './OnMount.svelte';

	export let players: string[];

	// $: players.forEach(async (player) => {
	// 	console.log('About to make request');
	// 	if (player_adv_info.has(player)) {
	// 		console.log('Already have player info for: ', player);
	// 		return;
	// 	}
	// 	try {
	// 		const nba_data = await fetch('/api/players?player_name=' + player);
	// 		const nba_player_info: NBA_Player = await nba_data.json();
	// 		player_adv_info.set(player, nba_player_info);
	// 		console.log(JSON.stringify(nba_player_info));
	// 		console.log('success');
	// 	} catch (err) {
	// 		console.log('Error: ', err);
	// 		player_adv_info.set(player, null);
	// 	}

	// 	console.log(player_adv_info);
	// });
</script>

<div class="mt-4 overflow-hidden rounded-md bg-white shadow">
	<ul role="list" class="divide-y divide-gray-200">
		{#each players as player_name}
			<li class="px-6 py-4 text-black">
				<p>{player_name}</p>
			</li>
		{/each}
	</ul>
</div>
