"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/core/utils/cn";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "../data/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {(["All", ...projectCategories] as const).map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition",
              active === c
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-surface text-muted hover:border-accent hover:text-accent",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
