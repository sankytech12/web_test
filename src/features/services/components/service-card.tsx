import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { routes } from "@/core/config/routes";
import { Spotlight } from "@/shared/components/motion/spotlight";
import type { Service } from "../data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Spotlight className="h-full">
    <Link
      href={routes.service(service.slug)}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-7 transition hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-violet/20"
    >
      <span className="mb-6 grid size-12 place-items-center rounded-xl bg-accent-soft text-accent transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
        <Icon className="size-6" />
      </span>
      <h3 className="font-display font-bold tracking-tight text-xl">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Learn more
        <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
    </Spotlight>
  );
}
