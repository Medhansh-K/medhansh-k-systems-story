import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-muted-foreground text-xs tracking-widest uppercase font-display mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Let's connect.</h2>
          <p className="text-muted-foreground font-body mb-10">
            Whether it's about building something together, exchanging ideas, or just saying hello.
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 border border-border rounded-md text-sm font-display text-foreground hover:bg-secondary transition-colors">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 border border-border rounded-md text-sm font-display text-foreground hover:bg-secondary transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="mailto:hello@medhansh.dev" className="flex items-center gap-2 px-5 py-3 border border-border rounded-md text-sm font-display text-foreground hover:bg-secondary transition-colors">
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
