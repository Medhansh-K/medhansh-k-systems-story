import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "UNIDATA",
    description: "A decentralized marketplace for AI datasets and models built on BSC Testnet, enabling users to upload, purchase, and trade AI datasets using blockchain technology.",
    idea: "Bridging the gap between AI data needs and decentralized ownership through on-chain marketplace infrastructure.",
    stack: ["Solidity", "BSC", "React", "IPFS"],
    link: "",
  },
  {
    name: "Terramind AI",
    description: "AI platform for real estate investors to discover their best investment options in real estate through intelligent analysis and recommendations.",
    idea: "Making real estate investment decisions smarter with AI-driven property intelligence.",
    stack: ["Python", "AI/ML", "Next.js", "Data Pipelines"],
    link: "",
  },
  {
    name: "BloomNet",
    description: "A distributed semi-decentralised fractal-based data storage system designed for resilient and efficient data management.",
    idea: "Rethinking data storage through fractal architectures that balance decentralization with performance.",
    stack: ["Distributed Systems", "Fractal Algorithms", "Node.js", "P2P"],
    link: "",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { mode } = useMode();

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-xs tracking-widest uppercase font-display mb-4">Projects</p>
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
              className="group gradient-card border border-border rounded-xl p-8 hover:border-accent/30 transition-all duration-500 hover:glow-shadow flex flex-col"
            >
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{project.name}</h3>
              <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">{project.description}</p>
              <p className="text-secondary-foreground/70 text-xs font-body italic mb-6">{project.idea}</p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-display">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-display text-accent border border-accent/30 px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
                  >
                    View Project <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
