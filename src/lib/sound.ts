let audioCtx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!Ctor) return null;
  if (!audioCtx) audioCtx = new Ctor();
  return audioCtx;
}

// Browsers require a real user gesture (not hover) before audio can play.
// Unlock the shared context on the first click/key/touch, then stop listening.
if (typeof window !== "undefined") {
  const unlockEvents: Array<"pointerdown" | "keydown" | "touchstart"> = [
    "pointerdown",
    "keydown",
    "touchstart",
  ];
  const unlock = () => {
    const ctx = getContext();
    if (ctx && ctx.state === "suspended") ctx.resume().catch(() => {});
    unlockEvents.forEach((event) => window.removeEventListener(event, unlock));
  };
  unlockEvents.forEach((event) =>
    window.addEventListener(event, unlock, { passive: true })
  );
}

function playTone({
  frequency,
  endFrequency,
  duration,
  type = "sine",
  gain = 0.12,
}: {
  frequency: number;
  endFrequency?: number;
  duration: number;
  type?: OscillatorType;
  gain?: number;
}) {
  const ctx = getContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  if (endFrequency) {
    osc.frequency.exponentialRampToValueAtTime(
      Math.max(endFrequency, 1),
      now + duration
    );
  }

  g.gain.setValueAtTime(0.0001, now);
  g.gain.linearRampToValueAtTime(gain, now + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(g).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.02);
  osc.onended = () => {
    osc.disconnect();
    g.disconnect();
  };
}

let lastHover = 0;
const HOVER_MIN_GAP = 70;

export function playHover(): void {
  const now = performance.now();
  if (now - lastHover < HOVER_MIN_GAP) return;
  lastHover = now;

  playTone({
    frequency: 950,
    endFrequency: 1250,
    duration: 0.055,
    type: "sine",
    gain: 0.05,
  });
}

let lastClick = 0;
const CLICK_MIN_GAP = 60;

export function playClick(): void {
  const now = performance.now();
  if (now - lastClick < CLICK_MIN_GAP) return;
  lastClick = now;

  playTone({
    frequency: 480,
    endFrequency: 250,
    duration: 0.09,
    type: "triangle",
    gain: 0.12,
  });
}

function createNoiseBuffer(ctx: AudioContext, duration: number) {
  const buffer = ctx.createBuffer(
    1,
    Math.floor(ctx.sampleRate * duration),
    ctx.sampleRate
  );
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

let lastSwoosh = 0;
const SWOOSH_MIN_GAP = 450;

export function playSwoosh(): void {
  const ctx = getContext();
  if (!ctx) return;

  const now = performance.now();
  if (now - lastSwoosh < SWOOSH_MIN_GAP) return;
  lastSwoosh = now;

  const t0 = ctx.currentTime;
  const duration = 0.35;

  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, duration);

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 0.9;
  filter.frequency.setValueAtTime(300, t0);
  filter.frequency.exponentialRampToValueAtTime(2200, t0 + duration * 0.55);
  filter.frequency.exponentialRampToValueAtTime(500, t0 + duration);

  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.linearRampToValueAtTime(0.16, t0 + 0.05);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

  noise.connect(filter).connect(g).connect(ctx.destination);
  noise.start(t0);
  noise.stop(t0 + duration + 0.02);
  noise.onended = () => {
    noise.disconnect();
    filter.disconnect();
    g.disconnect();
  };
}
