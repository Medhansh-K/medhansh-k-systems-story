import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Sparkles,
  ListMusic,
  Headphones,
  RotateCcw,
  RotateCw,
  Sliders,
  ChevronDown,
  X,
} from "lucide-react";
import { useAudiobook } from "@/contexts/AudiobookContext";
import { bookData } from "@/data/bookData";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";

export const SpotifyAudioPlayer: React.FC = () => {
  const {
    isPlaying,
    currentChapterIndex,
    currentParagraphIndex,
    playbackRate,
    selectedVoice,
    availableVoices,
    volume,
    isMuted,
    isExpanded,
    togglePlay,
    nextChapter,
    prevChapter,
    seekToParagraph,
    setRate,
    setVoice,
    setVol,
    toggleMute,
    toggleExpand,
    currentChapter,
    currentParagraph,
    totalParagraphsInChapter,
  } = useAudiobook();

  const [showTracklist, setShowTracklist] = useState(false);

  const progressPercent = totalParagraphsInChapter > 0 ? ((currentParagraphIndex + 1) / totalParagraphsInChapter) * 100 : 0;

  return (
    <>
      {/* 1. BOTTOM FLOATING SPOTIFY BAR */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/95 border-t border-zinc-800/80 backdrop-blur-xl text-white shadow-2xl px-4 sm:px-6 py-2.5"
      >
        <div className="container mx-auto flex items-center justify-between gap-4">
          {/* LEFT: Cover Art & Track Metadata */}
          <div className="flex items-center gap-3 min-w-0 max-w-[220px] sm:max-w-xs">
            <button onClick={toggleExpand} className="relative group shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-amber-500/40 shadow-md">
                <img
                  src={bookData.coverImage}
                  alt={bookData.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${isPlaying ? "scale-105" : ""}`}
                />
              </div>
              {/* Equalizer overlay when playing */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5 rounded-lg">
                  <motion.span animate={{ height: ["4px", "14px", "4px"] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-amber-400 rounded-full" />
                  <motion.span animate={{ height: ["10px", "4px", "16px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-amber-400 rounded-full" />
                  <motion.span animate={{ height: ["14px", "8px", "6px"] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-amber-400 rounded-full" />
                </div>
              )}
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1">
                  <Headphones size={10} /> Audiobook
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold truncate text-white">{bookData.title}</h3>
              <p className="text-[11px] text-zinc-400 truncate">
                {currentChapter.number}: {currentChapter.title}
              </p>
            </div>
          </div>

          {/* CENTER: Audio Controls & Progress Scrubber */}
          <div className="flex-1 max-w-md flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Prev Chapter */}
              <button
                onClick={prevChapter}
                disabled={currentChapterIndex === 0}
                className="text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                title="Previous Chapter"
              >
                <SkipBack size={18} />
              </button>

              {/* Skip 1 Paragraph Back */}
              <button
                onClick={() => seekToParagraph(currentChapterIndex, Math.max(0, currentParagraphIndex - 1))}
                className="text-zinc-400 hover:text-white transition-colors hidden sm:block"
                title="Previous Paragraph"
              >
                <RotateCcw size={16} />
              </button>

              {/* Play / Pause Main Circle Button */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                title={isPlaying ? "Pause Narration" : "Play Narration"}
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
              </button>

              {/* Skip 1 Paragraph Forward */}
              <button
                onClick={() => seekToParagraph(currentChapterIndex, Math.min(totalParagraphsInChapter - 1, currentParagraphIndex + 1))}
                className="text-zinc-400 hover:text-white transition-colors hidden sm:block"
                title="Next Paragraph"
              >
                <RotateCw size={16} />
              </button>

              {/* Next Chapter */}
              <button
                onClick={nextChapter}
                disabled={currentChapterIndex === bookData.chapters.length - 1}
                className="text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                title="Next Chapter"
              >
                <SkipForward size={18} />
              </button>
            </div>

            {/* Paragraph Progress Bar */}
            <div className="w-full flex items-center gap-2 text-[10px] font-mono text-zinc-400">
              <span>Para {currentParagraphIndex + 1}</span>
              <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer">
                <div className="h-full bg-amber-400 transition-all duration-200" style={{ width: `${progressPercent}%` }} />
              </div>
              <span>Total {totalParagraphsInChapter}</span>
            </div>
          </div>

          {/* RIGHT: Speed, Volume & Expand Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Speed Selector */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="px-2 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-amber-400 text-xs font-mono font-bold transition-colors"
                  title="Playback Speed"
                >
                  {playbackRate}x
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-32 p-2 border border-zinc-800 bg-zinc-950 text-white rounded-xl shadow-xl z-50">
                <p className="text-[10px] font-mono uppercase text-zinc-400 mb-1.5 px-2 font-semibold">Speed</p>
                {[0.75, 1, 1.25, 1.5, 2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setRate(rate)}
                    className={`w-full text-left px-2 py-1 rounded text-xs font-mono ${
                      playbackRate === rate ? "bg-amber-500/20 text-amber-400 font-bold" : "hover:bg-zinc-800 text-zinc-300"
                    }`}
                  >
                    {rate}x {rate === 1 && "(Normal)"}
                  </button>
                ))}
              </PopoverContent>
            </Popover>

            {/* Voice Selector */}
            {availableVoices.length > 0 && (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors hidden lg:block" title="Select Narrator Voice">
                    <Sliders size={16} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3 border border-zinc-800 bg-zinc-950 text-white rounded-xl shadow-xl z-50">
                  <p className="text-[10px] font-mono uppercase text-zinc-400 mb-2 px-1 font-semibold">Select Voice</p>
                  <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                    {availableVoices.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setVoice(v)}
                        className={`w-full text-left p-1.5 rounded text-xs truncate block ${
                          selectedVoice?.name === v.name ? "bg-amber-500/20 text-amber-400 font-semibold" : "hover:bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        {v.name} ({v.lang})
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            )}

            {/* Mute/Volume */}
            <button onClick={toggleMute} className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors hidden sm:block" title="Volume">
              {isMuted || volume === 0 ? <VolumeX size={18} className="text-red-400" /> : <Volume2 size={18} />}
            </button>

            {/* Fullscreen Expand */}
            <button onClick={toggleExpand} className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors" title="Expand Player">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. FULLSCREEN EXPANDED SPOTIFY PLAYER MODAL */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 z-50 bg-[#0a0c0f] text-white flex flex-col justify-between p-6 sm:p-10 overflow-hidden"
          >
            {/* Ambient Background Artwork Glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none filter blur-3xl">
              <img src={bookData.coverImage} alt="Cover" className="w-full h-full object-cover scale-150" />
            </div>

            {/* Top Header */}
            <div className="relative z-10 flex items-center justify-between">
              <button onClick={toggleExpand} className="p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300">
                <ChevronDown size={22} />
              </button>

              <div className="text-center">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold">Audiobook Player</p>
                <h2 className="text-xs text-zinc-400">{bookData.title}</h2>
              </div>

              <button
                onClick={() => setShowTracklist(!showTracklist)}
                className={`p-2.5 rounded-full transition-colors ${showTracklist ? "bg-amber-500 text-black font-bold" : "bg-zinc-900/80 text-zinc-300"}`}
                title="Tracklist"
              >
                <ListMusic size={20} />
              </button>
            </div>

            {/* Main Content View (Art & Sync Text or Tracklist) */}
            <div className="relative z-10 flex-1 my-8 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-5xl mx-auto w-full overflow-hidden">
              {/* Left Cover Art */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/40 relative group">
                  <img src={bookData.coverImage} alt={bookData.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Right: Real-time Narration Lyrics / Paragraph Sync OR Tracklist */}
              <div className="flex-1 w-full max-h-[380px] overflow-y-auto pr-2 space-y-4 font-serif">
                {showTracklist ? (
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4 font-bold">Chapters Tracklist</p>
                    {bookData.chapters.map((ch, idx) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          seekToParagraph(idx, 0);
                          setShowTracklist(false);
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          idx === currentChapterIndex ? "bg-amber-500/20 border-amber-500/50 text-amber-200 font-bold" : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                        }`}
                      >
                        <div className="text-[10px] font-mono text-zinc-500 uppercase">{ch.number}</div>
                        <div className="text-sm font-semibold">{ch.title}</div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4 font-bold flex items-center gap-2">
                      <Sparkles size={14} /> Live Narration Text
                    </p>

                    <div className="space-y-4">
                      {currentChapter.paragraphs.map((p, idx) => {
                        const isCurrent = idx === currentParagraphIndex;
                        return (
                          <div
                            key={p.id}
                            onClick={() => seekToParagraph(currentChapterIndex, idx)}
                            className={`p-4 rounded-xl transition-all cursor-pointer ${
                              isCurrent
                                ? "bg-amber-500/20 border border-amber-500/50 text-white font-bold text-lg sm:text-xl leading-relaxed shadow-lg"
                                : "opacity-40 hover:opacity-80 text-sm sm:text-base text-zinc-300"
                            }`}
                          >
                            <p>{p.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Expanded Controls */}
            <div className="relative z-10 max-w-2xl mx-auto w-full space-y-4">
              {/* Progress Scrubber */}
              <div className="space-y-1">
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span>
                    {currentChapter.number} • Paragraph {currentParagraphIndex + 1}
                  </span>
                  <span>{Math.round(progressPercent)}% Read</span>
                </div>
              </div>

              {/* Big Player Controls */}
              <div className="flex items-center justify-between">
                <button onClick={prevChapter} className="text-zinc-400 hover:text-white p-2">
                  <SkipBack size={26} />
                </button>

                <button
                  onClick={() => seekToParagraph(currentChapterIndex, Math.max(0, currentParagraphIndex - 1))}
                  className="text-zinc-400 hover:text-white p-2"
                  title="Rewind 1 Paragraph"
                >
                  <RotateCcw size={22} />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold flex items-center justify-center shadow-xl shadow-amber-500/25 hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                </button>

                <button
                  onClick={() => seekToParagraph(currentChapterIndex, Math.min(totalParagraphsInChapter - 1, currentParagraphIndex + 1))}
                  className="text-zinc-400 hover:text-white p-2"
                  title="Forward 1 Paragraph"
                >
                  <RotateCw size={22} />
                </button>

                <button onClick={nextChapter} className="text-zinc-400 hover:text-white p-2">
                  <SkipForward size={26} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
