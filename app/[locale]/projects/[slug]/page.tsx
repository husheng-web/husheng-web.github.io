import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  CaseStudyPage,
  CaseStudyPending,
} from "@/components/case-study/case-study-page";
import { getCaseStudy } from "@/data/case-studies";
import { getDictionary } from "@/data/dictionaries";
import { getProjectBySlug, projects } from "@/data/projects";
import { hasLocale } from "@/lib/i18n";
import { createProjectMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== "pinlvtu")
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  return hasLocale(locale) && project && project.slug !== "pinlvtu"
    ? createProjectMetadata(project, locale)
    : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!hasLocale(locale) || !project || project.slug === "pinlvtu") notFound();

  const dictionary = getDictionary(locale);
  const caseStudy = getCaseStudy(project.slug, locale);

  if (project.contentStatus === "content-pending") {
    return (
      <CaseStudyPending dictionary={dictionary} locale={locale} project={project} />
    );
  }

  if (!caseStudy)
    return (
      <CaseStudyPending dictionary={dictionary} locale={locale} project={project} />
    );

  return <CaseStudyPage content={caseStudy} locale={locale} project={project} />;
}
