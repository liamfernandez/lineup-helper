<script>
	import { goto } from "$app/navigation";
	import Liamverse from "$lib/components/Liamverse.svelte";
	import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
</script>
<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+Old+Permic" rel="stylesheet" />
</svelte:head>

<div class="flex flex-col justify-between min-h-screen max-h-fit bg-Canvas">
	<span class="absolute right-2 top-4 md:top-6 md:right-10">
		<ThemeSwitcher />
	</span>
	<main class="pt-10 md:px-20">
		<slot />
	</main>
	<footer class="flex flex-col justify-center items-center pt-12 mb-1">
			<button class="group flex flex-col gap-1 justify-center items-center" on:click={()=> {
				goto('https://liamverse.io')
			}}>

				<Liamverse size={24} />
				<p class="opacity-70 group-hover:underline group-hover:underline-offset-1 text-xs tracking-tight text-primaryText">Made in the Liamverse</p>
			</button>
	</footer>
</div>
