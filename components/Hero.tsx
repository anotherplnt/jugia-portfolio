import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const highlights = [
  "Full Stack Development",
  "Backend Architecture",
  "Automation Systems",
  "Cloud Infrastructure",
  "API Design",
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* subtle radial backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(245,165,36,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs text-zinc-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-zinc-100 leading-[1.05]">
            Jugia Jabar
          </h1>

          <p className="mt-6 text-2xl sm:text-3xl text-zinc-300 tracking-tight font-medium">
            Full Stack Developer
          </p>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Building modern web applications, backend systems, and automation
            workflows from idea to deployment.
          </p>

          <p className="mt-4 text-base text-zinc-500 leading-relaxed max-w-2xl">
            I help businesses and startups transform ideas into scalable,
            reliable, and user-friendly digital products.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink hover:bg-accent/90 transition-colors"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-surface/60 hover:border-border/80 transition-colors"
            >
              Contact Me
            </Link>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 text-sm text-zinc-400"
              >
                <Check size={14} className="text-accent" strokeWidth={2.5} />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}