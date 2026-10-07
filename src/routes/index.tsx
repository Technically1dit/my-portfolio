import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Sparkles, GraduationCap, Cpu, Code2, Bot, Layers, Terminal, CheckCircle2, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { FadeUp, StaggerParent, StaggerItem } from "@/components/motion";
import { SiteShell } from "@/components/site-shell";
import { ScrollStory } from "@/components/scroll-story";
import { NeuralCanvas } from "@/components/neural-canvas";
import { ResumeModal } from "@/components/resume-modal";
import { RESUME_URL } from "@/lib/constants";
import frame1 from "@/assets/scroll-01.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vandit Shastri — Machine Learning Engineer" },
      { name: "description", content: "Portfolio and engineering dossier of Vandit Shastri: Machine Learning Engineer building scalable conversational agents, high-performance Python pipelines, and machine learning systems." },
      { property: "og:title", content: "Vandit Shastri — Machine Learning Engineer" },
      { property: "og:description", content: "Exploring conversational intelligence, machine learning systems, and high-performance engineering." },
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
    title: "Academics & Continuous Research",
    desc: "B.Tech in Computer Science from LJ University, dedicated to deepening theoretical understanding and exploring modern research in AI.",
  },
];

function Index() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-wash">
        <NeuralCanvas />
        <div className="hero-section-inner relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_.9fr]">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              Hi, I’m <strong>Vandit Shastri</strong>. I engineer scalable AI systems, specialized conversational agents, and high-performance Python pipelines—grounded in technical rigor, clean design, and a collaborative spirit.
            </p>

            {/* Core Focus Badge */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/80 bg-card/70 p-3.5 backdrop-blur-md">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Bot size={16} />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-foreground">Current Focus & Research Interests:</span>
                <p className="mt-0.5 text-muted-foreground leading-relaxed">
                  Autonomous agent reasoning, low-latency streaming pipelines, RAG retrieval architectures, and high-throughput Python backends.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="button-primary">
                <span>Explore My Projects</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={RESUME_URL}
                download="Vandit_Shastri_Resume.pdf"
                className="button-secondary"
              >
                <Download size={15} className="text-primary" />
                <span>Download Resume (PDF)</span>
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
          </motion.div>

          {/* Right Hero Column: Notebook & System Preview Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:mr-0"
          >
            <div className="hero-frame border-border/80 bg-card/50">
              <img
                src={frame1}
                alt="Vandit Shastri conceptual architecture sketch"
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
              <span>Current Role</span>
              <strong>ML Engineer @ Rootle</strong>
            </div>
            <div className="float-note left-note">
              <span>Academic Degree</span>
              <strong>BTech, CSE · LJ University</strong>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Frame-by-Frame Scroll-Animated Sequence */}
      <ScrollStory />

      {/* Core Engineering Pillars */}
      <FadeUp>
      <section className="border-b border-border/80 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Engineering Matrix</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
              Craftsmanship across the entire AI stack.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              From low-level asynchronous data pipelines to high-level multi-agent orchestration, I combine rigorous software engineering practices with modern machine learning paradigms.
            </p>
          </div>

          <StaggerParent className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem
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
                </StaggerItem>
              );
            })}
          </StaggerParent>
        </div>
      </section>
      </FadeUp>

      {/* Selected Work & GitHub Repositories */}
      <FadeUp>
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

        <StaggerParent className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.name}>
              <a
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
            </StaggerItem>
          ))}
        </StaggerParent>
      </section>
      </FadeUp>

      {/* Verified Timeline & Experience */}
      <FadeUp>
      <section className="border-y border-border/80 bg-surface-soft/60 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">My Trajectory</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
              Learning by Building & Iterating.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              From building high-throughput data extraction frameworks at Actowiz Solutions to architecting conversational AI agents at Rootle and completing my Computer Science degree at LJ University, every milestone sharpens my ability to solve hard problems.
            </p>
            <div className="mt-8">
              <Link to="/achievements" className="button-secondary text-xs">
                <span>View Verified Certificates & Experience</span>
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
      </FadeUp>

      {/* Connect CTA Banner */}
      <FadeUp>
      <section className="relative overflow-hidden mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold text-accent">
          <Sparkles size={14} /> Open for Conversations &amp; Engineering Collaborations
        </div>
        <h2 className="mt-6 font-display text-4xl font-medium text-foreground sm:text-6xl">
          Let’s build something extraordinary.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Whether you want to discuss conversational AI systems, collaborate on open-source machine learning, or explore research opportunities, I’d love to connect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="button-primary">
            <span>Start a Conversation</span>
            <ArrowUpRight size={15} />
          </Link>
          <a
            href={RESUME_URL}
            download="Vandit_Shastri_Resume.pdf"
            className="button-secondary"
          >
            <Download size={15} className="text-primary" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </section>
      </FadeUp>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </SiteShell>
  );
}