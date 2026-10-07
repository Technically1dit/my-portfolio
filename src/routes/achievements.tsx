import { createFileRoute } from "@tanstack/react-router";
import { Award, BriefcaseBusiness, GraduationCap, CheckCircle2, Download, FileCheck, ExternalLink, Calendar, MapPin, Building, FileText } from "lucide-react";
import { useState } from "react";
import { SiteShell, PageIntro } from "@/components/site-shell";
import { ResumeModal } from "@/components/resume-modal";
import { PageTransition, FadeUp, StaggerParent, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Academics & Experience — Vandit Shastri" },
      { name: "description", content: "Academic background, professional experience at Rootle and Actowiz, and machine learning certifications of Vandit Shastri." },
      { property: "og:title", content: "Academics, Experience & Certifications — Vandit Shastri" },
      { property: "og:description", content: "A verifiable record of university education, ML engineering roles, and IBM certifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AchievementsPage,
});

const certificates = [
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    date: "Completed July 30, 2024",
    skills: ["Data Cleaning", "Feature Engineering", "Statistical Hypothesis Testing", "Exploratory Visualization"],
    type: "Professional Certification",
  },
  {
    title: "Python for Machine Learning and Data Science",
    issuer: "Great Learning",
    date: "Completed May 5, 2024",
    skills: ["Scikit-Learn", "NumPy & Pandas", "Supervised Learning", "Model Evaluation"],
    type: "Specialization Certificate",
  },
];

const academicHighlights = [
  {
    title: "Data Structures & Algorithms",
    desc: "Rigorous focus on computational complexity, dynamic programming, graph algorithms, and memory-efficient data structures.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    desc: "Neural network architectures, search algorithms, heuristic optimization, probability theory, and loss minimization.",
  },
  {
    title: "Database Management & Distributed Systems",
    desc: "Relational modeling, indexing strategies, ACID compliance, and asynchronous I/O fundamentals.",
  },
  {
    title: "Operating Systems & Software Engineering",
    desc: "Process synchronization, multi-threading, concurrency control, and clean software architecture.",
  },
];

function AchievementsPage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <SiteShell>
      <PageTransition>
      <PageIntro
        eyebrow="Experience & Qualifications"
        title="Experience, backed by practical results."
        copy="A timeline of my undergraduate engineering education at LJ University, industrial roles at Rootle and Actowiz Solutions, and verified technical specializations."
        highlight="Full-Time Machine Learning Engineer"
      />

      {/* Main Experience & Education Cards */}
      <FadeUp>
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <StaggerParent className="grid gap-6 md:grid-cols-3">
          
          {/* Card 1: LJ University */}
          <article className="record-card flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <p className="eyebrow mt-6">Academic Foundation</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-foreground">
                BTech, Computer Science
              </h2>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Building size={13} />
                <span>LJ University</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin size={13} />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Rigorous four-year engineering curriculum covering algorithms, machine learning, systems programming, and applied software development.
              </p>
            </div>
            <div className="mt-8 border-t border-border/60 pt-4">
              <span className="font-mono text-xs font-semibold text-primary">
                September 2022 — April 2026
              </span>
            </div>
          </article>

          {/* Card 2: Rootle */}
          <article className="record-card flex flex-col justify-between rounded-2xl border border-primary/30 bg-card p-6 shadow-sm ring-1 ring-primary/20 transition-all hover:border-primary hover:shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <BriefcaseBusiness size={24} />
              </div>
              <div className="mt-6 flex items-center gap-2">
                <p className="eyebrow">Industry Experience</p>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-bold text-accent">Current Role</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-medium text-foreground">
                Machine Learning Engineer
              </h2>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Building size={13} />
                <span>Rootle</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin size={13} />
                <span>Ahmedabad, India</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Architecting conversational AI agents, scalable LLM pipelines, context orchestration, and tool execution microservices.
              </p>
            </div>
            <div className="mt-8 border-t border-border/60 pt-4">
              <span className="font-mono text-xs font-semibold text-accent">
                September 2025 — Present (1 yr 2 mos)
              </span>
            </div>
          </article>

          {/* Card 3: Actowiz */}
          <article className="record-card flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award size={24} />
              </div>
              <p className="eyebrow mt-6">Software Development</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-foreground">
                Python Developer
              </h2>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Building size={13} />
                <span>Actowiz Solutions</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin size={13} />
                <span>Ahmedabad, India</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                9-month role building data extraction systems, custom web crawlers, and high-throughput Python data ETL scripts.
              </p>
            </div>
            <div className="mt-8 border-t border-border/60 pt-4">
              <span className="font-mono text-xs font-semibold text-primary">
                January 2025 — September 2025
              </span>
            </div>
          </article>

        </StaggerParent>
      </section>
      </FadeUp>

      {/* Verified Certificates */}
      <FadeUp>
      <section className="border-t border-border/80 bg-surface-soft/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Certifications</p>
              <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl text-foreground">
                Specializations &amp; Credentials.
              </h2>
            </div>
            <a
              href="/vandit-shastri-resume.pdf"
              download="Vandit_Shastri_Resume.pdf"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
            >
              <Download size={14} /> Download Curriculum Vitae (PDF)
            </a>
          </div>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {certificates.map((cert) => (
              <div key={cert.title} className="grid gap-4 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center">
                <span className="font-mono text-xs font-semibold text-primary">
                  {cert.issuer}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.date}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border/70 bg-card px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="inline-flex items-center gap-1 text-xs text-accent font-medium">
                    <CheckCircle2 size={14} /> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeUp>

      {/* Undergraduate Coursework Highlights */}
      <FadeUp>
      <section className="border-b border-border/80 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Academic Foundation</span>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl text-foreground">
              Core Coursework (LJ University).
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fundamental computer science and AI subjects completed during my degree:
            </p>
          </div>

          <StaggerParent className="mt-10 grid gap-6 sm:grid-cols-2">
            {academicHighlights.map((course) => (
              <StaggerItem
                key={course.title}
                className="rounded-xl border border-border bg-card/60 p-5 shadow-2xs"
              >
                <h4 className="font-display text-lg font-medium text-foreground">
                  {course.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {course.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </section>
      </FadeUp>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </PageTransition>
    </SiteShell>
  );
}