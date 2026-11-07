
"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Music2, Pause, Play } from "lucide-react";

import { birthdayConfig } from "@/lib/config";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  if (!birthdayConfig.music.enabled) {
    return null;
  }

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      setHasError(false);
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setHasError(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayConfig.music.src}
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setHasError(true);
        }}
      />

      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        {hasError && (
          <span
            role="status"
            className="rounded-full border border-[#F3DCE8] bg-white/95 px-3 py-2 text-[10px] text-[#BE185D] shadow-[0_5px_25px_rgba(190,24,93,0.10)] backdrop-blur-md"
          >
            Add your birthday song
          </span>
        )}

        <button
          type="button"
          onClick={toggleMusic}
          aria-label={
            isPlaying ? "Pause birthday music" : "Play birthday music"
          }
          aria-pressed={isPlaying}
          title={isPlaying ? "Pause music" : "Play music"}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#F3C4DC] bg-white/95 text-[#BE185D] shadow-[0_5px_25px_rgba(190,24,93,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#EC4899] hover:bg-[#FFF0F7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EC4899]"
        >
          <motion.span
            animate={
              isPlaying && !shouldReduceMotion
                ? { rotate: 360 }
                : { rotate: 0 }
            }
            transition={
              isPlaying && !shouldReduceMotion
                ? { duration: 5, repeat: Infinity, ease: "linear" }
                : { duration: 0.2 }
            }
          >
            <Music2 size={19} strokeWidth={1.5} />
          </motion.span>

          <span className="absolute bottom-2 right-2">
            {isPlaying ? (
              <Pause size={9} fill="#BE185D" />
            ) : (
              <Play size={9} fill="#BE185D" />
            )}
          </span>
        </button>
      </div>
    </>
  );
}
