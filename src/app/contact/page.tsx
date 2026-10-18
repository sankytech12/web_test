import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/core/config/site";
import { ContactForm } from "@/features/contact/components/contact-form";
import { PageHeader, Section } from "@/shared/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation or send us a message.",
};

export default function ContactPage() {
  const { address } = siteConfig;
  const details = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
    { icon: MapPin, label: "Office", value: `${address.street}, ${address.city}, ${address.region} ${address.postalCode}` },
    { icon: Clock, label: "Hours", value: siteConfig.hours },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your goals."
        description="Share a few details and we will respond within one business day."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <ul className="space-y-6">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-accent">{value}</a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
