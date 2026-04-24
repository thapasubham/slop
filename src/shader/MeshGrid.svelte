<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { bindFullscreenQuad, linkProgram } from './webglFullscreen';

	let canvas: HTMLCanvasElement;

	let gl: WebGLRenderingContext;
	let program: WebGLProgram;
	let positionBuffer: WebGLBuffer;
	let uTime: WebGLUniformLocation | null;
	let uResolution: WebGLUniformLocation | null;
	let frame = 0;

	const started = performance.now();

	const VERTEX_SHADER = /* glsl */ `
		attribute vec2 aPosition;
		void main() {
			gl_Position = vec4(aPosition, 5, 1.0);
		}
	`;

	/** Soft drifting blobs — surface / accent / ink (matches @theme). */
	const FRAGMENT_SHADER = /* glsl */ `
		precision highp float;

		uniform float uTime;
		uniform vec2 uResolution;

		float waveNoise(vec2 p) {
			return sin(p.x) * sin(p.y);
		}

		void main() {
			vec2 uv = gl_FragCoord.xy / uResolution.xy;
			uv -= 0.5;
			uv.x *= uResolution.x / uResolution.y;

			float t = uTime * 0.15;
			float n1 = waveNoise(uv * 3.0 + vec2(t, t));
			float n2 = waveNoise(uv * 2.0 - vec2(t * 0.7, t * 0.4));
			float n3 = waveNoise(uv * 4.0 + vec2(-t * 0.5, t * 0.8));
			float blend = (n1 + n2 + n3) * 0.33 * 0.5 + 0.5;

			vec3 surface = vec3(0.976, 0.976, 0.984);
			vec3 accent = vec3(0.729, 0.0, 0.173);
			vec3 ink = vec3(0.102, 0.110, 0.114);

			vec3 col = mix(surface, accent, blend * 0.22);
			col = mix(col, ink, (1.0 - blend) * 0.08);
			col *= 0.94;

			gl_FragColor = vec4(col, 1.0);
		}
	`;

	function resize() {
		if (!canvas || !gl) return;
		const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
		canvas.width = Math.floor(window.innerWidth * dpr);
		canvas.height = Math.floor(window.innerHeight * dpr);
		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight}px`;
		gl.viewport(0, 0, canvas.width, canvas.height);
	}

	function render() {
		frame = requestAnimationFrame(render);
		if (!gl || !program) return;
		const t = (performance.now() - started) / 1000;

		gl.useProgram(program);
		gl.uniform1f(uTime, t);
		gl.uniform2f(uResolution, canvas.width, canvas.height);
		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}

	onMount(() => {
		const ctx = canvas.getContext('webgl', { alpha: true, antialias: true });
		if (!ctx) return;
		gl = ctx;

		program = linkProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
		gl.useProgram(program);
		positionBuffer = bindFullscreenQuad(gl, program, 'aPosition');

		uTime = gl.getUniformLocation(program, 'uTime');
		uResolution = gl.getUniformLocation(program, 'uResolution');

		resize();
		window.addEventListener('resize', resize);
		render();
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('resize', resize);
		cancelAnimationFrame(frame);
		if (gl && positionBuffer) gl.deleteBuffer(positionBuffer);
		if (gl && program) gl.deleteProgram(program);
	});
</script>

<canvas bind:this={canvas} class="mesh-grid-canvas" aria-hidden="true"></canvas>

<style>
	.mesh-grid-canvas {
		position: fixed;
		inset: 0;
		z-index: -1;
		display: block;
		pointer-events: none;
		filter: blur(56px);
		opacity: 0.65;
	}
</style>
