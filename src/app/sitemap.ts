import type { MetadataRoute } from "next";
import { publishedProjects } from "./data/projects";
import { siteProfile } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/resume", "/contact", "/privacy"];
  return [
    ...routes.map((route) => ({ url: `${siteProfile.canonicalUrl}${route}`, lastModified: new Date("2026-09-04"), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...publishedProjects.map((project) => ({ url: `${siteProfile.canonicalUrl}/projects/${project.slug}`, lastModified: new Date("2026-09-04"), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
