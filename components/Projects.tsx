"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techStack = ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "OpenAI API", "Vercel"];

const features = [
  "Real-time wallet analytics",
  "AI-powered insights",
  "Tier & streak tracking",
  "Badge collection",
  "Transaction history",
];

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Featured Work</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Built to ship, designed to scale
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center"
      >
        {/* LEFT — info */}
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">AGW Lens</h3>
          <a
            href="https://agw-lens.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-mono text-sm text-neutral-500 transition-colors hover:text-accent"
          >
            agw-lens.xyz
          </a>

          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            An AI-powered wallet intelligence platform for Abstract Mainnet. Surfaces real-time
            on-chain analytics, tier tracking, vote streak monitoring, badge collection, and
            transaction insights across the Abstract Global Wallet ecosystem.
          </p>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Key Features
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none text-accent"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://agw-lens.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Live Demo
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://github.com/anotherplnt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-transparent px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-700 hover:text-white"
            >
              GitHub
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT — screenshot */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
            <Image
              src="/images/agw-lens-dashboard.png"
              alt="AGW Lens dashboard"
              width={1200}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </motion.div>

      <p className="mt-12 text-sm text-neutral-500">
        More projects coming soon —{" "}
        <a
          href="https://github.com/anotherplnt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          follow on GitHub
        </a>
        .
      </p>
    </section>
  );
}