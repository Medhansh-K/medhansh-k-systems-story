import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";

const milestones = [
  {
    year: "2020",
    title: "The first spark",
    description: "Started freelancing in 11th/12th grade — building e-commerce websites for clients and learning the ropes of shipping real products.",
  },
  {
    year: "2021",
    title: "First revenue milestone",
    description: "Scaled freelancing to ₹70–80K in revenue. Gained real-world experience in web development, client management, and delivering under deadlines.",
  },
  {
    year: "2022",
    title: "Engineering + Entrepreneurship",
    description: "Started engineering. Launched a hoodie brand as a side venture, scaling it to ₹15K MRR before the next chapter called.",
  },
  {
    year: "2023",
    title: "Platforms & pivots",
    description: "Closed the hoodie brand. Built InternHub — an internship-providing platform that onboarded 500+ students and 10 internship providers.",
  },
  {
    year: "2024",
    title: "Recognition & community",
    description: "Closed InternHub. Became Grand Finalist at Smart India Hackathon 2024. Took on the role of Blockchain Lead at Google Developers Group on Campus. Started writing blogs and sharing ideas publicly.",
  },
  {
    year: "2025",
    title: "Datalis — the main quest",
    description: "Founded Datalis in June 2025 — an AI data intelligence platform turning raw datasets into insight reports. One year in and building.",
    active: true,
  },
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
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-display">Journey</p>
          </div>

          <h2 className={`text-4xl md:text-6xl font-bold mb-16 leading-tight ${mode === "creative" ? "font-creative" : "font-display"}`}>
            Not a resume. A story.
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-[7px] top-2 bottom-2 w-px origin-top"
              style={{ background: "linear-gradient(180deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.1) 100%)" }}
            />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 * i, duration: 0.5 }}
                  className="relative pl-10 group"
                >
                  {/* Dot — active milestone pulses */}
                  <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 bg-background transition-colors duration-300 ${(m as any).active
                      ? "border-accent bg-accent/20"
                      : "border-accent/40 group-hover:border-accent/70"
                    }`}>
                    {(m as any).active && (
                      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                    )}
                  </div>

                  <span className="text-xs text-accent font-display tracking-widest">{m.year}</span>
                  <h3 className={`text-lg font-semibold text-foreground mt-1 ${mode === "creative" ? "font-creative" : "font-display"}`}>
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mt-1.5 leading-relaxed">
                    {m.description}
                  </p>
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
