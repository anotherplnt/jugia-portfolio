"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

const TOOLS = [
  "Postman",
  "Selenium",
  "Katalon Studio",
  "Jira",
  "API Testing",
  "Automation Testing",
  "Regression Testing",
  "Agile",
];

interface TimelineEntry {
  period: string;
  role: string;
  description: string;
  details?: string[];
  tools?: string[];
  isTransition?: boolean;
}

const TIMELINE: TimelineEntry[] = [
  {
    period: "Early Career",
    role: "Quality Assurance Engineer",
    description:
      "Built a rigorous foundation in software quality, testing complex systems and ensuring products met high reliability standards before reaching users.",
    details: [
      "Designed and executed comprehensive test strategies across multiple product lines",
      "Developed automated test suites that reduced manual regression time by over 60%",
      "Collaborated closely with development teams to embed quality into the CI/CD pipeline",
      "Championed shift-left testing practices within agile teams",
    ],
    tools: TOOLS,
  },
  {
    period: "Transition",
    role: "QA Engineer → Full Stack Developer",
    description:
      "Leveraged QA insights to build better software from the ground up. Understanding where systems break made me a stronger developer.",
    isTransition: true,
    details: [
      "Applied deep knowledge of failure modes to architect more resilient applications",
      "Self-taught full stack development, focusing on Node.js, React, and PostgreSQL",
      "Built internal tools that automated QA workflows and improved team velocity",
    ],
  },
  {
    period: "Current",
    role: "AI Builder & Full Stack Developer",
    description:
      "Now building AI-powered products and automation systems at scale, combining engineering discipline with the creative possibilities of artificial intelligence.",
    isTransition: true,
    details: [
      "Architect and ship production AI applications integrated with LLMs and generative models",
      "Build full stack products with Next.js, TypeScript, and modern cloud infrastructure",
      "Develop automation systems that eliminate repetitive work and improve reliability",
      "Explore the intersection of AI and Web3 for decentralized intelligent applications",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32"
      aria-label="Experience section"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Experience" subtitle="My Journey" />
        </Reveal>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {TIMELINE.map((entry, index) => (
              <Reveal key={entry.role} delay={index * 0.1}>
                <div className="relative pl-14 sm:pl-20">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                      entry.isTransition
                        ? "bg-[#0A0A0B] border-accent"
                        : "bg-accent border-accent"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Period label */}
                  <span className="inline-block text-xs font-mono tracking-wider text-accent uppercase mb-2">
                    {entry.period}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                    {entry.role}
                  </h3>

                  <p className="text-text-secondary leading-relaxed mb-4">
                    {entry.description}
                  </p>

                  {entry.details && entry.details.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {entry.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.tools && entry.tools.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}