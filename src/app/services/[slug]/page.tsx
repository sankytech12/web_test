import { Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes } from "@/core/config/routes";
import { CtaBanner } from "@/features/home/components/cta-banner";
import { getService, services } from "@/features/services/data/services";
import { ButtonLink } from "@/shared/components/ui/button";
import { PageHeader, Section } from "@/shared/components/ui/section";

export const instant = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  return service
    ? { title: service.title, description: service.summary }
    : {};
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader eyebrow="Service" title={service.title} description={service.summary} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-muted">{service.description}</p>
          <aside className="h-fit rounded-2xl border border-border bg-surface p-7">
            <h2 className="mb-4 font-display font-bold tracking-tight text-xl">What we deliver</h2>
            <ul className="space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <ButtonLink href={routes.contact} className="mt-6 w-full">
              Discuss this service
            </ButtonLink>
          </aside>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
