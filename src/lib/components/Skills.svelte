<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	const ticker = [
		'JavaScript',
		'TypeScript',
		'Go',
		'Java',
		'Python',
		'PHP',
		'Node.js',
		'Express',
		'React',
		'SvelteKit',
		'MySQL',
		'MongoDB',
		'PostgreSQL',
		'Docker',
		'RabbitMQ',
		'AWS EC2',
		'AWS VPC',
		'Git',
		'JWT',
		'REST APIs'
	];

	const languages = [
		'JavaScript / TypeScript',
		'Go (Golang)',
		'Java · Python · PHP',
		'Node.js / Express',
		'HTML / CSS'
	];

	const infra = [
		'MySQL · MongoDB · PostgreSQL',
		'Docker / RabbitMQ',
		'AWS EC2 / VPC',
		'Git / Postman / VSCode',
		'JWT · Auth · Security'
	];
</script>

<section id="skills" class="relative overflow-hidden py-36">
	<!-- watermark -->
	<div
		class="pointer-events-none absolute top-10 right-10 z-0 select-none font-display text-[10rem] font-black leading-none text-void [-webkit-text-stroke:2px_rgba(255,255,255,0.3)]"
	>
		03
	</div>

	<!-- Scanning Laser Bar -->
	<div class="pointer-events-none absolute inset-0 z-10 overflow-hidden">
		<div class="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent animate-scan"></div>
	</div>


	<div class="mx-auto mb-20 max-w-7xl px-10 md:px-16" use:reveal>
		<span class="mb-5 block hud-label text-cyan">
			Capabilities
		</span>
		<h2
			class="font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.85] tracking-tighter text-text uppercase"
		>
			Technical<br />
			<span class="iridescent-gradient">Skills.</span>
		</h2>
	</div>

	<!-- Infinite marquee ticker -->
	<div class="relative overflow-hidden border-y border-border py-6 mb-20">
		<div class="flex animate-marquee gap-10 whitespace-nowrap">
			{#each [...ticker, ...ticker] as skill}
				<span class="font-display text-xl font-black uppercase tracking-tight text-muted/60">
					{skill}<span class="mx-8 text-cyan">·</span>
				</span>
			{/each}
		</div>
	</div>

	<!-- Two panels -->
	<div class="mx-auto max-w-7xl px-10 md:px-16" use:reveal={{ delay: 200 }}>
		<div class="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
			<div class="bg-void p-12 border border-white/5">
				<span class="mb-8 block hud-label text-cyan">
					Languages & Frameworks
				</span>
				<ul class="space-y-4">
					{#each languages as item}
						<li class="group flex items-center gap-4">
							<div
								class="h-1 w-1 shrink-0 rounded-full bg-cyan/30 transition-colors group-hover:bg-cyan"
							></div>
							<span class="hud-label text-text transition-colors group-hover:text-cyan">
								{item}
							</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-void p-12 border border-white/5">
				<span class="mb-8 block hud-label text-cyan">
					Infrastructure & Tools
				</span>
				<ul class="space-y-4">
					{#each infra as item}
						<li class="group flex items-center gap-4">
							<div
								class="h-1 w-1 shrink-0 rounded-full bg-cyan/30 transition-colors group-hover:bg-cyan"
							></div>
							<span class="hud-label text-text transition-colors group-hover:text-cyan">
								{item}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
