<script lang="ts">
	import { fade } from 'svelte/transition';
	let { activeSection = 'hero' }: { activeSection: string } = $props();

	const links = [
		{ id: 'hero', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Career' },
		{ id: 'projects', label: 'Work' },
		{ id: 'contact', label: 'Contact' }
	];

	let isOpen = $state(false);

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		isOpen = false;
	}
</script>

<!-- Mobile Menu Toggle -->
<button
	onclick={() => (isOpen = !isOpen)}
	class="fixed top-8 right-6 z-[60] flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-panel/80 px-4 py-2 backdrop-blur-md md:hidden"
>
	<div class="hud-label text-text">{isOpen ? 'CLOSE' : 'MENU'}</div>
	<div class="flex flex-col gap-1">
		<div class="h-0.5 w-4 bg-cyan"></div>
		<div class="h-0.5 w-4 bg-magenta"></div>
	</div>
</button>

<!-- Mobile Sidebar Overlay -->
{#if isOpen}
	<button
		type="button"
		class="fixed inset-0 z-50 bg-void/90 backdrop-blur-xl md:hidden cursor-default"
		onclick={() => (isOpen = false)}
		onkeydown={(e) => e.key === 'Escape' && (isOpen = false)}
		aria-label="Close menu"
		transition:fade
	>
		<div class="flex h-full flex-col items-end justify-center p-12 gap-8">
			{#each links as link}
				<button
					onclick={() => scrollTo(link.id)}
					class="font-display text-4xl font-bold uppercase transition-all hover:text-cyan {activeSection ===
					link.id
						? 'text-magenta glow-magenta scale-110'
						: 'text-text/60'}"
				>
					{link.label}
				</button>
			{/each}
		</div>
	</button>
{/if}

<!-- Desktop Horizontal Pill -->
<nav
	class="fixed top-8 right-8 z-50 hidden items-center gap-1 glass-ui p-1.5 rounded-full md:flex"
>
	{#each links as link}
		<button
			onclick={() => scrollTo(link.id)}
			class="rounded-full px-4 py-1.5 hud-label transition-all duration-300 {activeSection ===
			link.id
				? 'bg-magenta text-void font-bold glow-magenta'
				: 'text-hud hover:text-text'}"
		>
			{link.label}
		</button>
	{/each}
</nav>
