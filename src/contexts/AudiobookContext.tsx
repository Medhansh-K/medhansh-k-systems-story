import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { bookData, Chapter, Paragraph } from "@/data/bookData";

interface AudiobookContextType {
  isPlaying: boolean;
  currentChapterIndex: number;
  currentParagraphIndex: number;
  playbackRate: number;
  selectedVoice: SpeechSynthesisVoice | null;
  availableVoices: SpeechSynthesisVoice[];
  volume: number;
  isMuted: boolean;
  isExpanded: boolean;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  nextChapter: () => void;
  prevChapter: () => void;
  seekToParagraph: (chapterIdx: number, paraIdx: number) => void;
  setRate: (rate: number) => void;
  setVoice: (voice: SpeechSynthesisVoice) => void;
  setVol: (vol: number) => void;
  toggleMute: () => void;
  toggleExpand: () => void;
  currentChapter: Chapter;
  currentParagraph: Paragraph | null;
  totalParagraphsInChapter: number;
}

const AudiobookContext = createContext<AudiobookContextType | undefined>(undefined);

export const AudiobookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize SpeechSynthesis and load available voices
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;

      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Filter English voices
        const englishVoices = voices.filter((v) => v.lang.startsWith("en") || v.lang.startsWith("hi"));
        setAvailableVoices(englishVoices.length > 0 ? englishVoices : voices);

        // Prefer natural / male / deep / Google / Daniel / Natural voices if available
        const preferredVoice =
          englishVoices.find((v) => v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Daniel") || v.name.includes("Male")) ||
          englishVoices[0] ||
          voices[0];

        if (preferredVoice && !selectedVoice) {
          setSelectedVoice(preferredVoice);
        }
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  const currentChapter = bookData.chapters[currentChapterIndex] || bookData.chapters[0];
  const currentParagraph = currentChapter.paragraphs[currentParagraphIndex] || currentChapter.paragraphs[0] || null;
  const totalParagraphsInChapter = currentChapter.paragraphs.length;

  // Speak paragraph function
  const speakCurrentParagraph = () => {
    if (!synthRef.current || !currentParagraph) return;

    synthRef.current.cancel(); // Stop any active utterance

    const textToRead = currentParagraph.text.replace(/[“”"]/g, "");
    const utterance = new SpeechSynthesisUtterance(textToRead);

    utterance.rate = playbackRate;
    utterance.volume = isMuted ? 0 : volume;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onend = () => {
      // Auto-advance to next paragraph
      setCurrentParagraphIndex((prev) => {
        if (prev < currentChapter.paragraphs.length - 1) {
          return prev + 1;
        } else {
          // Chapter finished -> advance to next chapter
          if (currentChapterIndex < bookData.chapters.length - 1) {
            setCurrentChapterIndex((chPrev) => chPrev + 1);
            return 0;
          } else {
            // End of book
            setIsPlaying(false);
            return prev;
          }
        }
      });
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis error:", e);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  // Re-read when playing state, chapter index, or paragraph index changes
  useEffect(() => {
    if (isPlaying) {
      speakCurrentParagraph();
    } else {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    }
  }, [isPlaying, currentChapterIndex, currentParagraphIndex]);

  // Update utterance properties when rate/volume/voice changes on the fly
  useEffect(() => {
    if (isPlaying) {
      speakCurrentParagraph();
    }
  }, [playbackRate, volume, isMuted, selectedVoice]);

  const play = () => setIsPlaying(true);
  const pause = () => {
    setIsPlaying(false);
    if (synthRef.current) synthRef.current.cancel();
  };
  const togglePlay = () => (isPlaying ? pause() : play());

  const nextChapter = () => {
    if (currentChapterIndex < bookData.chapters.length - 1) {
      setCurrentChapterIndex((prev) => prev + 1);
      setCurrentParagraphIndex(0);
    }
  };

  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex((prev) => prev - 1);
      setCurrentParagraphIndex(0);
    }
  };

  const seekToParagraph = (chIdx: number, paraIdx: number) => {
    setCurrentChapterIndex(chIdx);
    setCurrentParagraphIndex(paraIdx);
    if (!isPlaying) setIsPlaying(true);
  };

  const setRate = (rate: number) => setPlaybackRate(rate);
  const setVoice = (voice: SpeechSynthesisVoice) => setSelectedVoice(voice);
  const setVol = (vol: number) => {
    setVolume(vol);
    if (vol === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };
  const toggleMute = () => setIsMuted((prev) => !prev);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <AudiobookContext.Provider
      value={{
        isPlaying,
        currentChapterIndex,
        currentParagraphIndex,
        playbackRate,
        selectedVoice,
        availableVoices,
        volume,
        isMuted,
        isExpanded,
        play,
        pause,
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
      }}
    >
      {children}
    </AudiobookContext.Provider>
  );
};

export const useAudiobook = () => {
  const context = useContext(AudiobookContext);
  if (!context) {
    throw new Error("useAudiobook must be used within an AudiobookProvider");
  }
  return context;
};
