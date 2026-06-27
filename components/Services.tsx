import { Layers, Server, Workflow, Sparkles } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Building modern, scalable web applications from frontend to backend.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Designing secure, maintainable, and scalable backend systems.",
  },
  {
    icon: Workflow,
    title: "Automation Solutions",
    description:
      "Creating workflows and integrations that reduce repetitive work and improve efficiency.",
  },
  {
    icon: Sparkles,
    title: "Web3 & Automation",
    description:
      "On-chain integrations, EVM tooling, and AI-driven automation that runs unattended in production.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-zinc-100">
            What I do
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            A focused set of services covering the full lifecycle of building
            digital products, from initial architecture to production.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-xl border border-border/60 bg-surface/30 p-6 transition-all duration-300 hover:bg-surface/60 hover:border-border hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-ink/60 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-zinc-100 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}