<script lang="ts">
	import type { NBA_Player } from '$lib';

	export let players: Set<string>;

	const player_adv_info: Map<string, NBA_Player> = new Map();

	$: players.forEach(async (player) => {
		console.log('About to make request');
		const nba_data = await fetch('/api/players?player_name=' + player);
		const nba_player_info: NBA_Player = await nba_data.json();
		player_adv_info.set(player, nba_player_info);
	});
</script>

<div class="mt-4 overflow-hidden rounded-md bg-white shadow">
	<ul role="list" class="divide-y divide-gray-200">
		{#each player_adv_info.keys() as player_name}
			<li class="px-6 py-4">
				<p>{player_name}</p>
				<p>{player_adv_info.get(player_name)?.team_id}</p>
			</li>
		{/each}
	</ul>
</div>
