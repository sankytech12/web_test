import Link from "next/link";
import { mainNav } from "@/core/config/routes";
import { siteConfig } from "@/core/config/site";
import { Container } from "../ui/container";
import { Logo } from "./logo";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  const { address } = siteConfig;
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm text-muted">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Contact</h3>
          <address className="space-y-2 text-sm not-italic text-muted">
            <p>
              {address.street}
              <br />
              {address.city}, {address.region} {address.postalCode}
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
            <p>{siteConfig.phone}</p>
          </address>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>
            © <CurrentYear /> {siteConfig.legalName} All rights reserved.
          </p>
          <ul className="flex gap-5">
            {siteConfig.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
