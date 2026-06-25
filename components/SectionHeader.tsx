"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";

export default function SectionHeader({
  index,
  kicker,
  subtitle,
  title,
  intro,
}: {
  index?: string;
  kicker?: string;
  subtitle?: string;
  title: string;
  intro?: string;
}) {
  const eyebrow = kicker ?? subtitle;
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-12 md:mb-16 max-w-2xl"
    >
      {(index || eyebrow) && (
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-accent"
        >
          {index && <span>{index}</span>}
          {index && eyebrow && <span className="h-px w-8 bg-accent/40" />}
          {eyebrow && <span className="text-zinc-500">{eyebrow}</span>}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-zinc-400 text-base md:text-lg leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
