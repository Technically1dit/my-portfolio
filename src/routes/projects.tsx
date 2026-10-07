import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageIntro } from "@/components/site-shell";
import { GithubProjectsExplorer } from "@/components/github-explorer";
import { Code2, Github, Sparkles, Terminal } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & GitHub Code — Vandit Shastri" },
      { name: "description", content: "Explore open-source software, Python automation tools, and machine learning architectures engineered by Vandit Shastri." },
      { property: "og:title", content: "Projects & GitHub Code — Vandit Shastri" },
      { property: "og:description", content: "Inspectable public repositories, Python scripts, React apps, and enterprise AI systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Inspectable Repositories & Systems"
        title="Public code, crafted with rigor."
        copy="A transparent look at my engineering output. Every project is open to direct inspection on GitHub so collaborators and engineering leads can assess code structure, system design, and execution."
        highlight="Synced with GitHub API @Technically1dit"
      />

      {/* Main GitHub Explorer Component */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <GithubProjectsExplorer />
      </section>

      {/* Professional AI Architecture Note */}
      <section className="border-y border-border/80 bg-surface-soft/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="eyebrow">Enterprise & Commercial Focus</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl text-foreground">
                Beyond open-source: Production AI at Rootle.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                While my public repositories demonstrate independent initiative and experimentation, my day-to-day engineering at Rootle involves proprietary multi-agent conversational pipelines, asynchronous token routing, and secure vector databases.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary">
                <Terminal size={14} /> Production System Capabilities
              </div>
              <ul className="space-y-2.5 text-xs text-muted-foreground font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">›</span>
                  <span><strong>Dynamic Tool Execution:</strong> Orchestrating autonomous agents with custom Python function call bindings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">›</span>
                  <span><strong>Low-Latency Retrieval:</strong> Vector similarity search with contextual re-ranking pipelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">›</span>
                  <span><strong>High-Throughput Ingestion:</strong> AsyncIO-powered ETL engines parsing unstructured customer data.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}