import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, FileText, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { useState, type ReactNode } from "react";
import profileAsset from "@/assets/vandit-profile.pdf.asset.json";
import { InteractiveTerminal } from "@/components/terminal-modal";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About & Research" },
  { to: "/projects", label: "Projects & GitHub" },
  { to: "/achievements", label: "Academics & Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-105">
              <span className="font-mono text-sm font-bold">VS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
                Vandit Shastri<span className="text-accent">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground hidden sm:block">
                ML Engineer · Rootle
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-xs font-semibold uppercase tracking-wider text-primary border-b-2 border-primary py-1" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href={profileAsset.url}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-border bg-surface-soft/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card sm:inline-flex"
            >
              <FileText size={13} className="text-primary" />
              <span>Resume / CV</span>
            </a>

            <Link to="/contact" className="button-primary text-xs py-2 px-4 shadow-sm">
              <span>Contact</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-border bg-card/95 px-6 py-6 backdrop-blur-2xl md:hidden">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-sm font-bold text-primary" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/80 flex flex-col gap-3">
                <a
                  href={profileAsset.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-soft py-2.5 text-xs font-medium"
                >
                  <FileText size={14} /> Download CV / Profile
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/80 bg-surface-soft/60">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Column 1: Info */}
            <div className="space-y-3">
              <Link to="/" className="font-display text-xl font-bold">
                Vandit Shastri<span className="text-accent">.</span>
              </Link>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Machine Learning Engineer at Rootle & B.Tech Computer Science graduate from LJ University. Focused on conversational agents, scalable AI pipelines, and higher studies research.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Technically1dit"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vandit-shastri-5536ab273/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="mailto:vanditshastri@gmail.com"
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Email Vandit"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Explore</p>
              <ul className="mt-4 space-y-2 text-xs">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About & Statement of Purpose</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects & Code Repositories</Link></li>
                <li><Link to="/achievements" className="text-muted-foreground hover:text-foreground">Academics & Experience</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Admissions & Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Admissions & Higher Studies */}
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">Higher Studies</p>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Seeking Graduate / Master's admissions in Computer Science & AI at world-class global universities. Deep-links and verified credentials provided for committee review.
              </p>
            </div>

            {/* Column 4: Quick Action */}
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Get in Touch</p>
              <p className="text-xs text-muted-foreground">Ahmedabad, Gujarat, India</p>
              <a
                href="mailto:vanditshastri@gmail.com"
                className="inline-flex font-mono text-xs text-accent hover:underline"
              >
                vanditshastri@gmail.com
              </a>
              <div className="pt-2">
                <a
                  href={profileAsset.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary"
                >
                  <FileText size={12} className="text-primary" /> View Verified Profile PDF
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 text-xs text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} Vandit Shastri. All rights reserved.</span>
            <span className="font-mono text-[11px] flex items-center gap-1">
              <Sparkles size={11} className="text-accent" /> Built with TanStack Router, React 19 & Tailwind
            </span>
          </div>
        </div>
      </footer>

      {/* Interactive AI Shell Terminal */}
      <InteractiveTerminal />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
  highlight,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  highlight?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-gradient-to-b from-card via-surface-soft to-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary shadow-2xs">
          <Sparkles size={12} className="text-accent" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {copy}
        </p>
        {highlight && (
          <div className="mt-6 inline-block rounded-xl border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs text-accent">
            {highlight}
          </div>
        )}
      </div>
    </section>
  );
}