<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { browser } from '$app/environment';
	import { lerp } from 'three/src/math/MathUtils.js';

	let canvas: HTMLCanvasElement;

	let scene: THREE.Scene;
	let camera: THREE.OrthographicCamera;
	let renderer: THREE.WebGLRenderer;
	let mesh: THREE.Mesh;
	let animationFrame: number;

	let time = 0;
	let mouseScrollY = 0;
	let mouse = new THREE.Vector2(0.5, 0.5);
	let targetMouse = new THREE.Vector2(0.5, 0.5);

	function onScroll() {
		mouseScrollY = window.scrollY;

		if (mesh) {
			const m = mesh.material as THREE.ShaderMaterial;

			// normalize scroll so it doesn't go crazy
			m.uniforms.uMouseScrollY.value = mouseScrollY * 0.0005;
		}
	}
	/** Matches `app.css` @theme — tactical / portfolio HUD */
	const PALETTE = {
		surface: '#f9f9fb',
		variant: '#e2e2e4',
		accent: '#ba002c',
		ink: '#1a1c1d',
		teal: '#006672',
		outline: '#916f6b'
	} as const;

	const VERTEX_SHADER = /* glsl */ `
    varying vec2 vUv;

    void main() {
    		vUv = uv;
    		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
	`;

	const FRAGMENT_SHADER = /* glsl */ `
		uniform float uTime;
		uniform vec2 uResolution;
		uniform vec2 uMouse;
		uniform vec3 uSurface;
		uniform vec3 uVariant;
		uniform vec3 uAccent;
		uniform vec3 uInk;
		uniform vec3 uTeal;
		uniform vec3 uOutline;
		uniform float uMouseScrollY;

		varying vec2 vUv;

		float gridMask(vec2 p, float cells) {
			vec2 c = abs(fract(p * cells - 0.5) - 0.5);
			return smoothstep(0.038, 0.0, min(c.x, c.y));
		}

		void main() {
			float t = uTime;
			float aspect = uResolution.x / max(uResolution.y, 1.0);

			vec2 toward = (uMouse - vUv) * 0.28;
			vec2 uv = vUv ;

			vec2 drift = vec2(sin(t * 0.04), cos(t * 0.035)) * 0.004;
            drift.y -= uMouseScrollY;

			vec2 p = vec2(uv.x * aspect, uv.y) + drift;

			vec3 base = mix(uSurface, uVariant, uv.y * 0.55 + sin(t * 0.08) * 0.012);

			float fine = gridMask(p+ toward, 22.0);
			float coarse = gridMask(p + 0.12+ toward, 7.0);
			vec3 col = base;
			col = mix(col, uOutline, coarse * 0.06);
			col = mix(col, uInk, fine * 0.045);
			col = mix(col, uAccent, fine * 0.085);

			float tick = gridMask(p * vec2(1.0, 3.2) + vec2(0.0, 0.31), 3.0);
			col = mix(col, uTeal, tick * fine * 0.07);

			vec2 q = uv - 0.5;
			float vig = 1.0 - dot(q, q) * 0.85;
			float alpha = 0.38 * vig;

			gl_FragColor = vec4(col, alpha);
		}
	`;

	function init() {
		scene = new THREE.Scene();

		camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
		camera.position.set(0, 0, 1);
		camera.lookAt(0, 0, 0);

		renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
			powerPreference: 'low-power'
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);
		renderer.setSize(window.innerWidth, window.innerHeight);

		const geometry = new THREE.PlaneGeometry(2, 2);
		const material = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
				uMouse: { value: mouse.clone() },
				uMouseScrollY: { value: mouseScrollY },
				uSurface: { value: new THREE.Color(PALETTE.surface) },
				uVariant: { value: new THREE.Color(PALETTE.variant) },
				uAccent: { value: new THREE.Color(PALETTE.accent) },
				uInk: { value: new THREE.Color(PALETTE.ink) },
				uTeal: { value: new THREE.Color(PALETTE.teal) },
				uOutline: { value: new THREE.Color(PALETTE.outline) }
			},
			vertexShader: VERTEX_SHADER,
			fragmentShader: FRAGMENT_SHADER,
			transparent: true,
			depthWrite: false,
			depthTest: false
		});

		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
	}

	function animate() {
		animationFrame = requestAnimationFrame(animate);
		time += 0.016;

		mouse.lerp(targetMouse, 0.06);
		if (mesh) {
			const m = mesh.material as THREE.ShaderMaterial;
			m.uniforms.uTime.value = time;
			m.uniforms.uMouse.value = mouse;
		}

		renderer.render(scene, camera);
	}

	function onMouseMove(event: MouseEvent) {
		targetMouse.x = event.clientX / window.innerWidth;
		targetMouse.y = 1.0 - event.clientY / window.innerHeight;
	}

	function onResize() {
		if (!renderer || !camera) return;
		const w = window.innerWidth;
		const h = window.innerHeight;
		renderer.setSize(w, h);
		const mat = mesh?.material as THREE.ShaderMaterial | undefined;
		if (mat) mat.uniforms.uResolution.value.set(w, h);
	}

	onMount(() => {
		init();
		animate();
		mouseScrollY = window.scrollY;
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('resize', onResize);
		window.addEventListener('scroll', onScroll);
	});
	onDestroy(() => {
		if (browser) {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('scroll', onScroll);

			cancelAnimationFrame(animationFrame);
			renderer?.dispose();
			mesh?.geometry.dispose();
			(mesh?.material as THREE.Material)?.dispose();
		}
	});
</script>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	canvas {
		display: block;
		width: 100% !important;
		height: 100% !important;
	}
</style>
