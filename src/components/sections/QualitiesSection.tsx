
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Heart,
  Sparkles,
  Flower2,
  Star,
  Sun,
  Smile,
} from "lucide-react";

import { birthdayConfig } from "@/lib/config";

const decorations = [
  Heart,
  Sparkles,
  Flower2,
  Star,
  Sun,
  Smile,
];

export default function QualitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const qualities = birthdayConfig.qualities.slice(0, 6);

  return (
    <section
      id="qualities"
      className="relative overflow-hidden bg-[#FFF8FC] px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FCE4F1]/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#F7C5DE]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-handwritten text-3xl text-primary">
            A thousand little reasons
          </span>

          <h2 className="font-editorial mt-3 text-5xl font-normal text-foreground sm:text-6xl md:text-7xl">
            Little Things I Adore
            <br className="hidden sm:block" /> About You
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
            It's the little things that make someone extraordinary.
            Here are a few things worth celebrating about you.
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#F7A8CD]" />

            <Heart
              size={15}
              fill="#EC4899"
              className="text-accent"
            />

            <span className="h-px w-9 bg-[#F7A8CD]" />
          </div>
        </motion.div>

        {/* Qualities card grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {qualities.map((quality, index) => {
            const Icon = decorations[index % decorations.length];

            return (
              <motion.div
                key={`${quality}-${index}`}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion ? 0 : (index % 3) * 0.12,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#F3DCE8] bg-white p-7 shadow-[0_8px_30px_rgba(190,24,93,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#F7C5DE] hover:shadow-[0_18px_45px_rgba(190,24,93,0.10)] sm:p-8"
              >
                {/* Decorative background circle */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#FFF0F7] transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">

                  {/* Number and icon */}
                  <div className="mb-7 flex items-center justify-between">

                    <span className="font-editorial text-4xl italic text-[#E7A3C4]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3DCE8] bg-[#FFF0F7] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FCE4F1]">
                      <Icon
                        size={21}
                        strokeWidth={1.4}
                        className="text-primary transition-colors duration-300 group-hover:text-accent"
                      />
                    </div>
                  </div>

                  {/* Quality title */}
                  <h3 className="font-editorial text-3xl leading-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                    {quality}
                  </h3>

                  {/* Bottom accent */}
                  <div className="mt-6 h-px w-10 bg-[#F7A8CD] transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Closing accent */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-handwritten mt-16 text-center text-3xl text-accent"
        >
          And a million more that words could never explain.
        </motion.p>

      </div>
    </section>
  );
}
