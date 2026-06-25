"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

const INTERESTS = [
  "Bitcoin",
  "Ethereum",
  "NFTs",
  "Digital Collectibles",
  "DeFi",
  "Web3 Infrastructure",
  "AI x Crypto",
  "On-Chain Innovation",
  "Digital Ownership",
  "Creator Economy",
];

const FASCINATIONS = [
  {
    title: "Trustless Coordination",
    description:
      "How blockchains enable strangers across the world to coordinate value and information without intermediaries.",
  },
  {
    title: "Programmable Money",
    description:
      "Smart contracts unlock financial primitives that simply cannot exist in traditional systems.",
  },
  {
    title: "Digital Ownership",
    description:
      "NFTs and on-chain assets are redefining what it means to own something in the digital realm.",
  },
  {
    title: "AI Meets Web3",
    description:
      "The convergence of intelligent agents and decentralized infrastructure is the next frontier I&apos;m building toward.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function CryptoJourney() {
  return (
    <section
      id="crypto-journey"
      className="relative py-24 sm:py-32"
      aria-label="Crypto and NFT journey section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Crypto & NFT Journey"
            subtitle="Exploring Web3 Since 2021"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto mt-8 mb-14 text-center">
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              My journey into Web3 began in 2021, driven by curiosity about how
              decentralized systems could reshape the internet. What started as
              casual exploration evolved into a genuine fascination with
              on-chain innovation, digital ownership, and the rapidly emerging
              intersection of AI and crypto. I follow this space as a builder
              and a student, always learning what is being shipped at the edge.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="text-center text-sm font-mono uppercase tracking-wider text-accent mb-8">
            Areas of Interest
          </h3>
        </Reveal>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {INTERESTS.map((interest) => (
            <motion.span
              key={interest}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-primary bg-surface/60 border border-border hover:border-accent/40 hover:text-accent transition-colors cursor-default"
            >
              <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
              {interest}
            </motion.span>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <div
                className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                  What Fascinates Me
                </h3>
                <p className="text-sm text-text-secondary mb-8">
                  The ideas that keep me reading whitepapers at 2 AM.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {FASCINATIONS.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-5 rounded-xl bg-[#0A0A0B]/60 border border-border/60"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-accent text-lg font-mono">
                          0{idx + 1}
                        </span>
                        <h4 className="text-base font-semibold text-text-primary">
                          {item.title}
                        </h4>
                      </div>
                      <p
                        className="text-sm text-text-secondary leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}