import { motion } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Systems mode — technical skills & bio
const systemsIntersections = [
  { label: "AI Systems", icon: "🧠", desc: "Intelligent architectures" },
  { label: "Data Intelligence", icon: "📊", desc: "Insight-driven decisions" },
  { label: "Product Design", icon: "🛠", desc: "Human-centered craft" },
  { label: "Full-Stack Dev", icon: "⚙️", desc: "End-to-end engineering" },
];

const systemsBio = {
  headline: "Curiosity as a compass.",
  paragraphs: [
    "Medhansh is a builder driven by curiosity about how systems work and how ideas evolve. His work sits at the intersection of AI systems, data intelligence, product design, and full-stack development.",
    "He builds tools that automate reasoning and decision-making — from AI-powered data platforms to agent-based audit systems. Every project is driven by a belief that well-designed systems should feel invisible.",
  ],
};

// Creative mode — creative skills & bio
const creativeIntersections = [
  { label: "Storytelling", icon: "✍️", desc: "Narratives that connect" },
  { label: "Cinematography", icon: "🎬", desc: "Visual language" },
  { label: "Writing", icon: "📖", desc: "Ideas in form" },
  { label: "Creative Experiments", icon: "🎨", desc: "Pushing boundaries" },
];

const creativeBio = {
  headline: "The other side of thinking.",
  paragraphs: [
    "Beyond code, Medhansh explores ideas through writing, cinematography, and creative experiments. He's drawn to storytelling that blurs the line between logic and emotion.",
    "From mythological sci-fi narratives to visual essays and concept films — his creative work investigates what it means to be human in an age shaped by technology and ancient wisdom.",
  ],
};

const About = () => {
  const { mode } = useMode();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const isCreative = mode === "creative";
  const intersections = isCreative ? creativeIntersections : systemsIntersections;
  const bio = isCreative ? creativeBio : systemsBio;

  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-display">About</p>
          </div>

          {/* Headline */}
          <motion.h2
            key={`about-headline-${mode}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-4xl md:text-6xl font-bold mb-16 leading-tight ${isCreative ? "font-creative" : "font-display"}`}
          >
            {bio.headline}
          </motion.h2>

          {/* Bento Grid */}
          <motion.div
            key={`about-grid-${mode}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {/* Bio tile — full width on mobile, 2 cols × 2 rows on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="col-span-2 md:row-span-2 gradient-card border border-border rounded-2xl p-6 md:p-10 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {bio.paragraphs.map((text, i) => (
                  <p
                    key={i}
                    className={`text-sm md:text-[17px] leading-[1.85] font-body ${i === 0 ? "text-secondary-foreground" : "text-muted-foreground"}`}
                  >
                    {text}
                  </p>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px w-20 mt-8 origin-left"
                style={{ background: "linear-gradient(90deg, hsl(var(--accent)), transparent)" }}
              />
            </motion.div>

            {/* Skill cards */}
            {intersections.map((item, i) => (
              <motion.div
                key={`${mode}-${item.label}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group relative gradient-card border border-border rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center gap-2 md:gap-3 hover:border-accent/40 transition-all duration-300 hover:glow-shadow aspect-square"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(circle at center, hsl(var(--accent) / 0.05) 0%, transparent 70%)" }}
                />
                <span className="text-2xl md:text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-xs md:text-base font-display text-foreground relative z-10 font-medium">
                  {item.label}
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground relative z-10 leading-snug">
                  {item.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
