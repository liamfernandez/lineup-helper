<script lang="ts">
	import PlayerTile from './PlayerTile.svelte';
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

<div
	class="mt-8 flex min-w-[90%] flex-col items-center justify-center gap-2 rounded-md bg-[#28272761] shadow md:min-w-[70%]"
>
	{#each players as player_name}
		<PlayerTile {player_name} />
		<div class=" divider my-0 -mb-[6px] px-4 py-0 md:px-20"></div>
	{/each}
</div>
