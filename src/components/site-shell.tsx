import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link to="/" className="font-display text-lg font-medium">
            Vandit Shastri<span className="text-accent">.</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-sm text-primary" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="button-primary">
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <Link to="/" className="font-display font-medium text-foreground/75">Vandit Shastri</Link>
          <span>Sketching intelligence into the world.</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-intro">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-[15ch] font-display text-5xl font-medium leading-[1.04] sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{copy}</p>
      </div>
    </section>
  );
}