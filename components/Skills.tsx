type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
};

const categories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Crafting fast, accessible interfaces with modern frameworks.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Radix UI"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Backend Development",
    description: "Designing reliable APIs and scalable server-side logic.",
    skills: ["Node.js", "Express.js", "Python", "FastAPI"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17l6-6-6-6M12 19h8" />
      </svg>
    ),
  },
  {
    title: "Database Systems",
    description: "Modeling and querying data with relational and NoSQL stores.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Automation & Integrations",
    description: "Connecting tools and services into reliable, automated workflows.",
    skills: ["n8n", "OpenAI", "Claude", "LangChain", "REST APIs", "Webhooks"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M12 3v4M9 13h.01M15 13h.01M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deploying and scaling apps across modern cloud platforms.",
    skills: ["Linux", "Docker", "VPS", "Cloudflare", "Vercel", "systemd"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 18a4 4 0 0 0 .5-7.97A6 6 0 1 0 6.5 14" />
        <path d="M8 18l4 4 4-4M12 22v-9" />
      </svg>
    ),
  },
  {
    title: "Web3 & On-Chain",
    description: "Building and integrating with EVM chains and smart contracts.",
    skills: ["Solidity", "ethers.js", "viem", "EVM", "Wallet Automation", "RPC"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4.5v9L12 22l-8-6.5v-9L12 2zM12 2v20M4 6.5l8 4.5 8-4.5" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">My Skills</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A toolkit built for shipping
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-400">
          From pixel-perfect frontends to resilient backends and reliable
          infrastructure. Here&apos;s what I work with day to day.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink text-accent transition-colors group-hover:border-accent/40">
              {cat.icon}
            </div>
            <h3 className="mt-5 text-base font-semibold text-white">{cat.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">{cat.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-neutral-300 transition-colors group-hover:border-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
