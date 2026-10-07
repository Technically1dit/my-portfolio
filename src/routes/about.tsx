import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Vandit — Vandit Shastri" },
    { name: "description", content: "Vandit Shastri’s journey from Computer Science at LJ University to machine learning engineering at Rootle." },
    { property: "og:title", content: "About Vandit — Vandit Shastri" },
    { property: "og:description", content: "A curious engineer building useful, scalable intelligent systems." },
    { property: "og:type", content: "profile" },
    { name: "twitter:card", content: "summary_large_image" },
  ] },),
  component: AboutPage,
});

function AboutPage() {
  return <SiteShell>
    <PageIntro eyebrow="About Vandit" title="Technical rigor, with room for curiosity." copy="Vandit works at the intersection of modern software engineering and intelligent automation. He likes ambitious problems, fast iterations, and systems that create tangible value." />
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-2">
      <div className="prose-panel"><p className="eyebrow">His practice</p><h2 className="mt-4 font-display text-4xl font-medium">From data pipelines to conversational agents.</h2><p>As a Machine Learning Engineer at Rootle, Vandit focuses on scalable AI-driven solutions. His interests span specialized conversational agents, high-performance Python pipelines, Generative AI, and the careful engineering needed to make models useful.</p><p>Before Rootle, he worked as a Python Developer at Actowiz Solutions, contributing to data infrastructure and analytics. That software foundation continues to shape how he approaches machine learning: systems first, iteration always.</p></div>
      <div className="quote-panel"><span className="font-display text-7xl text-accent">“</span><blockquote className="font-display text-3xl leading-snug">I am driven by technical rigor and continuous iteration.</blockquote><p className="mt-6 text-sm text-muted-foreground">— From Vandit’s professional profile</p></div>
    </section>
    <section className="border-y border-border/70 bg-surface-soft"><div className="mx-auto max-w-6xl px-6 py-24"><p className="eyebrow">Capabilities</p><div className="mt-9 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">{["Artificial Intelligence", "Machine Learning", "Python Engineering", "Generative AI", "Data Analysis", "Software Development"].map((skill) => <div className="bg-background p-7 font-display text-2xl" key={skill}>{skill}</div>)}</div></div></section>
  </SiteShell>;
}