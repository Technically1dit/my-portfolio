import { useState, useEffect } from "react";
import { Github, Star, GitFork, ExternalLink, Code2, Sparkles, Filter } from "lucide-react";

interface RepoItem {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  html_url: string;
  category: "AI / Python" | "Frontend / Web" | "Career & Automation" | "Production Systems";
  highlight?: string;
}

const VERIFIED_PROJECTS: RepoItem[] = [
  {
    name: "job-helper",
    description: "An automated career utility and workflow assistant built with Python. Designed to streamline candidate analysis, job application tracking, and resume alignment.",
    stars: 1,
    forks: 0,
    language: "Python",
    topics: ["python", "automation", "career-utility", "etl-scripting"],
    html_url: "https://github.com/Technically1dit/job-helper",
    category: "Career & Automation",
    highlight: "Active Python Repository",
  },
  {
    name: "ShowTime",
    description: "A modern, high-performance web project built with React and Vite showcasing responsive layout architecture, component modularity, and clean frontend UX.",
    stars: 1,
    forks: 0,
    language: "React / JavaScript",
    topics: ["react", "vite", "frontend", "ui-ux"],
    html_url: "https://github.com/Technically1dit/ShowTime",
    category: "Frontend / Web",
    highlight: "React & Vite App",
  },
  {
    name: "Zen-Flow",
    description: "An interactive mindfulness, yoga, and meditation platform built with vanilla web technologies, featuring session calendars, class access, and wellness event discovery.",
    stars: 1,
    forks: 0,
    language: "HTML / JavaScript",
    topics: ["html5", "javascript", "css3", "mindfulness-platform"],
    html_url: "https://github.com/Technically1dit/Zen-Flow",
    category: "Frontend / Web",
    highlight: "Web Platform",
  },
  {
    name: "Rootle AI Agent Infrastructure",
    description: "Enterprise conversational agents, high-performance Python data pipelines, RAG retrieval mechanisms, and scalable microservice APIs built during Vandit's role as ML Engineer at Rootle.",
    stars: 0,
    forks: 0,
    language: "Python / AI",
    topics: ["machine-learning", "conversational-ai", "python-asyncio", "llm-pipelines"],
    html_url: "https://www.linkedin.com/in/vandit-shastri-5536ab273/",
    category: "Production Systems",
    highlight: "Industry Work @ Rootle",
  },
  {
    name: "Exploratory Data Analysis & ML Pipelines",
    description: "Structured statistical analysis, predictive model training, feature engineering, and data cleaning workflows completed as part of IBM & Great Learning ML specializations.",
    stars: 0,
    forks: 0,
    language: "Python / Jupyter",
    topics: ["eda", "scikit-learn", "data-science", "ibm-certified"],
    html_url: "https://github.com/Technically1dit",
    category: "AI / Python",
    highlight: "Verified Specialization",
  },
];

export function GithubProjectsExplorer() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState<RepoItem[]>(VERIFIED_PROJECTS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchGithubRepos() {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.github.com/users/Technically1dit/repos?sort=updated&per_page=10");
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Merge dynamic live stats with verified metadata
          const dynamicMap = new Map<string, any>();
          data.forEach((r) => dynamicMap.set(r.name.toLowerCase(), r));

          setRepos((prev) =>
            prev.map((proj) => {
              const live = dynamicMap.get(proj.name.toLowerCase());
              if (live) {
                return {
                  ...proj,
                  stars: live.stargazers_count ?? proj.stars,
                  forks: live.forks_count ?? proj.forks,
                  description: live.description || proj.description,
                  language: live.language || proj.language,
                };
              }
              return proj;
            })
          );
        }
      } catch (err) {
        // Fallback to verified local snapshots
        console.warn("GitHub API fetch using local fallback", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGithubRepos();
  }, []);

  const categories = ["All", "AI / Python", "Frontend / Web", "Career & Automation", "Production Systems"];

  const filtered = repos.filter((r) => {
    const matchesCategory = selectedFilter === "All" || r.category === selectedFilter;
    const matchesSearch =
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.topics.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Controls & Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                selectedFilter === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/80 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search projects or stack..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((repo, idx) => (
          <div
            key={repo.name}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/75 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-primary">0{idx + 1}</span>
                {repo.highlight && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                    <Sparkles size={10} /> {repo.highlight}
                  </span>
                )}
              </div>

              {/* Title & Desc */}
              <h3 className="mt-4 font-display text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                {repo.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                {repo.description}
              </p>
            </div>

            {/* Bottom Meta & Topics */}
            <div className="mt-6 space-y-4">
              {/* Topics / Tags */}
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border/70 bg-surface-soft/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Footer Row */}
              <div className="flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                <div className="flex items-center gap-2 font-mono text-[11px] text-primary">
                  <Code2 size={13} />
                  <span>{repo.language}</span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-soft px-3 py-1 font-mono text-[11px] font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Inspect <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live GitHub Profile Card Callout */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-surface-soft to-card p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Github size={16} /> Verified GitHub Activity
            </div>
            <h4 className="font-display text-2xl font-medium text-foreground">
              Open-Source & Experimental Repositories
            </h4>
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground">
              Vandit develops across Python, React, automation scripts, and exploratory AI models. Review his commit history and source code directly on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Technically1dit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-foreground px-5 py-2.5 font-mono text-xs font-medium text-background transition-transform hover:scale-105 sm:self-center"
          >
            <Github size={15} /> Visit @Technically1dit
          </a>
        </div>
      </div>
    </div>
  );
}
