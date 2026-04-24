// useShakeToThrow.js — detect a phone shake via the devicemotion API and
// invoke a callback. Designed to be gated on a user gesture so iOS 13+ can
// surface its permission prompt at the right moment (the first Throw tap).
//
// Detection: we watch the frame-to-frame delta of `|accelerationIncludingGravity|`
// and count how many consecutive samples exceed SHAKE_DELTA within WINDOW_MS.
// A real shake produces several high-delta samples in a row; a single bump
// (putting the phone down, bumping the table) produces one.
import { useEffect, useRef, useState, useCallback } from 'react';

const SHAKE_DELTA = 12;    // m/s² — tune if triggers are too eager / too sluggish
const WINDOW_MS = 500;     // rolling window over which we count high deltas
const MIN_SAMPLES = 3;     // number of high-delta samples needed inside the window
const COOLDOWN_MS = 1500;  // debounce between triggered throws

function initialPermission() {
  if (typeof window === 'undefined' || typeof DeviceMotionEvent === 'undefined') return 'unavailable';
  // iOS 13+ is the only platform that gates devicemotion behind a prompt.
  if (typeof DeviceMotionEvent.requestPermission === 'function') return 'unknown';
  return 'granted';
}

export function useShakeToThrow(onShake, enabled = true) {
  const [permission, setPermission] = useState(initialPermission);

  // Keep the latest callback in a ref so the effect below doesn't need to
  // tear down and re-attach the devicemotion listener every time onShake
  // identity changes (which happens on every render of the parent).
  const onShakeRef = useRef(onShake);
  useEffect(() => { onShakeRef.current = onShake; }, [onShake]);

  const requestPermission = useCallback(async () => {
    if (typeof DeviceMotionEvent === 'undefined') {
      setPermission('unavailable');
      return 'unavailable';
    }
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      try {
        const result = await DeviceMotionEvent.requestPermission();
        setPermission(result);
        return result;
      } catch {
        setPermission('denied');
        return 'denied';
      }
    }
    // Non-iOS browsers: no permission prompt needed.
    setPermission('granted');
    return 'granted';
  }, []);

  useEffect(() => {
    if (!enabled || permission !== 'granted') return;

    let lastMag = 9.8;
    const samples = [];
    let lastShake = 0;

    const onMotion = (e) => {
      const a = e.accelerationIncludingGravity ?? e.acceleration;
      if (!a) return;
      const mag = Math.hypot(a.x ?? 0, a.y ?? 0, a.z ?? 0);
      const delta = Math.abs(mag - lastMag);
      lastMag = mag;
      if (delta < SHAKE_DELTA) return;
      const now = Date.now();
      samples.push(now);
      while (samples.length && samples[0] < now - WINDOW_MS) samples.shift();
      if (samples.length >= MIN_SAMPLES && now - lastShake > COOLDOWN_MS) {
        lastShake = now;
        samples.length = 0;
        onShakeRef.current?.();
      }
    };

    window.addEventListener('devicemotion', onMotion, { passive: true });
    return () => window.removeEventListener('devicemotion', onMotion);
  }, [enabled, permission]);

  return { permission, requestPermission };
}
