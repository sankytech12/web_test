import { Reveal } from "@/shared/components/motion/reveal";
import { team } from "../data/team";

export function TeamGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m, i) => (
        <Reveal key={m.name} delay={i * 0.08}>
          <article className="h-full rounded-2xl border border-border bg-surface p-6">
            <div className="mb-5 grid size-20 place-items-center rounded-full bg-gradient-to-br from-brand to-accent font-display font-bold tracking-tight text-2xl text-brand-foreground">
              {m.initials}
            </div>
            <h3 className="font-display font-bold tracking-tight text-lg">{m.name}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{m.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
