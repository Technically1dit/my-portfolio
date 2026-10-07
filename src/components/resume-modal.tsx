import { useState, useEffect } from "react";
import { X, Download, Printer, Copy, Check, ExternalLink, Briefcase, GraduationCap, Award, Code2, Sparkles, MapPin, Mail, Github, Linkedin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vanditshastri@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md bg-background/80 animate-in fade-in duration-200">
      <div 
        className="relative flex flex-col w-full max-w-4xl max-h-[92vh] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Vandit Shastri Resume"
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between border-b border-border/80 bg-surface-soft px-5 py-3.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Sparkles size={14} />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">Vandit Shastri — Curriculum Vitae</h3>
              <p className="font-mono text-[10px] text-muted-foreground">Machine Learning Engineer · Ahmedabad, India</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/vandit-shastri-resume.pdf"
              download="Vandit_Shastri_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary bg-primary px-3 py-1.5 font-mono text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              title="Download Resume PDF"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground transition-all hover:border-primary hover:bg-surface-soft"
              title="Copy Email"
            >
              {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy Email"}</span>
            </button>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-primary"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-background">
          
          {/* Resume Header */}
          <div className="border-b border-border/80 pb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">Vandit Shastri</h1>
                <p className="mt-1 font-mono text-sm font-medium text-primary">Machine Learning Engineer</p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-accent" /> Ahmedabad, Gujarat, India</span>
                  <a href="mailto:vanditshastri@gmail.com" className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors">
                    <Mail size={13} className="text-primary" /> vanditshastri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Technically1dit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={13} /> Technically1dit
                </a>
                <a
                  href="https://www.linkedin.com/in/vandit-shastri-5536ab273/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={13} /> LinkedIn
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Machine Learning Engineer passionate about conversational AI agents, LLM pipelines, and high-performance asynchronous Python services. Experienced in architecting end-to-end data systems, RAG frameworks, and scalable backend microservices.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <Briefcase size={14} /> Professional Experience
            </div>
            
            <div className="space-y-4">
              <div className="rounded-xl border border-border/70 bg-card/60 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="text-sm font-semibold text-foreground">Machine Learning Engineer</h4>
                  <span className="font-mono text-[11px] text-primary font-medium">2026 — Present</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Rootle · Ahmedabad (Full-time)</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-xs leading-relaxed text-muted-foreground">
                  <li>Architecting conversational AI agents with tool-calling capabilities and dynamic prompt orchestration.</li>
                  <li>Implementing low-latency inference microservices with token streaming.</li>
                  <li>Optimizing vector search, contextual chunking, and embedding pipelines.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border/70 bg-card/60 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="text-sm font-semibold text-foreground">Machine Learning Intern</h4>
                  <span className="font-mono text-[11px] text-muted-foreground">2025 — 2026 (9 mos)</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Rootle · Ahmedabad</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-xs leading-relaxed text-muted-foreground">
                  <li>Prototyped machine learning workflows and automated evaluation metrics.</li>
                  <li>Built fine-tuning scripts and benchmark datasets for domain-specific models.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border/70 bg-card/60 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="text-sm font-semibold text-foreground">Python Developer</h4>
                  <span className="font-mono text-[11px] text-muted-foreground">2025 (9 mos)</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Actowiz Solutions · Ahmedabad</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-xs leading-relaxed text-muted-foreground">
                  <li>Engineered high-throughput web data extraction frameworks and automated ETL flows in Python.</li>
                  <li>Designed resilient data validation and transformation pipelines with clean modular architecture.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <GraduationCap size={14} /> Education
            </div>
            <div className="rounded-xl border border-border/70 bg-card/60 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h4 className="text-sm font-semibold text-foreground">B.Tech in Computer Science & Engineering</h4>
                <span className="font-mono text-[11px] text-primary font-medium">2022 — 2026</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground">LJ University · Ahmedabad, Gujarat</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Core coursework: Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems.
              </p>
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <Code2 size={14} /> Technical Proficiencies
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border/60 bg-surface-soft/60 p-3.5">
                <h5 className="font-mono text-xs font-semibold text-foreground">AI & Machine Learning</h5>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  LLMs & Agents, RAG Pipelines, PyTorch, Scikit-Learn, Prompt Engineering, Exploratory Data Analysis.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface-soft/60 p-3.5">
                <h5 className="font-mono text-xs font-semibold text-foreground">Python & Backend</h5>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  AsyncIO, FastAPI, Pandas, NumPy, Data ETL, JSON Schema, REST APIs, Microservices.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface-soft/60 p-3.5">
                <h5 className="font-mono text-xs font-semibold text-foreground">Web & Tooling</h5>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  TypeScript, React, Vite, Tailwind CSS, Git, Linux/Bash, TanStack Router.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Certifications */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <Award size={14} /> Verified Certifications
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-card p-3.5">
                <p className="font-mono text-[10px] text-accent font-semibold uppercase">IBM Specialization</p>
                <h5 className="text-xs font-semibold text-foreground mt-0.5">Applied Machine Learning & EDA</h5>
                <p className="text-[11px] text-muted-foreground mt-1">Hands-on model evaluation, feature engineering, and statistical analysis.</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-3.5">
                <p className="font-mono text-[10px] text-accent font-semibold uppercase">Great Learning</p>
                <h5 className="text-xs font-semibold text-foreground mt-0.5">Data Science Foundations</h5>
                <p className="text-[11px] text-muted-foreground mt-1">Data exploration, probability, regression, and algorithmic fundamentals.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/80 bg-surface-soft px-6 py-3.5">
          <a
            href="/vandit-shastri-resume.pdf"
            download="Vandit_Shastri_Resume.pdf"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:underline"
          >
            <Download size={13} /> Download Official PDF (Vandit_Shastri_Resume.pdf)
          </a>
          <button
            onClick={onClose}
            className="rounded-lg bg-card border border-border px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
