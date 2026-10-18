import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { routes } from "@/core/config/routes";
import { cn } from "@/core/utils/cn";
import { Badge } from "@/shared/components/ui/badge";
import { Tilt } from "@/shared/components/motion/tilt";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Tilt>
    <Link
      href={routes.project(project.slug)}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition duration-700 group-hover:scale-110",
            project.cover,
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
        <span className="absolute bottom-4 left-5 font-display font-bold tracking-tight text-2xl text-white/90">
          {project.client}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Badge>{project.category}</Badge>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h3 className="flex items-start justify-between gap-2 font-display font-bold tracking-tight text-xl">
          {project.title}
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-accent opacity-0 transition group-hover:opacity-100" />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      </div>
    </Link>
    </Tilt>
  );
}
