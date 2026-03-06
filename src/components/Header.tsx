import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const getNavItems = (mode: string) => {
  if (mode === "systems") return ["About", "Projects", "Journey", "Contact"];
  return ["About", "Creative", "Journey", "Contact"];
};

const Header = () => {
  const { mode, toggleMode } = useMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-lg font-semibold tracking-tight text-foreground">
          Medhansh K
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {getNavItems(mode).map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 font-body"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mode toggle */}
          <div className="flex items-center rounded-full border border-border bg-secondary/50 overflow-hidden">
            <button
              onClick={() => mode !== "systems" && toggleMode()}
              className={`px-4 py-1.5 text-xs font-display tracking-widest uppercase transition-all duration-300 rounded-full ${mode === "systems"
                ? "bg-accent text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Systems
            </button>
            <button
              onClick={() => mode !== "creative" && toggleMode()}
              className={`px-4 py-1.5 text-xs font-display tracking-widest uppercase transition-all duration-300 rounded-full ${mode === "creative"
                ? "bg-accent text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Creative
            </button>
          </div>

          {/* Mobile menu */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
        >
          {getNavItems(mode).map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
