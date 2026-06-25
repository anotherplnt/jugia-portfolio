'use client'

import { motion } from 'framer-motion'

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="relative py-24 px-6 bg-surface">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
            What I'm Working On
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Currently Building
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-10"
        >
          {/* Building in Public banner */}
          <div className="absolute right-0 top-0 overflow-hidden">
            <div className="relative flex items-center gap-2 overflow-hidden bg-accent/10 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Building in Public
              </span>
              <motion.span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-2xl font-bold text-text-primary sm:text-3xl">
              AGW Lens
            </h3>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Active Development
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Building AI-powered tools that help users discover insights, automate
            workflows, and make better decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['AI', 'Workflow Automation', 'Data Insights', 'Next.js'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://agw-lens.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Visit agw-lens.xyz
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}