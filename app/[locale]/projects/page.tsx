import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FeaturedProjects } from "@/components/project/featured-projects";
import { ProjectIndex } from "@/components/project/project-index";
import { ProjectsHero } from "@/components/project/projects-hero";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/data/dictionaries";
import { getFeaturedProjects, getProjects } from "@/data/projects";
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
    <>
      <ProjectsHero dictionary={dictionary} projectCount={projects.length} />
      <Container>
        <FeaturedProjects
          dictionary={dictionary}
          locale={locale}
          projects={getFeaturedProjects()}
        />
        <ProjectIndex dictionary={dictionary} locale={locale} projects={projects} />
      </Container>
    </>
  );
}
