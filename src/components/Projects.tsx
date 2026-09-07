import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";
import { ExternalLink, FileText, Download, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Dabby",
    description: "AI financial workspace for businesses that automates financial intelligence, reasoning, analysis, and data reporting.",
    idea: "Empowering businesses with an intelligent AI workspace for automated financial workflows and insights.",
    stack: ["AI Systems", "FinTech", "Data Intelligence", "Automation"],
    link: "https://www.datalis.in",
    isExternal: true,
  },
  {
    name: "Archzone Structures",
    description: "Outdoor living solutions company specializing in modern architectural outdoor structures, pergolas, and landscape design.",
    idea: "Elevating living spaces with premium outdoor structural design and modern engineering.",
    stack: ["Architecture", "Outdoor Design", "Full-Stack", "Web Platform"],
    link: "https://www.archzonestructures.com",
    isExternal: true,
  },
  {
    name: "Bloom-Net",
    badge: "IEEE 2026 Paper",
    description: "Optimizing Distributed Storage Efficiency with Fractal-Based Interlocking Data Marts — a semi-decentralized object storage architecture.",
    idea: "Published in IEEE 2026. Solves HDFS & Ceph bottlenecks with dual-instance per-node fault isolation (~1.60x storage overhead).",
    stack: ["IEEE 2026", "Distributed Systems", "MinIO", "Tailscale", "FastAPI"],
    link: "/bloomnet",
    pdfLink: "/bloomnet-paper.pdf",
    isPaper: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { mode } = useMode();

  return (
    <section id="projects" className="py-16 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-xs tracking-widest uppercase font-display mb-4">Projects & Research</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${mode === "creative" ? "font-creative" : "font-display"}`}>
            Things I've built.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className={`group border border-border rounded-xl p-8 transition-all duration-500 hover:glow-shadow flex flex-col justify-between ${
                project.isPaper
                  ? "bg-gradient-to-br from-blue-950/20 via-background to-amber-950/10 border-blue-500/30 hover:border-blue-400/60 shadow-xl"
                  : "gradient-card hover:border-accent/30"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-display font-semibold text-foreground">{project.name}</h3>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold font-mono tracking-wider bg-blue-500/20 text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                      <Sparkles size={10} /> {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">{project.description}</p>
                <p className="text-secondary-foreground/70 text-xs font-body italic mb-6">{project.idea}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2.5 py-1 rounded-full font-display ${
                        tech.includes("IEEE") ? "bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30" : "bg-accent/10 text-accent"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.isPaper ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-1.5 text-xs font-display text-primary-foreground bg-accent hover:bg-accent/90 px-4 py-2 rounded-md transition-all font-semibold shadow-md"
                    >
                      <FileText size={13} /> Read Paper
                    </Link>
                    {project.pdfLink && (
                      <a
                        href={project.pdfLink}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-display text-accent border border-accent/40 px-3 py-2 rounded-md hover:bg-accent/10 transition-colors font-medium"
                        title="Download IEEE PDF"
                      >
                        <Download size={13} /> PDF
                      </a>
                    )}
                  </div>
                ) : project.link ? (
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-display text-accent border border-accent/30 px-4 py-2 rounded-md hover:bg-accent/10 transition-colors font-medium"
                    >
                      Visit Website <ExternalLink size={12} />
                    </a>
                  </div>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-display text-muted-foreground border border-border px-4 py-2 rounded-md">
                    Research Prototype
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
