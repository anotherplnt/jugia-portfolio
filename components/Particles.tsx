"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Dot = { left: number; top: number; size: number; delay: number; dur: number };

export default function Particles() {
  const [dots, setDots] = useState<Dot[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const next = Array.from({ length: 22 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 4,
      dur: Math.random() * 6 + 7,
    }));
    setDots(next);
  }, []);

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent/50"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
          }}
          animate={{ y: [0, -28, 0], opacity: [0, 0.7, 0] }}
          transition={{
            duration: d.dur,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}