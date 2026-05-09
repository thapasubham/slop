<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import NavPill from '$lib/components/NavPill.svelte';
	import EasterEgg from '$lib/components/EasterEgg.svelte';
	import { initGameState } from '$lib/gameState.svelte.ts';

	initGameState();

	let { children } = $props();

	let activeSection = $state('hero');

	const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

	function updateActive() {
		const threshold = window.innerHeight * 0.45;
		let current = 'hero';
		for (const id of sections) {
			const el = document.getElementById(id);
			if (el && el.getBoundingClientRect().top < threshold) {
				current = id;
			}
		}
		activeSection = current;
	}

	onMount(() => {
		window.addEventListener('scroll', updateActive, { passive: true });
		return () => window.removeEventListener('scroll', updateActive);
	});
</script>

<NavPill {activeSection} />

<div class="min-h-screen bg-void">
	{@render children()}
	<EasterEgg />
</div>
