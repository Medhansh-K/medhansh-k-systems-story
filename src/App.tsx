import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookReader from "./pages/BookReader";
import BloomNetPaper from "./pages/BloomNetPaper";
import ProjectDocPage from "./pages/ProjectDocPage";
import NotFound from "./pages/NotFound";
import { AudiobookProvider } from "@/contexts/AudiobookContext";
import { ModeProvider } from "@/contexts/ModeContext";
import { SpotifyAudioPlayer } from "@/components/SpotifyAudioPlayer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ModeProvider>
        <AudiobookProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/book" element={<BookReader />} />
              <Route path="/book/:chapterId" element={<BookReader />} />
              <Route path="/bloomnet" element={<BloomNetPaper />} />
              <Route path="/project/:projectId" element={<ProjectDocPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <SpotifyAudioPlayer />
          </BrowserRouter>
        </AudiobookProvider>
      </ModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
