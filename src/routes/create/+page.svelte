<script lang="ts">
	import OnMount from '$lib/components/OnMount.svelte';
	import PlayerGrid from '$lib/components/PlayerGrid.svelte';
	import PlayerSearch from '$lib/icons/Player_Search.svelte';
	import { BASE_DELAY, BASE_DURATION } from '$lib/transitions';
	import { elasticOut } from 'svelte/easing';
	import { fade, fly, blur } from 'svelte/transition';
	import { GLOBAL_LINEUPS, in_progress_lineup } from '$lib/stores.js';

	export let data;

	let teamName = '';
	let nameLockedIn = false;
	let errorWithName = false;
	let currentPlayerSearch = '';

	in_progress_lineup.reset();

	// Reactive statement to automatically filter the player names
	$: filteredPlayers = data.player_names.filter((player) =>
		player.toLowerCase().includes(currentPlayerSearch.toLowerCase())
	);

	function saveTeamName() {
		if (nameLockedIn) {
			nameLockedIn = false;
			const teamNameEdit = document.getElementById('teamName') as HTMLInputElement;
			teamNameEdit.focus();
			return;
		}

		if (teamName.length > 0) {
			errorWithName = false;
			nameLockedIn = true;
			in_progress_lineup.updateName(teamName);
		} else {
			errorWithName = true;
		}
	}
</script>

<svelte:head>
	<title>{teamName} | Fantasy 🏀 Assistant</title>
</svelte:head>

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
	<div class="w-[70%] pb-10 md:w-[30rem]">
		<div class="flex items-center justify-between">
			<label for="teamName" class="block text-sm font-medium leading-6 text-primaryText md:text-xl"
				>Lineup Name</label
			>
			{#if nameLockedIn}
				<span in:fade class="text-xs leading-6 text-green md:text-sm" id="teamName-optional"
					>Saved Name!</span
				>
			{:else if errorWithName}
				<span
					in:fly={{ duration: BASE_DURATION / 3, x: -50, easing: elasticOut }}
					class="text-sm leading-6 text-red"
					id="teamName-optional">Name cannot be empty</span
				>
			{/if}
		</div>
		<div class="mt-2 flex flex-col items-center gap-2">
			<input
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						const saveButton = document.getElementById('save-team-button');
						saveButton?.click();
					}
				}}
				bind:value={teamName}
				disabled={nameLockedIn}
				name="teamName"
				id="teamName"
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-logo sm:text-sm sm:leading-6"
				placeholder="BBL lineup 1"
			/>
			{#if !nameLockedIn}
				<button
					id="save-team-button"
					on:click={saveTeamName}
					type="button"
					class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
				>
					Save
					<svg
						class="-mr-0.5 h-5 w-5 -translate-y-[1px]"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			{:else}
				<button
					on:click={saveTeamName}
					class="self-start text-xs text-gray-400 hover:underline hover:underline-offset-2"
					>Edit Name</button
				>
			{/if}
		</div>
	</div>
</div>
{#if nameLockedIn}
	<div class="px-4 md:px-12">
		<div
			in:fly={{ duration: BASE_DURATION / 2, delay: BASE_DELAY, y: -50 }}
			class="flex items-center justify-between"
		>
			<h1 class="text-center text-2xl md:text-4xl">Add Players</h1>
			{#if $in_progress_lineup.players.length > 0}
				<p in:blur class="text-xs md:text-xl">
					{`${$in_progress_lineup.players.length} out of 15 players`}
				</p>
			{/if}
		</div>
		<div class="divider -mt-2 md:-mb-2 md:-mt-0" />
		<div class="flex flex-col items-center">
			<div class="relative w-[80%] md:w-[26rem]">
				<OnMount>
					<!-- in:blur={{ duration: BASE_DURATION }} -->
					<span class="flex flex-row items-center justify-center gap-4 md:pt-4">
						<PlayerSearch />
						<input
							type="text"
							class="block w-full border-0 border-b-2 border-b-gray-400 bg-Canvas px-1 py-1.5 text-xl text-primaryText shadow-sm placeholder:text-gray-500 focus:border-b-gray-400 focus:ring-0 sm:leading-6"
							placeholder="Search Player Name..."
							bind:value={currentPlayerSearch}
						/>
					</span>
				</OnMount>
				{#if filteredPlayers.length > 0 && currentPlayerSearch.length > 0}
					<div
						class="absolute z-50 ml-16 mt-2 w-[84%] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabindex="-1"
					>
						{#each filteredPlayers as playerOption}
							<div class="py-1" role="none">
								<button
									on:click={() => {
										if ($in_progress_lineup.players.length >= 15) {
											currentPlayerSearch = '';
											return;
										}
										in_progress_lineup.addPlayer(playerOption);
										currentPlayerSearch = '';
									}}
									class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									role="menuitem"
									tabindex="-1"
									id="dropdown-{playerOption}">{playerOption}</button
								>
							</div>
						{/each}
					</div>
				{:else if currentPlayerSearch.length > 0}
					<div class="py-1" role="none">
						<p
							in:fly={{ duration: BASE_DURATION / 3, x: -50, easing: elasticOut }}
							class="block px-4 py-2 text-sm text-rose-700 hover:bg-gray-100 hover:text-gray-900"
							id="no-players-menu"
						>
							No Player found with name {currentPlayerSearch}
						</p>
					</div>
				{/if}
			</div>
			<!-- NOW SWITCH TO THE PLAYER GRID -->
			<PlayerGrid players={$in_progress_lineup.players} />
		</div>
	</div>
{/if}
