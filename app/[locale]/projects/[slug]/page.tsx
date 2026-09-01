import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FoundationPage } from "@/components/layout/foundation-page";
import { Container } from "@/components/ui/container";
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

  const dictionary = getDictionary(locale);

  if (project.contentStatus === "content-pending") {
    return (
      <Container as="section" className="py-24 sm:py-32">
        <p className="type-label text-[var(--accent-signal)]">
          {dictionary.projects.heroLabel}
        </p>
        <h1 className="type-h1 mt-5">{getLocalizedText(project.title, locale)}</h1>
        <p className="type-body-large mt-6 text-[var(--foreground-secondary)]">
          {dictionary.projects.caseStudyInProgress}
        </p>
        <Link
          className="type-label mt-10 inline-block border-b border-current pb-1 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent-interactive-hover)]"
          href={`/${locale}/projects`}
        >
          {dictionary.navigation.projects}
        </Link>
      </Container>
    );
  }

  return (
    <FoundationPage
      dictionary={dictionary}
      label={getLocalizedText(project.title, locale)}
    />
  );
}
