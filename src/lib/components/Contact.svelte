<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	const links = [
		{
			label: 'Email',
			value: 'subhamits4.2@gmail.com',
			href: 'mailto:subhamits4.2@gmail.com'
		},
		{
			label: 'Phone',
			value: '+977-9818997475',
			href: 'tel:+9779818997475'
		},
		{
			label: 'GitHub',
			value: 'thapasubham',
			href: 'https://github.com/thapasubham'
		},
		{
			label: 'LinkedIn',
			value: 'Subham Thapa',
			href: 'https://www.linkedin.com/in/subham-t-52602125b/'
		}
	];
</script>

<section id="contact" class="relative min-h-screen overflow-hidden py-36">
	<!-- watermark -->
	<div
		class="pointer-events-none absolute top-10 right-10 z-0 select-none font-display text-[10rem] font-black leading-none text-void [-webkit-text-stroke:2px_rgba(255,255,255,0.3)]"
	>
		06
	</div>

	<!-- Scanning Laser Bar -->
	<div class="pointer-events-none absolute inset-0 z-10 overflow-hidden">
		<div class="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent animate-scan"></div>
	</div>


	<!-- giant bg word -->
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
	>
		
	</div>

	<div class="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-10 md:px-16" use:reveal>
		<span class="mb-8 block hud-label text-cyan">
			Let's Talk
		</span>

		<h2
			class="mb-20 font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.85] tracking-tighter text-text uppercase"
		>
			Let's build<br />
			<span class="iridescent-gradient">something.</span>
		</h2>

		<div class="space-y-6">
			{#each links as link}
				<a
					href={link.href}
					target={link.label === 'GitHub' ? '_blank' : undefined}
					rel={link.label === 'GitHub' ? 'noreferrer' : undefined}
					id="contact-{link.label.toLowerCase()}"
					class="group flex items-center justify-between border-b border-border pb-6 transition-colors hover:border-cyan/40"
				>
					<span class="hud-label text-hud">
						{link.label}
					</span>
					<span class="hud-label text-text transition-colors group-hover:text-magenta">
						{link.value}
						<span
							class="ml-2 inline-block translate-x-0 transition-transform group-hover:translate-x-1"
						>
							↗
						</span>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
