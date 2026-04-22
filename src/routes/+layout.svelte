<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '../app.css';
	import MeshGrid from '../shader/MeshGrid.svelte';
	import ProjectsSectionShader from '../shader/ProjectsSectionShader.svelte';
	import Ink from '../shader/Ink.svelte';
	import ThreeBackground from '../shader/ThreeBackground.svelte';

	let { children } = $props();

	let activeSection = $state('');

	/** While true, scroll spy must not override `activeSection` (e.g. during smooth scroll). */
	let scrollSpySuspended = $state(false);

	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let scrollSpyResumeTimeout;

	function resumeScrollSpyAfterSmoothScroll() {
		clearTimeout(scrollSpyResumeTimeout);
		scrollSpySuspended = true;
		scrollSpyResumeTimeout = setTimeout(() => {
			scrollSpySuspended = false;
			updateActiveFromScroll();
		}, 750);
	}

	function updateActiveFromScroll() {
		if (scrollSpySuspended) return;

		const aboutEl = document.getElementById('about');
		const contactEl = document.getElementById('contact');
		const y = window.scrollY;
		const vh = window.innerHeight;
		const maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);

		if (y < 72) {
			activeSection = '';
			return;
		}

		if (y >= maxScroll - 100) {
			activeSection = 'contact';
			return;
		}

		if (aboutEl && contactEl) {
			const line = vh * 0.38;
			const cTop = contactEl.getBoundingClientRect().top;
			const aTop = aboutEl.getBoundingClientRect().top;

			if (cTop <= line) {
				activeSection = 'contact';
			} else if (aTop <= line) {
				activeSection = 'about';
			} else {
				activeSection = '';
			}
		}
	}

	/**
	 * Same-route hash / home navigation often does not scroll with a plain `<a>` alone.
	 * Keep href for middle-click and accessibility; intercept primary clicks.
	 * @param {MouseEvent} e
	 * @param {'portal' | 'about' | 'contact'} target
	 */
	async function onSideNavClick(e, target) {
		if (e.defaultPrevented) return;
		if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

		e.preventDefault();

		if (target === 'portal') {
			activeSection = '';
			await goto('/');
			// Instant jump: smooth scroll from contact → top passes through about/contact and
			// the spy flashes Dossier / Interface on every frame.
			window.scrollTo({ top: 0, behavior: 'auto' });
			updateActiveFromScroll();
			return;
		}

		const id = target === 'about' ? 'about' : 'contact';
		activeSection = id;
		scrollSpySuspended = true;
		await goto(`/#${id}`, { noScroll: true, keepFocus: true });
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		resumeScrollSpyAfterSmoothScroll();
	}

	onMount(() => {
		window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
		updateActiveFromScroll();

		return () => {
			window.removeEventListener('scroll', updateActiveFromScroll);
			clearTimeout(scrollSpyResumeTimeout);
		};
	});
</script>

<div
	class="font-body text-on-surface selection:bg-primary selection:text-on-primary flex min-h-screen flex-col antialiased"
>
	<!-- Global Background Layer -->
	<div class="bg-surface fixed inset-0 -z-50"></div>
	<ThreeBackground />

	<!-- NAVIGATION SHELL (TopAppBar) -->

	<!-- SIDENAV (SideNavBar) -->
	<aside
		class="fixed top-0 left-0 z-40 hidden h-screen w-64 flex-col border-r border-[#ba002c]/20 bg-[#f3f3f5] py-8 pt-24 lg:flex"
	>
		<div class="mb-12 px-6">
			<div class="font-headline text-on-surface text-lg font-black">SYSTEM_STATUS</div>
			<div class="text-primary font-label text-[10px] tracking-[0.2em] uppercase">
				ONLINE // VER_2.0.4
			</div>
		</div>

		<nav class="flex-1 space-y-2">
			<a
				href="/"
				onclick={(e) => onSideNavClick(e, 'portal')}
				class="clip-path-tactical relative z-10 mx-4 block flex items-center gap-4 p-4 transition-all {activeSection ===
				''
					? 'cursor-default bg-[#ba002c] text-white'
					: 'cursor-pointer border-[#ba002c] text-[#1a1c1d] opacity-50 hover:border-l-4 hover:bg-[#e2e2e4] hover:opacity-100'}"
			>
				<span class="font-label text-sm font-bold tracking-widest uppercase">Portal</span>
			</a>
			<a
				href="/#about"
				onclick={(e) => onSideNavClick(e, 'about')}
				class="clip-path-tactical relative z-10 mx-4 block flex items-center gap-4 p-4 transition-all {activeSection ===
				'about'
					? 'cursor-default bg-[#ba002c] text-white'
					: 'cursor-pointer border-[#ba002c] text-[#1a1c1d] opacity-50 hover:border-l-4 hover:bg-[#e2e2e4] hover:opacity-100'}"
			>
				<span class="font-label text-sm font-bold tracking-widest uppercase">Dossier</span>
			</a>
			<a
				href="/#contact"
				onclick={(e) => onSideNavClick(e, 'contact')}
				class="clip-path-tactical relative z-10 mx-4 block flex items-center gap-4 p-4 transition-all {activeSection ===
				'contact'
					? 'cursor-default bg-[#ba002c] text-white'
					: 'cursor-pointer border-[#ba002c] text-[#1a1c1d] opacity-50 hover:border-l-4 hover:bg-[#e2e2e4] hover:opacity-100'}"
			>
				<span class="font-label text-sm font-bold tracking-widest uppercase">Interface</span>
			</a>
		</nav>
		<div class="mt-auto px-4 pb-8">
			<p
				class="bg-primary text-on-primary font-headline clip-path-button hover:bg-on-surface inline-block w-full py-3 text-center text-xs tracking-widest transition-colors"
			>
				DOWNLOAD_CV
			</p>
		</div>
	</aside>

	<main class="relative min-h-screen overflow-hidden pt-24 lg:ml-64">
		<!-- Coordinate Grid Background -->
		{@render children()}
	</main>
</div>
