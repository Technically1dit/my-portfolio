import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Vandit Shastri" },
    { name: "description", content: "Selected public projects by Vandit Shastri across web development, React, and career tools." },
    { property: "og:title", content: "Projects — Vandit Shastri" },
    { property: "og:description", content: "Selected public work, presented honestly as an evolving engineering practice." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProjectsPage,
});

const work = [
  { name: "Zen-Flow", category: "Web platform", copy: "An online platform for yoga and mindfulness, with class access, meditation sessions, and event listings.", stack: ["HTML", "JavaScript"], href: "https://github.com/Technically1dit/Zen-Flow" },
  { name: "ShowTime", category: "Frontend exploration", copy: "A React and Vite project reflecting Vandit’s developing frontend practice and product-building range.", stack: ["React", "Vite"], href: "https://github.com/Technically1dit/ShowTime" },
  { name: "job-helper", category: "Career utility", copy: "An early-stage React project exploring a clearer, more useful workflow around career assistance.", stack: ["React", "Vite"], href: "https://github.com/Technically1dit/job-helper" },
];

function ProjectsPage() { return <SiteShell>
  <PageIntro eyebrow="Selected projects" title="Ideas, made inspectable." copy="A candid look at Vandit’s public work. The portfolio avoids invented outcomes: every project links directly to its source so reviewers can inspect the thinking and implementation." />
  <section className="mx-auto max-w-6xl px-6 pb-28"><div className="space-y-5">{work.map((item, index) => <a className="project-row group" href={item.href} target="_blank" rel="noreferrer" key={item.name}><span className="font-mono text-xs text-primary">0{index + 1}</span><div><p className="eyebrow">{item.category}</p><h2 className="mt-2 font-display text-4xl font-medium">{item.name}</h2><p className="mt-3 max-w-xl leading-7 text-muted-foreground">{item.copy}</p><div className="mt-5 flex gap-2">{item.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div></div><ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>)}</div></section>
  <section className="border-y border-border/70 bg-surface-soft"><div className="mx-auto max-w-6xl px-6 py-20"><p className="eyebrow">Professional focus</p><h2 className="mt-4 max-w-xl font-display text-4xl font-medium">The strongest work also lives beyond public repositories.</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">At Rootle, Vandit works on scalable AI solutions, conversational agents, and Python pipelines. Specific client work and results remain private unless published by the company.</p></div></section>
  </SiteShell>; }