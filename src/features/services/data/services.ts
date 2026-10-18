import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Cloud, Globe, LineChart, Palette, ShieldCheck, Smartphone, Boxes } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI & Automation",
    summary: "Generative AI, agents and ML models that put your data to work.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We design and ship production AI: LLM-powered assistants, intelligent document processing, predictive models and workflow automation, integrated safely into your existing systems.",
    icon: BrainCircuit,
    highlights: ["LLM apps & AI agents", "Machine learning models", "Computer vision & NLP", "Process automation (RPA)"],
  },
  {
    slug: "web-development",
    title: "Web Platforms",
    summary: "Fast, secure, scalable web apps and portals.",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. From marketing sites to complex SaaS platforms, we build with modern frameworks, strong performance budgets and clean architecture.",
    icon: Globe,
    highlights: ["React / Next.js / Vue", "SaaS & customer portals", "E-commerce", "Headless CMS"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    summary: "Native and cross-platform apps users love.",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. iOS, Android and cross-platform apps with offline support, real-time sync and polished design, shipped to the stores and kept healthy after launch.",
    icon: Smartphone,
    highlights: ["iOS (Swift) & Android (Kotlin)", "Flutter & React Native", "Offline-first sync", "App store release"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    summary: "Reliable infrastructure, CI/CD and cost-aware cloud.",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse. We migrate, modernise and operate workloads on AWS, Azure and GCP with infrastructure as code, observability and automated delivery.",
    icon: Cloud,
    highlights: ["AWS, Azure, GCP", "Kubernetes & containers", "CI/CD pipelines", "FinOps & monitoring"],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    summary: "Custom systems and integrations that run the business.",
    description:
      "Excepteur sint occaecat cupidatat non proident. ERP and CRM extensions, workflow platforms, APIs and integrations that connect legacy systems with modern tools.",
    icon: Boxes,
    highlights: ["Custom business apps", "API & microservices", "ERP / CRM integration", "Legacy modernisation"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    summary: "Pipelines, warehouses and dashboards you can trust.",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur. We build the data foundations behind reliable reporting, real-time insight and AI readiness.",
    icon: LineChart,
    highlights: ["Data engineering", "Warehouses & lakehouses", "BI dashboards", "Real-time streaming"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary: "Security built in, from code to cloud.",
    description:
      "Neque porro quisquam est qui dolorem ipsum. Threat modelling, penetration testing, secure SDLC and compliance support (SOC 2, ISO 27001, GDPR).",
    icon: ShieldCheck,
    highlights: ["Penetration testing", "Secure SDLC", "Identity & access", "Compliance readiness"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary: "Research-led product design and design systems.",
    description:
      "Quis autem vel eum iure reprehenderit. User research, prototyping and design systems that make complex software feel simple.",
    icon: Palette,
    highlights: ["User research", "Prototyping", "Design systems", "Accessibility (WCAG)"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
