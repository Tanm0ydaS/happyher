
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

import { birthdayConfig } from "@/lib/config";

export default function ClosingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      id="closing"
      className="relative overflow-hidden bg-gradient-to-b from-[#E8F7FA] via-[#F2FAFC] to-[#FFFFFF] px-6 py-28 text-center sm:py-36"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#8CCBD5]/30" />

      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full border border-[#8CCBD5]/30" />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9EBF0]/40 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-8 flex items-center justify-center gap-3">
            <Sparkles size={17} className="text-[#55AAB8]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#438D9B]">
              A day to celebrate you
            </span>

            <Sparkles size={17} className="text-[#55AAB8]" />
          </div>

          <h2 className="font-editorial text-5xl font-normal leading-tight text-[#343839] sm:text-6xl md:text-7xl">
            {birthdayConfig.closingHeading}
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#718A94] sm:text-base sm:leading-9">
            {birthdayConfig.closingMessage}
          </p>

          <div className="mx-auto my-12 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#B8DDE3]" />

            <Heart
              size={21}
              strokeWidth={1}
              fill="#55AAB8"
              className="text-[#55AAB8]"
            />

            <span className="h-px flex-1 bg-[#B8DDE3]" />
          </div>

          <p className="font-handwritten text-3xl text-[#438D9B] sm:text-4xl">
            {birthdayConfig.signature}
          </p>

          <p className="font-editorial mt-3 text-4xl italic text-[#344D59] sm:text-5xl">
            {birthdayConfig.yourName}
          </p>
        </motion.div>

        <div className="mt-20 border-t border-[#D5E9ED] pt-7">
          <p className="text-[10px] tracking-[0.2em] text-[#91AAB1]">
            MADE WITH LOVE, JUST FOR YOU
          </p>

          <p className="font-handwritten mt-3 text-xl text-[#438D9B]">
            Some people make the world more beautiful. You're one of them.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2">
            <Heart size={12} fill="#75BFCA" className="text-[#75BFCA]" />

            <span className="text-[9px] tracking-[0.2em] text-[#91AAB1]">
              FOREVER & ALWAYS
            </span>

            <Heart size={12} fill="#75BFCA" className="text-[#75BFCA]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
