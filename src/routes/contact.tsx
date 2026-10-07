import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Send, Sparkles, ExternalLink } from "lucide-react";
import { useState } from "react";
import { SiteShell, PageIntro } from "@/components/site-shell";
import { PageTransition, FadeUp, StaggerParent, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vandit Shastri — Machine Learning Engineer" },
      { name: "description", content: "Get in touch with Vandit Shastri for machine learning engineering, conversational AI systems, and technical inquiries." },
      { property: "og:title", content: "Contact Vandit Shastri" },
      { property: "og:description", content: "Connect with Vandit Shastri for AI engineering, project collaborations, or technical inquiries." },
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
    desc: "Best for project collaborations, technical inquiries, and direct communication.",
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
    desc: "Open to remote collaborations and global engineering opportunities.",
  },
];

const inquiryTypes = [
  "Conversational AI & LLM Systems",
  "Machine Learning Engineering",
  "Research & Technical Inquiry",
  "General Networking",
];

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);
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

  const formattedSubject = `[Inquiry: ${selectedType}] from ${senderName || "Visitor"}`;
  const formattedBody = `Name: ${senderName}\nEmail: ${senderEmail}\nTopic: ${selectedType}\n\nMessage:\n${message}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vanditshastri@gmail.com&su=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;
  const mailtoUrl = `mailto:vanditshastri@gmail.com?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Try opening mailto client
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedBody);
    setMessageCopied(true);
    setTimeout(() => setMessageCopied(false), 2500);
  };

  return (
    <SiteShell>
      <PageTransition>
      <PageIntro
        eyebrow="Communication & Inquiries"
        title="A good conversation is a great prototype."
        copy="Whether you want to discuss AI architecture, collaborate on machine learning projects, or explore technical solutions, I would love to hear from you."
        highlight="Available for Engineering Inquiries & Discussions"
      />

      <FadeUp>
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
                I regularly check my inbox and respond promptly to engineering and collaboration inquiries.
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
            <StaggerParent className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href, desc }) => (
                <StaggerItem key={label}>
                  <a
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
                </StaggerItem>
              ))}
            </StaggerParent>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="rounded-3xl border border-border bg-card/85 p-6 sm:p-8 shadow-sm backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="eyebrow flex items-center gap-1">
                <Sparkles size={12} className="text-accent" /> Send Me a Message
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-medium text-foreground">
              Send Me a Message
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Fill in your note below to send via your mail client or open directly in Gmail Web.
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
                    placeholder="e.g. Alex Mercer"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface-soft/60 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
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
                  placeholder="Share details regarding your technical inquiry, project collaboration, or conversational AI discussion..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface-soft/60 p-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none resize-none"
                />
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 pt-1">
                <button
                  type="submit"
                  className="button-primary w-full justify-center py-2.5 text-xs font-medium"
                >
                  <Send size={14} />
                  <span>Send via Mail App</span>
                </button>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary w-full justify-center py-2.5 text-xs font-medium"
                >
                  <ExternalLink size={14} />
                  <span>Open in Gmail Web</span>
                </a>
              </div>

              {submitted && (
                <div className="rounded-xl border border-primary/30 bg-primary/10 p-3.5 text-center text-xs space-y-2">
                  <p className="text-foreground font-medium">
                    Message prepared! If your email app didn't open automatically:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1 text-xs text-primary-foreground font-medium"
                    >
                      <ExternalLink size={12} /> Open in Gmail
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1 text-xs text-foreground font-medium"
                    >
                      {messageCopied ? <Check size={12} className="text-accent" /> : <Copy size={12} />}
                      <span>{messageCopied ? "Message Copied!" : "Copy Note Text"}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
      </FadeUp>
      </PageTransition>
    </SiteShell>
  );
}