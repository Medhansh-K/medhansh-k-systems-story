import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";
import { ExternalLink, FileText, Download, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Dabby",
    description: "AI financial workspace for businesses that automates financial intelligence, reasoning, analysis, and data reporting.",
    idea: "Empowering businesses with an intelligent AI workspace for automated financial workflows and insights.",
    stack: ["AI Systems", "FinTech", "Data Intelligence", "Automation"],
    link: "https://www.datalis.in",
    docLink: "/project/dabby",
    isExternal: true,
  },
  {
    name: "NeuralNexus (UniData)",
    badge: "Demo Deployed",
    description: "Decentralized marketplace built on blockchain to buy, monetize, and publish AI models, neural weights, and curated datasets.",
    idea: "A paid, Web3 alternative to Hugging Face. Decentralized model licensing, verifiable datasets, and instant creator payouts powered by BNB Chain.",
    stack: ["BNB Chain", "Web3 / Solidity", "AI Marketplace", "Smart Contracts", "IPFS / Datasets"],
    link: "https://neuralnexus-app.vercel.app/",
    docLink: "/project/neuralnexus",
    isExternal: true,
    isDemo: true,
  },
  {
    name: "Terramind AI",
    badge: "Demo Deployed",
    description: "AI real estate advisory intelligence platform with an integrated dynamic map to evaluate locality potential and pinpoint optimal property investments.",
    idea: "Hyper-fast spatial real estate analytics powered by Groq LPU inference, Leaflet spatial mapping, and predictive locality yield modeling.",
    stack: ["Groq AI", "Leaflet Maps", "Spatial Analytics", "Real Estate AI", "React"],
    link: "https://terramind-eta.vercel.app/",
    docLink: "/project/terramind",
    isExternal: true,
    isDemo: true,
  },
  {
    name: "Archzone Structures",
    description: "Outdoor living solutions company specializing in modern architectural outdoor structures, pergolas, and landscape design.",
    idea: "Elevating living spaces with premium outdoor structural design and modern engineering connecting the AVC loop.",
    stack: ["Architecture", "Outdoor Design", "Full-Stack", "Web Platform"],
    link: "https://www.archzonestructures.com",
    docLink: "/project/archzone",
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
    ieeeLink: "https://ieeexplore.ieee.org/document/11709777",
    isPaper: true,
  },
  {
    name: "Spectre",
    badge: "Coming Soon",
    description: "Web-based control layer simulator application engineered to run GBA, GBC, and NDS titles with continuous multi-device cloud save synchronization.",
    idea: "Cross-platform retro gaming simulator in the browser with cloud save state sync — never lose save progress or restart games when local storage clears.",
    stack: ["Emulator Engine", "Cloud Save Sync", "WebAssembly", "Retro Gaming", "Systems"],
    docLink: "/project/spectre",
    isComingSoon: true,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
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
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] uppercase font-semibold font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${
                        project.badge === "IEEE 2026 Paper"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : project.badge === "Demo Deployed"
                          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                          : "bg-amber-500/15 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {project.badge === "Demo Deployed" ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ) : project.badge === "Coming Soon" ? (
                        <Clock size={10} />
                      ) : (
                        <Sparkles size={10} />
                      )}
                      {project.badge}
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
                        tech.includes("IEEE")
                          ? "bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30"
                          : tech.includes("BNB")
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/25"
                          : tech.includes("Groq")
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/25"
                          : "bg-accent/10 text-accent"
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
                    {project.ieeeLink && (
                      <a
                        href={project.ieeeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-display text-blue-400 border border-blue-500/40 px-3 py-2 rounded-md hover:bg-blue-500/10 transition-colors font-medium"
                        title="View on IEEE Xplore"
                      >
                        IEEE Xplore <ExternalLink size={12} />
                      </a>
                    )}
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
                ) : (
                  <div className="flex flex-wrap items-center gap-2">
                    {project.docLink && (
                      <Link
                        to={project.docLink}
                        className="inline-flex items-center gap-1.5 text-xs font-display text-primary-foreground bg-accent hover:bg-accent/90 px-3.5 py-2 rounded-md transition-all font-semibold shadow-md"
                      >
                        <FileText size={13} /> Product Docs
                      </Link>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-display text-accent border border-accent/30 px-3.5 py-2 rounded-md hover:bg-accent/10 transition-colors font-medium"
                      >
                        {project.isDemo ? "Live Demo" : "Visit Website"} <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-display text-muted-foreground border border-border/80 bg-secondary/30 px-3.5 py-2 rounded-md font-medium">
                        <Clock size={12} /> Coming Soon
                      </span>
                    )}
                  </div>
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

