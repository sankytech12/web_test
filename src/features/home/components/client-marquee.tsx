import { clients } from "../data/stats";

export function ClientMarquee() {
  const items = [...clients, ...clients];
  return (
    <div className="group/marquee overflow-hidden border-b border-border py-8" aria-label="Selected clients">
      <ul className="flex w-max animate-marquee gap-16 font-display font-bold tracking-tight text-2xl text-muted/70">
        {items.map((c, i) => (
          <li key={i} aria-hidden={i >= clients.length}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
