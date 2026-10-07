import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ScrollStory } from "@/components/scroll-story";
import profileAsset from "@/assets/vandit-profile.pdf.asset.json";
import frame1 from "@/assets/scroll-01.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vandit Shastri — Machine Learning Engineer" },
      { name: "description", content: "Meet Vandit Shastri: machine learning engineer, Python developer, and Computer Science graduate building scalable AI systems." },
      { property: "og:title", content: "Vandit Shastri — Machine Learning Engineer" },
      { property: "og:description", content: "A field notebook of AI engineering, selected work, experience, and academic ambition." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "Zen-Flow", type: "Web platform", copy: "A yoga and mindfulness platform with class access, meditation sessions, and event discovery.", stack: "HTML · JavaScript", href: "https://github.com/Technically1dit/Zen-Flow" },
  { name: "ShowTime", type: "React application", copy: "A modern web project that demonstrates Vandit’s growing frontend practice alongside Python and AI work.", stack: "React · Vite", href: "https://github.com/Technically1dit/ShowTime" },
  { name: "job-helper", type: "Career utility", copy: "An early-stage web project exploring tools that make the job search workflow more useful.", stack: "React · Vite", href: "https://github.com/Technically1dit/job-helper" },
];

function Index() {
  return (
    <SiteShell>
      <section className="hero-wash overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <span className="eyebrow-pill">Machine Learning Engineer · Rootle</span>
            <h1 className="mt-6 max-w-[12ch] font-display text-6xl font-medium leading-[0.98] sm:text-7xl lg:text-8xl">I sketch intelligence into the world.</h1>
            <p className="mt-7 max-w-[50ch] text-base leading-8 text-muted-foreground sm:text-lg">I turn rough notebook ideas into scalable AI systems—through conversational agents, high-performance Python pipelines, and continuous iteration.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="button-primary">See selected work <ArrowRight size={16} /></Link>
              <a href={profileAsset.url} target="_blank" rel="noreferrer" className="button-secondary">Profile <Download size={16} /></a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
              <a href="https://github.com/Technically1dit" target="_blank" rel="noreferrer" className="social-link"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/vandit-shastri-5536ab273/" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            <div className="hero-frame">
              <img src={frame1} alt="An open notebook with a hand-drawn neural network" width={960} height={1200} className="h-full w-full object-cover" />
              <div className="absolute inset-x-5 top-5 glass-note">
                <p className="font-display text-sm italic">“What if a sketch could become a system?”</p>
              </div>
              <div className="absolute inset-x-5 bottom-5 glass-note">
                <p className="font-mono text-xs text-primary">system.ready() → true</p>
                <p className="mt-1 text-xs text-muted-foreground">Scroll to open the notebook.</p>
              </div>
            </div>
            <div className="float-note right-note"><span>Current role</span><strong>ML Engineer @ Rootle</strong></div>
            <div className="float-note left-note"><span>Education</span><strong>BTech · Computer Science</strong></div>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="eyebrow">Selected work</p><h2 className="mt-4 font-display text-5xl font-medium">Built to be useful.</h2></div>
          <Link to="/projects" className="text-link">Explore all projects <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="project-card group">
              <div className={`project-visual project-visual-${index + 1}`}><span>0{index + 1}</span><ArrowUpRight size={20} /></div>
              <div className="p-6"><p className="eyebrow">{project.type}</p><h3 className="mt-3 font-display text-3xl font-medium">{project.name}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{project.copy}</p><p className="mt-5 font-mono text-xs text-primary">{project.stack}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface-soft">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[.9fr_1.1fr]">
          <div><p className="eyebrow">The record</p><h2 className="mt-4 max-w-[10ch] font-display text-5xl font-medium">Learning by building.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">From Python data infrastructure to production machine learning, each role has added a new layer to Vandit’s practice.</p></div>
          <div className="timeline">
            <div className="timeline-row"><span>2026 — now</span><div><strong>Machine Learning Engineer</strong><p>Rootle · Ahmedabad</p></div></div>
            <div className="timeline-row"><span>2025 — 2026</span><div><strong>Machine Learning Intern</strong><p>Rootle · Ahmedabad</p></div></div>
            <div className="timeline-row"><span>2025</span><div><strong>Python Developer</strong><p>Actowiz Solutions · Ahmedabad</p></div></div>
            <div className="timeline-row"><span>2022 — 2026</span><div><strong>BTech, Computer Science</strong><p>LJ University · Ahmedabad</p></div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <p className="eyebrow">The window is open</p>
        <h2 className="mt-5 font-display text-5xl font-medium sm:text-6xl">Let’s build something worth studying.</h2>
        <p className="mx-auto mt-6 max-w-xl leading-8 text-muted-foreground">For research conversations, graduate opportunities, or ambitious AI projects, Vandit would love to hear from you.</p>
        <Link to="/contact" className="button-primary mt-9">Start a conversation <ArrowUpRight size={16} /></Link>
      </section>
    </SiteShell>
  );
}