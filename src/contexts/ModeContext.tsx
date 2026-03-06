import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Mode = "systems" | "creative";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "systems",
  toggleMode: () => {},
});

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("systems");
  
  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);
  
  const toggleMode = () => setMode((m) => (m === "systems" ? "creative" : "systems"));
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
