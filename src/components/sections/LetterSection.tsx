
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

import { birthdayConfig } from "@/lib/config";

export default function LetterSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-[#FFF8FC] px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#FCE4F1]/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#F7C5DE]/35 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center sm:mb-20"
        >
          <span className="font-handwritten text-3xl text-[#EC4899]">
            From my heart to yours
          </span>

          <h2 className="font-editorial mt-3 text-5xl font-normal tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {birthdayConfig.letterTitle}
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F7A8CD]" />

            <Heart
              size={15}
              fill="#EC4899"
              stroke="#BE185D"
              strokeWidth={1.2}
            />

            <span className="h-px w-10 bg-[#F7A8CD]" />
          </div>

          <p className="mt-5 text-xs tracking-[0.16em] text-muted">
            A FEW WORDS, WITH INFINITE LOVE
          </p>
        </motion.div>

        {/* Letter card */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 45, scale: 0.98 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="soft-paper soft-shadow relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-[#F3DCE8] px-7 py-12 sm:px-14 sm:py-16 md:px-20 md:py-20"
        >
          {/* Top decorative strip */}
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#FCE4F1] via-[#EC4899] to-[#FCE4F1]" />

          {/* Corner decoration */}
          <Sparkles
            className="absolute right-6 top-7 text-[#EC4899]/60 sm:right-10 sm:top-10"
            size={22}
            strokeWidth={1.2}
          />

          {/* Small top label */}
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-7 bg-[#EC4899]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              A letter for you
            </span>
          </div>

          {/* Greeting */}
          <h3 className="font-editorial text-3xl italic text-[#BE185D] sm:text-4xl">
            My Dearest,
          </h3>

          {/* Personal message */}
          <div className="mt-7 whitespace-pre-line text-sm leading-8 text-[#66505D] sm:text-base sm:leading-9">
            {birthdayConfig.personalLetter}
          </div>

          {/* Signature */}
          <div className="mt-12">
            <p className="text-sm text-muted">
              {birthdayConfig.signature}
            </p>

            <p className="font-handwritten mt-1 text-4xl text-[#EC4899]">
              {birthdayConfig.yourName}
            </p>
          </div>

          {/* Bottom heart decoration */}
          <div className="mt-12 flex items-center justify-center">
            <div className="h-px flex-1 bg-[#F3DCE8]" />

            <Heart
              className="mx-5 text-[#EC4899]"
              size={18}
              strokeWidth={1.2}
              fill="#FCE4F1"
            />

            <div className="h-px flex-1 bg-[#F3DCE8]" />
          </div>

        </motion.div>

        {/* Handwritten footer */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-handwritten mt-10 text-center text-2xl text-[#BE185D] sm:text-3xl"
        >
          Every word comes from my heart.
        </motion.p>

      </div>
    </section>
  );
}
