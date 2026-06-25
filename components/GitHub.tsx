"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Repositories", value: "24" },
  { label: "Contributions", value: "1.2k" },
  { label: "Followers", value: "48" },
];

export default function GitHub() {
  return (
    <section id="github" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Open Source &amp; Contributions
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Building in public
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group mt-12 rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:border-neutral-700 sm:p-10"
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-line bg-ink text-neutral-200">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-lg font-semibold text-white">anotherplnt</p>
              <p className="mt-1 text-sm text-neutral-400">Full Stack Developer</p>
            </div>
          </div>

          <a
            href="https://github.com/anotherplnt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-line bg-ink px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-accent/40 hover:text-white"
          >
            View Profile
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink px-4 py-6 text-center">
              <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-sm leading-relaxed text-neutral-400">
          Actively building and shipping in public. Follow along to see what&apos;s in progress.
        </p>
      </motion.div>
    </section>
  );
}