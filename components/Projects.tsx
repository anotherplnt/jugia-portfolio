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

                {/* Right visual */}
                <div className="lg:col-span-2">
                  <div className="relative aspect-[4/5] rounded-xl border border-border bg-gradient-to-br from-surface to-[#0A0A0B] overflow-hidden">
                    {/* Decorative grid */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                      aria-hidden="true"
                    />

                    {/* Glow */}
                    <div
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
                      aria-hidden="true"
                    />

                    {/* Mock UI */}
                    <div className="relative h-full flex flex-col p-6">
                      <div className="flex items-center gap-1.5 mb-6">
                        <div className="w-2.5 h-2.5 rounded-full bg-text-secondary/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-text-secondary/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-text-secondary/30" />
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="h-2 w-2/3 rounded bg-accent/40" />
                          <div className="h-2 w-1/2 rounded bg-text-secondary/20" />
                        </div>

                        <motion.div
                          className="p-3 rounded-lg border border-border bg-surface/60"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="h-2 w-16 rounded bg-text-secondary/30" />
                            <div className="h-2 w-8 rounded bg-accent/60" />
                          </div>
                          <div className="flex items-end gap-1.5 h-12">
                            {[40, 65, 30, 80, 55, 70, 90].map((h, i) => (
                              <motion.div
                                key={i}
                                className="flex-1 rounded-sm bg-gradient-to-t from-accent/60 to-accent/20"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6 }}
                              />
                            ))}
                          </div>
                        </motion.div>

                        <div className="space-y-1.5">
                          <div className="h-1.5 w-full rounded bg-text-secondary/15" />
                          <div className="h-1.5 w-4/5 rounded bg-text-secondary/15" />
                          <div className="h-1.5 w-3/5 rounded bg-text-secondary/15" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">
                          AGW Lens
                        </span>
                        <span className="text-[10px] font-mono text-accent">
                          Live
                        </span>
                      </div>
                    </div>
                  </div>
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