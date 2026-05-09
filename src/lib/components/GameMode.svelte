<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { useGameState } from '$lib/gameState.svelte.ts';

	const gameState = useGameState();
	let canvas: HTMLCanvasElement;
	let animFrame: number;
	let score = $state(0);
	let targetScore = 5;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0, 0, 5);

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Lighting
		const ambient = new THREE.AmbientLight(0x0a0a14, 1);
		scene.add(ambient);
		const point = new THREE.PointLight(0x00e5ff, 2, 50);
		camera.add(point);
		scene.add(camera);

		// Infinite Tunnel Path
		const tunnelPoints = [];
		for (let i = 0; i < 200; i++) {
			tunnelPoints.push(new THREE.Vector3(0, 0, -i * 10));
		}
		const path = new THREE.CatmullRomCurve3(tunnelPoints);
		const tunnelGeo = new THREE.TubeGeometry(path, 200, 3, 12, false);
		const tunnelMat = new THREE.MeshBasicMaterial({
			color: 0x00e5ff,
			wireframe: true,
			transparent: true,
			opacity: 0.1
		});
		const tunnel = new THREE.Mesh(tunnelGeo, tunnelMat);
		scene.add(tunnel);

		// Data Nodes (Pickups)
		const nodes: THREE.Mesh[] = [];
		const nodeGeo = new THREE.IcosahedronGeometry(0.3, 0);
		const nodeMat = new THREE.MeshStandardMaterial({ color: 0xff2bd6, emissive: 0xff2bd6, emissiveIntensity: 2 });
		
		for (let i = 0; i < 20; i++) {
			const node = new THREE.Mesh(nodeGeo, nodeMat);
			node.position.set(
				(Math.random() - 0.5) * 4,
				(Math.random() - 0.5) * 4,
				-Math.random() * 500
			);
			scene.add(node);
			nodes.push(node);
		}

		// Controls
		const keys = { w: false, a: false, s: false, d: false };
		const onKeyDown = (e: KeyboardEvent) => { if (e.key.toLowerCase() in keys) (keys as any)[e.key.toLowerCase()] = true; };
		const onKeyUp = (e: KeyboardEvent) => { if (e.key.toLowerCase() in keys) (keys as any)[e.key.toLowerCase()] = false; };
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('keyup', onKeyUp);

		function animate() {
			animFrame = requestAnimationFrame(animate);

			// Movement
			const speed = 0.8;
			camera.position.z -= speed;
			if (keys.w) camera.position.y += 0.05;
			if (keys.s) camera.position.y -= 0.05;
			if (keys.a) camera.position.x -= 0.05;
			if (keys.d) camera.position.x += 0.05;

			// Node collision & rotation
			nodes.forEach(node => {
				node.rotation.y += 0.02;
				node.rotation.x += 0.01;

				const dist = camera.position.distanceTo(node.position);
				if (dist < 0.8) {
					node.position.z = camera.position.z - 500 - Math.random() * 200;
					node.position.x = (Math.random() - 0.5) * 4;
					node.position.y = (Math.random() - 0.5) * 4;
					score++;
				}

				// Recycle nodes
				if (node.position.z > camera.position.z) {
					node.position.z -= 600;
				}
			});

			renderer.render(scene, camera);
		}

		animate();

		const onResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('keyup', onKeyUp);
			window.removeEventListener('resize', onResize);
			cancelAnimationFrame(animFrame);
			renderer.dispose();
		};
	});
</script>

<div class="fixed inset-0 z-[20000] bg-void">
	<canvas bind:this={canvas} class="h-full w-full"></canvas>
	
	<!-- HUD -->
	<div class="fixed inset-0 pointer-events-none p-10 flex flex-col justify-between">
		<div class="flex justify-between items-start">
			<div class="hud-label text-cyan text-xl">
				SIMULATION_MODE_ACTIVE // NODE_COLLECTION
			</div>
			<div class="text-right">
				<div class="hud-label text-magenta text-4xl">{score} / {targetScore}</div>
				<div class="hud-label text-magenta/60 text-[10px]">DATA_NODES_CAPTURED</div>
			</div>
		</div>

		<div class="flex justify-between items-end">
			<div class="hud-label text-hud space-y-1">
				<div>[W,A,S,D] MANEUVER</div>
				<div>[ESC] TERMINATE_SIM</div>
			</div>
			<div class="animate-pulse hud-label text-cyan">
				SYSTEM_STABLE // 100%
			</div>
		</div>
	</div>

	{#if score >= targetScore}
		<div class="fixed inset-0 z-[20001] bg-cyan/20 backdrop-blur-xl flex flex-col items-center justify-center">
			<div class="animate-glitch font-display text-7xl font-black text-text mb-8">SIMULATION COMPLETE</div>
			<button 
				onclick={() => gameState.exitGame()}
				class="bg-cyan text-void hud-label px-12 py-4 text-xl hover:bg-magenta transition-colors pointer-events-auto"
			>
				RETURN_TO_REALITY
			</button>
		</div>
	{/if}

	<button 
		onclick={() => gameState.exitGame()}
		class="fixed bottom-10 right-10 pointer-events-auto border border-white/10 hud-label text-hud px-6 py-2 hover:text-text transition-colors"
	>
		ESC_EXIT
	</button>
</div>
