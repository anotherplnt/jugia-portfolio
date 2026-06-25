"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

const TECH_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "OpenAI API",
  "PostgreSQL",
  "Supabase",
];

const FEATURES = [
  "AI-powered content analysis and intelligent generation",
  "Real-time data processing with OpenAI integration",
  "Scalable backend architecture with PostgreSQL and Supabase",
  "Modern responsive UI built with Next.js and Tailwind CSS",
  "Type-safe codebase with end-to-end TypeScript",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32"
      aria-label="Projects section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Projects" subtitle="Featured Work" />
        </Reveal>

        <Reveal delay={0.1}>
          <motion.article
            className="relative mt-14 rounded-2xl border border-border bg-surface/50 overflow-hidden group hover:border-accent/30 transition-colors duration-300"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/60 to-transparent" />

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left content */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                      Featured
                    </span>
                    <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                      Live Product
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
                    AGW Lens
                  </h3>

                  <a
                    href="https://agw-lens.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-mono text-accent hover:underline mb-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                  >
                    agw-lens.xyz
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    AGW Lens is an AI-powered analytics and intelligence platform
                    designed to surface meaningful insights from complex data
                    streams. Built end-to-end with modern web technologies and
                    integrated with cutting-edge language models, it transforms
                    raw information into actionable understanding.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {FEATURES.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-text-secondary"
                        >
                          <svg
                            className="w-4 h-4 text-accent shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {TECH_STACK.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-surface text-text-primary border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://agw-lens.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-[#0A0A0B] text-sm font-semibold transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Visit Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Right visual — real AGW Lens dashboard screenshot */}
                <div className="lg:col-span-2">
                  <motion.a
                    href="https://agw-lens.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[4/5] rounded-xl border border-border bg-gradient-to-br from-surface to-[#0A0A0B] overflow-hidden group/visual hover:border-accent/40 transition-colors duration-300"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    aria-label="View AGW Lens dashboard live"
                  >
                    {/* Glow */}
                    <div
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl opacity-60 group-hover/visual:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    />

                    {/* Real dashboard screenshot */}
                    <div className="relative h-full w-full p-3">
                      <div className="relative h-full w-full rounded-lg overflow-hidden border border-border/40 bg-ink shadow-2xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/agw-lens-dashboard.png"
                          alt="AGW Lens dashboard showing ogzulla wallet intelligence — PLATINUM I tier, $38K volume, 23K transactions, 109-day vote streak, 44 badges on Abstract Mainnet"
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                        {/* Subtle top fade for browser-bar realism */}
                        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-ink/80 to-transparent pointer-events-none" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Browser-style status bar */}
                    <div className="absolute inset-x-3 bottom-3 flex items-center justify-between px-3 py-2 rounded-lg border border-border/40 bg-ink/80 backdrop-blur-sm">
                      <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" aria-hidden="true" />
                        agw-lens.xyz
                      </span>
                      <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                        Live Preview
                      </span>
                    </div>

                    {/* Hover overlay — click to visit */}
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-[#0A0A0B] text-sm font-semibold">
                        Open Live
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.article>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-sm text-text-secondary mt-10">
            More projects shipping soon. Follow along on{" "}
            <a
              href="https://github.com/anotherplnt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}