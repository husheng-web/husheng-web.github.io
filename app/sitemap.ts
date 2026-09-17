import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/projects", "/about", "/resume"];

  return locales.flatMap((locale) => [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.siteUrl}/${locale}${path}`,
      lastModified: new Date(),
    })),
    ...projects
      .filter((project) => project.contentStatus !== "content-pending")
      .map((project) => ({
        url: `${siteConfig.siteUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
      })),
  ]);
}
