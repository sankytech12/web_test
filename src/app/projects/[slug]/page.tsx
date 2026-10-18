import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/core/config/routes";
import { cn } from "@/core/utils/cn";
import { CtaBanner } from "@/features/home/components/cta-banner";
import { getProject, projects } from "@/features/projects/data/projects";
import { Badge } from "@/shared/components/ui/badge";
import { Section } from "@/shared/components/ui/section";

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <div className={cn("bg-gradient-to-br text-white", project.cover)}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Link
            href={routes.projects}
            className="mb-8 inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <Badge className="bg-white/15 text-white">{project.category}</Badge>
          <h1 className="mt-4 max-w-3xl font-display font-bold tracking-tight text-4xl sm:text-5xl">{project.title}</h1>
          <p className="mt-3 opacity-80">
            {project.client} · {project.year}
          </p>
        </div>
      </div>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display font-bold tracking-tight text-2xl">The challenge</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display font-bold tracking-tight text-2xl">Tech stack</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-bold tracking-tight text-2xl">Our approach</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-surface p-7">
            <h2 className="mb-5 font-display font-bold tracking-tight text-xl">Results</h2>
            <dl className="space-y-5">
              {project.results.map((r) => (
                <div key={r.label}>
                  <dt className="text-sm text-muted">{r.label}</dt>
                  <dd className="font-display font-bold tracking-tight text-3xl text-accent">{r.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
