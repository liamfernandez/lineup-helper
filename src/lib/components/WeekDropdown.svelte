<script lang="ts">
	import { WEEK_LABELS } from '$lib';
	import { selectedWeek } from '$lib/stores';

	let dropDownOpen = false;
</script>

<div class="relative inline-block">
	<button
		on:click={() => {
			dropDownOpen = !dropDownOpen;
		}}
		class="flex flex-row items-center self-center rounded-md"
	>
		<span class="rounded-l-md bg-gradient-to-tr from-orange to-[#f46c0b] py-[1px] pl-2 pr-2">
			{WEEK_LABELS[$selectedWeek - 1]}
		</span>
		<span class="rounded-r-md bg-black py-1 pl-1 pr-2">
			<svg
				class="-mr-1 h-5 w-5 text-white"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</button>
	{#if dropDownOpen}
		<div
			class="absolute right-0 z-10 mt-2 flex h-[25rem] w-fit origin-top-right flex-col items-start divide-y divide-gray-800 overflow-scroll rounded-md bg-white px-2 shadow-lg ring-1 ring-black ring-opacity-5
      focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			id="weekly-dropdown"
		>
			{#each WEEK_LABELS as week, key}
				<div
					class="min-w-[11rem] py-1 text-left text-black hover:font-semibold hover:text-blue"
					role="none"
				>
					<button
						on:click={() => {
							dropDownOpen = false;
							selectedWeek.set(key + 1);
						}}
						class=""
					>
						{week}
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>
