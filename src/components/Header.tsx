import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Projects", "Creative", "Journey", "Contact"];

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
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mode toggle */}
          <button
            onClick={toggleMode}
            className="flex items-center gap-2 text-xs font-display tracking-widest uppercase"
          >
            <span className={mode === "systems" ? "text-foreground" : "text-muted-foreground"}>Systems</span>
            <div className="relative w-10 h-5 rounded-full bg-secondary border border-border">
              <motion.div
                className="absolute top-0.5 w-4 h-4 rounded-full bg-foreground"
                animate={{ left: mode === "systems" ? "2px" : "18px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={mode === "creative" ? "text-foreground" : "text-muted-foreground"}>Creative</span>
          </button>

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
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
