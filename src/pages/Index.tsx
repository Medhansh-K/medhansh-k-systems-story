import { ModeProvider, useMode } from "@/contexts/ModeContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Creative from "@/components/Creative";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const PortfolioContent = () => {
  const { mode } = useMode();

  const systemsOrder = (
    <>
      <About />
      <Projects />
      <Journey />
    </>
  );

  const creativeOrder = (
    <>
      <About />
      <Creative />
      <Journey />
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {mode === "systems" ? systemsOrder : creativeOrder}
        </motion.div>
      </AnimatePresence>
      <Contact />
      <Footer />
    </div>
  );
};

const Index = () => (
  <ModeProvider>
    <PortfolioContent />
  </ModeProvider>
);

export default Index;
