'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const socials = [
  { label: 'GitHub', href: 'https://github.com/anotherplnt' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jugiajabar' },
  { label: 'X', href: 'https://x.com/ogzulla' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New project inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.details}`
    )
    window.location.href = `mailto:jugiajabar@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-28 px-6 bg-surface">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Let&apos;s Build Something{' '}
            <span className="text-gradient-accent">Meaningful</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Have an idea worth shipping? Whether it&apos;s an AI-powered product, a
            workflow to automate, or just a problem worth solving — I&apos;d love to
            hear about it. Drop me a message and let&apos;s start a conversation.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-[#0A0A0B] px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-[#0A0A0B] px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="details" className="mb-2 block text-sm font-medium text-text-primary">
                Project Details
              </label>
              <textarea
                id="details"
                required
                rows={5}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-[#0A0A0B] px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                placeholder="Tell me about what you're building..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              {submitted ? 'Opening your mail client…' : 'Send Message'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Email
              </h3>
              <a
                href="mailto:jugiajabar@gmail.com"
                className="mt-2 block text-lg text-text-primary transition-colors hover:text-accent"
              >
                jugiajabar@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Website
              </h3>
              <a
                href="https://agw-lens.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-text-primary transition-colors hover:text-accent"
              >
                agw-lens.xyz
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Elsewhere
              </h3>
              <ul className="mt-3 space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-text-primary transition-colors hover:text-accent"
                    >
                      <span>{s.label}</span>
                      <svg
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}