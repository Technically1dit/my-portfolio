import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SiteShell, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Vandit Shastri" },
    { name: "description", content: "Contact Vandit Shastri for graduate study, research, and AI engineering opportunities." },
    { property: "og:title", content: "Contact — Vandit Shastri" },
    { property: "og:description", content: "Start a conversation with Vandit about research, higher studies, or intelligent systems." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

const contacts = [
  { icon: Mail, label: "Email", value: "vanditshastri@gmail.com", href: "mailto:vanditshastri@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Professional profile", href: "https://www.linkedin.com/in/vandit-shastri-5536ab273/" },
  { icon: Github, label: "GitHub", value: "@Technically1dit", href: "https://github.com/Technically1dit" },
];

function ContactPage() { return <SiteShell>
  <PageIntro eyebrow="Get in touch" title="A good conversation is a useful first prototype." copy="Admissions teams, research groups, and collaborators are welcome. The most direct way to reach Vandit is by email." />
  <section className="mx-auto max-w-4xl px-6 pb-28"><div className="space-y-3">{contacts.map(({ icon: Icon, label, value, href }) => <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="contact-row group" key={label}><Icon/><div><span>{label}</span><strong>{value}</strong></div><ArrowUpRight className="ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></a>)}</div></section>
  </SiteShell>; }