import type { MetadataRoute } from "next";
import { routes } from "@/core/config/routes";
import { siteConfig } from "@/core/config/site";
import { posts } from "@/features/blog/data/posts";
import { projects } from "@/features/projects/data/projects";
import { services } from "@/features/services/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    routes.home, routes.about, routes.services, routes.projects, routes.blog, routes.contact,
    ...services.map((s) => routes.service(s.slug)),
    ...projects.map((p) => routes.project(p.slug)),
    ...posts.map((p) => routes.post(p.slug)),
  ];
  return paths.map((path) => ({ url: `${siteConfig.url}${path}` }));
}
