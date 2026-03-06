import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";
import { BookOpen, Camera, Lightbulb } from "lucide-react";

const creativeWorks = [
  {
    category: "Writing",
    title: "Sarvam",
    description: "A mythological sci-fi exploration of civilization and intelligence — where ancient systems meet future consciousness.",
    icon: BookOpen,
    action: "Read",
  },
  {
    category: "Cinematography",
    title: "Visual Stories",
    description: "Visual storytelling and travel frames — capturing moments that sit between documentation and art.",
    icon: Camera,
    action: "Watch",
  },
  {
    category: "Ideas",
    title: "Concept Essays",
    description: "Essays about AI, humanity, and future systems — exploring the boundaries between technology and philosophy.",
    icon: Lightbulb,
    action: "Explore",
  },
];

const Creative = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { mode } = useMode();

  return (
    <section id="creative" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-xs tracking-widest uppercase font-display mb-4">Creative</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${mode === "creative" ? "font-creative" : "font-display"}`}>
            {mode === "creative" ? "The other side of thinking." : "Beyond the code."}
          </h2>
        </motion.div>

        <div className={`grid gap-6 ${mode === "creative" ? "md:grid-cols-1 max-w-2xl mx-auto" : "md:grid-cols-3"}`}>
          {creativeWorks.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className={`group border border-border rounded-xl overflow-hidden hover:border-muted-foreground/30 transition-all duration-500 ${
                mode === "creative" ? "gradient-subtle p-10" : "gradient-card p-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <work.icon size={18} className="text-muted-foreground" />
                <span className="text-xs tracking-widest uppercase text-muted-foreground font-display">{work.category}</span>
              </div>

              <h3 className={`text-xl font-semibold text-foreground mb-3 ${mode === "creative" ? "font-creative text-2xl" : "font-display"}`}>
                {work.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">{work.description}</p>

              <button className="text-xs font-display text-foreground border border-border px-4 py-2 rounded-md hover:bg-secondary transition-colors">
                {work.action}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creative;
