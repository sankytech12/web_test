"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Cloud, Smartphone } from "lucide-react";
import { routes } from "@/core/config/routes";
import { Magnetic } from "@/shared/components/motion/magnetic";
import { Particles } from "@/shared/components/motion/particles";
import { WordReveal } from "@/shared/components/motion/word-reveal";
import { ButtonLink } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";

const cards = [
  { icon: Bot, label: "AI agent", value: "Resolved 1,284 tickets", delta: "+60%", color: "bg-spark" },
  { icon: Smartphone, label: "Mobile app", value: "4.8★ · 200k users", delta: "+34%", color: "bg-violet" },
  { icon: Cloud, label: "Cloud platform", value: "99.99% uptime", delta: "-31% cost", color: "bg-pink-500" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div style={{ y: y1 }} className="absolute -right-32 -top-32">
          <div className="animate-drift size-[26rem] rounded-full bg-violet/60 blur-3xl sm:size-[38rem]" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute -bottom-40 -left-24">
          <div className="animate-drift size-[22rem] rounded-full bg-spark/40 blur-3xl [animation-delay:-6s] sm:size-[32rem]" />
        </motion.div>
        <Particles className="absolute inset-0 size-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <Container className="relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.3fr_1fr] lg:py-36">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80"
          >
            <span className="animate-pulse-ring size-2 rounded-full bg-spark" />
            AI · Web · Mobile · Cloud · Enterprise
          </motion.p>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[3.6rem] xl:text-7xl">
            <WordReveal text="We build software that" delay={0.1} />
            <br />
            <span className="text-gradient">
              <WordReveal text="moves business forward." delay={0.45} />
            </span>
          </h1>
          <motion.p
            {...fade(0.9)}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Shah &amp; Shah is a full-stack IT partner. AI, web, mobile and
            cloud solutions on any stack, from first prototype to global scale.
          </motion.p>
          <motion.div {...fade(1.05)} className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <Magnetic>
              <ButtonLink href={routes.contact} size="lg">
                Talk to an expert <ArrowRight className="size-4" />
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href={routes.projects} variant="onDark" size="lg">
                See our work
              </ButtonLink>
            </Magnetic>
          </motion.div>
        </div>

        <div className="space-y-4">
          {cards.map(({ icon: Icon, label, value, delta, color }, i) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginLeft: `${i % 2 === 1 ? 1.5 : 0}rem` }}
            >
              <div
                className="animate-float flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md sm:p-5"
                style={{ animationDelay: `${-i * 1.6}s` }}
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-xl text-white ${color}`}>
                  <Icon className="size-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
                  <p className="truncate font-medium">{value}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-glow">
                  {delta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
