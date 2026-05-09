<script lang="ts">
	const experience = [
		{
			company: 'UBA Solutions',
			role: 'Software Engineer Trainee',
			period: 'Nov 2025 — Present',
			description:
				'Focused on engineering scalable backend architectures and full-stack solutions within a high-performance team environment.'
		},
		{
			company: 'UBA Solutions',
			role: 'Software Engineer Intern',
			period: 'Apr 2025 — Jul 2025',
			description:
				'Completed a 3-month intensive internship specializing in API design and modern frontend integrations.'
		}
	];
</script>

<section id="experience" class="relative py-36">
	<!-- watermark -->
	<div
		class="pointer-events-none absolute top-10 right-10 select-none font-display text-[10rem] font-black leading-none text-subtle opacity-50"
	>
		04
	</div>

	<div class="mx-auto max-w-7xl px-10 md:px-16">
		<span class="mb-5 block hud-label text-cyan">
			Career Path
		</span>
		<h2
			class="mb-24 font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.85] tracking-tighter text-text uppercase"
		>
			Experience<br />
			<span class="neon-gradient">Timeline.</span>
		</h2>

		<div class="relative border-l border-border pl-10 md:pl-20">
			{#each experience as item, i}
				<div class="relative mb-24 last:mb-0">
					<!-- dot -->
					<div
						class="absolute -left-[45px] top-2 h-3 w-3 rounded-full bg-cyan glow-cyan md:-left-[85px]"
					></div>

					<span class="mb-3 block hud-label text-cyan">
						{item.period}
					</span>
					<h3 class="font-display text-2xl font-black uppercase text-text lg:text-4xl">
						{item.role}
					</h3>
					<p class="mt-2 font-mono text-sm tracking-wide text-muted">
						{item.company}
					</p>
					<p class="mt-6 max-w-xl font-body text-sm leading-relaxed text-muted/80">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
