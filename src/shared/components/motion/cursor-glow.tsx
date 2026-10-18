"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/** Soft glow that trails the cursor. Stays invisible until a mouse moves (never on touch). */
export function CursorGlow() {
  const x = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });
  const opacity = useMotionValue(0);

  useEffect(() => {
    const ok =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;
    const move = (e: MouseEvent) => {
      opacity.set(1);
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, opacity]);

  return (
    <motion.div
      aria-hidden
      style={{ x, y, opacity }}
      className="pointer-events-none fixed left-0 top-0 z-40 size-[400px] rounded-full bg-violet/15 blur-3xl"
    />
  );
}
