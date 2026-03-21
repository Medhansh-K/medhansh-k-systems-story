import { motion } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { Brain, Cpu, Database, Network, Workflow, Bot, Pencil, BookOpen, Heart, StickyNote, Palette, Sparkles } from "lucide-react";

const systemsIcons = [
  { Icon: Brain, x: "10%", y: "20%", delay: 0 },
  { Icon: Cpu, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Database, x: "75%", y: "70%", delay: 1 },
  { Icon: Network, x: "15%", y: "75%", delay: 1.5 },
  { Icon: Workflow, x: "50%", y: "10%", delay: 0.8 },
  { Icon: Bot, x: "90%", y: "45%", delay: 1.2 },
];

const creativeIcons = [
  { Icon: Pencil, x: "10%", y: "20%", delay: 0 },
  { Icon: BookOpen, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Heart, x: "75%", y: "70%", delay: 1 },
  { Icon: StickyNote, x: "15%", y: "75%", delay: 1.5 },
  { Icon: Palette, x: "50%", y: "10%", delay: 0.8 },
  { Icon: Sparkles, x: "90%", y: "45%", delay: 1.2 },
];

const Hero = () => {
  const { mode } = useMode();
  const icons = mode === "systems" ? systemsIcons : creativeIcons;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Circular gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: mode === "systems"
              ? "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(190 100% 50% / 0.12) 0%, hsl(190 100% 40% / 0.05) 40%, transparent 70%)"
              : "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(38 100% 50% / 0.12) 0%, hsl(38 100% 40% / 0.05) 40%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Floating icons */}
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={`${mode}-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.5 + delay, duration: 0.6 }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 + i * 0.5, ease: "easeInOut" }}
          >
            <Icon size={24} className="text-accent" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="max-w-3xl">
          <motion.p
            key={`tagline-${mode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-accent text-sm tracking-[0.3em] uppercase font-display mb-6"
          >
            {mode === "systems"
              ? "Systems. Data. Intelligence."
              : "Stories. Curiosity. Exploration."}
          </motion.p>

          <motion.h1
            key={`headline-${mode}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8 ${
              mode === "creative" ? "font-creative" : "font-display"
            }`}
          >
            {mode === "systems" ? (
              <>
                <span className="text-foreground">Building systems that{" "}</span>
                <br />
                <span className="text-accent">turn data into</span>
                <br />
                <span className="text-accent">intelligence.</span>
              </>
            ) : (
              <>
                <span className="text-foreground">Exploring ideas through</span>
                <br />
                <span className="text-accent">code, stories, and frames.</span>
              </>
            )}
          </motion.h1>

          <motion.p
            key={`sub-${mode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-4 font-body"
          >
            {mode === "systems"
              ? "AI engineer and founder building tools that automate insight, reasoning, and decision-making."
              : "Builder by discipline. Creator by instinct."}
          </motion.p>

          <motion.div
            key={`btns-${mode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={() => document.getElementById(mode === "systems" ? "projects" : "creative")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-accent text-primary-foreground font-display text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              {mode === "systems" ? "Explore Systems" : "Explore Canvas"}
            </button>
            <button
              onClick={() => document.getElementById(mode === "systems" ? "about" : "journey")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-accent/40 text-accent font-display text-sm font-medium rounded-md hover:bg-accent/10 transition-colors"
            >
              {mode === "systems" ? "View Projects" : "View Journey"}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border border-accent/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
