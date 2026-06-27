"use client";

import { useEffect, useState } from "react";

const STAGES = [
  "Initializing",
  "Compiling modules",
  "Bundling assets",
  "Optimizing build",
  "Ready",
];

export default function Preloader() {
  // ponytail: preloader can NEVER stay stuck. `gone` unmounts it, a hard
  // failsafe forces dismissal even if the progress loop ever stalls, and
  // sessionStorage makes it a true "first build" moment (once per session).
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Already seen this session: skip entirely, no flash.
    if (typeof window !== "undefined" && sessionStorage.getItem("zs_booted")) {
      setShow(false);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const DURATION = 1900; // ms to reach 100%

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-out cubic so it accelerates then settles, like a real build
      const eased = 1 - Math.pow(1 - t, 3);
      const pct = Math.round(eased * 100);
      setProgress(pct);
      setStage(Math.min(STAGES.length - 1, Math.floor((pct / 100) * STAGES.length)));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    const finish = () => {
      setStage(STAGES.length - 1);
      setLeaving(true);
      window.setTimeout(() => {
        setShow(false);
        try {
          sessionStorage.setItem("zs_booted", "1");
        } catch {}
      }, 560); // matches fade-out duration
    };

    raf = requestAnimationFrame(tick);

    // Hard failsafe: never let the overlay live longer than 3.2s no matter what.
    const failsafe = window.setTimeout(finish, 3200);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(failsafe);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-[560ms] ease-out ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: leaving ? "none" : "auto" }}
    >
      {/* faint structural grid, same texture as the site */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative flex flex-col items-center">
        {/* wordmark — matches navbar logo */}
        <div className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Jugia<span className="text-accent">.</span>
        </div>

        {/* progress track */}
        <div className="mt-7 h-px w-56 overflow-hidden bg-line sm:w-64">
          <div
            className="h-full bg-accent transition-[width] duration-100 ease-linear"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 12px rgba(245, 165, 36, 0.55)",
            }}
          />
        </div>

        {/* build readout */}
        <div className="mt-4 flex w-56 items-center justify-between font-mono text-[11px] uppercase tracking-widest text-neutral-500 sm:w-64">
          <span>{STAGES[stage]}</span>
          <span className="tabular-nums text-neutral-400">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
