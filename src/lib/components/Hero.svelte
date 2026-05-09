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
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } });
		tl.fromTo(nameRef, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
			.fromTo(subRef, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=1.2')
			.fromTo(ctaRef, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=1');

		window.addEventListener('mousemove', updateMouse);
		return () => {
			clearInterval(timer);
			window.removeEventListener('mousemove', updateMouse);
		};
	});
</script>

<section id="hero" class="relative h-[100dvh] overflow-hidden bg-void">
	<!-- ModelScene removed temporarily -->

	<!-- watermark -->
	<div
		class="pointer-events-none absolute top-10 right-10 z-0 select-none font-display text-[10rem] font-black leading-none text-void [-webkit-text-stroke:2px_rgba(255,255,255,0.3)]"
	>
		01
	</div>


	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/80"
	></div>
	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/90 via-transparent to-transparent"
	></div>



	<!-- Scanning Laser Bar -->
	<div class="pointer-events-none absolute inset-0 z-10 overflow-hidden">
		<div class="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent animate-scan"></div>
	</div>

	<!-- HUD: Frame Borders -->
	<div class="pointer-events-none absolute inset-0 z-30 border border-white/5 m-4 md:m-8">
		<!-- HUD Corner Accents -->
		<div class="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan/40"></div>
		<div class="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-magenta/40"></div>
		<div class="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-gold/40"></div>
		<div class="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-violet/40"></div>
	</div>

	<!-- HUD: Local Time -->
	<div class="absolute top-24 left-6 z-20 text-left md:top-10 md:left-10">
		<div class="hud-label text-cyan text-sm tracking-widest md:text-xl">{time}</div>
		<div class="hud-label text-secondary text-[8px] md:text-[10px]">DEV_LOCAL_TIME // KATHMANDU, NEPAL</div>
	</div>

	
	<!-- Name block — Center or Bottom Left (Choosing center-left for better impact) -->
	<div class="absolute bottom-16 left-6 z-10 md:left-16 animate-float">
		<!-- Top Symbols -->
		<div class="flex items-center gap-6 mb-2 opacity-60 ml-2">
			<span class="text-cyan text-[10px]">♦</span>
			<span class="text-magenta text-[10px]">♠</span>
			<span class="text-gold text-[10px]">▲</span>
		</div>

		<!-- Name Composition -->
		<div bind:this={nameRef} class="relative flex flex-col opacity-0">
			<div class="relative">
				<!-- 1. Outline Layer (Bottom-most) -->
				<div class="pointer-events-none absolute top-[2px] -left-[4px] md:top-1 md:-left-2 opacity-100">
					<h1 class="font-display italic text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.75] tracking-tighter uppercase text-outline pr-10">
						Subham
					</h1>
				</div>
				<!-- 2. Blocking Layer (Solid background color to cover outline behind text) -->
				<div class="pointer-events-none absolute inset-0">
					<h1 class="font-display italic text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.75] tracking-tighter uppercase text-void pr-10">
						Subham
					</h1>
				</div>
				<!-- 3. Iridescent Layer (Top-most) -->
				<h1 class="relative font-display italic text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.75] tracking-tighter uppercase iridescent-gradient pr-10">
					Subham
				</h1>
			</div>
			
			<!-- Middle Bar (Sharp & Solid) -->
			<div class="relative my-2 flex items-center justify-center bg-void py-2 md:py-3 px-4 md:px-6 border-y border-white/40">
				<p bind:this={subRef} class="hud-label text-text font-bold tracking-[0.3em] md:tracking-[0.6em] opacity-0 text-[7px] md:text-sm italic whitespace-nowrap">
					Software Engineer // Full-Stack
				</p>
			</div>

			<div class="relative">
				<!-- 1. Outline Layer (Bottom-most) -->
				<div class="pointer-events-none absolute top-[2px] -left-[4px] md:top-1 md:-left-2 opacity-100">
					<h1 class="font-display italic text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.75] tracking-tighter uppercase text-outline pr-10">
						Thapa
					</h1>
				</div>
				<!-- 2. Blocking Layer (Solid background color to cover outline behind text) -->
				<div class="pointer-events-none absolute inset-0">
					<h1 class="font-display italic text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.75] tracking-tighter uppercase text-void pr-10">
						Thapa
					</h1>
				</div>
				<!-- 3. Iridescent Layer (Top-most) -->
				<h1
					class="relative font-display italic text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.75] tracking-tighter uppercase iridescent-gradient opacity-90 pr-10"
				>
					Thapa
				</h1>
			</div>
		</div>

		<!-- Bottom Symbols -->
		<div class="flex items-center gap-6 mt-4 opacity-60 ml-2">
			<span class="text-magenta text-[10px]">♦</span>
			<span class="text-gold text-[10px]">♠</span>
			<span class="text-cyan text-[10px]">▲</span>
		</div>

		<div bind:this={ctaRef} class="mt-12 flex flex-wrap items-center gap-5 opacity-0">
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



	<!-- Scroll indicator -->
	<div class="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3">
		<div class="h-10 w-px animate-pulse bg-gradient-to-b from-cyan/50 to-transparent"></div>
		<span class="hud-label text-muted">Scroll</span>
	</div>
</section>
