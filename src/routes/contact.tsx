import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Send, Sparkles, GraduationCap } from "lucide-react";
import { useState } from "react";
import { SiteShell, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vandit Shastri — Admissions, Research & Collaborations" },
      { name: "description", content: "Get in touch with Vandit Shastri for graduate study admissions, AI research inquiries, and machine learning collaborations." },
      { property: "og:title", content: "Contact Vandit Shastri" },
      { property: "og:description", content: "Connect with Vandit Shastri for higher studies opportunities, research, or engineering inquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    icon: Mail,
    label: "Primary Email",
    value: "vanditshastri@gmail.com",
    href: "mailto:vanditshastri@gmail.com",
    desc: "Best for admissions, research inquiries, and direct communication.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    value: "in/vandit-shastri-5536ab273",
    href: "https://www.linkedin.com/in/vandit-shastri-5536ab273/",
    desc: "Connect for professional updates, endorsements, and networking.",
  },
  {
    icon: Github,
    label: "GitHub Account",
    value: "@Technically1dit",
    href: "https://github.com/Technically1dit",
    desc: "Inspect open-source code repositories, scripts, and applications.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
    href: "https://maps.google.com/?q=Ahmedabad,+Gujarat,+India",
    desc: "Open to international relocation for graduate studies abroad.",
  },
];

const inquiryTypes = [
  "Graduate Admissions / Academic Research",
  "AI & ML Engineering Collaboration",
  "Technical Inquiry",
  "General Networking",
];

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState(inquiryTypes[0]);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vanditshastri@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with prefilled contents
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${selectedType}] from ${senderName || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\nInquiry Type: ${selectedType}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:vanditshastri@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Admissions & Communication Hub"
        title="A good conversation is a great prototype."
        copy="Whether you are on an admissions committee evaluating graduate candidates, a professor looking for research assistants, or an engineering lead exploring AI systems, Vandit would love to connect."
        highlight="Actively Seeking Higher Studies Abroad (MS in CS/AI)"
      />

      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          
          {/* Left Column: Direct Channels & Copy Trigger */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow">Direct Channels</p>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground">
                Get in touch anytime.
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Vandit regularly checks his inbox and responds promptly to academic and engineering inquiries.
              </p>
            </div>

            {/* Quick Copy Email Box */}
            <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">Direct Email</span>
                <p className="font-mono text-xs sm:text-sm font-medium text-foreground">vanditshastri@gmail.com</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-medium text-foreground shadow-2xs transition-all hover:border-primary"
              >
                {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Contact Rows */}
            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href, desc }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="contact-row group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                    <strong className="block font-display text-base font-medium text-foreground truncate mt-0.5">
                      {value}
                    </strong>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="rounded-3xl border border-border bg-card/85 p-6 sm:p-8 shadow-sm backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="eyebrow flex items-center gap-1">
                <Sparkles size={12} className="text-accent" /> Send an Inquiry
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-medium text-foreground">
              Draft a message to Vandit
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Select your topic and submit to open your default mail client with pre-formatted details.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Inquiry Type Chips */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                  Topic of Discussion
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {inquiryTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`rounded-lg px-2.5 py-1 text-xs transition-all ${
                        selectedType === type
                          ? "border border-primary bg-primary text-primary-foreground font-medium"
                          : "border border-border/80 bg-surface-soft text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Emily Hayes"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface-soft/60 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Email / Affiliation
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. emily@cs.stanford.edu"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface-soft/60 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Message / Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details regarding graduate admissions, research topics, or engineering collaborations..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface-soft/60 p-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="button-primary w-full justify-center py-3 text-xs sm:text-sm font-medium"
              >
                <Send size={15} />
                <span>Launch Mail Client with Pre-filled Note</span>
              </button>

              {submitted && (
                <div className="rounded-xl border border-primary/40 bg-primary/10 p-3 text-center text-xs text-primary">
                  Mail composer triggered! If your client didn't open automatically, you can email directly at{" "}
                  <strong>vanditshastri@gmail.com</strong>.
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </SiteShell>
  );
}