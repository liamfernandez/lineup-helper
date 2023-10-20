<script lang="ts">
  import OnMount from "$lib/components/OnMount.svelte";
  import PlayerSearch from "$lib/icons/Player_Search.svelte";
  import { BASE_DELAY, BASE_DURATION } from "$lib/transitions";
  import { onMount } from "svelte";
  import { elasticOut } from "svelte/easing";
  import { fade, fly, blur } from "svelte/transition";

  /** @type {import('./$types').PageData} */
  export let data: any;

  let teamName = "";
  let nameLockedIn = true;
  let errorWithName = false;

  let players: string[] = [];

  function saveTeamName() {
    if (nameLockedIn) {
      console.log("allow edits");
      nameLockedIn = false;
      const teamNameEdit = document.getElementById(
        "teamName"
      ) as HTMLInputElement;
      teamNameEdit.focus();
      return;
    }

    if (teamName.length > 0) {
      errorWithName = false;
      nameLockedIn = true;
    } else {
      errorWithName = true;
    }
  }

  onMount(() => {
    console.log("ALL PLAYER NAMES: ", data.player_names);
  });
</script>

<svelte:head>
  <title>Fantasy 🏀 Assistant</title>
</svelte:head>

<img
  alt="fantasy helper logo"
  src="/app-logos/long-logo.png"
  class="md:w-[400px] md:-mt-6 -mt-[1.6rem] ml-2 w-[250px]"
/>
<div class="divider px-4" />
<div class="flex flex-col items-center">
  <div class="md:w-[30rem] w-[70%] pb-10">
    <div class="flex items-center justify-between">
      <label
        for="teamName"
        class="block text-sm font-medium leading-6 md:text-xl text-primaryText"
        >Lineup Name</label
      >
      {#if nameLockedIn}
        <span
          in:fade
          class="text-xs md:text-sm leading-6 text-green"
          id="teamName-optional">Saved Name!</span
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
        type="email"
        bind:value={teamName}
        disabled={nameLockedIn}
        name="teamName"
        id="teamName"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-logo sm:text-sm sm:leading-6"
        placeholder="BBL lineup 1"
      />
      {#if !nameLockedIn}
        <button
          on:click={saveTeamName}
          type="button"
          class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 transition px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
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
      in:fly={{ duration: BASE_DURATION / 2, delay: BASE_DELAY, y: 50 }}
      class="flex items-center justify-between"
    >
      <h1 class="md:text-4xl text-2xl text-center">Add Players</h1>
      {#if players.length > 0}
        <p in:blur class="text-xs">{`${players.length} out of 13 players`}</p>
      {/if}
    </div>
    <div class="divider md:-mt-0 -mt-2" />
    <div class="flex justify-center">
      <div class="md:w-[26rem] w-[80%]">
        <OnMount>
          <span
            in:blur={{ duration: BASE_DURATION }}
            class="flex flex-row items-center justify-center gap-4 md:pt-4"
          >
            <PlayerSearch />
            <input
              type="text"
              class="block px-1 w-full bg-Canvas border-0 border-b-2 border-b-gray-400 py-1.5 text-xl focus:ring-0 text-primaryText shadow-sm placeholder:text-gray-400 sm:leading-6"
              placeholder="Search Player Name..."
            />
          </span>
        </OnMount>
      </div>
    </div>
  </div>
{/if}
