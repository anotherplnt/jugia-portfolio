const badges = [
  "QA Engineering",
  "Full Stack",
  "System Design",
  "DevOps",
  "AI Integration",
  "Automation",
  "API Design",
  "Cloud",
];

const stats = [
  { label: "Years building software", value: "5+" },
  { label: "Production deployments", value: "40+" },
  { label: "Stack disciplines", value: "End-to-end" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
            About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-zinc-100">
            Who I am
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: visual summary */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border/60 bg-surface/30 p-6">
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wider">
                    Disciplines
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {badges.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center rounded-md border border-border/60 bg-ink/40 px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                <div className="grid grid-cols-3 gap-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-xl font-display text-zinc-100">
                        {s.value}
                      </p>
                      <p className="mt-1 text-[11px] text-zinc-500 leading-snug">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-border/40" />

                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Remote · Global collaboration
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p className="text-lg text-zinc-300">
                I started in Quality Assurance — a foundation that shaped how I
                approach every line of code today: with rigor, edge-case
                thinking, and a deep respect for users.
              </p>
              <p>
                Over the years, I've moved across the stack — from frontend
                interfaces to backend services, infrastructure, and AI-driven
                features. I build complete products, not isolated components.
                That means owning architecture, data models, APIs, deployment
                pipelines, and the user experience end-to-end.
              </p>
              <p>
                My focus is execution. I ship maintainable systems that survive
                contact with real users and real load. I optimize for clarity,
                reliability, and shipping velocity over framework trends.
              </p>
              <p>
                Whether it's a greenfield SaaS product, a backend overhaul, or
                integrating LLMs into an existing workflow, I treat each
                project as a system to design — measured by outcomes, not
                output.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}