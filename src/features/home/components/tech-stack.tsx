"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "../data/stats";

export function TechStack() {
  const reduce = useReducedMotion();
  return (
    <ul className="flex flex-wrap gap-2.5 sm:gap-3">
      {techStack.map((t, i) => (
        <motion.li
          key={t}
          initial={reduce ? false : { opacity: 0, scale: 0.6, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.03 }}
          whileHover={{ y: -4, rotate: i % 2 ? 2 : -2, scale: 1.08 }}
          className="cursor-default rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent sm:text-sm"
        >
          {t}
        </motion.li>
      ))}
    </ul>
  );
}
