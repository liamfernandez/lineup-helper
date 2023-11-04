<script>
	import '../app.css';
	import { goto } from '$app/navigation';
	import Liamverse from '$lib/components/Liamverse.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+Old+Permic" rel="stylesheet" />
</svelte:head>

<div class="flex max-h-fit min-h-screen flex-col justify-between bg-Canvas">
	<!-- <span class="absolute right-2 top-4 md:top-6 md:right-10">
		<ThemeSwitcher />
	</span> -->
	<main class="pt-10">
		<slot />
	</main>
	<footer class="mb-1 flex flex-col items-center justify-center pt-12">
		<button
			class="group flex flex-col items-center justify-center gap-1"
			on:click={() => {
				goto('https://liamverse.io');
			}}
		>
			<Liamverse size={24} />
			<p
				class="text-xs tracking-tight text-primaryText opacity-70 group-hover:underline group-hover:underline-offset-1"
			>
				Made in the Liamverse
			</p>
		</button>
	</footer>
</div>
