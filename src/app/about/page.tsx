import type { Metadata } from "next";
import { siteConfig } from "@/core/config/site";
import { CtaBanner } from "@/features/home/components/cta-banner";
import { TeamGrid } from "@/features/team/components/team-grid";
import { Reveal } from "@/shared/components/motion/reveal";
import { PageHeader, Section, SectionHeading } from "@/shared/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}: our story, values and leadership team.`,
};

const values = [
  { title: "Integrity first", text: "Lorem ipsum dolor sit amet. We say what we think and do what we say." },
  { title: "Outcomes over output", text: "Consectetur adipiscing elit. Success is measured by shipped value, not lines of code." },
  { title: "Partnership", text: "Sed do eiusmod tempor. We embed with your team and share accountability." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={`Engineers, designers and problem-solvers since ${siteConfig.founded}.`}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. What began as a two-person dev shop is now a full-stack IT firm building AI, web, mobile and cloud products for clients worldwide."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <h3 className="font-display font-bold tracking-tight text-xl">{v.title}</h3>
                <p className="mt-3 text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading eyebrow="Leadership" title="The people behind the code" />
        <TeamGrid />
      </Section>
      <div className="pt-20 sm:pt-28">
        <CtaBanner />
      </div>
    </>
  );
}
