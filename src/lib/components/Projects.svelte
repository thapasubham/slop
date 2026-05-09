<script lang="ts">
	import { onMount } from 'svelte';
	import { useGameState } from '$lib/gameState.svelte.ts';

	const gameState = useGameState();

	const projects = [
		{
			id: '01',
			title: 'Movie Review System',
			year: '2024',
			category: 'Full-Stack Platform',
			description:
				'A full-stack platform for movie reviews featuring dynamic UI, user authentication via Rust/SvelteKit, and robust database management.',
			tech: ['Rust', 'SvelteKit', 'JavaScript', 'MySQL'],
			link: 'https://github.com/thapasubham/review'
		},
		{
			id: '02',
			title: 'Go Expense Tracker',
			year: '2024',
			category: 'Backend System',
			description:
				'Secure backend tracking system with JWT authentication and password hashing. Built with a focus on secure database interactions and clean Go architecture.',
			tech: ['Golang', 'MySQL', 'JWT'],
			link: 'https://github.com/thapasubham/goLang'
		},
		{
			id: '03',
			title: 'Order Microservice',
			year: '2024',
			category: 'Microservices Architecture',
			description:
				'Microservice architecture using Go and MongoDB. Features an API Gateway for routing and RabbitMQ for asynchronous inter-service communication.',
			tech: ['Golang', 'MongoDB', 'RabbitMQ'],
			link: 'https://github.com/thapasubham/ordering-service'
		},
		{
			id: '04',
			title: 'Ecommerce Platform',
			year: '2023',
			category: 'Commerce Platform',
			description:
				'Full-stack platform with Stripe integration, RBAC via JWT/Bcrypt, and Docker-based deployment. Features dynamic font loading and secure resource access.',
			tech: ['TypeScript', 'PostgreSQL', 'Docker', 'Stripe'],
			link: 'https://github.com/thapasubham/final-project'
		}
	];

	let visible = $state(new Set<string>());

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible = new Set([...visible, entry.target.id]);
					}
				}
			},
			{ threshold: 0.1 }
		);

		for (const p of projects) {
			const el = document.getElementById(`proj-${p.id}`);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});
</script>

<section id="projects" class="relative py-36">
	<!-- watermark -->
	<div
		class="pointer-events-none absolute top-10 right-10 select-none font-display text-[10rem] font-black leading-none text-subtle opacity-50"
	>
		05
	</div>
	<div class="mx-auto mb-24 max-w-7xl px-10 md:px-16">
		<span class="mb-5 block hud-label text-cyan">
			Selected Work
		</span>
		<h2
			class="font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.85] tracking-tighter text-text uppercase"
		>
			Selected<br />
			<span class="neon-gradient">Projects.</span>
		</h2>
	</div>

	<div class="mx-auto max-w-7xl px-10 md:px-16">
		{#each projects as project}
			<div
				id="proj-{project.id}"
				role="button"
				tabindex="0"
				onclick={() => gameState.trackProject(project.id)}
				onkeydown={(e) => e.key === 'Enter' && gameState.trackProject(project.id)}
				class="group grid grid-cols-1 items-start gap-8 border-t border-border py-16 transition-all duration-700 lg:grid-cols-[72px,1fr,auto] lg:gap-16 {visible.has(
					`proj-${project.id}`
				)
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-8'}"
			>
				<!-- Number -->
				<span
					class="font-display text-4xl font-black leading-none text-subtle transition-colors duration-500 group-hover:text-cyan/40"
				>
					{project.id}
				</span>

				<!-- Info -->
				<div>
					<span class="mb-4 block hud-label text-magenta">
						{project.category} · {project.year}
					</span>
					<h3
						class="mb-6 font-display text-3xl font-black tracking-tighter text-text transition-colors duration-500 group-hover:text-cyan lg:text-5xl"
					>
						{project.title}
					</h3>
					<p class="mb-8 max-w-xl font-mono text-sm leading-relaxed text-muted">
						{project.description}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each project.tech as t}
							<span class="border border-white/5 bg-white/5 hud-label px-3 py-1 text-muted transition-colors group-hover:text-cyan">
								{t}
							</span>
						{/each}
					</div>
				</div>

				<!-- Link -->
				<a
					href={project.link}
					target="_blank"
					rel="noreferrer"
					id="proj-link-{project.id}"
					class="mt-1 flex items-center gap-2 whitespace-nowrap hud-label text-muted transition-colors hover:text-cyan glow-cyan"
				>
					Source ↗
				</a>
			</div>
		{/each}
	</div>
</section>
