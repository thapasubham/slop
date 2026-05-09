<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;
	let animFrame: number;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 5;

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Create Tunnel
		const points = [];
		for (let i = 0; i < 100; i++) {
			points.push(new THREE.Vector3(0, 0, -i * 5));
		}
		const path = new THREE.CatmullRomCurve3(points);
		const geometry = new THREE.TubeGeometry(path, 100, 2, 8, false);
		
		const material = new THREE.MeshBasicMaterial({
			color: 0x00e5ff,
			wireframe: true,
			transparent: true,
			opacity: 0.2
		});

		const tunnel = new THREE.Mesh(geometry, material);
		scene.add(tunnel);

		// Add glowing rings
		const rings: THREE.Mesh[] = [];
		for (let i = 0; i < 20; i++) {
			const ringGeo = new THREE.TorusGeometry(2, 0.02, 16, 100);
			const ringMat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xff2bd6 : 0x00e5ff });
			const ring = new THREE.Mesh(ringGeo, ringMat);
			ring.position.z = -i * 25;
			scene.add(ring);
			rings.push(ring);
		}

		function animate() {
			animFrame = requestAnimationFrame(animate);
			
			// Move rings towards camera
			rings.forEach(ring => {
				ring.position.z += 0.5;
				if (ring.position.z > 5) {
					ring.position.z = -450;
				}
				ring.rotation.z += 0.01;
			});

			tunnel.rotation.z += 0.002;

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
			window.removeEventListener('resize', onResize);
			cancelAnimationFrame(animFrame);
			renderer.dispose();
			geometry.dispose();
			material.dispose();
		};
	});
</script>

<canvas bind:this={canvas} class="fixed inset-0 z-[10000] h-full w-full bg-void"></canvas>
<div class="fixed inset-0 z-[10001] flex items-center justify-center pointer-events-none">
    <div class="hud-label text-cyan animate-pulse text-2xl tracking-[1em]">WARP_DRIVE_ACTIVE</div>
</div>
