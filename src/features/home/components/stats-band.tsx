import { Container } from "@/shared/components/ui/container";
import { Counter } from "@/shared/components/motion/counter";
import { stats } from "../data/stats";

export function StatsBand() {
  return (
    <section className="bg-ink text-white">
      <Container className="grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display font-bold tracking-tight text-5xl text-gradient sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm opacity-75">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
