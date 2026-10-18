import { ArrowRight } from "lucide-react";
import { routes } from "@/core/config/routes";
import { PostCard } from "@/features/blog/components/post-card";
import { posts } from "@/features/blog/data/posts";
import { ClientMarquee } from "@/features/home/components/client-marquee";
import { CtaBanner } from "@/features/home/components/cta-banner";
import { Faq } from "@/features/home/components/faq";
import { Hero } from "@/features/home/components/hero";
import { ProcessSteps } from "@/features/home/components/process-steps";
import { TechStack } from "@/features/home/components/tech-stack";
import { StatsBand } from "@/features/home/components/stats-band";
import { ProjectCard } from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/data/projects";
import { ServiceCard } from "@/features/services/components/service-card";
import { services } from "@/features/services/data/services";
import { TestimonialCarousel } from "@/features/testimonials/components/testimonial-carousel";
import { Reveal } from "@/shared/components/motion/reveal";
import { ButtonLink } from "@/shared/components/ui/button";
import { Section, SectionHeading } from "@/shared/components/ui/section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />

      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to build, ship and scale"
          description="Eight practices across the full technology stack, delivered by one accountable team."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBand />

      <Section className="bg-surface">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            className="mb-0"
            eyebrow="Selected work"
            title="Products built for real-world impact"
          />
          <ButtonLink href={routes.projects} variant="outline">
            All projects <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Technology"
          title="Any stack. The right stack."
          description="We are not tied to one vendor or framework. We choose what fits your product, team and budget."
        />
        <TechStack />
      </Section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-spark">How we work</p>
          <h2 className="mb-12 max-w-2xl text-3xl font-display font-bold tracking-tight sm:text-4xl">From idea to scale in four steps</h2>
          <ProcessSteps />
        </div>
      </section>

      <Section className="bg-surface">
        <TestimonialCarousel />
      </Section>

      <Section>
        <SectionHeading eyebrow="Insights" title="Latest thinking" />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions, answered"
        />
        <Faq />
      </Section>

      <div className="pt-20 sm:pt-28">
        <CtaBanner />
      </div>
    </>
  );
}
