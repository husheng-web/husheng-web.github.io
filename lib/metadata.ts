import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import type { Locale, Project } from "@/types/content";
import { getLocalizedText } from "@/lib/i18n";

const localeTags: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
};

export function createLocaleMetadata(locale: Locale, path = ""): Metadata {
  const canonical = `/${locale}${path}`;

  return {
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical,
      languages: {
        "zh-CN": `/zh${path}`,
        en: `/en${path}`,
      },
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      locale: localeTags[locale],
      type: "website",
      url: canonical,
    },
  };
}

export function createProjectMetadata(project: Project, locale: Locale): Metadata {
  const title = getLocalizedText(project.title, locale);
  const description = project.summary
    ? getLocalizedText(project.summary, locale)
    : locale === "zh"
      ? `作品集项目：${title}`
      : `Portfolio project: ${title}`;
  const path = `/projects/${project.slug}`;

  return {
    ...createLocaleMetadata(locale, path),
    title,
    description,
    openGraph: {
      title,
      description,
      locale: localeTags[locale],
      type: "article",
      url: `/${locale}${path}`,
    },
  };
}
