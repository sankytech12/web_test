"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/core/utils/cn";
import { testimonials } from "../data/testimonials";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  const t = testimonials[index];

  return (
    <div
      className="mx-auto max-w-3xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="mx-auto mb-6 size-10 text-accent" />
      <div className="min-h-52" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <blockquote className="font-display font-bold tracking-tight text-2xl leading-snug sm:text-3xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold">{t.name}</span>
              <span className="text-muted"> · {t.role}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => setIndex((i) => (i - 1 + count) % count)}
          className="grid size-10 place-items-center rounded-full border border-border hover:border-accent"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-accent" : "w-2 bg-border",
              )}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => setIndex((i) => (i + 1) % count)}
          className="grid size-10 place-items-center rounded-full border border-border hover:border-accent"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
