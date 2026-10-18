import { Plus } from "lucide-react";
import { faqs } from "../data/stats";

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
      {faqs.map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            {f.q}
            <Plus className="size-5 shrink-0 text-accent transition group-open:rotate-45" />
          </summary>
          <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
