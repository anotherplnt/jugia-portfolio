type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand the problem, the users, and the goals before writing a single line of code.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Define scope, architecture, and a clear roadmap with realistic milestones.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create clean, intuitive interfaces and data models that scale gracefully.",
  },
  {
    number: "04",
    title: "Development",
    description: "Build with maintainable, well-tested code following modern best practices.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Validate functionality, performance, and edge cases before anything ships.",
  },
  {
    number: "06",
    title: "Deployment",
    description: "Ship to production with monitoring, then iterate based on real feedback.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Process</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          How I build products
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-400">
          A repeatable, disciplined workflow that takes ideas from concept to production.
        </p>
      </div>

      {/* Desktop horizontal timeline */}
      <div className="relative mt-16 hidden lg:block">
        <div className="absolute left-0 right-0 top-5 h-px bg-line" />
        <div className="grid grid-cols-6 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm font-medium text-accent">
                {step.number}
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical stack */}
      <div className="relative mt-12 lg:hidden">
        <div className="absolute bottom-2 left-5 top-2 w-px bg-line" />
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-5">
              <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line bg-surface font-mono text-sm font-medium text-accent">
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
