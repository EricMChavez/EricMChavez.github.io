"use client";

import { useEffect, useRef } from "react";

interface ScopeColors {
  accent: string;
  signal: string;
  grid: string;
  border: string;
  glow: number;
}

const COLUMNS = 10;
const ROWS = 8;
/** How long the trace takes to lock onto the target after load, in ms */
const LOCK_DURATION = 1800;

function readColors(): ScopeColors {
  const styles = getComputedStyle(document.documentElement);
  const read = (name: string) => styles.getPropertyValue(name).trim();
  return {
    accent: read("--color-accent"),
    signal: read("--color-signal"),
    grid: read("--color-grid"),
    border: read("--color-border"),
    glow: document.documentElement.classList.contains("dark") ? 12 : 0,
  };
}

/** The target WaveLength-style composite: a fundamental plus a third harmonic */
function target(u: number) {
  return 0.75 * Math.sin(u) + 0.25 * Math.sin(3 * u);
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * An oscilloscope face. On load the live trace starts detuned and locks onto
 * the dashed target, which is the core mechanic of WaveLength. Moving the
 * pointer over the scope detunes it again. Under reduced motion it draws one
 * locked frame and never animates.
 */
export function SignalScope() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let colors = readColors();
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let start: number | null = null;

    // Pointer offsets from centre (-0.5..0.5), eased toward their targets
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let locked = false;

    const setStatus = (isLocked: boolean) => {
      if (isLocked === locked || !statusRef.current) return;
      locked = isLocked;
      statusRef.current.textContent = isLocked ? "Locked" : "Tuning";
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      if (start === null) start = time;
      const lock = reduceMotion ? 1 : easeOutCubic(Math.min((time - start) / LOCK_DURATION, 1));

      pointerX += (targetX - pointerX) * 0.08;
      pointerY += (targetY - pointerY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Graticule
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.grid;
      ctx.beginPath();
      for (let i = 1; i < COLUMNS; i++) {
        const x = Math.round((i * width) / COLUMNS) + 0.5;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let j = 1; j < ROWS; j++) {
        const y = Math.round((j * height) / ROWS) + 0.5;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
      ctx.strokeStyle = colors.border;
      ctx.beginPath();
      ctx.moveTo(0, Math.round(height / 2) + 0.5);
      ctx.lineTo(width, Math.round(height / 2) + 0.5);
      ctx.stroke();

      const mid = height / 2;
      const amplitude = height * 0.3;
      const cycles = 2;
      const phase = reduceMotion ? 0 : time * 0.0009;

      // Target: dashed, in the signal colour
      ctx.setLineDash([5, 6]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.signal;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const u = (x / width) * Math.PI * 2 * cycles + phase;
        const y = mid - amplitude * target(u);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Live trace: starts detuned, locks on, and detunes again under the pointer
      const detune = (1 - lock) + Math.abs(pointerX) * 1.2 + Math.abs(pointerY) * 0.8;
      const frequency = 1 + (1 - lock) * 0.6 + pointerX * 0.5;
      const gain = lock - pointerY * 0.5;
      const harmonic = 0.25 * (1 - Math.min(detune, 1));
      setStatus(detune < 0.04);

      ctx.lineWidth = 2.25;
      ctx.strokeStyle = colors.accent;
      ctx.shadowColor = colors.accent;
      ctx.shadowBlur = colors.glow;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const u = (x / width) * Math.PI * 2 * cycles * frequency + phase;
        const y = mid - amplitude * gain * ((1 - harmonic) * Math.sin(u) + harmonic * Math.sin(3 * u));
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const loop = (time: number) => {
      draw(time);
      frame = visible && !document.hidden ? requestAnimationFrame(loop) : 0;
    };

    const play = () => {
      if (reduceMotion || frame) return;
      frame = requestAnimationFrame(loop);
    };

    const redraw = () => {
      if (reduceMotion) draw(0);
    };

    resize();
    if (reduceMotion) draw(0);
    else play();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      redraw();
    });
    resizeObserver.observe(canvas);

    // Re-read colours when the theme class on <html> changes
    const themeObserver = new MutationObserver(() => {
      colors = readColors();
      redraw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Only animate while the scope is on screen and the tab is visible
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
    });
    visibilityObserver.observe(canvas);
    const handleVisibility = () => {
      if (!document.hidden) play();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleMove = (event: PointerEvent) => {
      if (reduceMotion || event.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / rect.width - 0.5;
      targetY = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const handleLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-surface">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Oscilloscope: a live waveform tuning itself to match a dashed target wave"
      />
      <figcaption className="label-mono pointer-events-none absolute inset-x-3 bottom-2.5 flex items-center justify-between gap-4">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-3 bg-accent" aria-hidden="true" />
          CH1 trace
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 border-t border-dashed border-signal" aria-hidden="true" />
          Target
        </span>
        <span ref={statusRef} className="text-accent" aria-hidden="true">
          Tuning
        </span>
      </figcaption>
    </figure>
  );
}
