"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Repositories", value: "23" },
  { label: "Followers", value: "59" },
  { label: "Active since", value: "2022" },
];

const featuredRepos = [
  {
    name: "zulla",
    description: "Full-stack TypeScript application with modern UI and API integration.",
    language: "TypeScript",
    stars: 3,
    href: "https://github.com/anotherplnt/zulla",
  },
  {
    name: "agentforge",
    description: "AI agent marketplace built on Arc Network — Ignyte Stable Labs project.",
    language: "TypeScript",
    stars: 0,
    href: "https://github.com/anotherplnt/agentforge",
  },
];

const languages = [
  { name: "TypeScript", pct: 49 },
  { name: "Go", pct: 34 },
  { name: "Solidity", pct: 12 },
  { name: "Other", pct: 5 },
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
          Open Source
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
        className="mt-12 rounded-2xl border border-line bg-surface p-8 transition-colors sm:p-10"
      >
        {/* Profile header */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="https://avatars.githubusercontent.com/u/113736954?v=4"
              alt="anotherplnt GitHub avatar"
              width={64}
              height={64}
              className="rounded-2xl border border-line"
              unoptimized
            />
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

        {/* Stats grid */}
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

        {/* Language bar */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Top Languages
            </p>
          </div>
          <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full bg-ink">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="h-full"
                style={{
                  width: `${lang.pct}%`,
                  backgroundColor:
                    lang.name === "TypeScript"
                      ? "#3178c6"
                      : lang.name === "Go"
                        ? "#00ADD8"
                        : lang.name === "Solidity"
                          ? "#363636"
                          : "#6e7681",
                }}
              />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 text-xs text-neutral-400">
                <span
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{
                    backgroundColor:
                      lang.name === "TypeScript"
                        ? "#3178c6"
                        : lang.name === "Go"
                          ? "#00ADD8"
                          : lang.name === "Solidity"
                            ? "#363636"
                            : "#6e7681",
                  }}
                />
                {lang.name}
                <span className="text-neutral-600">{lang.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured repos */}
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Featured Repositories
          </p>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-line bg-ink p-5 transition-all duration-200 hover:border-neutral-700"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-semibold text-white transition-colors group-hover:text-accent">
                    {repo.name}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {repo.stars}
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">{repo.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: repo.language === "TypeScript" ? "#3178c6" : "#00ADD8",
                  }}
                  />
                  <span className="text-xs text-neutral-500">{repo.language}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-neutral-400">
          Actively building and shipping in public. Follow along to see what&apos;s in progress.
        </p>
      </motion.div>
    </section>
  );
}
