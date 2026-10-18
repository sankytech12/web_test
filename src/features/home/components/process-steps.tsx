import { Reveal } from "@/shared/components/motion/reveal";
import { process } from "../data/stats";

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {process.map((p, i) => (
        <Reveal key={p.step} delay={i * 0.08}>
          <li className="h-full list-none rounded-2xl border border-white/15 bg-white/[0.05] p-6">
            <span className="font-mono text-sm text-spark">{p.step}</span>
            <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
