<script>
	import NoiseBased from '../../shader/NoiseBased.svelte';
	import ProjectDetail from './ProjectDetail.svelte';

	const projects = [
		{
			id: 1,
			title: 'Movie Review System',
			description:
				'A full-stack platform for movie reviews featuring dynamic UI, user authentication via Rust/SvelteKit, and robust database management.',
			tech: ['Rust', 'SvelteKit', 'Javascript', 'MySQL'],
			link: 'https://github.com/thapasubham/review',
			clip: 'clip-skew-left'
		},
		{
			id: 2,
			title: 'Go Expense Tracker',
			description:
				'Secure backend tracking system with JWT authentication and password hashing. Built with a focus on secure database interactions and clean Go architecture.',
			tech: ['Golang', 'MySQL', 'JWT'],
			link: 'https://github.com/thapasubham/goLang',
			clip: 'clip-cut-corner'
		},
		{
			id: 3,
			title: 'Order Microservice',
			description:
				'Microservice architecture using Go and MongoDB. Features an API Gateway for routing and RabbitMQ for asynchronous inter-service communication.',
			tech: ['Golang', 'MongoDB', 'RabbitMQ'],
			link: 'https://github.com/thapasubham/ordering-service',
			clip: 'clip-cut-corner'
		},
		{
			id: 4,
			title: 'Ecommerce Platform',
			description:
				'Full-stack platform with Stripe integration, RBAC via JWT/Bcrypt, and Docker-based deployment. Features dynamic font loading and secure resource access.',
			tech: ['TypeScript', 'Postgres', 'Docker', 'Stripe'],
			link: 'https://github.com/thapasubham/final-project',
			clip: 'clip-skew-right'
		}
	];
	let expandedId = $state(0);
	/** @param {number} id */
	function toggle(id) {
		expandedId = id === expandedId ? 0 : id;
	}
</script>

<section id="projects" class="bg-surface relative overflow-hidden px-2 py-20">
	<!-- <div class="scanline pointer-events-none absolute inset-0 z-[1] opacity-[0.1]"></div> -->
	<NoiseBased fullscreen={false} />

	<div class="relative z-10 space-y-48 px-8 py-32 md:px-24">
		<!-- Section Header: Tactical Design -->
		
		<div
			class="border-on-surface mb-24 flex flex-col items-end justify-between border-b-8 pb-6 md:flex-row"
		>
			<div>
				<div class="mb-2 flex items-center gap-4">
					<div class="bg-primary h-1 w-8"></div>
				</div>
				<h2 class="font-headline text-6xl font-black tracking-tighter uppercase md:text-8xl">
					PROJECTS<br />
				</h2>
			</div>
			<div class="font-label hidden text-right md:block">
				<div class="text-[10px] font-black tracking-widest uppercase opacity-40">
					SYSTEM_STATE: ACTIVE
				</div>
				<div class="text-[10px] font-black tracking-widest uppercase opacity-40">
					ENCRYPTION: AES-256
				</div>
			</div>
		</div>
		<div class="glitch-line mb-12"></div>

		<!-- Projects Grid -->
		<div class="relative lg:col-span-12">
			<div class="grid grid-cols-1 items-start gap-12 md:grid-cols-12 lg:gap-16">
				<!-- Project List -->
				<div class="flex flex-col gap-6 md:col-span-12 lg:col-span-5">
					{#each projects as project, index (project.id)}
						<button
							type="button"
							onclick={() => toggle(project.id)}
							class="bg-on-surface clip-cut-corner hover:bg-primary group relative flex w-full cursor-crosshair appearance-none items-center justify-between border-none p-6 text-white transition-all {project.id ===
							expandedId
								? 'bg-primary ring-primary ring-2'
								: ''}"
							style="margin-left: {index * 0.5}rem"
						>
							<div class="bg-primary absolute top-0 left-0 h-1 w-full"></div>

							<div class="flex items-center gap-4">
								<div>
									<span
										class="material-symbols-outlined text-primary group-hover:text-white {project.id ===
										expandedId
											? 'text-white'
											: ''}"
									>
										// {project.id}
									</span>

									<span class="font-headline text-xl font-bold uppercase italic">
										{project.title}
									</span>
								</div>
							</div>
						</button>
					{/each}
				</div>

				<!-- Project Detail Display -->
				<div class="md:col-span-12 lg:sticky lg:top-40 lg:col-span-7">
					{#if expandedId}
						<div class="border-on-surface/20 border-l-2 pl-4 lg:pl-12">
							<ProjectDetail project={projects.find((p) => p.id === expandedId)} />
						</div>
					{:else}
						<div class="glitch-line mb-12"></div>
					{/if}
				</div>
			</div>
			<div class="glitch-line mb-12"></div>
		</div>

		<iframe title="Dungeon" frameborder="0" src="https://itch.io/embed/4499528" width="552" height="167"><a href="https://thapasubham.itch.io/dungeon">Dungeon by thapasubham</a></iframe>
	</div>
</section>
