<script lang="ts">
	import { onMount } from 'svelte';
	import { playHoverSound } from '$lib/audio';

	let wrapper: HTMLDivElement;
	let ring: HTMLDivElement;
	let dot: HTMLDivElement;

	let targetX = 0;
	let targetY = 0;

	let x = 0;
	let y = 0;

	let isHovering = false;
	let lastHover = false;

	let visible = false;

	onMount(() => {
		// start centered so it's ALWAYS visible
		x = window.innerWidth / 2;
		y = window.innerHeight / 2;

		const onMove = (e: MouseEvent) => {
			targetX = e.clientX;
			targetY = e.clientY;

			if (!visible) visible = true;

			const el = e.target as HTMLElement;

			isHovering = !!el.closest(
				'a, button, [role="button"], input, textarea, select, .interactive, [data-hover]'
			);
		};

		const onLeave = () => {
			visible = false;
		};

		const animate = () => {
			// smooth inertia (IMPORTANT)
			x += (targetX - x) * 0.20;
			y += (targetY - y) * 0.20;

			// ─────────────────────────
			// WRAPPER VISIBILITY ONLY
			// ─────────────────────────
			if (wrapper) {
				wrapper.style.opacity = visible ? '1' : '0';
			}

			// ─────────────────────────
			// RING
			// ─────────────────────────
			if (ring) {
				ring.style.transform = `
					translate3d(${x}px, ${y}px, 0)
					translate(-50%, -50%)
					scale(${isHovering ? 1.4 : 1})
				`;

				ring.style.borderColor = isHovering ? '#FF2EAD' : '#2DE2E6';

				ring.style.boxShadow = isHovering
					? '0 0 30px rgba(255,46,173,0.8)'
					: '0 0 20px rgba(45,226,230,0.5)';
			}

			// ─────────────────────────
			// DOT
			// ─────────────────────────
			if (dot) {
				dot.style.transform = `
					translate3d(${x}px, ${y}px, 0)
					translate(-50%, -50%)
					scale(${isHovering ? 0 : 1})
				`;

				dot.style.opacity = isHovering ? '0' : '1';
			}

			// ─────────────────────────
			// SOUND
			// ─────────────────────────
			if (isHovering && !lastHover) {
				playHoverSound();
			}

			lastHover = isHovering;

			requestAnimationFrame(animate);
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		document.addEventListener('mouseleave', onLeave);

		animate();

		return () => {
			window.removeEventListener('mousemove', onMove);
			document.removeEventListener('mouseleave', onLeave);
		};
	});
</script>

<!-- WRAPPER (ONLY visibility control lives here) -->
<div
	bind:this={wrapper}
	class="fixed inset-0 z-[9999] pointer-events-none hidden md:block"
	style="opacity: 0; transition: opacity 0.2s ease;"
>

	<!-- RING -->
	<div
		bind:this={ring}
		class="absolute w-6 h-6 rounded-full border-2 border-cyan/60"
		style="will-change: transform;"
	></div>

	<!-- DOT -->
	<div
		bind:this={dot}
		class="absolute w-2 h-2 rounded-full bg-white"
		style="will-change: transform; box-shadow: 0 0 12px rgba(255,255,255,0.8);"
	></div>

</div>