<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import NavPill from '$lib/components/NavPill.svelte';
	import EasterEgg from '$lib/components/EasterEgg.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import { initGameState } from '$lib/gameState.svelte.ts';
	import { playHoverSound } from '$lib/audio';

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

	function handleGlobalMouseOver(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (target.closest('a, button, [role="button"]')) {
			playHoverSound();
		}
	}

	onMount(() => {
		window.addEventListener('scroll', updateActive, { passive: true });
		window.addEventListener('mouseover', handleGlobalMouseOver, { passive: true });
		return () => {
			window.removeEventListener('scroll', updateActive);
			window.removeEventListener('mouseover', handleGlobalMouseOver);
		};
	});
</script>

<Cursor />
<NavPill {activeSection} />

<div class="min-h-screen bg-void">
	{@render children()}
	<EasterEgg />
</div>
