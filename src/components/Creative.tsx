import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";
import { BookOpen, Camera, PenLine, ExternalLink, Sparkles, ReadMore } from "lucide-react";
import { Link } from "react-router-dom";
import { bookData } from "@/data/bookData";

const creativeWorks = [
  {
    category: "Writing",
    title: "Medium Blogs",
    description: "Essays and ideas exploring AI, systems thinking, technology, and the human side of building — published on Medium.",
    icon: PenLine,
    action: "Read",
    link: "https://medium.com/@imperialion45",
    isInternal: false,
  },
  {
    category: "Cinematography",
    title: "YouTube Vlogs",
    description: "Visual storytelling, travel frames, and behind-the-scenes moments — capturing life between builds and ideas.",
    icon: Camera,
    action: "Watch",
    link: "https://www.youtube.com/@JustMk-in",
    isInternal: false,
  },
  {
    category: "Book",
    title: "Project Sarvam: When Time Stood Still",
    description: "Book 1 — A mythological sci-fi exploration of civilization and intelligence, where ancient systems meet future consciousness. Published online with interactive reader.",
    icon: BookOpen,
    action: "Read Book Online",
    link: "/book",
    isInternal: true,
    cover: "/book-cover.jpg",
  },
];

const Creative = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { mode } = useMode();

  return (
    <section id="creative" className="py-16 md:py-32 relative" ref={ref}>
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

        {/* Featured Book Banner when in Creative mode or Grid */}
        <div className={`grid gap-8 ${mode === "creative" ? "md:grid-cols-1 max-w-3xl mx-auto" : "md:grid-cols-3"}`}>
          {creativeWorks.map((work, i) => {
            const isBook = work.category === "Book";

            return (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                className={`group border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-500 relative flex flex-col justify-between ${
                  isBook ? "bg-gradient-to-br from-amber-950/20 via-background to-amber-950/10 border-accent/40 shadow-xl shadow-amber-500/5 p-8" : mode === "creative" ? "gradient-subtle p-10" : "gradient-card p-8"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <work.icon size={18} className="text-accent" />
                      <span className="text-xs tracking-widest uppercase text-accent font-display">{work.category}</span>
                    </div>

                    {isBook && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold font-display tracking-widest bg-accent/20 text-accent px-2.5 py-0.5 rounded-full border border-accent/30">
                        <Sparkles size={10} /> Published
                      </span>
                    )}
                  </div>

                  {/* If Book, show cover image thumbnail alongside text */}
                  {isBook ? (
                    <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                      <Link to="/book" className="shrink-0 w-28 sm:w-36 rounded-lg overflow-hidden border border-accent/30 shadow-lg group-hover:scale-105 transition-transform duration-500 block">
                        <img src={work.cover} alt={work.title} className="w-full h-auto object-cover" />
                      </Link>
                      <div className="flex-1">
                        <h3 className={`text-xl sm:text-2xl font-bold text-foreground mb-3 ${mode === "creative" ? "font-creative" : "font-display"}`}>
                          {work.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">{work.description}</p>
                        <div className="flex flex-wrap gap-2 text-[11px] text-accent/80 font-mono">
                          <span>{bookData.chapters.length} Chapters</span>
                          <span>•</span>
                          <span>{bookData.totalPageCount} Pages</span>
                          <span>•</span>
                          <span>Mythological Sci-Fi</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className={`text-xl font-semibold text-foreground mb-3 ${mode === "creative" ? "font-creative text-2xl" : "font-display"}`}>
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">{work.description}</p>
                    </>
                  )}
                </div>

                <div>
                  {work.isInternal ? (
                    <Link
                      to={work.link}
                      className="inline-flex items-center gap-2 text-xs font-display font-semibold text-primary-foreground bg-accent hover:bg-accent/90 px-5 py-2.5 rounded-md transition-all shadow-md hover:shadow-accent/20 hover:scale-105"
                    >
                      <BookOpen size={14} />
                      {work.action}
                    </Link>
                  ) : (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-display text-accent border border-accent/30 px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
                    >
                      {work.action} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Creative;
