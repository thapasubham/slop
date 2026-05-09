let audioCtx: AudioContext | null = null;
let lastTime = 0;

export function initAudio() {
	if (typeof window === 'undefined') return;

	if (!audioCtx) {
		audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
	}

	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
}

export function playHoverSound() {
	if (typeof window === 'undefined') return;

	const now = performance.now();
	if (now - lastTime < 50) return; // cooldown
	lastTime = now;

	initAudio();
	if (!audioCtx) return;

	const t = audioCtx.currentTime;

	// layers = richer cyber UI sound
	const osc1 = audioCtx.createOscillator();
	const osc2 = audioCtx.createOscillator();
	const gain = audioCtx.createGain();
	const pan = audioCtx.createStereoPanner();

	osc1.type = 'sine';
	osc2.type = 'triangle';

	const base = 950 + Math.random() * 120;

	osc1.frequency.setValueAtTime(base, t);
	osc1.frequency.exponentialRampToValueAtTime(base * 1.5, t + 0.03);

	osc2.frequency.setValueAtTime(base * 2, t);
	osc2.detune.value = -10;

	gain.gain.setValueAtTime(0.0001, t);
	gain.gain.exponentialRampToValueAtTime(0.02, t + 0.01);
	gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);

	pan.pan.value = Math.random() * 0.6 - 0.3;

	osc1.connect(gain);
	osc2.connect(gain);
	gain.connect(pan);
	pan.connect(audioCtx.destination);

	osc1.start(t);
	osc2.start(t);

	osc1.stop(t + 0.07);
	osc2.stop(t + 0.07);
}