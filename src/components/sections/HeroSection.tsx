
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

import { birthdayConfig } from "@/lib/config";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToNextSection = () => {
    document.getElementById("letter")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="home"
      className="editorial-grain hero-glow relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF0F7] via-[#FFF8FC] to-white px-6 py-24 text-center"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#EC4899]/15" />

      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full border border-[#EC4899]/15" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBCFE8]/20 blur-[100px]" />

      {/* Floating decorations */}
      <motion.div
        className="pointer-events-none absolute left-[12%] top-[22%] text-[#E8B8B8]"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -12, 0], rotate: [0, 10, 0] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={22} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-[14%] top-[28%] text-[#EC4899]/60"
        animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={25} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-[20%] left-[20%] text-[#E8B8B8]"
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={18} strokeWidth={1} />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <Sparkles size={16} className="text-[#EC4899]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#BE185D] sm:text-xs">
            {birthdayConfig.heroEyebrow}
          </span>

          <Sparkles size={16} className="text-[#EC4899]" />
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="font-editorial text-6xl font-normal leading-[1.08] tracking-tight text-[#49343F] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {birthdayConfig.birthdayHeading}
          <span className="mt-2 block text-[#EC4899]">
            {birthdayConfig.girlfriendName}
          </span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#806B78] sm:text-base sm:leading-9 md:text-lg"
        >
          {birthdayConfig.birthdaySubtitle}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-12"
        >
          <button
            type="button"
            onClick={scrollToNextSection}
            className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#E8B8B8] px-9 py-5 text-xs font-semibold tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(232,184,184,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DDA5A5] hover:shadow-[0_12px_35px_rgba(232,184,184,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDA5A5]"
          >
            {birthdayConfig.heroButtonText}

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <Heart size={12} fill="#EC4899" className="text-[#EC4899]" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#A18B98]">
            Made with love
          </span>

          <Heart size={12} fill="#EC4899" className="text-[#EC4899]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
