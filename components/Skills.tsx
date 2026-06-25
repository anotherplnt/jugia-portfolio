"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "FastAPI"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "AI & Automation",
    skills: ["OpenAI", "Claude", "LangChain", "ComfyUI", "Stable Diffusion", "n8n"],
  },
  {
    title: "QA & Testing",
    skills: ["Postman", "Selenium", "Katalon Studio", "Jira"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "GitHub Actions", "Linux", "VPS", "Cloudflare", "Vercel"],
  },
];

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const skillVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32"
      aria-label="Skills section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Skills" subtitle="Tools &amp; Technologies" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <Reveal key={group.title} delay={groupIdx * 0.08}>
              <motion.div
                className="h-full p-6 sm:p-7 rounded-xl border border-border bg-surface/50 hover:border-accent/30 transition-colors duration-300"
                variants={groupVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <h3 className="text-sm font-mono uppercase tracking-wider text-accent">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-text-primary bg-[#0A0A0B] border border-border hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}