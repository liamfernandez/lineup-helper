<script lang="ts">
	import { page } from '$app/stores';
	import type { Lineup } from '$lib';
	import NotFound from '$lib/components/NotFound.svelte';
	import { onMount } from 'svelte';

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
		// setTimeout(() => {
		// }, 2000);
		lineup = getLineupFromStorage();
	});
</script>

<img
	alt="fantasy helper logo"
	src="/app-logos/long-logo.png"
	class="-mt-[1.6rem] ml-2 w-[250px] md:-mt-6 md:w-[400px]"
/>
<div class="divider px-4" />
<div class="flex flex-col items-center">
	<div class="w-[90%] md:w-[70%]">
		{#if typeof lineup === 'undefined'}
			<!-- Loading State -->
			<div class=" mt-[10rem] flex w-full flex-row items-center justify-center gap-8 md:mt-[20rem]">
				<span class="loading loading-ring loading-lg bg-orange"></span>
				<p class="text-3xl md:text-4xl">Loading Lineup</p>
				<span class="loading loading-ring loading-lg bg-orange"></span>
			</div>
		{:else if !lineup}
			<!-- This case is for when local storage doesn't have the lineup  -->
			<NotFound />
		{:else}
			<div class="">
				<h2 class="text text-left">
					{lineup.name}
				</h2>
			</div>
		{/if}
	</div>
</div>
