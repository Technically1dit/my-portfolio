import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import frame1 from "@/assets/scroll-01.jpg";
import frame2 from "@/assets/scroll-02.jpg";
import frame3 from "@/assets/scroll-03.jpg";
import frame4 from "@/assets/scroll-04.jpg";

const frames = [
  { image: frame1, chapter: "Curiosity", note: "A question, pencilled before it is engineered." },
  { image: frame2, chapter: "Sketches", note: "Ideas begin to connect and take shape." },
  { image: frame3, chapter: "Systems", note: "Python, data, and models turn thought into utility." },
  { image: frame4, chapter: "Window", note: "Built here. Ready to learn, research, and contribute globally." },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFrame, setActiveFrame] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      setActiveFrame(Math.min(frames.length - 1, Math.floor(progress * frames.length)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative h-[340vh] border-y border-border/70 bg-surface-soft">
      <div className="sticky top-16 grid h-[calc(100vh-4rem)] overflow-hidden lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 lg:pl-[max(1.5rem,calc((100vw-72rem)/2))] lg:pr-12">
          <p className="eyebrow">A scroll story in four frames</p>
          <p className="mt-5 font-display text-5xl font-medium sm:text-6xl">{frames[activeFrame].chapter}</p>
          <p className="mt-4 max-w-sm leading-7 text-muted-foreground">{frames[activeFrame].note}</p>
          <div className="mt-9 flex items-center gap-3" aria-label={`Frame ${activeFrame + 1} of ${frames.length}`}>
            {frames.map((frame, index) => (
              <span key={frame.chapter} className={`story-dot ${index === activeFrame ? "story-dot-active" : ""}`} />
            ))}
            <span className="ml-2 font-mono text-xs text-muted-foreground">0{activeFrame + 1} / 04</span>
          </div>
        </div>
        <div className="relative h-full overflow-hidden">
          {frames.map((frame, index) => (
            <motion.img
              key={frame.chapter}
              src={frame.image}
              alt="A notebook sketch progressively becoming an intelligent system"
              width={960}
              height={1200}
              loading={index === 0 ? "eager" : "lazy"}
              animate={{ opacity: index === activeFrame ? 1 : 0, scale: index === activeFrame ? 1 : 1.025 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ))}
          <div className="absolute inset-0 bg-story-shade" />
        </div>
      </div>
    </section>
  );
}