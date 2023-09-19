<script class="ts">
	import Write from '$lib/icons/Write.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { lineups } from '$lib/stores';
	import { goto } from '$app/navigation';

	let numberOfSavedLineups = $lineups.length;

	onMount(() => {
		if (typeof window === "undefined") {
			return;
		}


	})
</script>

<svelte:head>
	<title>Fantasy 🏀 Assistant</title>
</svelte:head>

<div class="flex flex-col items-center gap-16 md:gap-10 w-full md:-mt-0 px-4">
	<img alt="fantasy helper logo" src="/nav-logo.png" class="md:w-[400px] w-[300px] mr-8" />
	<a href="/create">
		<button on:click={() => {
			goto('/create')
		}} class="flex flex-col items-center shadow-xl mx-auto bg-gradient-to-br from-[#FF8A15] to-orange text-white py-2 text-xl rounded-xl w-[12rem]">
			Add a New Lineup
			<Write size={22} />
		</button>
	</a>
	<div class="w-full">
		<div class="divider"><p class="rounded-xl text-orange px-2 py-1 outline outline-1 outline-orange">OR</p></div>
	</div>
	<div id="Existing teams grid" class="flex flex-col text-xl md:w-[40%] w-[90%]">
		<h1 class="text-white text-center outline outline-1 outline-orange rounded-b-none rounded-xl bg-gradient-to-br from-[#FF8A15] to-orange pt-1 ">
			Start with a Previous Lineup
		</h1>
		{#if numberOfSavedLineups < 1}
				<div class=" flex justify-center items-center bg-[#eddfd2] rounded-t-none rounded-xl outline outline-1 outline-orange min-h-[5rem]">
					<p class="text-sm text-center text-black w-[14rem]">
						You don't have any saved lineups.
						<br />
						Add a new lineup to get started.
					</p>
				</div>
		{/if}
	</div>
</div>

<style>
	.shadow {
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	}
</style>
