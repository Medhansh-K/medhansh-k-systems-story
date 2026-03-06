import { motion } from "framer-motion";
import { useMode } from "@/contexts/ModeContext";
import { useInView } from "framer-motion";
import { useRef } from "react";

const intersections = [
  { label: "AI Systems", icon: "🧠" },
  { label: "Data Intelligence", icon: "📊" },
  { label: "Product Design", icon: "🛠" },
  { label: "Storytelling", icon: "✍️" },
];

const About = () => {
  const { mode } = useMode();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-accent text-xs tracking-widest uppercase font-display mb-4">About</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-10 ${mode === "creative" ? "font-creative" : "font-display"}`}>
            Curiosity as a compass.
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-secondary-foreground leading-relaxed font-body">
                Medhansh is a builder driven by curiosity about how systems work and how ideas evolve. His work sits at the intersection of AI systems, data intelligence, product design, and storytelling.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                He enjoys building tools that augment human thinking, while also exploring ideas through writing, cinematography, and creative experiments. Rather than separating logic and creativity, his work treats them as two sides of the same exploration.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {intersections.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="gradient-card border border-border rounded-lg p-5 flex flex-col items-center justify-center text-center gap-2 hover:border-accent/30 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-display text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
