import { createFileRoute } from "@tanstack/react-router";
import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { SiteShell, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/achievements")({
  head: () => ({ meta: [
    { title: "Achievements & Experience — Vandit Shastri" },
    { name: "description", content: "Vandit Shastri’s education, experience, and verified machine learning certificates." },
    { property: "og:title", content: "Achievements & Experience — Vandit Shastri" },
    { property: "og:description", content: "A verified record of education, professional growth, and continuous learning." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AchievementsPage,
});

function AchievementsPage() { return <SiteShell>
  <PageIntro eyebrow="The record" title="Progress, without the puffery." copy="A verified timeline of academic work, professional growth, and focused learning—presented for people who value evidence." />
  <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-28 md:grid-cols-3">
    <article className="record-card"><GraduationCap/><p className="eyebrow mt-10">Education</p><h2>BTech, Computer Science</h2><p>LJ University, Ahmedabad</p><span>September 2022 — April 2026</span></article>
    <article className="record-card"><BriefcaseBusiness/><p className="eyebrow mt-10">Current role</p><h2>Machine Learning Engineer</h2><p>Rootle, Ahmedabad</p><span>May 2026 — present</span></article>
    <article className="record-card"><Award/><p className="eyebrow mt-10">Experience</p><h2>Python Developer</h2><p>Actowiz Solutions</p><span>January — September 2025</span></article>
  </section>
  <section className="border-y border-border/70 bg-surface-soft"><div className="mx-auto max-w-6xl px-6 py-24"><p className="eyebrow">Certificates</p><div className="mt-9 divide-y divide-border border-y border-border"><div className="certificate-row"><span>2024</span><div><h3>Exploratory Data Analysis for Machine Learning</h3><p>IBM · completed July 30, 2024</p></div></div><div className="certificate-row"><span>2024</span><div><h3>Python for Machine Learning and Data Science</h3><p>Great Learning · completed May 5, 2024</p></div></div></div></div></section>
  </SiteShell>; }