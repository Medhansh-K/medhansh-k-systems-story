import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";
import { BookOpen, Camera, PenLine, ExternalLink } from "lucide-react";

const creativeWorks = [
  {
    category: "Writing",
    title: "Medium Blogs",
    description: "Essays and ideas exploring AI, systems thinking, technology, and the human side of building — published on Medium.",
    icon: PenLine,
    action: "Read",
    link: "https://medium.com/@imperialion45",
  },
  {
    category: "Cinematography",
    title: "YouTube Vlogs",
    description: "Visual storytelling, travel frames, and behind-the-scenes moments — capturing life between builds and ideas.",
    icon: Camera,
    action: "Watch",
    link: "https://www.youtube.com/@JustMk-in",
  },
  {
    category: "Book",
    title: "Project Sarvam",
    description: "Book 1: When Time Stood Still — a mythological sci-fi exploration of civilization and intelligence, where ancient systems meet future consciousness.",
    icon: BookOpen,
    action: "Launching Soon",
    link: "",
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
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-display">Creative</p>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 leading-tight ${mode === "creative" ? "font-creative" : "font-display"}`}>
            The other side of building.
          </h2>
        </motion.div>

        <div className={`grid gap-6 ${mode === "creative" ? "md:grid-cols-1 max-w-2xl mx-auto" : "md:grid-cols-3"}`}>
          {creativeWorks.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className={`group border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-500 ${mode === "creative" ? "gradient-subtle p-10" : "gradient-card p-8"
                }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <work.icon size={18} className="text-accent" />
                <span className="text-xs tracking-widest uppercase text-accent font-display">{work.category}</span>
              </div>

              <h3 className={`text-xl font-semibold text-foreground mb-3 ${mode === "creative" ? "font-creative text-2xl" : "font-display"}`}>
                {work.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">{work.description}</p>

              {work.link ? (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-display text-accent border border-accent/30 px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
                >
                  {work.action} <ExternalLink size={12} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-display text-muted-foreground border border-border px-4 py-2 rounded-md">
                  {work.action}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creative;
