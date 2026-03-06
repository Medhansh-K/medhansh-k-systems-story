import { motion } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { mode } = useMode();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-sm tracking-widest uppercase font-display mb-6"
          >
            {mode === "systems" ? "Engineer · Builder · Architect" : "Creator · Storyteller · Explorer"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 ${
              mode === "creative" ? "font-creative" : "font-display"
            }`}
          >
            <span className="text-foreground">Hi, I'm Medhansh.</span>
            <br />
            <span className="text-gradient text-3xl md:text-4xl lg:text-5xl font-light mt-2 block">
              I build intelligent systems and explore ideas through creativity.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-4 font-body"
          >
            AI & Data Science engineer focused on turning complex data into meaningful intelligence.
            <br />
            Curious about systems, storytelling, and the future of human-AI collaboration.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm text-muted-foreground/70 italic font-body mb-10"
          >
            Builder by discipline. Creator by instinct.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-foreground text-primary-foreground font-display text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById("creative")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-border text-foreground font-display text-sm font-medium rounded-md hover:bg-secondary transition-colors"
            >
              Explore Creative Work
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
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
