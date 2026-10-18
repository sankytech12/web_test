import { ArrowRight } from "lucide-react";
import { routes } from "@/core/config/routes";
import { ButtonLink } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";

export function CtaBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-ink px-6 py-14 text-center text-white sm:px-16 sm:py-16">
          <div aria-hidden className="animate-drift absolute -left-24 -bottom-24 size-72 rounded-full bg-spark/30 blur-3xl" />
          <div aria-hidden className="animate-drift absolute -right-20 -top-20 size-72 rounded-full bg-violet/50 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl font-display font-bold tracking-tight text-3xl sm:text-4xl">
            Have an idea? Let&rsquo;s build it.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl opacity-80">
            Tell us what you need. AI, web, mobile or cloud, we will respond within one business day.
          </p>
          <ButtonLink
            href={routes.contact}
            size="lg"
            className="relative mt-8"
          >
            Book a consultation <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
