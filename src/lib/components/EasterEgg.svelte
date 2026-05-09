<script lang="ts">
	import { onMount } from 'svelte';
	import TunnelScene from './TunnelScene.svelte';
	import GameMode from './GameMode.svelte';
	import { useGameState } from '$lib/gameState.svelte.ts';

	const gameState = useGameState();
	let activeGlitch = $state(false);
	let activePortal = $state(false);
	let keys = '';

	onMount(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			keys += e.key.toUpperCase();
			if (keys.endsWith('GLITCH')) {
				triggerGlitch();
				keys = '';
			}
			if (keys.endsWith('PORTAL')) {
				activePortal = true;
				keys = '';
			}
			if (keys.endsWith('GAME')) {
				gameState.gameActive = true;
				keys = '';
			}
			if (keys.length > 20) keys = keys.slice(-20);
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	function triggerGlitch() {
		activeGlitch = true;
		setTimeout(() => {
			activeGlitch = false;
		}, 2000);
	}
</script>

{#if activeGlitch}
	<div
		class="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cyan/10 backdrop-invert"
	>
		<div class="animate-glitch font-display text-8xl font-black text-magenta">
			SYSTEM ERROR
		</div>
		<div class="mt-4 font-hud text-cyan">ACCESS GRANTED // BYPASSING PROTOCOLS</div>
		<div class="absolute inset-0 opacity-20">
			<div
				class="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,100,0.06))] bg-[length:100%_2px,3px_100%]"
			></div>
		</div>
	</div>
{/if}

{#if activePortal}
	<div class="fixed inset-0 z-[10000]">
		<TunnelScene />
		<button
			onclick={() => (activePortal = false)}
			class="fixed bottom-10 right-10 z-[10002] border border-magenta px-6 py-2 hud-label text-magenta hover:bg-magenta hover:text-void transition-all"
		>
			EXIT_WARP
		</button>
	</div>
{/if}

{#if gameState.gameActive}
	<GameMode />
{/if}
