"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, routes } from "@/core/config/routes";
import { cn } from "@/core/utils/cn";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { ScrollProgress } from "../motion/scroll-progress";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-underline mx-2 py-2 text-sm font-medium transition hover:text-accent",
                  active ? "font-semibold text-accent" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink
            href={routes.contact}
            className="hidden sm:inline-flex"
          >
            Book a consultation
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>
      <ScrollProgress />
      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display font-bold tracking-tight text-2xl"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href={routes.contact}
              onClick={() => setOpen(false)}
              className="mt-6"
              size="lg"
            >
              Book a consultation
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
