'use client'

import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary"
        >
          Development Philosophy
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-10"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-12 select-none font-serif text-9xl leading-none text-accent/15 sm:-left-8 sm:text-[12rem]"
          >
            &ldquo;
          </span>
          <h2 className="relative text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Build Fast.{' '}
            <span className="text-gradient-accent">Learn Faster.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-text-secondary"
        >
          Every product is an experiment. I ship early, listen closely, and iterate
          relentlessly. The goal isn't perfection on day one — it's momentum, real
          feedback, and the compounding insight that comes from putting work into the
          world and improving it every single day.
        </motion.p>
      </div>
    </section>
  )
}