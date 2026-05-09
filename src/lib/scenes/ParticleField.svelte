<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;
	let animFrame: number;
	let renderer: THREE.WebGLRenderer;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
		camera.position.z = 2;

		renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		renderer.setSize(window.innerWidth, window.innerHeight);

		const count = 1800;
		const positions = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 12;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
		}

		const geo = new THREE.BufferGeometry();
		geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

		const mat = new THREE.PointsMaterial({
			size: 0.007,
			color: 0x00e5ff,
			transparent: true,
			opacity: 0.35,
			sizeAttenuation: true
		});

		const particles = new THREE.Points(geo, mat);
		scene.add(particles);

		let t = 0;

		function animate() {
			animFrame = requestAnimationFrame(animate);
			t += 0.00025;
			particles.rotation.y = t * 0.4;
			particles.rotation.x = t * 0.15;
			renderer.render(scene, camera);
		}

		animate();

		function onResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
			geo.dispose();
			mat.dispose();
			cancelAnimationFrame(animFrame);
			renderer?.dispose();
		};
	});
</script>

<canvas bind:this={canvas} class="pointer-events-none absolute inset-0 h-full w-full"></canvas>
