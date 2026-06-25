"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-elevated">
            <span className="font-display text-2xl font-bold text-accent">
              J
            </span>
          </div>
          <motion.div
            className="absolute -inset-1 rounded-2xl border border-accent/30"
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="h-px w-40 overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full w-full bg-gradient-to-r from-accent/0 via-accent to-accent/0"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-600">
          Shipping experience
        </p>
      </div>
    </motion.div>
  );
}