export const siteConfig = {
  name: "Shah & Shah",
  legalName: "Shah & Shah Associates Pvt. Ltd.",
  tagline: "Software, AI and cloud solutions built for scale.",
  description:
    "Shah & Shah is a full-stack IT firm. We design, build and run AI, web, mobile, cloud and enterprise software for businesses that want to move faster.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  founded: 2009,
  email: "hello@shahandshah.example",
  phone: "+1 (555) 010-2030",
  address: {
    street: "100 Placeholder Avenue, Suite 400",
    city: "Sample City",
    region: "SC",
    postalCode: "00000",
    country: "Country",
  },
  hours: "Mon – Fri, 9:00 – 18:00",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
} as const;
