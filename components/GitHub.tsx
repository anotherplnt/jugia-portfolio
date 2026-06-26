import Image from "next/image";

interface GitHubData {
  public_repos: number;
  followers: number;
  contributions: number;
  top_languages: { name: string; pct: number; color: string }[];
  featured_repos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    html_url: string;
  }[];
}

const GH_TOKEN = process.env.GITHUB_TOKEN || "";
const USERNAME = "anotherplnt";

async function fetchGitHub(endpoint: string) {
  const res = await fetch(`https://api.github.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 86400 }, // ISR 24 jam
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

async function fetchGraphQL(query: string) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`GitHub GQL error: ${res.status}`);
  return res.json();
}

async function getGitHubData(): Promise<GitHubData> {
  try {
    // Profile
    const [profile, repos] = await Promise.all([
      fetchGitHub(`users/${USERNAME}`),
      fetchGitHub(`users/${USERNAME}/repos?per_page=100&sort=updated`),
    ]);

    // Contributions (1 year default)
    const gql = await fetchGraphQL(`{
      user(login: "${USERNAME}") {
        contributionsCollection {
          contributionCalendar { totalContributions }
        }
      }
    }`);

    // Language breakdown (own repos only — forks inflate stats)
    const langTotals: Record<string, number> = {};
    for (const repo of repos.filter((r: any) => !r.fork)) {
      try {
        const langs = await fetchGitHub(`repos/${USERNAME}/${repo.name}/languages`);
        for (const [lang, bytes] of Object.entries(langs)) {
          langTotals[lang] = (langTotals[lang] || 0) + (bytes as number);
        }
      } catch {}
    }

    const total = Object.values(langTotals).reduce((a, b) => a + b, 0);
    const sorted = Object.entries(langTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 4);

    const langColors: Record<string, string> = {
      TypeScript: "#3178c6",
      JavaScript: "#f1e05a",
      Python: "#3572A5",
      Go: "#00ADD8",
      Solidity: "#363636",
      Rust: "#dea584",
    };

    const top_languages = sorted.map(([name, bytes]) => ({
      name,
      pct: Math.round((bytes / total) * 100),
      color: langColors[name] || "#6e7681",
    }));

    // Normalize "Other" for remaining languages
    const shown = top_languages.reduce((s, l) => s + l.pct, 0);
    if (shown < 100 && top_languages.length > 0) {
      top_languages.push({ name: "Other", pct: 100 - shown, color: "#6e7681" });
    }

    // Featured repos — manually whitelisted (avoid self-referential portfolio repo + ensure quality)
    const featuredWhitelist = ["zulla", "agentforge"];
    const featuredDescriptions: Record<string, string> = {
      zulla: "Full-stack TypeScript application with modern UI and API integration.",
      agentforge: "AI agent marketplace built on Arc Network — Ignyte Stable Labs.",
    };

    const featured_repos = featuredWhitelist
      .map((name) => repos.find((r: any) => r.name === name))
      .filter(Boolean)
      .map((r: any) => ({
        name: r.name,
        description:
          featuredDescriptions[r.name] ||
          r.description ||
          "Open-source project.",
        language: r.language || "TypeScript",
        stars: r.stargazers_count || 0,
        html_url: r.html_url,
      }));

    return {
      public_repos: profile.public_repos,
      followers: profile.followers,
      contributions:
        gql?.data?.user?.contributionsCollection?.contributionCalendar
          ?.totalContributions || 37,
      top_languages,
      featured_repos,
    };
  } catch {
    // Fallback if GitHub API fails — values reflect own (non-fork) repos
    return {
      public_repos: 23,
      followers: 59,
      contributions: 37,
      top_languages: [
        { name: "TypeScript", pct: 74, color: "#3178c6" },
        { name: "JavaScript", pct: 11, color: "#f1e05a" },
        { name: "Solidity", pct: 9, color: "#363636" },
        { name: "Other", pct: 6, color: "#6e7681" },
      ],
      featured_repos: [
        {
          name: "zulla",
          description:
            "Full-stack TypeScript application with modern UI and API integration.",
          language: "TypeScript",
          stars: 3,
          html_url: "https://github.com/anotherplnt/zulla",
        },
        {
          name: "agentforge",
          description:
            "AI agent marketplace built on Arc Network — Ignyte Stable Labs.",
          language: "TypeScript",
          stars: 0,
          html_url: "https://github.com/anotherplnt/agentforge",
        },
      ],
    };
  }
}

export default async function GitHub() {
  const data = await getGitHubData();

  const year = new Date().getFullYear();

  return (
    <section
      id="github"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Open Source
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Building in public
        </h2>
      </div>

      <div className="mt-12 rounded-2xl border border-line bg-surface p-8 transition-colors sm:p-10">
        {/* Profile header */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src={`https://avatars.githubusercontent.com/u/113736954?v=4&s=128`}
              alt={`${USERNAME} GitHub avatar`}
              width={64}
              height={64}
              className="rounded-2xl border border-line"
              unoptimized
            />
            <div>
              <p className="font-mono text-lg font-semibold text-white">
                {USERNAME}
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Web3 Automation Engineer
              </p>
            </div>
          </div>

          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-line bg-ink px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-accent/40 hover:text-white"
          >
            View Profile
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          <div className="bg-ink px-4 py-6 text-center">
            <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">
              {data.public_repos}
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Repositories
            </p>
          </div>
          <div className="bg-ink px-4 py-6 text-center">
            <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">
              {data.followers}
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Followers
            </p>
          </div>
          <div className="bg-ink px-4 py-6 text-center">
            <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">
              {data.contributions}
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Contributions
            </p>
          </div>
          <div className="bg-ink px-4 py-6 text-center">
            <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">
              2022
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Active since
            </p>
          </div>
        </div>

        {/* Language bar */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Top Languages
            </p>
          </div>
          <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full bg-ink">
            {data.top_languages.map((lang) => (
              <div
                key={lang.name}
                className="h-full"
                style={{ width: `${lang.pct}%`, backgroundColor: lang.color }}
              />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {data.top_languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 text-xs text-neutral-400"
              >
                <span
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: lang.color }}
                />
                {lang.name}
                <span className="text-neutral-600">{lang.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured repos */}
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Featured Repositories
          </p>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.featured_repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-line bg-ink p-5 transition-all duration-200 hover:border-neutral-700"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-semibold text-white transition-colors group-hover:text-accent">
                    {repo.name}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {repo.stars}
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  {repo.description}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        repo.language === "TypeScript"
                          ? "#3178c6"
                          : repo.language === "Go"
                            ? "#00ADD8"
                            : repo.language === "Solidity"
                              ? "#363636"
                              : "#6e7681",
                    }}
                  />
                  <span className="text-xs text-neutral-500">
                    {repo.language}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-neutral-400">
          Actively building and shipping in public. Follow along to see
          what&apos;s in progress.
        </p>
      </div>
    </section>
  );
}
