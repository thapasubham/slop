<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ModelScene from '$lib/scenes/ModelScene.svelte';
	import { useGameState } from '$lib/gameState.svelte.ts';

	const gameState = useGameState();
	let nameRef: HTMLElement;
	let subRef: HTMLElement;
	let ctaRef: HTMLElement;

	let mouseX = $state(0);
	let mouseY = $state(0);
	let time = $state('');

	function updateMouse(e: MouseEvent) {
		mouseX = Math.floor(e.clientX);
		mouseY = Math.floor(e.clientY);
	}

	onMount(() => {
		const options: Intl.DateTimeFormatOptions = {
			timeZone: 'Asia/Kathmandu',
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		};
		time = new Date().toLocaleTimeString('en-US', options);
		const timer = setInterval(() => {
			time = new Date().toLocaleTimeString('en-US', options);
		}, 1000);
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
		tl.fromTo(nameRef, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 2.5 })
			.fromTo(subRef, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=1.2')
			.fromTo(ctaRef, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=1');

		window.addEventListener('mousemove', updateMouse);
		return () => {
			clearInterval(timer);
			window.removeEventListener('mousemove', updateMouse);
		};
	});
</script>

<section id="hero" class="relative h-screen overflow-hidden bg-void">
	<ModelScene />

	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/80"
	></div>
	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/90 via-transparent to-transparent"
	></div>

	<!-- HUD: Local Time -->
	<div class="absolute top-24 left-6 z-20 text-left md:top-10 md:left-10">
		<div class="hud-label text-cyan text-sm tracking-widest md:text-xl">{time}</div>
		<div class="hud-label text-secondary text-[8px]">DEV_LOCAL_TIME // KATHMANDU, NEPAL</div>
	</div>

	
	<!-- Name block — bottom left -->
	<div class="absolute bottom-20 left-6 z-10 md:left-16">
		<p bind:this={subRef} class="mb-5 hud-label text-cyan opacity-0">
			Software Engineer · Full-Stack
		</p>
		<h1
			bind:this={nameRef}
			class="font-display text-[clamp(2.2rem,11vw,9.5rem)] font-black leading-[0.85] tracking-tighter uppercase opacity-0 neon-gradient"
		>
			Subham<br />Thapa
		</h1>
		<div bind:this={ctaRef} class="mt-10 flex flex-wrap items-center gap-5 opacity-0">
			<a
				href="#projects"
				id="hero-cta-work"
				class="bg-cyan/10 border border-cyan/40 hud-label text-cyan px-8 py-3 hover:bg-cyan hover:text-void transition-all duration-300 bloom-cyan"
			>
				View Work
			</a>
			<a
				href="#contact"
				id="hero-cta-contact"
				class="font-mono text-[11px] tracking-widest text-muted hover:text-text transition-colors duration-300"
			>
				Get in Touch ↗
			</a>
		</div>
	</div>

	<!-- Debug Trigger -->
	<button
		onclick={() => (gameState.gameActive = true)}
		class="absolute bottom-5 left-5 z-20 font-hud text-[8px] text-white/5 hover:text-cyan transition-colors"
	>
		[DEBUG_SIM_TRIGGER]
	</button>

	<!-- Section number watermark -->
	<div class="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 select-none">
		<span class="font-display text-[10rem] font-black leading-none text-subtle opacity-60">01</span>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3">
		<div class="h-10 w-px animate-pulse bg-gradient-to-b from-cyan/50 to-transparent"></div>
		<span class="hud-label text-muted">Scroll</span>
	</div>
</section>
