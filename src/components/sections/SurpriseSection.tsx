
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  Heart,
  Sparkles,
  Gift,
  LockKeyhole,
} from "lucide-react";

import { birthdayConfig } from "@/lib/config";

export default function SurpriseSection() {
  const [revealed, setRevealed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="surprise"
      className="relative overflow-hidden bg-linear-to-b from-[#FFF8FC] via-[#FFF0F7] to-[#FCE4F1] px-5 py-28 sm:px-8 sm:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C5DE]/45 blur-[110px]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#F7C5DE]/40 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-handwritten text-3xl text-primary">
            There's something else...
          </span>

          <h2 className="font-editorial mt-4 text-5xl text-yellow-800 sm:text-6xl md:text-7xl">
            One Last Surprise
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
            I've saved one more little thing for you.
            Are you ready to open it?
          </p>
        </motion.div>

        {/* Interactive gift */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-12 flex h-36 w-36 items-center justify-center rounded-full border border-[#F3C6DD] bg-white/70 shadow-[0_12px_40px_rgba(190,24,93,0.08)] sm:h-44 sm:w-44"
        >
          {/* Decorative rings */}
          <div className="pointer-events-none absolute inset-3 rounded-full border border-dashed border-[#F3DCE8]" />

          <div className="pointer-events-none absolute -inset-3 rounded-full border border-[#F3DCE8]/60" />

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -6, 0],
                    rotate: [0, 3, -3, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {revealed ? (
              <Heart
                size={66}
                strokeWidth={1}
                fill="#EC4899"
                className="text-[#BE185D]"
              />
            ) : (
              <Gift
                size={66}
                strokeWidth={1}
                className="text-primary"
              />
            )}
          </motion.div>
        </motion.div>

        {/* Surprise button */}
        {!revealed && (
          <motion.button
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            type="button"
            onClick={() => setRevealed(true)}
            className="group mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-gradient-to-r from-[#EC4899] to-[#DB2777] px-8 py-4 text-xs font-semibold tracking-[0.13em] text-white shadow-[0_12px_30px_rgba(236,72,153,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(190,24,93,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <LockKeyhole size={16} className="transition-transform duration-300 group-hover:rotate-[-10deg]" />

            OPEN YOUR SURPRISE

            <Sparkles size={16} className="transition-transform duration-300 group-hover:rotate-12" />
          </motion.button>
        )}

        {/* Revealed message */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 30, scale: 0.92 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              aria-live="polite"
              className="soft-paper soft-shadow mt-12 overflow-hidden rounded-[28px] border border-[#F3DCE8] px-7 py-12 sm:px-12 sm:py-14"
            >
              {/* Top decorative strip */}
              <div className="absolute" />

              <div className="mb-7 flex justify-center gap-4">
                <Sparkles className="text-primary" size={20} />

                <Heart
                  className="text-accent"
                  size={26}
                  fill="#FCE4F1"
                />

                <Sparkles className="text-primary" size={20} />
              </div>

              <span className="font-handwritten text-3xl text-primary">
                A little secret, just for you
              </span>

              <p className="font-editorial mt-6 whitespace-pre-line text-2xl leading-relaxed text-foreground sm:text-4xl">
                {birthdayConfig.surpriseMessage}
              </p>

              <div className="mt-9 flex items-center justify-center gap-2">
                <Heart
                  size={13}
                  fill="#EC4899"
                  className="text-primary"
                />

                <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  Always special, always loved
                </span>

                <Heart
                  size={13}
                  fill="#EC4899"
                  className="text-primary"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Closing message */}
        {revealed && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-handwritten mt-8 text-2xl text-accent"
          >
            I hope this made you smile. ❤️
          </motion.p>
        )}

      </div>
    </section>
  );
}
