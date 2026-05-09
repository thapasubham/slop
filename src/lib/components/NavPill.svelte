<script lang="ts">
	let { activeSection = 'hero' }: { activeSection: string } = $props();

	const links = [
		{ id: 'hero', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Career' },
		{ id: 'projects', label: 'Work' },
		{ id: 'contact', label: 'Contact' }
	];

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<nav
	class="fixed top-8 right-8 z-50 flex items-center gap-1 glass-ui p-1.5 rounded-full"
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
