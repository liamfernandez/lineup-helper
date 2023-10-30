<script lang="ts">
	import { page } from '$app/stores';
	import type { Lineup } from '$lib';
	import NotFound from '$lib/components/NotFound.svelte';
	import Write from '$lib/icons/Write.svelte';
	import { onMount } from 'svelte';
	import WeekDropdown from '$lib/components/WeekDropdown.svelte';
	import GamesPlayedGrid from '$lib/components/GamesPlayedGrid.svelte';
	import { goto } from '$app/navigation';
	import { viewing_lineup } from '$lib/stores.js';

	export let data;

	let loading = true;
	let lineupNotFound = false;

	let lineup: Lineup;

	/**
	 * @description This function will get the lineup from local storage, move it to viewing_lineup store
	 * @returns {boolean} Returns true if lineup successfully found in localStorage and transferred
	 * to the viewing_lineup store. Returns false if lineup not found in localStorage.
	 */
	function moveLineupToWorkSpace(): boolean {
		if (typeof localStorage != 'undefined') {
			const lineups_store = localStorage.getItem('lineups');
			if (lineups_store === null) {
				return false;
			}

			const lineups = JSON.parse(lineups_store) as { [key: string]: Lineup };
			const providedHash = $page.params.hash;

			if (!Object.keys(lineups).includes(providedHash)) {
				return false;
			} else {
				console.log(
					'[getLineupFromStorage]: returning lineup from storage: ',
					lineups[providedHash]
				);
				viewing_lineup.setLineup(lineups[providedHash]);
				lineup = lineups[providedHash];
				return true;
			}
		} else return false;
	}

	onMount(() => {
		if (!moveLineupToWorkSpace()) {
			lineupNotFound = true;
		}
		setTimeout(() => {
			loading = false;
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
		{#if loading}
			<!-- Loading State -->
			<div class=" mt-[10rem] flex w-full flex-row items-center justify-center gap-8 md:mt-[10rem]">
				<span class="loading loading-ring loading-lg bg-orange"></span>
				<p class="text-3xl md:text-4xl">Loading Lineup</p>
				<span class="loading loading-ring loading-lg bg-orange"></span>
			</div>
		{:else if lineupNotFound}
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
				<p class=" -mb-6 mt-4 text-xs underline decoration-orange underline-offset-2 opacity-40">
					Players sorted by projected points for the week
				</p>
			</div>
			<!-- Games Played Grid -->
			<GamesPlayedGrid teams={data.teams} lineupKey={$page.params.hash} />
		{/if}
	</div>
</div>
