import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from "lucide-react";

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

const COMMAND_HELP = [
  { cmd: "bio", desc: "Brief summary of Vandit's background & role" },
  { cmd: "research", desc: "Higher studies & graduate research interests" },
  { cmd: "skills", desc: "Core ML, Python & Software engineering stack" },
  { cmd: "experience", desc: "Industry timeline (Rootle, Actowiz)" },
  { cmd: "projects", desc: "Key software & AI projects" },
  { cmd: "certs", desc: "Verified certifications (IBM, Great Learning)" },
  { cmd: "contact", desc: "Get email, LinkedIn, and GitHub links" },
  { cmd: "clear", desc: "Clear the terminal output" },
];

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      response: (
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <p className="font-semibold text-primary">Vandit Shastri — AI & Systems Command Shell v2.4</p>
          <p>Type <code className="text-accent font-bold">help</code> to list available commands or click the shortcut chips below.</p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleRunCommand = (cmdStr: string) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    if (raw === "clear" || raw === "cls") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let response: React.ReactNode;

    switch (raw) {
      case "help":
        response = (
          <div className="grid grid-cols-1 gap-1 text-xs sm:grid-cols-2">
            {COMMAND_HELP.map((c) => (
              <div key={c.cmd} className="flex items-center gap-2">
                <span className="font-mono font-bold text-accent">{c.cmd}</span>
                <span className="text-muted-foreground">— {c.desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "bio":
        response = (
          <div className="space-y-1 text-xs">
            <p className="font-medium text-foreground">Vandit Shastri | Machine Learning Engineer & CS Graduate</p>
            <p className="text-muted-foreground">
              Based in Ahmedabad, India. Experienced in building conversational AI agents, high-performance Python data pipelines, and scalable microservices.
              Known for a jolly, collaborative demeanor coupled with rigorous engineering craftsmanship.
            </p>
          </div>
        );
        break;

      case "research":
      case "higher-studies":
        response = (
          <div className="space-y-1.5 text-xs">
            <p className="font-bold text-primary">Academic Ambition & Higher Studies Focus:</p>
            <p className="text-muted-foreground">
              Vandit is pursuing graduate / Master's admissions abroad in Computer Science & Artificial Intelligence.
            </p>
            <ul className="list-disc pl-4 text-muted-foreground space-y-0.5">
              <li>Autonomous Multi-Agent Orchestration & Reasoning</li>
              <li>Scalable LLM Inference, Fine-Tuning & Quantization</li>
              <li>High-Throughput Python Asynchronous Data Engineering</li>
              <li>Applied Deep Learning & Exploratory Data Analysis</li>
            </ul>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-1.5 text-xs">
            <div>
              <span className="font-bold text-foreground">AI / ML:</span>{" "}
              <span className="text-muted-foreground">Machine Learning, Deep Learning, Generative AI, Conversational Agents, LLM Prompting, RAG, EDA</span>
            </div>
            <div>
              <span className="font-bold text-foreground">Languages & Frameworks:</span>{" "}
              <span className="text-muted-foreground">Python (AsyncIO, FastAPI, Scikit-Learn, Pandas, NumPy), JavaScript, TypeScript, React, HTML5/CSS3</span>
            </div>
            <div>
              <span className="font-bold text-foreground">Core Tools:</span>{" "}
              <span className="text-muted-foreground">Git, GitHub, Linux, REST APIs, Web Scraping / Data ETL</span>
            </div>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-bold text-foreground">Rootle (1 yr 2 mos total)</p>
              <p className="text-primary font-mono text-[11px]">Machine Learning Engineer (May 2026 – Present)</p>
              <p className="text-muted-foreground">Architecting AI-driven conversational solutions, system pipelines, and model integrations.</p>
              <p className="text-primary font-mono text-[11px] mt-1">Machine Learning Intern (Sep 2025 – May 2026)</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Actowiz Solutions (9 mos)</p>
              <p className="text-primary font-mono text-[11px]">Python Developer (Jan 2025 – Sep 2025)</p>
              <p className="text-muted-foreground">Data infrastructure, automated extraction, Python scripting and ETL pipelines.</p>
            </div>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-1.5 text-xs">
            <p><strong className="text-accent">1. job-helper (Python):</strong> Automated utility for career workflows, resume analysis, and job tooling.</p>
            <p><strong className="text-accent">2. ShowTime (React/Vite):</strong> Interactive web application demonstrating modern frontend architecture.</p>
            <p><strong className="text-accent">3. Zen-Flow (HTML/JS):</strong> Wellness and meditation web platform with class scheduling and event discovery.</p>
            <p className="text-muted-foreground italic">Type 'github' to view all public repositories.</p>
          </div>
        );
        break;

      case "certs":
      case "certifications":
        response = (
          <div className="space-y-1 text-xs">
            <p><strong className="text-foreground">IBM:</strong> Exploratory Data Analysis for Machine Learning (Jul 30, 2024)</p>
            <p><strong className="text-foreground">Great Learning:</strong> Python for Machine Learning and Data Science (May 5, 2024)</p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-xs">
            <p><strong>Email:</strong> <a href="mailto:vanditshastri@gmail.com" className="text-accent hover:underline">vanditshastri@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vandit-shastri-5536ab273/" target="_blank" rel="noreferrer" className="text-accent hover:underline">in/vandit-shastri-5536ab273</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Technically1dit" target="_blank" rel="noreferrer" className="text-accent hover:underline">github.com/Technically1dit</a></p>
          </div>
        );
        break;

      case "github":
        response = (
          <div className="text-xs">
            <p>GitHub Profile: <a href="https://github.com/Technically1dit" target="_blank" rel="noreferrer" className="text-accent underline">https://github.com/Technically1dit</a></p>
            <p className="text-muted-foreground mt-0.5">Explore public repositories: job-helper, ShowTime, Zen-Flow.</p>
          </div>
        );
        break;

      default:
        response = (
          <div className="text-xs text-destructive">
            Command not recognized: <span className="font-mono font-semibold">{raw}</span>. Type <span className="text-accent font-mono font-bold cursor-pointer underline" onClick={() => handleRunCommand("help")}>help</span> for a list of commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, response }]);
    setInputVal("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 rounded-full border border-border bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:border-primary/50 hover:bg-card"
          aria-label="Toggle Interactive CLI Terminal"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
            <TerminalIcon size={14} />
          </div>
          <span className="font-mono text-xs font-medium text-foreground">
            {isOpen ? "Close Terminal" : "Vandit Shell"}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
        </button>
      </div>

      {/* Terminal Window Modal / Drawer */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ${
            isExpanded
              ? "inset-4 sm:inset-10"
              : "bottom-20 right-4 w-[calc(100vw-2rem)] sm:w-[480px] sm:right-6 h-[440px]"
          } flex flex-col rounded-xl border border-border bg-card/95 shadow-2xl backdrop-blur-2xl`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-surface-soft/60">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-destructive/80" />
                <span className="h-3 w-3 rounded-full bg-accent/80" />
                <span className="h-3 w-3 rounded-full bg-primary/80" />
              </div>
              <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Sparkles size={12} className="text-accent" /> vandit@system:~
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded p-1 hover:bg-muted hover:text-foreground"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded p-1 hover:bg-muted hover:text-foreground"
                title="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Quick Chip Suggestions */}
          <div className="flex flex-wrap gap-1.5 border-b border-border/50 bg-background/50 px-3 py-2">
            {["bio", "research", "skills", "experience", "projects", "certs", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleRunCommand(cmd)}
                className="rounded-md border border-border/60 bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Output Content Area */}
          <div className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-1.5 text-primary font-medium">
                  <span className="text-muted-foreground">$</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-3 border-l border-border/60">{item.response}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRunCommand(inputVal);
            }}
            className="flex items-center gap-2 border-t border-border/80 bg-background/80 px-3 py-2.5"
          >
            <span className="font-mono text-xs font-bold text-accent">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g. 'research', 'skills', 'help')..."
              className="flex-1 bg-transparent font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="rounded p-1 text-muted-foreground hover:text-primary transition-colors"
              title="Execute"
            >
              <CornerDownLeft size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
