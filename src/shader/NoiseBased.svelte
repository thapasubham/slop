<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { bindFullscreenQuad, linkProgram } from './webglFullscreen';
	import * as THREE from 'three';

	/** When true, fills `window` (layout backdrop). When false, fills parent `relative` box (e.g. #projects). */
	let { fullscreen = false }: { fullscreen?: boolean } = $props();

	let wrap: HTMLDivElement;
	let canvas: HTMLCanvasElement;

	let gl: WebGLRenderingContext;
	let program: WebGLProgram;
	let positionBuffer: WebGLBuffer;
	let uTime: WebGLUniformLocation | null;
	let uResolution: WebGLUniformLocation | null;
	let uMouseMovement: WebGLUniformLocation | null;
	let isHovering = false;
	let frame = 0;
	let resizeObserver: ResizeObserver | undefined;
	let mouseMovement = new THREE.Vector2(0.5, 0.5);
	let targetMouse = new THREE.Vector2(0.5, 0.5);
	const center = new THREE.Vector2(0.5, 0.5);
	const started = performance.now();

	const VERTEX_SHADER = /* glsl */ `
		attribute vec2 aPosition;
		void main() {
			gl_Position = vec4(aPosition, 0.0, 1.0);
		}
	`;

	/** Animated Voronoi / cellular field — tactical surface + accent ridges. */
	const FRAGMENT_SHADER = /* glsl */ `
		precision highp float;

		uniform float uTime;
		uniform vec2 uResolution;
		uniform vec2 uMouseMovement;
		vec2 random2(vec2 p) {
			return fract(
				sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453123
			);
		}

		float cellular(vec2 uv) {
			vec2 i = floor(uv);
			vec2 f = fract(uv);
			float minDist = 1.0;

			for (int y = -1; y <= 1; y++) {
				for (int x = -1; x <= 1; x++) {
					vec2 neighbor = vec2(float(x), float(y));
					vec2 point = random2(i + neighbor);
					point = 0.5 + 0.5 * sin(uTime * 0.5 + 6.2831853 * point);
					vec2 diff = neighbor + point - f;
					minDist = min(minDist, length(diff));
				}
			}
			return minDist;
		}

		void main() {
			vec2 uv = gl_FragCoord.xy / uResolution.xy;
			uv -= 0.25;
			uv.x *= uResolution.x / uResolution.y;
			vec2 offset = (uMouseMovement - 0.5);
            offset *= 0.25;
            offset *= smoothstep(0.0, 0.2, length(offset));
            uv += offset;
            float t = uTime * 0.02;
			float c1 = cellular(uv * 3.0 + t);
			float c2 = cellular(uv * 6.0 - t);
			float ridge = smoothstep(0.12, 0.55, c1) - smoothstep(0.18, 0.62, c2);

			vec3 surface = vec3(0.9, 0.96, 0.9);
            vec3 accent  = vec3(0.80, 0.18, 0.28);
            vec3 teal    = vec3(0.10, 0.55, 0.60);

			vec3 col = mix(surface, mix(accent, teal, 0.35), ridge * 0.55);
			col += accent * pow(max(ridge, 0.0), 2.0) * 0.12;
			col = mix(col, surface, 0.12);

			gl_FragColor = vec4(col, 0.9);
		}
	`;

	function resize() {
		if (!canvas || !gl) return;
		const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
		let cssW: number;
		let cssH: number;
		if (fullscreen) {
			cssW = window.innerWidth;
			cssH = window.innerHeight;
		} else if (wrap) {
			cssW = Math.max(1, wrap.clientWidth);
			cssH = Math.max(1, wrap.clientHeight);
		} else {
			return;
		}
		const w = Math.floor(cssW * dpr);
		const h = Math.floor(cssH * dpr);
		canvas.width = w;
		canvas.height = h;
		canvas.style.width = `${cssW}px`;
		canvas.style.height = `${cssH}px`;
		gl.viewport(0, 0, w, h);
	}

	function render() {
		frame = requestAnimationFrame(render);
		if (!gl || !program) return;
		const t = (performance.now() - started) / 1000;
		mouseMovement.lerp(isHovering ? targetMouse : center, 0.05);
		gl.useProgram(program);
		gl.uniform1f(uTime, t);
		gl.uniform2fv(uMouseMovement, mouseMovement);

		gl.uniform2f(uResolution, canvas.width, canvas.height);
		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
	function onMouseMove(event: MouseEvent) {
		const rect = canvas.getBoundingClientRect();

		targetMouse.x = (event.clientX - rect.left) / rect.width;
		targetMouse.y = 1.0 - (event.clientY - rect.top) / rect.height;
	}
	onMount(() => {
		const ctx = canvas.getContext('webgl', { alpha: true, antialias: true });
		if (!ctx) return;
		gl = ctx;

		program = linkProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
		gl.useProgram(program);
		positionBuffer = bindFullscreenQuad(gl, program, 'aPosition');
		canvas.addEventListener('mousemove', onMouseMove);
		canvas.addEventListener('mouseenter', () => (isHovering = true));
		canvas.addEventListener('mouseleave', () => (isHovering = false));
		uTime = gl.getUniformLocation(program, 'uTime');
		uResolution = gl.getUniformLocation(program, 'uResolution');
		uMouseMovement = gl.getUniformLocation(program, 'uMouseMovement');
		resize();
		if (fullscreen) {
			window.addEventListener('resize', resize);
		} else {
			resizeObserver = new ResizeObserver(() => resize());
			resizeObserver.observe(wrap);
		}
		render();
	});

	onDestroy(() => {
		if (!browser) return;
		if (fullscreen) window.removeEventListener('resize', resize);
		resizeObserver?.disconnect();
		cancelAnimationFrame(frame);
		if (gl && positionBuffer) gl.deleteBuffer(positionBuffer);
		if (gl && program) gl.deleteProgram(program);
	});
</script>

<div
	bind:this={wrap}
	class={fullscreen ? 'noise-fullscreen' : 'noise-contained'}
	aria-hidden="true"
>
	<canvas bind:this={canvas} class="noise-canvas"></canvas>
</div>

<style>
	.noise-contained {
		position: absolute;
		inset: 0;
		z-index: 0;
		min-height: 280px;
		pointer-events: auto;
	}

	.noise-fullscreen {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}

	.noise-canvas {
		display: block;
		width: 100%;
		height: 100%;
		pointer-events: auto;
		opacity: 0.55;
	}
</style>
