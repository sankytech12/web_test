"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
}) {
  const reduce = useReducedMotion();
  const start = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -48 },
    right: { opacity: 0, x: 48 },
    scale: { opacity: 0, scale: 0.92 },
  }[from];
  return (
    <motion.div
      className={className}
      initial={reduce ? false : start}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
