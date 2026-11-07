
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ImagePlus,
} from "lucide-react";

import { birthdayConfig } from "@/lib/config";

export default function MemoriesSection() {
  const shouldReduceMotion = useReducedMotion();

  const [failedImages, setFailedImages] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    duration: shouldReduceMotion ? 0 : 30,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelected();

    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);

    return () => {
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  const memories = birthdayConfig.memories.slice(0, 5);

  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-[#FFF0F7] px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F7C5DE]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#FCE4F1] blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="font-handwritten text-3xl text-primary">
            Little pieces of forever
          </span>

          <h2 className="font-editorial mt-3 text-5xl font-normal tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Our Beautiful Memories
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
            Some moments deserve to be remembered forever.
            Here are five little pieces of happiness.
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#F7A8CD]" />

            <Heart
              size={14}
              fill="#EC4899"
              className="text-accent"
            />

            <span className="h-px w-9 bg-[#F7A8CD]" />
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div
            ref={emblaRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Five beautiful memories"
            onKeyDown={handleKeyDown}
            className="overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          >
            <div className="flex touch-pan-y">
              {memories.map((memoryHer, index) => {
                const hasImageFailed = failedImages.includes(index);

                return (
                  <div
                    key={memoryHer.image}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of 5`}
                    className="min-w-0 flex-[0_0_86%] px-2 sm:flex-[0_0_72%] sm:px-4 lg:flex-[0_0_58%]"
                  >
                    {/* White photo frame */}
                    <div className="group overflow-hidden rounded-2xl border border-[#F3DCE8] bg-white p-2.5 shadow-[0_18px_50px_rgba(190,24,93,0.09)] transition-shadow duration-500 hover:shadow-[0_22px_60px_rgba(190,24,93,0.15)] sm:p-3">

                      {/* Image */}
                      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#FCE4F1]">
                        {!hasImageFailed ? (
                          <Image
                            src={memoryHer.image}
                            alt={memoryHer.title}
                            fill
                            sizes="(max-width: 640px) 86vw, (max-width: 1024px) 72vw, 58vw"
                            loading={index === 0 ? "eager" : "lazy"}
                            onError={() => {
                              setFailedImages((current) =>
                                current.includes(index)
                                  ? current
                                  : [...current, index]
                              );
                            }}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF0F7] via-[#FCE4F1] to-[#F7C5DE] p-6 text-center">

                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/70" />

                            <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full border border-white/70" />

                            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/60 shadow-sm">
                              <ImagePlus
                                size={26}
                                strokeWidth={1.2}
                                className="text-primary"
                              />
                            </div>

                            <span className="relative mt-6 text-[10px] font-semibold tracking-[0.25em] text-accent">
                              MEMORY {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="font-editorial relative mt-3 max-w-xs text-2xl italic text-foreground sm:text-3xl">
                              {memoryHer.title}
                            </p>

                            <span className="font-handwritten relative mt-4 text-xl text-primary">
                              Your photo goes here
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Caption */}
                      <div className="px-3 py-5 text-center sm:px-5 sm:py-6">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D66B9C]">
                          MEMORY {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="font-editorial mt-2 text-2xl text-foreground sm:text-3xl">
                          {memoryHer.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">
                          {memoryHer.caption}
                        </p>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="mt-9 flex items-center justify-center gap-5">

            {/* Previous */}
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous memory"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3C6DD] bg-white text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_8px_20px_rgba(236,72,153,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>

            {/* Pagination */}
            <div className="flex items-center gap-2.5">
              {memories.map((memoryHer, index) => (
                <button
                  key={memoryHer.image}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to memoryHer ${index + 1}`}
                  aria-current={
                    selectedIndex === index ? "true" : undefined
                  }
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    selectedIndex === index
                      ? "w-7 bg-primary"
                      : "w-2 bg-[#EBC5D9] hover:bg-[#D66B9C]"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next memory"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3C6DD] bg-white text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_8px_20px_rgba(236,72,153,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>

          </div>

          <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Swipe to explore our memories
          </p>
        </motion.div>

        {/* Bottom handwritten note */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-handwritten mt-14 text-center text-3xl text-accent"
        >
          And these are just five of my favorites...
        </motion.p>

      </div>
    </section>
  );
}
