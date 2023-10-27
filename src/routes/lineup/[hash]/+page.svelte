<script lang="ts">
	import { page } from '$app/stores';
	import type { Lineup } from '$lib';
	import NotFound from '$lib/components/NotFound.svelte';
	import Write from '$lib/icons/Write.svelte';
	import { onMount } from 'svelte';
	import WeekDropdown from '$lib/components/WeekDropdown.svelte';
	import GamesPlayedGrid from '$lib/components/GamesPlayedGrid.svelte';
	import { goto } from '$app/navigation';

	export let data;

	let lineup: Lineup | null | undefined = undefined;

	function getLineupFromStorage(): Lineup | null {
		if (typeof localStorage != 'undefined') {
			const lineups_store = localStorage.getItem('lineups');
			if (lineups_store === null) {
				return null;
			}

			const lineups = JSON.parse(lineups_store) as { [key: string]: Lineup };
			const providedHash = $page.params.hash;

			if (!Object.keys(lineups).includes(providedHash)) {
				return null;
			} else {
				return lineups[providedHash];
			}
		} else return null;
	}

	onMount(() => {
		setTimeout(() => {
			lineup = getLineupFromStorage();
		}, 1700);
	});
</script>

<div class="w-fit">
	<a class="" href="/">
		<img
			alt="fantasy helper logo"
			src="/app-logos/long-logo.png"
			class="-mt-[1.6rem] ml-2 w-[250px] md:-mt-6 md:w-[400px]"
		/>
	</a>
</div>
<div class="divider px-4" />
<div class="flex flex-col items-center">
	<div class="w-[90%] md:w-[80%]">
		{#if typeof lineup === 'undefined'}
			<!-- Loading State -->
			<div class=" mt-[10rem] flex w-full flex-row items-center justify-center gap-8 md:mt-[10rem]">
				<span class="loading loading-ring loading-lg bg-orange"></span>
				<p class="text-3xl md:text-4xl">Loading Lineup</p>
				<span class="loading loading-ring loading-lg bg-orange"></span>
			</div>
		{:else if !lineup}
			<!-- This case is for when local storage doesn't have the lineup  -->
			<NotFound />
		{:else}
			<p class="-mb-1 -mt-4 text-xs opacity-20">Lineup Name</p>
			<div class="flex flex-row flex-wrap items-center justify-between gap-2 md:gap-4">
				<h2 class="text-left text-3xl md:text-4xl">
					{lineup.name}
				</h2>
				<button
					on:click={() => {
						// console.log('/edit/' + $page.params.hash);
						const newPath = '/edit/' + $page.params.hash;
						goto(newPath);
					}}
					class="flex flex-row items-center gap-2 rounded-3xl bg-gradient-to-br from-blue to-[#2763e9] px-4 py-1 text-[14px] shadow transition hover:scale-105 hover:outline hover:outline-1 hover:outline-white md:py-2"
				>
					Edit Lineup
					<Write size={14} />
				</button>
			</div>
			<div class="mt-4 flex flex-col items-center gap-1">
				<p class="text-center text-[14px] opacity-50">Week to Analyze</p>
				<WeekDropdown />
				<p class=" -mb-6 mt-4 text-xs opacity-20">Players sorted by most games played</p>
			</div>
			<!-- Games Played Grid -->
			<GamesPlayedGrid teams={data.teams} {lineup} />
		{/if}
	</div>
</div>
