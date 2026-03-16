<script>
	const skills = [
		{ name: 'Frontend', items: ['SvelteKit', 'React', 'TypeScript', 'Tailwind CSS'] },
		{ name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
		{ name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] }
	];
</script>

<section id="skills" class="bg-zinc-900/30 py-24">
	<div class="container-custom">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Technical Prowess</h2>
			<p class="mx-auto max-w-2xl text-zinc-400">
				My toolkit is constantly evolving, focused on performance, accessibility, and modern best
				practices.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each skills as category}
				<div class="glass-card">
					<h3 class="mb-6 border-b border-white/5 pb-4 text-xl font-bold">
						{category.name}
					</h3>
					<div class="flex flex-wrap gap-3">
						{#each category.items as skill}
							<span
								class="hover:border-brand-primary/30 rounded-lg border border-white/5 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300 transition-colors"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
