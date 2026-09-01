import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FoundationPage } from "@/components/layout/foundation-page";
import { getDictionary } from "@/data/dictionaries";
import { getProjectBySlug } from "@/data/projects";
import { getLocalizedText, hasLocale } from "@/lib/i18n";
import { createProjectMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  return hasLocale(locale) && project ? createProjectMetadata(project, locale) : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!hasLocale(locale) || !project) notFound();

  return (
    <FoundationPage
      dictionary={getDictionary(locale)}
      label={getLocalizedText(project.title, locale)}
    />
  );
}
