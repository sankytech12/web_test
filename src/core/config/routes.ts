export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  projects: "/projects",
  project: (slug: string) => `/projects/${slug}`,
  blog: "/blog",
  post: (slug: string) => `/blog/${slug}`,
  contact: "/contact",
} as const;

export const mainNav = [
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Projects", href: routes.projects },
  { label: "Insights", href: routes.blog },
  { label: "Contact", href: routes.contact },
] as const;
