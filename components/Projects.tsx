import Image from "next/image";

const techStack = ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "OpenAI API", "Vercel"];

const features = [
  "Real-time wallet analytics",
  "AI-powered insights",
  "Tier & streak tracking",
  "Badge collection",
  "Transaction history",
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Featured Work</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Built to ship, designed to scale
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center">
        {/* LEFT — info */}
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">AGW Lens</h3>
          <a
            href="https://agw-lens.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-mono text-sm text-neutral-500 transition-colors hover:text-accent"
          >
            agw-lens.xyz
          </a>

          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            An AI-powered wallet intelligence platform for Abstract Mainnet. Surfaces real-time
            on-chain analytics, tier tracking, vote streak monitoring, badge collection, and
            transaction insights across the Abstract Global Wallet ecosystem.
          </p>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Key Features
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none text-accent"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://agw-lens.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Live Demo
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT — screenshot */}
        <div className="lg:col-span-2">
          <div className="card-lift overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
            <Image
              src="/images/agw-lens-dashboard.png"
              alt="AGW Lens dashboard"
              width={1200}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* SECONDARY — agentforge (mirroring AGW Lens layout) */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center">
        {/* LEFT — info */}
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">Agentforge</h3>
          <a
            href="https://agentforge-roan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-mono text-sm text-neutral-500 transition-colors hover:text-accent"
          >
            agentforge-roan.vercel.app
          </a>
          <span className="ml-2.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent align-middle">
            Arc Network
          </span>

          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            An AI agent marketplace built for the Ignyte Stablecoin Commerce
            Stack. On-chain agent identity, verifiable execution, and
            stablecoin-settled transactions on Arc Network.
          </p>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "TailwindCSS", "Solidity", "Ethers.js", "Arc Network"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Key Features
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "On-chain agent registry",
                "USDC escrow per job",
                "Verifiable reputation",
                "Arc Testnet deployment",
                "Stablecoin settlement",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none text-accent"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://agentforge-roan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Live Demo
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT — screenshot */}
        <div className="lg:col-span-2">
          <div className="card-lift overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
            <Image
              src="/images/agentforge-hero.png"
              alt="Agentforge AI Agent Marketplace on Arc Network"
              width={1265}
              height={1423}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>

      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-neutral-500">
        Alongside these, I maintain a private suite of operational tooling:
        wallet automation, on-chain monitoring agents, and VPS-deployed bots
        running in production.
      </p>
    </section>
  );
}
