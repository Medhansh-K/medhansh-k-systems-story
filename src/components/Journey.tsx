import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";

const milestones = [
  { year: "2020", title: "First spark", description: "Discovered a fascination with data analytics and pattern recognition." },
  { year: "2021", title: "Building foundations", description: "Built early Python-based insight tools and data pipelines." },
  { year: "2022", title: "Datalis v1", description: "Launched the first version of Datalis — turning raw data into stories." },
  { year: "2023", title: "Public stages", description: "Presented at tech events and started exploring AI agent architectures." },
  { year: "2024", title: "Financial intelligence", description: "Built conversational AI tools for financial data analysis." },
  { year: "Now", title: "The intersection", description: "Working at the crossroads of systems thinking and creative exploration." },
];

const Journey = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { mode } = useMode();

  return (
    <section id="journey" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-accent text-xs tracking-widest uppercase font-display mb-4">Journey</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${mode === "creative" ? "font-creative" : "font-display"}`}>
            Not a resume. An exploration.
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent/20" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent/40 bg-background" />

                  <span className="text-xs text-accent font-display tracking-widest">{m.year}</span>
                  <h3 className={`text-lg font-semibold text-foreground mt-1 ${mode === "creative" ? "font-creative" : "font-display"}`}>
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mt-1">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
