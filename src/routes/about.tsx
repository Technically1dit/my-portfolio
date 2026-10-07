import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageIntro } from "@/components/site-shell";
import { ArrowRight, ArrowUpRight, BookOpen, Brain, Code, Cpu, Download, FileCode, GraduationCap, HeartHandshake, Sparkles, FileText } from "lucide-react";
import { useState } from "react";
import { ResumeModal } from "@/components/resume-modal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vandit Shastri — Background & Engineering Philosophy" },
      { name: "description", content: "Learn about Vandit Shastri: Machine Learning Engineer building conversational AI agents, scalable inference pipelines, and high-performance Python systems." },
      { property: "og:title", content: "About Vandit Shastri — Background & Research Philosophy" },
      { property: "og:description", content: "Technical rigor, curiosity, and high-performance engineering in AI and Machine Learning." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const researchInterests = [
  {
    title: "Autonomous Agent Orchestration",
    desc: "Designing resilient reasoning loops where specialized LLMs collaborate, invoke external tools, query structured databases, and evaluate their own output iteratively.",
  },
  {
    title: "Scalable Inference & High-Performance Python",
    desc: "Optimizing asynchronous I/O, vector similarity search, caching layers, and token streaming for low-latency production environments.",
  },
  {
    title: "Latent Space Representation & RAG",
    desc: "Refining dense embedding models, contextual chunking, and multi-stage re-ranking to ground generative intelligence with high factual precision.",
  },
  {
    title: "Data Quality & Exploratory Rigor",
    desc: "Applying structured statistical methods, hypothesis testing, and rigorous exploratory data analysis (EDA) before model selection.",
  },
];

const skillCategories = [
  {
    category: "Machine Learning & AI",
    skills: ["Generative AI & LLMs", "Conversational AI Agents", "RAG & Vector Search", "PyTorch / Scikit-Learn", "Prompt Engineering", "Exploratory Data Analysis (EDA)"],
  },
  {
    category: "Python & Backend Systems",
    skills: ["Python 3 (AsyncIO / Multiprocessing)", "FastAPI / REST APIs", "Data ETL & Web Scraping", "Pandas & NumPy", "JSON Schema Validation", "Microservices Architecture"],
  },
  {
    category: "Software & Web Engineering",
    skills: ["TypeScript & Modern JavaScript", "React & Vite", "HTML5 & Tailwind CSS", "Git & GitHub Version Control", "Linux / Bash Shell", "TanStack Router & Query"],
  },
];

function AboutPage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <SiteShell>
      <PageIntro
        eyebrow="My Journey & Engineering Philosophy"
        title="Technical rigor, with genuine curiosity."
        copy="I work at the intersection of modern software engineering and intelligent automation. I build scalable AI systems, embrace challenging mathematical problems, and iterate relentlessly."
        highlight="Machine Learning Engineer · High-Performance Python"
      />

      {/* Main Narrative & Quote */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div className="prose-panel space-y-5">
          <div className="flex items-center gap-2">
            <span className="eyebrow">Professional Practice</span>
          </div>
          <h2 className="font-display text-3xl font-medium sm:text-4xl text-foreground">
            From data pipelines to conversational agents.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            As a Machine Learning Engineer at <strong>Rootle</strong> in Ahmedabad, I architect AI-driven solutions designed for scale. My daily focus revolves around conversational AI agents, high-performance Python pipelines, Generative AI models, and the engineering required to transition theoretical models into reliable production utilities.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Before Rootle, I worked as a Python Developer at <strong>Actowiz Solutions</strong>, where I built large-scale data extraction frameworks and automated ETL pipelines. That foundational experience instilled a system-first discipline: writing clean code, designing robust abstractions, and never treating machine learning as an uninspected black box.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Beyond the code, I am an <strong>enthusiastic, curious, and collaborative teammate</strong>. I bring optimism, humor, and high intellectual dedication to every team and project I contribute to.
          </p>
        </div>

        {/* Quote & Academic Ambition Card */}
        <div className="space-y-6">
          <div className="quote-panel rounded-2xl border border-border bg-surface-soft p-8">
            <span className="font-display text-6xl text-accent">“</span>
            <blockquote className="font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              At the intersection of modern software engineering and intelligent automation, I build AI-driven solutions designed for scale.
            </blockquote>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              — Vandit Shastri, Engineering Dossier
            </p>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary">
              <GraduationCap size={16} /> Academic Foundation & Research
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Having completed my Bachelor of Technology (BTech) in Computer Science at LJ University (2022–2026), I maintain a strong foundation in core computer science, discrete math, and machine learning theory.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:underline"
              >
                <FileText size={13} /> View Full Curriculum Vitae <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="border-t border-border/80 bg-surface-soft/70 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="eyebrow">Key Technical Areas</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl text-foreground">
              Areas of Focus & Research.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Core paradigms and problem spaces I actively explore and engineer solutions for:
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {researchInterests.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-2xs transition-all hover:border-primary/40 hover:shadow-md"
              >
                <span className="font-mono text-xs font-semibold text-accent">0{idx + 1} // FOCUS</span>
                <h3 className="mt-3 font-display text-xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Skills Matrix */}
      <section className="border-y border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Technical Competencies</span>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl text-foreground">
              The Engineering Toolkit.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Skills applied across production enterprise systems and independent projects:
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {skillCategories.map((group) => (
              <div key={group.category} className="rounded-2xl border border-border bg-card/80 p-6 shadow-2xs">
                <p className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                  {group.category}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border/80 bg-surface-soft px-3 py-1.5 font-mono text-xs text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Connect CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <p className="eyebrow">Let's Connect</p>
        <h2 className="mt-4 font-display text-3xl font-medium sm:text-5xl text-foreground">
          Have an interesting challenge or project?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          I am always open to discussing conversational AI architectures, machine learning engineering, and technical ideas.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/contact" className="button-primary text-xs">
            <span>Reach Out Directly</span>
            <ArrowRight size={14} />
          </Link>
          <Link to="/projects" className="button-secondary text-xs">
            <span>Explore Projects</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </SiteShell>
  );
}