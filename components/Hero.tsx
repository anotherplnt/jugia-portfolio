"use client";

import { motion } from "framer-motion";
import Particles from "@/components/Particles";
import Reveal from "@/components/Reveal";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/anotherplnt",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jugiajabar",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/ogzulla",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <Particles />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <Reveal>
          <motion.p
            className="text-sm sm:text-base font-mono text-accent tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hello, I&apos;m
          </motion.p>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-4">
            Jugia Jabar
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent mb-6">
            AI Builder &amp; Full Stack Developer
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
            Building AI-Powered Products, Automation Systems, and Scalable Web
            Applications
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-text-secondary/70 leading-relaxed mb-10">
            Turning complex problems into elegant solutions at the intersection
            of artificial intelligence, robust engineering, and user-first design.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleScroll("#projects")}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-[#0A0A0B] font-semibold text-sm transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Explore My Work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-text-primary font-semibold text-sm transition-all hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Get In Touch
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.65}>
          <div className="flex items-center justify-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary transition-all hover:text-accent hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-text-secondary/30 flex items-start justify-center p-1"
          animate={{}}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-accent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}