import type { Metadata } from "next";
import { ServiceCard } from "@/features/services/components/service-card";
import { services } from "@/features/services/data/services";
import { CtaBanner } from "@/features/home/components/cta-banner";
import { PageHeader, Section } from "@/shared/components/ui/section";

export const metadata: Metadata = {
  title: "Services",
  description: "AI, web, mobile, cloud, enterprise, data, security and design services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every layer of the stack, one team."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
