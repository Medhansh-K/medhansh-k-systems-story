import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Search,
  Bookmark,
  Maximize,
  Minimize,
  SlidersHorizontal,
  Share2,
  Sparkles,
  ArrowLeft,
  Check,
  Volume2,
  VolumeX,
  Book,
  Scroll,
  Play,
  Pause,
  Headphones,
} from "lucide-react";
import { bookData, Chapter, Paragraph } from "@/data/bookData";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { useAudiobook } from "@/contexts/AudiobookContext";

type ThemeMode = "dark" | "sepia" | "light" | "oled";
type FontStyle = "serif" | "sans" | "mono";
type ViewMode = "flip" | "scroll";

// Sound synthesis for page flip using Web Audio API
const playPageFlipSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const bufferSize = ctx.sampleRate * 0.15; // 150ms soft rustle
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const decay = Math.exp(-i / (bufferSize * 0.3));
      data[i] = (Math.random() * 2 - 1) * decay;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1200;
    filter.Q.value = 1.5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch (e) {
    // Ignore audio errors if audio context is blocked
  }
};

const BookReader: React.FC = () => {
  const { chapterId } = useParams<{ chapterId?: string }>();
  const navigate = useNavigate();

  const {
    isPlaying: isAudioPlaying,
    currentChapterIndex: audioChapterIdx,
    currentParagraphIndex: audioParaIdx,
    togglePlay: toggleAudioPlay,
    seekToParagraph,
  } = useAudiobook();

  // Core state
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    return (localStorage.getItem("book_view_mode") as ViewMode) || "flip";
  });
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem("book_theme") as ThemeMode) || "dark";
  });
  const [fontSize, setFontSize] = useState<number>(() => {
    return parseInt(localStorage.getItem("book_font_size") || "18", 10);
  });
  const [fontStyle, setFontStyle] = useState<FontStyle>(() => {
    return (localStorage.getItem("book_font_style") as FontStyle) || "serif";
  });
  const [readerWidth, setReaderWidth] = useState<"narrow" | "normal" | "wide">(() => {
    return (localStorage.getItem("book_reader_width") as any) || "normal";
  });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    return localStorage.getItem("book_sound") !== "false";
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ chapterIndex: number; paragraphId: string; text: string; chapterTitle: string }[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [isFlipping, setIsFlipping] = useState(false);

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem("book_bookmarks");
    return saved ? JSON.parse(saved) : [];
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync route param chapterId with chapter index
  useEffect(() => {
    if (chapterId) {
      const idx = bookData.chapters.findIndex((c) => c.id === chapterId);
      if (idx !== -1) {
        setCurrentChapterIndex(idx);
        setCurrentPageIndex(0);
      }
    } else {
      setCurrentChapterIndex(0);
      setCurrentPageIndex(0);
    }
  }, [chapterId]);

  // Sync reader view when audio narration changes paragraph
  useEffect(() => {
    if (isAudioPlaying) {
      if (audioChapterIdx !== currentChapterIndex) {
        setCurrentChapterIndex(audioChapterIdx);
        navigate(`/book/${bookData.chapters[audioChapterIdx].id}`);
      }

      // Calculate which page contains the audio paragraph
      const pages = getPagesForChapter(bookData.chapters[audioChapterIdx]);
      const activePara = bookData.chapters[audioChapterIdx].paragraphs[audioParaIdx];

      if (activePara) {
        const pageIdx = pages.findIndex((page) => page.some((p) => p.id === activePara.id));
        if (pageIdx !== -1 && pageIdx !== currentPageIndex) {
          setCurrentPageIndex(pageIdx);
        }

        if (viewMode === "scroll") {
          const el = document.getElementById(activePara.id);
          el?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, [isAudioPlaying, audioChapterIdx, audioParaIdx]);

  // Scroll to top on page/chapter change in scroll mode
  useEffect(() => {
    if (viewMode === "scroll" && !isAudioPlaying) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentChapterIndex, currentPageIndex, viewMode]);

  // Track scroll progress in scroll mode
  useEffect(() => {
    if (viewMode !== "scroll") return;
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewMode]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("book_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("book_view_mode", viewMode);
  }, [viewMode]);

  useEffect(() => {
    localStorage.setItem("book_font_size", fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("book_font_style", fontStyle);
  }, [fontStyle]);

  useEffect(() => {
    localStorage.setItem("book_reader_width", readerWidth);
  }, [readerWidth]);

  useEffect(() => {
    localStorage.setItem("book_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem("book_sound", soundEnabled.toString());
  }, [soundEnabled]);

  // Search handler
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results: { chapterIndex: number; paragraphId: string; text: string; chapterTitle: string }[] = [];

    bookData.chapters.forEach((ch, chIdx) => {
      ch.paragraphs.forEach((p) => {
        if (p.text.toLowerCase().includes(query)) {
          results.push({
            chapterIndex: chIdx,
            paragraphId: p.id,
            text: p.text,
            chapterTitle: `${ch.number}: ${ch.title}`,
          });
        }
      });
    });

    setSearchResults(results.slice(0, 30));
  }, [searchQuery]);

  const currentChapter: Chapter = bookData.chapters[currentChapterIndex] || bookData.chapters[0];

  // Helper to chunk chapter paragraphs into pages
  const getPagesForChapter = (ch: Chapter): Paragraph[][] => {
    const pages: Paragraph[][] = [];
    let currentPage: Paragraph[] = [];
    let charCount = 0;

    ch.paragraphs.forEach((p) => {
      const pLen = p.text.length;
      if (charCount > 0 && (charCount + pLen > 900 || currentPage.length >= 3)) {
        pages.push(currentPage);
        currentPage = [p];
        charCount = pLen;
      } else {
        currentPage.push(p);
        charCount += pLen;
      }
    });

    if (currentPage.length > 0) {
      pages.push(currentPage);
    }

    return pages.length > 0 ? pages : [[{ id: "empty", type: "paragraph", text: "" }]];
  };

  const chapterPages = getPagesForChapter(currentChapter);
  const totalPagesInChapter = chapterPages.length;

  const goToChapter = (index: number) => {
    if (index >= 0 && index < bookData.chapters.length) {
      setCurrentChapterIndex(index);
      setCurrentPageIndex(0);
      navigate(`/book/${bookData.chapters[index].id}`);
      setIsSidebarOpen(false);
    }
  };

  // Flip page actions
  const nextPage = () => {
    if (isFlipping) return;
    if (soundEnabled) playPageFlipSound();

    if (currentPageIndex < totalPagesInChapter - 1) {
      setFlipDirection("next");
      setIsFlipping(true);
      setCurrentPageIndex((prev) => prev + 1);
      setTimeout(() => setIsFlipping(false), 500);
    } else if (currentChapterIndex < bookData.chapters.length - 1) {
      setFlipDirection("next");
      setIsFlipping(true);
      goToChapter(currentChapterIndex + 1);
      setTimeout(() => setIsFlipping(false), 500);
    }
  };

  const prevPage = () => {
    if (isFlipping) return;
    if (soundEnabled) playPageFlipSound();

    if (currentPageIndex > 0) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setCurrentPageIndex((prev) => prev - 1);
      setTimeout(() => setIsFlipping(false), 500);
    } else if (currentChapterIndex > 0) {
      setFlipDirection("prev");
      setIsFlipping(true);
      const prevChIdx = currentChapterIndex - 1;
      const prevPages = getPagesForChapter(bookData.chapters[prevChIdx]);
      setCurrentChapterIndex(prevChIdx);
      setCurrentPageIndex(prevPages.length - 1);
      navigate(`/book/${bookData.chapters[prevChIdx].id}`);
      setTimeout(() => setIsFlipping(false), 500);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSearchOpen || isSidebarOpen) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        nextPage();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prevPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPageIndex, currentChapterIndex, totalPagesInChapter, isSearchOpen, isSidebarOpen, isFlipping, soundEnabled]);

  const toggleBookmark = (id: string) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((b) => b !== id));
      toast.info("Bookmark removed");
    } else {
      setBookmarks([...bookmarks, id]);
      toast.success("Bookmark added");
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${bookData.title} - ${currentChapter.title}`,
        text: `Reading ${currentChapter.title} of ${bookData.title} by ${bookData.author}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  // Theme styling rules
  const getThemeClasses = () => {
    switch (theme) {
      case "sepia":
        return "bg-[#e8d8b8] text-[#2b261f] selection:bg-[#d6c4a0]";
      case "light":
        return "bg-[#e2e8f0] text-[#1a1a1a] selection:bg-amber-100";
      case "oled":
        return "bg-[#000000] text-[#d4d4d4] selection:bg-amber-900/40";
      case "dark":
      default:
        return "bg-[#0b0d10] text-[#d1d5db] selection:bg-amber-500/20";
    }
  };

  const getPagePaperBg = () => {
    switch (theme) {
      case "sepia":
        return "bg-[#fbf0d9] text-[#2b261f] border-[#e0d0b0] shadow-2xl shadow-[#2b261f]/20";
      case "light":
        return "bg-[#ffffff] text-[#1a1a1a] border-gray-200 shadow-2xl shadow-gray-400/30";
      case "oled":
        return "bg-[#0a0a0a] text-[#d4d4d4] border-zinc-900 shadow-2xl shadow-black/80";
      case "dark":
      default:
        return "bg-[#13161c] text-[#e2e8f0] border-zinc-800 shadow-2xl shadow-black/60";
    }
  };

  const getHeaderThemeClasses = () => {
    switch (theme) {
      case "sepia":
        return "bg-[#f4e6cc]/90 border-[#e3d3b4] text-[#2b261f]";
      case "light":
        return "bg-white/90 border-gray-200 text-gray-900";
      case "oled":
        return "bg-black/90 border-zinc-900 text-zinc-100";
      case "dark":
      default:
        return "bg-[#0d0f12]/90 border-zinc-800 text-zinc-100";
    }
  };

  const getFontFamilyClass = () => {
    switch (fontStyle) {
      case "sans":
        return "font-sans";
      case "mono":
        return "font-mono";
      case "serif":
      default:
        return "font-serif tracking-normal leading-relaxed";
    }
  };

  const getWidthClass = () => {
    switch (readerWidth) {
      case "narrow":
        return "max-w-lg";
      case "wide":
        return "max-w-4xl";
      case "normal":
      default:
        return "max-w-2xl";
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${getThemeClasses()}`}>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 transition-all duration-300"
          style={{
            width: viewMode === "scroll" ? `${scrollProgress}%` : `${((currentPageIndex + 1) / totalPagesInChapter) * 100}%`,
          }}
        />
      </div>

      {/* Reader Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-40 h-16 border-b backdrop-blur-md transition-colors duration-300 ${getHeaderThemeClasses()}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-2">
          {/* Left actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/#creative")}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs font-medium flex items-center gap-1.5"
              title="Return to Website"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Portfolio</span>
            </button>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-2"
              title="Table of Contents"
            >
              <Menu size={18} />
              <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider">Contents</span>
            </button>
          </div>

          {/* Center Title */}
          <div className="text-center truncate px-2 max-w-[200px] sm:max-w-xs md:max-w-md">
            <h1 className="text-xs font-semibold tracking-wider uppercase opacity-60 truncate">{bookData.title}</h1>
            <p className="text-sm font-bold truncate">
              {currentChapter.number}: {currentChapter.title}
            </p>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Play Narration button in Header */}
            <button
              onClick={() => {
                if (!isAudioPlaying) {
                  seekToParagraph(currentChapterIndex, 0);
                } else {
                  toggleAudioPlay();
                }
              }}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
              title={isAudioPlaying ? "Pause Audio Narration" : "Listen to Story Narration"}
            >
              {isAudioPlaying ? <Pause size={13} fill="currentColor" /> : <Headphones size={13} />}
              <span className="hidden sm:inline">{isAudioPlaying ? "Pause" : "Listen"}</span>
            </button>

            {/* View Mode Toggle (Flip Book vs Scroll) */}
            <div className="flex items-center rounded-lg border border-current/15 bg-black/5 dark:bg-white/5 p-0.5">
              <button
                onClick={() => setViewMode("flip")}
                className={`p-1.5 rounded text-xs flex items-center gap-1 transition-all ${
                  viewMode === "flip" ? "bg-amber-500 text-black font-bold shadow-sm" : "opacity-60 hover:opacity-100"
                }`}
                title="3D Page Flip Book Mode"
              >
                <Book size={14} />
                <span className="hidden lg:inline">Flip</span>
              </button>
              <button
                onClick={() => setViewMode("scroll")}
                className={`p-1.5 rounded text-xs flex items-center gap-1 transition-all ${
                  viewMode === "scroll" ? "bg-amber-500 text-black font-bold shadow-sm" : "opacity-60 hover:opacity-100"
                }`}
                title="Continuous Scroll Mode"
              >
                <Scroll size={14} />
                <span className="hidden lg:inline">Scroll</span>
              </button>
            </div>

            {/* Mute/Sound toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                toast.info(soundEnabled ? "Page sound muted" : "Page flip sound enabled");
              }}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors hidden sm:block"
              title={soundEnabled ? "Mute Page Sound" : "Enable Page Flip Sound"}
            >
              {soundEnabled ? <Volume2 size={18} className="text-amber-500" /> : <VolumeX size={18} className="opacity-50" />}
            </button>

            {/* Search */}
            <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors" title="Search Book">
                  <Search size={18} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 sm:w-96 p-4 border border-zinc-800 bg-zinc-950 text-white shadow-2xl rounded-xl z-50">
                <div className="flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2">
                  <Search size={16} className="text-amber-400" />
                  <input
                    type="text"
                    placeholder="Search words, names, places..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500"
                    autoFocus
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="text-xs text-zinc-400 hover:text-white">
                      Clear
                    </button>
                  )}
                </div>

                <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                  {searchResults.length > 0 ? (
                    searchResults.map((res, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          goToChapter(res.chapterIndex);
                          setIsSearchOpen(false);
                          setTimeout(() => {
                            const el = document.getElementById(res.paragraphId);
                            el?.scrollIntoView({ behavior: "smooth", block: "center" });
                          }, 300);
                        }}
                        className="w-full text-left p-2 rounded hover:bg-zinc-800/60 transition-colors block border-b border-zinc-900/60"
                      >
                        <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">{res.chapterTitle}</span>
                        <p className="text-xs text-zinc-300 line-clamp-2 mt-0.5">{res.text}</p>
                      </button>
                    ))
                  ) : searchQuery ? (
                    <p className="text-xs text-zinc-500 py-4 text-center">No matching lines found.</p>
                  ) : (
                    <p className="text-xs text-zinc-500 py-4 text-center">Type any phrase (e.g., "Kashi", "Amrit", "Rudra", "Entropy").</p>
                  )}
                </div>
              </PopoverContent>
            </Popover>

            {/* Display / Font Settings */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors" title="Reader Customization">
                  <SlidersHorizontal size={18} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-5 border border-zinc-800 bg-zinc-950 text-white shadow-2xl rounded-xl z-50 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block">Theme</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: "dark", label: "Dark", bg: "bg-zinc-900 text-white border-zinc-700" },
                      { id: "sepia", label: "Sepia", bg: "bg-[#fbf0d9] text-[#2b261f] border-[#e0d0b0]" },
                      { id: "light", label: "Light", bg: "bg-white text-black border-gray-300" },
                      { id: "oled", label: "OLED", bg: "bg-black text-zinc-200 border-zinc-800" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id as ThemeMode)}
                        className={`py-2 text-xs font-medium rounded-lg border transition-all flex flex-col items-center justify-center gap-1 ${t.bg} ${
                          theme === t.id ? "ring-2 ring-amber-500 font-bold" : "opacity-75 hover:opacity-100"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Font Size ({fontSize}px)</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-400">A</span>
                    <Slider
                      value={[fontSize]}
                      min={14}
                      max={26}
                      step={1}
                      onValueChange={(val) => setFontSize(val[0])}
                      className="flex-1"
                    />
                    <span className="text-lg font-bold text-zinc-200">A</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block">Typography</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "serif", label: "Serif", font: "font-serif" },
                      { id: "sans", label: "Sans", font: "font-sans" },
                      { id: "mono", label: "Mono", font: "font-mono" },
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFontStyle(f.id as FontStyle)}
                        className={`py-1.5 text-xs rounded-lg border border-zinc-800 transition-all ${f.font} ${
                          fontStyle === f.id ? "bg-amber-500/20 text-amber-400 border-amber-500/50 font-bold" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block">Reading Width</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "narrow", label: "Narrow" },
                      { id: "normal", label: "Standard" },
                      { id: "wide", label: "Wide" },
                    ].map((w) => (
                      <button
                        key={w.id}
                        onClick={() => setReaderWidth(w.id as any)}
                        className={`py-1.5 text-xs rounded-lg border border-zinc-800 transition-all ${
                          readerWidth === w.id ? "bg-amber-500/20 text-amber-400 border-amber-500/50 font-bold" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Share */}
            <button onClick={handleShare} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors" title="Share Chapter">
              <Share2 size={18} />
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors hidden sm:block"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Table of Contents Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 z-50 w-full max-w-sm bg-zinc-950 border-r border-zinc-800 text-zinc-100 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-12 rounded overflow-hidden border border-amber-500/40 shrink-0 shadow-md">
                    <img src={bookData.coverImage} alt="Cover" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-white truncate max-w-[200px]">{bookData.title}</h2>
                    <p className="text-xs text-amber-400 font-medium">{bookData.series}</p>
                  </div>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-zinc-400 hover:text-white rounded-lg">
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Chapter List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest px-2 mb-3">Table of Contents</p>
                {bookData.chapters.map((ch, idx) => {
                  const isActive = idx === currentChapterIndex;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => goToChapter(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                        isActive
                          ? "bg-amber-500/15 border-amber-500/50 text-white shadow-lg shadow-amber-500/5"
                          : "bg-zinc-900/40 border-zinc-800/60 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-semibold tracking-wider uppercase ${isActive ? "text-amber-400" : "text-zinc-500"}`}>
                            {ch.number}
                          </span>
                          <span className="text-[10px] text-zinc-600">• Pages {ch.pageStart}-{ch.pageEnd}</span>
                        </div>
                        <h3 className={`text-sm font-semibold truncate ${isActive ? "text-amber-200" : "text-zinc-200"}`}>{ch.title}</h3>
                        <p className="text-xs text-zinc-500 line-clamp-2 mt-1 font-body">{ch.summary}</p>
                      </div>

                      {isActive && <Check size={16} className="text-amber-400 mt-1 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-zinc-900 text-center text-xs text-zinc-500">
                {bookData.copyright}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Book Reader Container */}
      <main className="pt-20 pb-36 px-2 sm:px-6 md:px-8 min-h-screen flex flex-col justify-between">
        {/* VIEW MODE 1: 3D PAGE FLIP BOOK MODE */}
        {viewMode === "flip" ? (
          <div className="flex-1 flex flex-col items-center justify-center py-4">
            {/* Book Spine & 3D Book Container */}
            <div className={`w-full mx-auto relative perspective-1500 ${getWidthClass()}`}>
              {/* Physical Book Cover Frame */}
              <div className={`relative rounded-2xl border p-4 sm:p-8 md:p-12 transition-all duration-300 ${getPagePaperBg()} relative overflow-hidden`}>
                {/* Book Center Binding Spine Gradient */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-black/20 via-black/5 to-black/20 pointer-events-none hidden md:block z-10" />

                {/* Left & Right Page Crease Lines */}
                <div className="absolute top-0 bottom-0 left-6 w-px bg-current/10 pointer-events-none hidden md:block" />
                <div className="absolute top-0 bottom-0 right-6 w-px bg-current/10 pointer-events-none hidden md:block" />

                {/* Animated 3D Page Turning Container */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${currentChapterIndex}-${currentPageIndex}`}
                    initial={{
                      rotateY: flipDirection === "next" ? 45 : -45,
                      opacity: 0,
                      scale: 0.98,
                    }}
                    animate={{
                      rotateY: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotateY: flipDirection === "next" ? -45 : 45,
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                    className="origin-left transform-gpu"
                  >
                    {/* Header info on page */}
                    <div className="flex items-center justify-between border-b border-current/10 pb-3 mb-6 font-mono text-[11px] opacity-60">
                      <span>{bookData.title}</span>
                      <span>
                        {currentChapter.number} • Page {currentPageIndex + 1} of {totalPagesInChapter}
                      </span>
                    </div>

                    {/* Book Hero Cover if Chapter 1 Page 1 */}
                    {currentChapterIndex === 0 && currentPageIndex === 0 && (
                      <div className="mb-8 text-center pb-8 border-b border-current/15">
                        <div className="w-36 sm:w-44 mx-auto mb-4 rounded-lg overflow-hidden shadow-2xl border border-amber-500/40">
                          <img src={bookData.coverImage} alt={bookData.title} className="w-full h-auto object-cover" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-500 font-bold block mb-1">
                          {bookData.series}
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-2">{bookData.title}</h1>
                        <p className="text-xs italic opacity-70 max-w-md mx-auto mb-4">"{bookData.description}"</p>

                        <button
                          onClick={() => {
                            seekToParagraph(0, 0);
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold shadow-md hover:scale-105 transition-all"
                        >
                          <Headphones size={14} /> Listen Full Story Narration
                        </button>
                      </div>
                    )}

                    {/* Chapter Title on Page 1 of Chapter */}
                    {currentPageIndex === 0 && (
                      <div className="mb-8 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-1">
                            {currentChapter.number}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">{currentChapter.title}</h2>
                        </div>

                        <button
                          onClick={() => {
                            seekToParagraph(currentChapterIndex, 0);
                          }}
                          className="p-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all"
                          title="Narrate Chapter"
                        >
                          <Play size={16} fill="currentColor" />
                        </button>
                      </div>
                    )}

                    {/* Page Paragraphs Content */}
                    <div className={`space-y-6 ${getFontFamilyClass()}`} style={{ fontSize: `${fontSize}px` }}>
                      {chapterPages[currentPageIndex]?.map((para) => {
                        const isBookmarked = bookmarks.includes(para.id);
                        const isBeingNarrated = isAudioPlaying && currentChapter.paragraphs[audioParaIdx]?.id === para.id;

                        if (para.type === "quote") {
                          return (
                            <blockquote
                              key={para.id}
                              id={para.id}
                              className={`my-6 pl-6 py-2 border-l-4 italic font-serif transition-all rounded-r-lg relative group ${
                                isBeingNarrated
                                  ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-md ring-1 ring-amber-500/30"
                                  : "border-amber-500/80 opacity-95 bg-amber-500/5"
                              }`}
                            >
                              <p>
                                {isBeingNarrated && <Play size={14} className="inline mr-2 text-amber-400 animate-pulse" />}
                                {para.text}
                              </p>
                              {para.speaker && (
                                <cite className="block text-xs font-mono uppercase tracking-widest text-amber-500 mt-2 not-italic font-semibold">
                                  — {para.speaker}
                                </cite>
                              )}
                            </blockquote>
                          );
                        }

                        if (para.type === "dialogue") {
                          return (
                            <div
                              key={para.id}
                              id={para.id}
                              className={`my-3 pl-3 border-l-2 transition-all ${
                                isBeingNarrated
                                  ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold p-2 rounded-r-lg shadow-sm"
                                  : "border-amber-500/30"
                              }`}
                            >
                              <p>
                                {isBeingNarrated && <Play size={12} className="inline mr-1.5 text-amber-400 animate-pulse" />}
                                {para.text}
                              </p>
                            </div>
                          );
                        }

                        return (
                          <p
                            key={para.id}
                            id={para.id}
                            className={`leading-relaxed text-justify sm:text-left transition-all ${
                              isBeingNarrated
                                ? "bg-amber-500/15 text-amber-200 font-semibold p-3 rounded-lg border-l-4 border-amber-500 shadow-md ring-1 ring-amber-500/20"
                                : ""
                            }`}
                          >
                            {isBeingNarrated && <Play size={12} className="inline mr-1.5 text-amber-400 animate-pulse" />}
                            {para.text}
                          </p>
                        );
                      })}
                    </div>

                    {/* Page Number Footer */}
                    <div className="mt-12 pt-4 border-t border-current/10 flex items-center justify-between text-[11px] font-mono opacity-50">
                      <span>{currentChapter.title}</span>
                      <span>Page {currentPageIndex + 1}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Interactive Clickable Page Turn Corners */}
                <button
                  onClick={prevPage}
                  className="absolute bottom-0 left-0 w-16 h-16 opacity-0 hover:opacity-100 transition-opacity z-20 group flex items-end justify-start p-2"
                  title="Previous Page (Left Arrow)"
                >
                  <div className="w-8 h-8 rounded-tr-xl bg-amber-500/20 border-t border-r border-amber-500/50 shadow-md group-hover:scale-125 transition-transform flex items-center justify-center">
                    <ChevronLeft size={16} className="text-amber-400" />
                  </div>
                </button>

                <button
                  onClick={nextPage}
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-0 hover:opacity-100 transition-opacity z-20 group flex items-end justify-end p-2"
                  title="Next Page (Right Arrow)"
                >
                  <div className="w-8 h-8 rounded-tl-xl bg-amber-500/20 border-t border-l border-amber-500/50 shadow-md group-hover:scale-125 transition-transform flex items-center justify-center">
                    <ChevronRight size={16} className="text-amber-400" />
                  </div>
                </button>
              </div>
            </div>

            {/* Page Flip Navigation Controls */}
            <div className="mt-8 flex items-center gap-6">
              <button
                onClick={prevPage}
                disabled={currentChapterIndex === 0 && currentPageIndex === 0}
                className="p-3 rounded-full border border-current/20 hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
                title="Previous Page"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex flex-col items-center">
                <span className="text-xs font-mono font-semibold">
                  Page {currentPageIndex + 1} of {totalPagesInChapter}
                </span>
                <span className="text-[10px] font-mono opacity-50">
                  Chapter {currentChapterIndex + 1} of {bookData.chapters.length}
                </span>
              </div>

              <button
                onClick={nextPage}
                disabled={currentChapterIndex === bookData.chapters.length - 1 && currentPageIndex === totalPagesInChapter - 1}
                className="p-3 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all hover:scale-110 shadow-lg shadow-amber-500/20"
                title="Next Page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          /* VIEW MODE 2: CONTINUOUS SCROLL MODE */
          <div className={`mx-auto transition-all duration-300 ${getWidthClass()}`}>
            {/* First Chapter Cover Hero header if Chapter 1 */}
            {currentChapterIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 pb-12 border-b border-current/15 text-center"
              >
                <div className="relative inline-block mx-auto mb-8 shadow-2xl rounded-2xl overflow-hidden group max-w-[240px] border border-amber-500/30">
                  <img src={bookData.coverImage} alt={bookData.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>

                <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-500 font-semibold mb-2 block">
                  {bookData.series}
                </span>

                <h1 className="text-3xl sm:text-5xl font-bold font-serif mb-4 leading-tight tracking-tight">
                  {bookData.title}
                </h1>

                <p className="text-sm sm:text-base opacity-75 italic max-w-xl mx-auto mb-6 font-serif">
                  "{bookData.description}"
                </p>

                <button
                  onClick={() => seekToParagraph(0, 0)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
                >
                  <Headphones size={15} /> Listen Full Story Narration
                </button>
              </motion.div>
            )}

            {/* Chapter Header */}
            <motion.div
              key={currentChapter.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
                <Sparkles size={12} />
                {currentChapter.number}
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight mb-4">
                {currentChapter.title}
              </h2>

              <p className="text-xs sm:text-sm font-mono opacity-50 mb-6">
                Pages {currentChapter.pageStart} – {currentChapter.pageEnd}
              </p>

              <button
                onClick={() => seekToParagraph(currentChapterIndex, 0)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all text-xs font-semibold"
              >
                <Play size={13} fill="currentColor" /> Narrate This Chapter
              </button>
            </motion.div>

            {/* Chapter Paragraphs */}
            <article className={`space-y-6 sm:space-y-8 ${getFontFamilyClass()}`} style={{ fontSize: `${fontSize}px` }}>
              {currentChapter.paragraphs.map((para, idx) => {
                const isBookmarked = bookmarks.includes(para.id);
                const isFirstPara = idx === 0;
                const isBeingNarrated = isAudioPlaying && currentChapter.paragraphs[audioParaIdx]?.id === para.id;

                if (para.type === "quote") {
                  return (
                    <motion.blockquote
                      key={para.id}
                      id={para.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`relative my-8 pl-6 sm:pl-8 py-3 border-l-4 italic font-serif transition-all rounded-r-xl group ${
                        isBeingNarrated
                          ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-lg ring-1 ring-amber-500/30"
                          : "border-amber-500/80 opacity-95 bg-amber-500/5"
                      }`}
                    >
                      <p className="text-lg sm:text-xl leading-relaxed">
                        {isBeingNarrated && <Play size={16} className="inline mr-2 text-amber-400 animate-pulse" />}
                        {para.text}
                      </p>
                      {para.speaker && (
                        <cite className="block text-xs font-mono uppercase tracking-widest text-amber-500 mt-2 not-italic font-semibold">
                          — {para.speaker}
                        </cite>
                      )}
                      <button
                        onClick={() => toggleBookmark(para.id)}
                        className="absolute top-2 right-2 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400 hover:scale-110"
                        title="Bookmark line"
                      >
                        <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
                      </button>
                    </motion.blockquote>
                  );
                }

                if (para.type === "dialogue") {
                  return (
                    <div
                      key={para.id}
                      id={para.id}
                      className={`relative group my-4 pl-3 border-l-2 transition-all ${
                        isBeingNarrated
                          ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold p-3 rounded-r-lg shadow-md"
                          : "border-amber-500/30"
                      }`}
                    >
                      <p className="leading-relaxed opacity-95">
                        {isBeingNarrated && <Play size={13} className="inline mr-2 text-amber-400 animate-pulse" />}
                        {para.text}
                      </p>
                      <button
                        onClick={() => toggleBookmark(para.id)}
                        className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400"
                        title="Bookmark dialogue"
                      >
                        <Bookmark size={14} fill={isBookmarked ? "currentColor" : "none"} />
                      </button>
                    </div>
                  );
                }

                return (
                  <div key={para.id} id={para.id} className="relative group">
                    <p
                      className={`leading-relaxed text-justify sm:text-left transition-all ${
                        isBeingNarrated ? "bg-amber-500/15 text-amber-200 font-semibold p-4 rounded-xl border-l-4 border-amber-500 shadow-lg ring-1 ring-amber-500/20" : ""
                      } ${isFirstPara && !isBeingNarrated ? "first-letter:float-left first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:font-serif first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-500" : ""}`}
                    >
                      {isBeingNarrated && <Play size={14} className="inline mr-2 text-amber-400 animate-pulse" />}
                      {para.text}
                    </p>
                    <button
                      onClick={() => toggleBookmark(para.id)}
                      className="absolute -top-1 -right-6 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400"
                      title="Bookmark paragraph"
                    >
                      <Bookmark size={14} fill={isBookmarked ? "currentColor" : "none"} />
                    </button>
                  </div>
                );
              })}
            </article>

            {/* Chapter Footer Navigation */}
            <div className="mt-20 pt-8 border-t border-current/15 flex items-center justify-between gap-4">
              <button
                onClick={() => goToChapter(currentChapterIndex - 1)}
                disabled={currentChapterIndex === 0}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                  currentChapterIndex === 0
                    ? "opacity-30 cursor-not-allowed border-current/10"
                    : "border-amber-500/40 hover:bg-amber-500/10 text-amber-400 hover:scale-105"
                }`}
              >
                <ChevronLeft size={18} />
                <span>Previous Chapter</span>
              </button>

              <div className="text-xs font-mono opacity-50 hidden sm:block">
                Chapter {currentChapterIndex + 1} of {bookData.chapters.length}
              </div>

              <button
                onClick={() => goToChapter(currentChapterIndex + 1)}
                disabled={currentChapterIndex === bookData.chapters.length - 1}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                  currentChapterIndex === bookData.chapters.length - 1
                    ? "opacity-30 cursor-not-allowed border-current/10"
                    : "bg-amber-500 text-black border-amber-400 font-bold hover:bg-amber-400 hover:scale-105 shadow-lg shadow-amber-500/20"
                }`}
              >
                <span>Next Chapter</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookReader;
