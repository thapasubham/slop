<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	const stack = ['TypeScript', 'Go', 'MySQL', 'Node.js', 'React', 'MongoDB', 'Docker', 'AWS'];

	const education = [
		{ period: '2021—2025', degree: 'BCA', school: 'Nepalaya College' },
		{ period: '2018—2020', degree: '+2 Science', school: 'New Summit College' }
	];
</script>

<section id="about" class="relative min-h-screen overflow-hidden py-36">
	<!-- watermark -->
	<div
		class="pointer-events-none absolute top-10 right-10 z-0 select-none font-display text-[10rem] font-black leading-none text-void [-webkit-text-stroke:2px_rgba(255,255,255,0.3)]"
	>
		02
	</div>

	<!-- Scanning Laser Bar -->
	<div class="pointer-events-none absolute inset-0 z-10 overflow-hidden">
		<div class="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan/0 to-transparent animate-scan"></div>
	</div>


	<div class="mx-auto max-w-7xl px-10 md:px-16" use:reveal>
		<div class="grid grid-cols-1 gap-24 lg:grid-cols-[280px,1fr]">
			<!-- Label column -->
			<div>
				<!-- Mobile version -->
				<div class="lg:hidden">
					<span class="block hud-label text-cyan mb-4">
						Identity
					</span>
					<div class="h-px w-12 bg-cyan/20"></div>
				</div>

				<!-- Desktop version -->
				<div class="hidden lg:sticky lg:top-40 lg:self-start lg:block">
					<span class="block hud-label text-cyan mb-4">
						Identity
					</span>
					<div class="h-px w-12 bg-cyan/20"></div>
				</div>
			</div>

			<!-- Content column -->
			<div class="space-y-20">
				<div>
					<h2
						class="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-[0.9] tracking-tight text-text mb-10 uppercase"
					>
						Backend-first engineer building systems that
						<span class="iridescent-gradient">scale</span>
						and
						<span class="iridescent-gradient">last.</span>
					</h2>
					<p class="max-w-2xl font-mono text-sm leading-loose text-muted">
						I design and build scalable server-side architectures, clean APIs, and full-stack web
						experiences. My focus is data integrity, secure authentication, and systems that hold up
						under pressure.
					</p>
				</div>

				<!-- Core stack -->
				<div>
					<span class="block font-mono text-[10px] tracking-[0.35em] text-muted mb-6 uppercase">
						Core Stack
					</span>
					<div class="flex flex-wrap gap-3">
						{#each stack as skill}
							<span
								class="border border-white/5 bg-white/5 hud-label px-4 py-2 text-text hover:border-cyan/50 hover:text-cyan transition-all duration-300"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>

				<!-- Education -->
				<div class="border-t border-border pt-14">
					<span class="block font-mono text-[10px] tracking-[0.35em] text-muted mb-10 uppercase">
						Education
					</span>
					<div class="space-y-8">
						{#each education as edu}
							<div class="flex items-start gap-8">
								<span class="hud-label text-cyan mt-1 shrink-0">
									{edu.period}
								</span>
								<div>
									<div class="font-display text-lg font-bold text-text">{edu.degree}</div>
									<div class="font-mono text-xs text-muted mt-1">{edu.school}</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
