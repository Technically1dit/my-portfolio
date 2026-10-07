import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Sparkles, GraduationCap, Cpu, Code2, Bot, Layers, Terminal, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ScrollStory } from "@/components/scroll-story";
import { NeuralCanvas } from "@/components/neural-canvas";
import profileAsset from "@/assets/vandit-profile.pdf.asset.json";
import frame1 from "@/assets/scroll-01.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vandit Shastri — Machine Learning Engineer & CS Graduate" },
      { name: "description", content: "Portfolio and academic dossier of Vandit Shastri: Machine Learning Engineer at Rootle, BTech CS graduate from LJ University, building scalable conversational agents, high-performance Python pipelines, and preparing for higher studies abroad." },
      { property: "og:title", content: "Vandit Shastri — Machine Learning Engineer & Academic Dossier" },
      { property: "og:description", content: "Exploring conversational intelligence, machine learning systems, and graduate research opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const featuredProjects = [
  {
    name: "job-helper",
    type: "Python Automation & Career Utility",
    copy: "An automated workflow and resume assistance tool engineered in Python. Focuses on structured parsing, candidate match metrics, and job automation pipelines.",
    stack: "Python · Automation · ETL",
    href: "https://github.com/Technically1dit/job-helper",
  },
  {
    name: "ShowTime",
    type: "Modern Web Application",
    copy: "A reactive entertainment and media platform built with React and Vite, emphasizing component modularity, fluid layout rendering, and clean UI architecture.",
    stack: "React · Vite · TypeScript",
    href: "https://github.com/Technically1dit/ShowTime",
  },
  {
    name: "Zen-Flow",
    type: "Interactive Wellness Platform",
    copy: "A yoga and mindfulness web platform facilitating class scheduling, meditation sequences, and interactive community wellness event discovery.",
    stack: "HTML5 · JavaScript · CSS3",
    href: "https://github.com/Technically1dit/Zen-Flow",
  },
];

const pillars = [
  {
    icon: Bot,
    title: "Conversational AI & Agents",
    desc: "Architecting multi-agent reasoning systems, dynamic prompt engineering, tool invocation, and low-latency inference pipelines at Rootle.",
  },
  {
    icon: Cpu,
    title: "High-Performance Python",
    desc: "Building asynchronous backend services, high-throughput ETL data flows, and vectorized processing with AsyncIO, FastAPI, and NumPy.",
  },
  {
    icon: Layers,
    title: "Applied Machine Learning & EDA",
    desc: "Rigorous statistical analysis, data cleaning, feature engineering, and predictive modeling verified through IBM & Great Learning specializations.",
  },
  {
    icon: GraduationCap,
    title: "Higher Studies & Research",
    desc: "Dedicated to pursuing graduate research (Master's in CS/AI) at international universities, bridging theoretical depth with production scalability.",
  },
];

function Index() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-wash">
        <NeuralCanvas />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_.9fr]">
          
          {/* Left Hero Column */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow-pill flex items-center gap-1.5">
                <Sparkles size={11} className="text-accent" />
                <span>ML Engineer @ Rootle</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium text-primary">
                <GraduationCap size={12} /> B.Tech CSE (LJ University)
              </span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
              I sketch intelligence <span className="italic text-primary">into the world</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hi, I’m <strong>Vandit Shastri</strong>. I engineer scalable AI systems, specialized conversational agents, and high-performance Python pipelines—grounded in technical rigor, continuous iteration, and a jolly, collaborative spirit.
            </p>

            {/* Higher Studies Badge */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/80 bg-card/70 p-3.5 backdrop-blur-md">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <GraduationCap size={16} />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-foreground">Prospective Graduate Student (MS in AI / CS):</span>
                <p className="mt-0.5 text-muted-foreground leading-relaxed">
                  Prepared for higher studies abroad. Admissions reviewers are invited to deep-link across academic history, verified credentials, and code repositories.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="button-primary">
                <span>Explore Projects & GitHub</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={profileAsset.url}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <span>Download Profile CV</span>
                <Download size={15} />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-5 text-xs text-muted-foreground">
              <a
                href="https://github.com/Technically1dit"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Github size={16} /> @Technically1dit
              </a>
              <span className="text-border">|</span>
              <a
                href="https://www.linkedin.com/in/vandit-shastri-5536ab273/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Linkedin size={16} /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Hero Column: Notebook & System Preview Frame */}
          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            <div className="hero-frame border-border/80 bg-card/50">
              <img
                src={frame1}
                alt="Vandit Shastri notebook conceptualizing neural layers"
                width={960}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Glass Header Note */}
              <div className="glass-note absolute inset-x-5 top-5">
                <p className="font-display text-xs sm:text-sm italic text-foreground">
                  “What if a conceptual sketch could reliably become an enterprise AI system?”
                </p>
              </div>

              {/* Glass Telemetry Footer */}
              <div className="glass-note absolute inset-x-5 bottom-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary">
                    vandit.sys.init() → ACTIVE
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                </div>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  Scroll below to experience the frame-by-frame architecture sequence.
                </p>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="float-note right-note">
              <span>Current Industry Role</span>
              <strong>ML Engineer @ Rootle</strong>
            </div>
            <div className="float-note left-note">
              <span>Undergraduate Degree</span>
              <strong>BTech, CSE · LJ University</strong>
            </div>
          </div>

        </div>
      </section>

      {/* Frame-by-Frame Scroll-Animated Video & Architecture Sequence */}
      <ScrollStory />

      {/* Core Engineering Pillars */}
      <section className="border-b border-border/80 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Engineering Matrix</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
              Craftsmanship across the entire AI stack.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              From low-level data extraction to high-level multi-agent orchestration, Vandit combines rigorous software practices with modern machine learning paradigms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Work & GitHub Repositories */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected Public Work</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
              Inspectable Code & Applications.
            </h2>
          </div>
          <Link to="/projects" className="text-link font-mono text-xs font-semibold text-primary">
            View All Projects & GitHub <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card group flex flex-col justify-between"
            >
              <div>
                <div className={`project-visual project-visual-${index + 1}`}>
                  <span className="font-mono text-lg font-semibold">0{index + 1}</span>
                  <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{project.type}</p>
                  <h3 className="mt-3 font-display text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {project.copy}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="font-mono text-xs text-primary">{project.stack}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Verified Timeline & Experience */}
      <section className="border-y border-border/80 bg-surface-soft/60 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">The Trajectory</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
              Learning by Building & Iterating.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              From data infrastructure at Actowiz Solutions to enterprise machine learning at Rootle and undergraduate coursework at LJ University, each milestone has built a solid base for advanced research.
            </p>
            <div className="mt-8">
              <Link to="/achievements" className="button-secondary text-xs">
                <span>View Verified Certificates & Education</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-row">
              <span>2026 — PRESENT</span>
              <div>
                <strong>Machine Learning Engineer</strong>
                <p>Rootle · Ahmedabad (Full-time)</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Architecting conversational AI agents, optimizing LLM pipelines, and deploying robust inference microservices.
                </p>
              </div>
            </div>
            <div className="timeline-row">
              <span>2025 — 2026</span>
              <div>
                <strong>Machine Learning Intern</strong>
                <p>Rootle · Ahmedabad (9 months)</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Prototyping machine learning workflows, fine-tuning scripts, and automated evaluation metrics.
                </p>
              </div>
            </div>
            <div className="timeline-row">
              <span>2025</span>
              <div>
                <strong>Python Developer</strong>
                <p>Actowiz Solutions · Ahmedabad (9 months)</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Developed high-throughput data extraction frameworks, backend Python automation, and ETL pipelines.
                </p>
              </div>
            </div>
            <div className="timeline-row">
              <span>2022 — 2026</span>
              <div>
                <strong>BTech in Computer Science</strong>
                <p>LJ University · Ahmedabad</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Focused on Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Software Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Fast-Track CTA Banner */}
      <section className="relative overflow-hidden mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold text-accent">
          <GraduationCap size={15} /> Higher Studies Abroad & Research Collaborations
        </div>
        <h2 className="mt-6 font-display text-4xl font-medium text-foreground sm:text-6xl">
          Let’s build something worth studying.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Whether you are an admissions committee reviewer, university professor, or AI research collaborator, Vandit is eager to connect and discuss graduate research opportunities.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="button-primary">
            <span>Start a Conversation</span>
            <ArrowUpRight size={15} />
          </Link>
          <a
            href={profileAsset.url}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <span>Download Official CV</span>
            <Download size={15} />
          </a>
        </div>
      </section>
    </SiteShell>
  );
}