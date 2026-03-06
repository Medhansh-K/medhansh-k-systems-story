import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMode } from "@/contexts/ModeContext";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Datalis",
    description: "AI data intelligence platform transforming raw datasets into insight reports.",
    idea: "Turning unstructured data into actionable intelligence through AI-powered analysis pipelines.",
    stack: ["Python", "LangChain", "React", "PostgreSQL"],
  },
  {
    name: "Dabby",
    description: "Financial intelligence workspace integrating business data sources with conversational AI analysis.",
    idea: "Making financial data accessible through natural language interfaces.",
    stack: ["TypeScript", "OpenAI", "Next.js", "Supabase"],
  },
  {
    name: "AI Audit Assistant",
    description: "Agent-based system generating structured audit reports from compliance documents.",
    idea: "Automating complex compliance workflows with multi-agent AI architecture.",
    stack: ["Python", "GPT-4", "FastAPI", "React"],
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
          <p className="text-muted-foreground text-xs tracking-widest uppercase font-display mb-4">Projects</p>
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
              className="group gradient-card border border-border rounded-xl p-8 hover:border-muted-foreground/30 transition-all duration-500 hover:glow-shadow flex flex-col"
            >
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{project.name}</h3>
              <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">{project.description}</p>
              <p className="text-secondary-foreground/70 text-xs font-body italic mb-6">{project.idea}</p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-display">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-1.5 text-xs font-display text-foreground border border-border px-4 py-2 rounded-md hover:bg-secondary transition-colors">
                  View Project <ExternalLink size={12} />
                </button>
                <button className="text-xs font-display text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                  Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
