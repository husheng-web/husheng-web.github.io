import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectsArchiveGrid } from "@/components/project/projects-archive-grid";
import { getDictionary } from "@/data/dictionaries";
import { getProjects } from "@/data/projects";
import { hasLocale } from "@/lib/i18n";
import { createLocaleMetadata } from "@/lib/metadata";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};

  const dictionary = getDictionary(locale);
  return {
    ...createLocaleMetadata(locale, "/projects"),
    title: dictionary.projects.heroTitle,
    description: dictionary.projects.heroDescription,
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const dictionary = getDictionary(locale);
  const projects = getProjects();

  return (
    <ProjectsArchiveGrid dictionary={dictionary} locale={locale} projects={projects} />
  );
}
