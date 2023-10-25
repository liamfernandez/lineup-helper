<script lang="ts">
	import PlayerTile from './PlayerTile.svelte';
	import { in_progress_lineup } from '$lib/stores';

	export let players: string[];
</script>

<div
	class="mt-8 flex min-w-[99%] flex-col items-center justify-center gap-2 rounded-md bg-[#28272761] shadow md:min-w-[70%]"
>
	{#each players as player_name}
		<PlayerTile {player_name} />
		<div class=" divider my-0 -mb-[6px] px-4 py-0 md:px-20"></div>
	{/each}
	{#if $in_progress_lineup.players.length < 1}
		<!-- content here -->
	{:else if $in_progress_lineup.players.length < 11}
		<span
			class=" mb-2 mt-0 rounded-xl px-2 py-2 text-[#ffffff63] underline decoration-orange underline-offset-4 transition md:text-xl md:shadow-none"
		>
			Add at least 11 players to continue
		</span>
	{:else}
		<button
			on:click={() => {
				// HASH the lineup name to get key
				// make sure store exists in local storage for saving all lineups
			}}
			class="my-4 w-[12rem] flex-col items-center rounded-xl bg-gradient-to-br from-[#FF8A15] to-orange py-2 text-xl text-white shadow-xl transition hover:scale-105 hover:shadow-xl md:shadow-none"
		>
			Continue
		</button>
	{/if}
</div>
