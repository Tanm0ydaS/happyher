
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Flower2, Sparkles, Heart } from "lucide-react";

import { birthdayConfig } from "@/lib/config";

export default function WishesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="wishes"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8FC] via-[#FFF0F7] to-[#FFF8FC] px-6 py-28 sm:py-36"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C5DE]/30 blur-[110px]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#FCE4F1]/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#F7C5DE]/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Floral decoration */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-9 flex justify-center"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { rotate: [0, 8, -8, 0] }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-[#F3DCE8] bg-white/70 shadow-[0_8px_30px_rgba(190,24,93,0.07)]"
          >
            <Flower2
              size={42}
              strokeWidth={1}
              className="text-primary"
            />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-handwritten text-3xl text-primary"
        >
          A wish from the bottom of my heart
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-editorial mt-5 text-5xl leading-[1.1] text-foreground sm:text-6xl md:text-7xl"
        >
          May Your World
          <br />
          <span className="italic text-[#EC4899]">
            Always Be Beautiful.
          </span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-8 h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#EC4899] to-transparent"
        />

        {/* Birthday wish card */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto mt-9 max-w-2xl rounded-3xl border border-[#F3DCE8] bg-white/75 px-7 py-9 shadow-[0_15px_45px_rgba(190,24,93,0.06)] backdrop-blur-sm sm:px-12 sm:py-12"
        >
          <p className="text-base leading-8 text-[#705765] sm:text-lg sm:leading-9">
            {birthdayConfig.birthdayWish}
          </p>
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <Sparkles size={15} className="text-primary" />

          <span className="font-handwritten text-2xl text-accent">
            You deserve all the beautiful things.
          </span>

          <Sparkles size={15} className="text-primary" />
        </motion.div>

        {/* Bottom heart */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Heart
            size={19}
            fill="#F7C5DE"
            className="text-[#EC4899]"
            strokeWidth={1.3}
          />
        </motion.div>

      </div>
    </section>
  );
}
