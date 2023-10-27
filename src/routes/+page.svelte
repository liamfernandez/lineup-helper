<script lang="ts">
	import Write from '$lib/icons/Write.svelte';
	import { GLOBAL_LINEUPS } from '$lib/stores';
	import { goto } from '$app/navigation';

	const savedLineupKeys = Object.keys($GLOBAL_LINEUPS);
	const numberOfSavedLineups = savedLineupKeys.length;

	function getListOfPlayers(key: string) {
		const player_list = $GLOBAL_LINEUPS[key].players;
		return player_list.join(', ');
	}
</script>

<svelte:head>
	<title>Fantasy 🏀 Assistant</title>
</svelte:head>

<div class="flex w-full flex-col items-center gap-16 px-4 md:-mt-0 md:gap-10 md:px-20">
	<img
		alt="fantasy helper logo"
		src="/app-logos/nav-logo.png"
		class="mr-8 w-[300px] md:w-[400px]"
	/>
	<a href="/create">
		<button
			on:click={() => {
				goto('/create');
			}}
			class="mx-auto flex w-[12rem] flex-col items-center rounded-xl bg-gradient-to-br from-[#FF8A15] to-orange py-2 text-xl text-white shadow-xl transition hover:scale-105 hover:shadow-xl md:shadow-none"
		>
			Add a New Lineup
			<Write size={22} />
		</button>
	</a>
	<div class="w-full">
		<div class="divider">
			<p class="rounded-xl px-2 py-1 text-orange outline outline-1 outline-orange">OR</p>
		</div>
	</div>
	<div id="Existing teams grid" class="flex w-[90%] flex-col text-xl md:w-[40%]">
		<h1
			class="rounded-xl rounded-b-none bg-gradient-to-br from-[#FF8A15] to-orange pt-1 text-center text-white outline outline-1 outline-orange"
		>
			Start with a Previous Lineup
		</h1>
		{#if numberOfSavedLineups < 1}
			<div
				class=" flex min-h-[5rem] items-center justify-center rounded-xl rounded-t-none bg-[#eddfd2] outline outline-1 outline-orange"
			>
				<p class="w-[14rem] text-center text-sm text-black">
					You don't have any saved lineups.
					<br />
					Add a new lineup to get started.
				</p>
			</div>
		{:else}
			{#each savedLineupKeys as lineupKey, key}
				<button
					on:click={() => {
						goto('/lineup/' + lineupKey);
					}}
					class="border-y-1 group flex flex-col border-b-black bg-[#eddfd2] pb-1"
				>
					<p class="-mb-4 pl-1 pt-1 text-left text-xs text-black opacity-40">Lineup # {key + 1}</p>
					<p class="text-center text-2xl text-orange group-hover:font-bold group-hover:text-blue">
						{$GLOBAL_LINEUPS[lineupKey].name}
					</p>
					<p
						class="max-h-[3rem] overflow-clip pl-1 text-center text-[8px] leading-[1rem] text-black md:text-[10px]"
					>
						{getListOfPlayers(lineupKey)}
					</p>
					<p
						class="-mb-2 block text-[10px] text-blue underline decoration-black opacity-90 md:hidden"
					>
						click to view lineup
					</p>
				</button>
				<div class="h-[2px] bg-black"></div>
			{/each}
		{/if}
	</div>
</div>
