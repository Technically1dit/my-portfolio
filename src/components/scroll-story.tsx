import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Play, Pause, ChevronRight, Activity, Cpu, Sparkles, Compass } from "lucide-react";
import frame1 from "@/assets/scroll-01.jpg";
import frame2 from "@/assets/scroll-02.jpg";
import frame3 from "@/assets/scroll-03.jpg";
import frame4 from "@/assets/scroll-04.jpg";

interface StoryFrame {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  note: string;
  telemetry: {
    status: string;
    layer: string;
    metric: string;
  };
  tags: string[];
}

const frames: StoryFrame[] = [
  {
    id: "01",
    image: frame1,
    title: "Curiosity & Mathematical Genesis",
    subtitle: "From Notebook Sketches to Core Equations",
    note: "Every intelligent system starts with an inquisitive pencil sketch: understanding loss landscapes, backpropagation, and data distributions before writing a single line of production code.",
    telemetry: {
      status: "INIT_CONCEPTUAL_LAYER",
      layer: "Mathematical Foundations & EDA",
      metric: "Loss: 0.042 ↓ (Converging)",
    },
    tags: ["Exploratory Data Analysis", "Linear Algebra", "Calculus & Optimization"],
  },
  {
    id: "02",
    image: frame2,
    title: "Latent Representations & Pipelines",
    subtitle: "High-Performance Python & Vector Spaces",
    note: "Transforming raw unstructured data into high-dimensional embeddings. Building resilient, asynchronous Python ingestion engines with precision and high throughput.",
    telemetry: {
      status: "EMBEDDING_VECTORIZATION",
      layer: "AsyncIO ETL & Token Spaces",
      metric: "Throughput: 12.4k tokens/sec",
    },
    tags: ["High-Performance Python", "FastAPI", "Vector Embeddings"],
  },
  {
    id: "03",
    image: frame3,
    title: "Agentic Intelligence & Production",
    subtitle: "Conversational Agents at Rootle",
    note: "Engineering multi-agent reasoning loops, context orchestration, and scalable microservices. Deploying production ML systems designed to reliably handle real-world demands.",
    telemetry: {
      status: "AGENT_ORCHESTRATION_ACTIVE",
      layer: "LLM Pipeline & Tool Calling",
      metric: "Inference Latency: <18ms",
    },
    tags: ["Machine Learning Engineer", "Rootle AI Systems", "Tool-Calling Agents"],
  },
  {
    id: "04",
    image: frame4,
    title: "Continuous Research & Scalable Frontiers",
    subtitle: "Expanding Machine Learning Horizons",
    note: "Deepening theoretical understanding, exploring multi-modal agent reasoning, and building scalable artificial intelligence systems for tomorrow's complex workflows.",
    telemetry: {
      status: "CONTINUOUS_RESEARCH_ACTIVE",
      layer: "Scalable Systems & Innovation",
      metric: "State: Ready for Scale",
    },
    tags: ["Applied Machine Learning", "Advanced AI Systems", "Continuous Innovation"],
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFrame, setActiveFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const reduceMotion = useReducedMotion();

  // Scroll synchronization
  useEffect(() => {
    if (reduceMotion) return;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      const frameIdx = Math.min(frames.length - 1, Math.floor(progress * frames.length));
      setActiveFrame(frameIdx);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion]);

  // Auto-play frame interval if user clicks Play Demo
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = frames[activeFrame];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[380vh] border-y border-border/80 bg-surface-soft/60"
    >
      {/* Sticky Frame Player Viewport */}
      <div className="sticky top-16 grid h-[calc(100vh-4rem)] grid-cols-1 overflow-hidden lg:grid-cols-[1.1fr_1.2fr]">
        
        {/* Left Story Panel */}
        <div className="relative z-10 flex flex-col justify-between px-6 py-8 sm:py-12 lg:pl-[max(1.5rem,calc((100vw-72rem)/2))] lg:pr-12">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between">
              <span className="eyebrow flex items-center gap-1.5">
                <Compass size={13} className="text-primary" /> On-Scroll Interactive Sequence
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-foreground"
                title={isPlaying ? "Pause auto sequence" : "Auto play frames"}
              >
                {isPlaying ? <Pause size={12} className="text-accent" /> : <Play size={12} className="text-primary" />}
                <span>{isPlaying ? "Pause Demo" : "Play Sequence"}</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-6 space-y-3"
              >
                <div className="font-mono text-xs font-semibold text-primary">
                  FRAME_PHASE_0{activeFrame + 1} // 04
                </div>
                <h2 className="font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  {current.title}
                </h2>
                <p className="font-mono text-xs text-accent">{current.subtitle}</p>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {current.note}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-foreground/80 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Telemetry HUD & Scrub Progress Bar */}
          <div className="mt-8 space-y-4 border-t border-border/60 pt-6">
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-border/70 bg-card/60 p-3.5 backdrop-blur-md">
              <div>
                <p className="font-mono text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                  <Activity size={10} className="text-primary" /> State Telemetry
                </p>
                <p className="font-mono text-xs font-semibold text-foreground truncate mt-0.5">
                  {current.telemetry.status}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                  <Cpu size={10} className="text-accent" /> System Metric
                </p>
                <p className="font-mono text-xs font-semibold text-accent truncate mt-0.5">
                  {current.telemetry.metric}
                </p>
              </div>
            </div>

            {/* Interactive Frame Navigator */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {frames.map((frame, index) => (
                  <button
                    key={frame.id}
                    onClick={() => setActiveFrame(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeFrame
                        ? "w-8 bg-accent"
                        : "w-3 bg-border hover:bg-muted-foreground/40"
                    }`}
                    aria-label={`Jump to Frame ${index + 1}`}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                0{activeFrame + 1} / 04 (Scroll or Click)
              </span>
            </div>
          </div>
        </div>

        {/* Right Media Frame Player */}
        <div className="relative h-full overflow-hidden bg-muted/20">
          {frames.map((frame, index) => (
            <motion.div
              key={frame.id}
              className="absolute inset-0 h-full w-full"
              initial={false}
              animate={{
                opacity: index === activeFrame ? 1 : 0,
                scale: index === activeFrame ? 1 : 1.05,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={frame.image}
                alt={frame.title}
                width={960}
                height={1200}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/20 lg:bg-gradient-to-r lg:from-surface-soft lg:via-transparent lg:to-transparent" />
            </motion.div>
          ))}

          {/* Floating Live Architecture Overlay Badge */}
          <div className="absolute bottom-6 right-6 z-20 hidden rounded-xl border border-border/80 bg-card/85 p-3.5 shadow-xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold">
              <Sparkles size={13} className="text-accent" />
              <span>NEURAL_FLOW // VANDIT_SYS</span>
            </div>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
              Layer: {current.telemetry.layer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}