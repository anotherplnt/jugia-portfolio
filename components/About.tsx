"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

const FOCUS_AREAS = [
  {
    title: "AI Products",
    description:
      "Designing and shipping intelligent applications powered by large language models, computer vision, and generative AI.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end application architecture from database design to polished frontends, built for performance and scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Product Engineering",
    description:
      "Shipping complete products with a focus on user experience, performance benchmarks, and iterative refinement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
  {
    title: "Automation Systems",
    description:
      "Building reliable automated workflows and pipelines that eliminate repetitive tasks and reduce errors to near zero.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.966M19.048 8.923l-1.41.966M5.543 8.923l1.41-.966M18.457 15.077l-1.41.966" />
      </svg>
    ),
  },
  {
    title: "Software Quality",
    description:
      "QA engineering background ensures every product I ship meets high standards for reliability, performance, and correctness.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Blockchain & Web3",
    description:
      "Exploring decentralized technologies, smart contracts, and on-chain innovation since 2021 with hands-on curiosity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a2.25 2.25 0 110 4.5h3.75A2.25 2.25 0 0021 12zm0 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0a2.25 2.25 0 01-2.25 2.25H15a2.25 2.25 0 110-4.5h3.75A2.25 2.25 0 0121 12zm-18 0a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 110 4.5H5.25A2.25 2.25 0 013 12z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32"
      aria-label="About section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="About Me" subtitle="Who I Am" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16 space-y-5">
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              I&apos;m Jugia Jabar, an AI builder and full stack developer who
              bridges the gap between intelligent systems and production-ready
              software. My journey started in quality assurance, where I learned
              to think systematically about reliability and edge cases. That
              foundation now drives every line of code I write.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Today, I focus on building AI-powered products that solve real
              problems. From LLM-integrated applications to automated workflows,
              I work across the entire stack to turn ambitious ideas into
              shipped products. I believe the best software is built by people
              who care deeply about both the user experience and the engineering
              beneath it.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              When I&apos;m not coding, I&apos;m exploring the intersection of
              AI and crypto, studying on-chain innovation, and contributing to
              the builder community. I ship fast, learn faster, and never stop
              iterating.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="text-center text-lg font-semibold text-text-primary mb-10">
            Areas of Focus
          </h3>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FOCUS_AREAS.map((area) => (
            <motion.article
              key={area.title}
              variants={cardVariants}
              className="group relative p-6 rounded-xl border border-border bg-surface/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                {area.icon}
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {area.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {area.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}