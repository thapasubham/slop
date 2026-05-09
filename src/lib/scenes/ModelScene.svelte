<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import gsap from 'gsap';

	let canvas: HTMLCanvasElement;
	let animFrame: number;
	let renderer: THREE.WebGLRenderer;
	let model: THREE.Group | null = null;

	let targetX = 0;
	let targetY = 0;
	let currentX = 0;
	let currentY = 0;

	function onMouseMove(e: MouseEvent) {
		targetX = (e.clientX / window.innerWidth - 0.5) * 0.5;
		targetY = (e.clientY / window.innerHeight - 0.5) * 0.3;
	}

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
		camera.position.set(0, 0, 20); // Start far away for intro

		renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.1;

		scene.background = new THREE.Color(0x05050a);
		scene.fog = new THREE.FogExp2(0x05050a, 0.12);

		const ambientLight = new THREE.AmbientLight(0x0a0a14, 0.8);
		scene.add(ambientLight);

		const keyLight = new THREE.DirectionalLight(0x00e5ff, 5);
		keyLight.position.set(3, 3, 2);
		scene.add(keyLight);

		const fillLight = new THREE.DirectionalLight(0xff2bd6, 3);
		fillLight.position.set(-3, -1, 1);
		scene.add(fillLight);

		const rimLight = new THREE.DirectionalLight(0x8a2be2, 1.5);
		rimLight.position.set(0, 1, -3);
		scene.add(rimLight);

		// Intro sequence
		const tl = gsap.timeline({ delay: 0.5 });
		tl.to(camera.position, { z: 4.5, duration: 2.5, ease: 'power3.inOut' });
		tl.to(ambientLight, { intensity: 0.8, duration: 2 }, '-=1.5');
		tl.to(keyLight, { intensity: 5, duration: 2 }, '-=1.8');
		tl.to(fillLight, { intensity: 3, duration: 2 }, '-=1.8');
		tl.to(rimLight, { intensity: 1.5, duration: 2 }, '-=1.8');

		const loader = new GLTFLoader();
		loader.load('/models/Untitled.glb', (gltf) => {
			model = gltf.scene;

			const box = new THREE.Box3().setFromObject(model);
			const center = box.getCenter(new THREE.Vector3());
			const size = box.getSize(new THREE.Vector3());
			const maxDim = Math.max(size.x, size.y, size.z);

			model.position.sub(center);
			model.scale.setScalar(2.4 / maxDim);

			model.traverse((child) => {
				if (child instanceof THREE.Mesh && child.material) {
					const mat = child.material as THREE.MeshStandardMaterial;
					mat.roughness = 0.35;
					mat.metalness = 0.75;
				}
			});

			scene.add(model);
		});

		// Integrated Particle Field
		const pCount = 10000;
		const pGeo = new THREE.BufferGeometry();
		const pPos = new Float32Array(pCount * 3);
		for (let i = 0; i < pCount * 3; i++) {
			pPos[i] = (Math.random() - 0.5) * 15;
		}
		pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
		const pMat = new THREE.PointsMaterial({
			size: 0.008,
			color: 0x00e5ff,
			transparent: true,
			opacity: 0.5,
			sizeAttenuation: true
		});
		const particles = new THREE.Points(pGeo, pMat);
		scene.add(particles);

		let baseRotation = 0;

		function animate() {
			animFrame = requestAnimationFrame(animate);
			baseRotation += 0.003;
			currentX += (targetX - currentX) * 0.04;
			currentY += (targetY - currentY) * 0.04;

			if (model) {
				model.rotation.y = baseRotation + currentX * 0.6;
				model.rotation.x = currentY * 0.4;
			}

			particles.rotation.y = baseRotation * 0.2;
			particles.rotation.x = baseRotation * 0.1;

			renderer.render(scene, camera);
		}

		animate();

		function onResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onResize);
			cancelAnimationFrame(animFrame);
			renderer?.dispose();
		};
	});
</script>

<canvas bind:this={canvas} class="absolute inset-0 h-full w-full"></canvas>
