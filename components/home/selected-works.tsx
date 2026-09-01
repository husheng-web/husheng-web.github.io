"use client";

import { ProjectPreview } from "@/components/motion/project-preview";
import { SectionHeader } from "@/components/ui/section-header";
import { TextLink } from "@/components/ui/text-link";
import type { Dictionary, Locale, Project } from "@/types/content";

interface SelectedWorksProps {
  dictionary: Dictionary;
  locale: Locale;
  projects: readonly Project[];
}

export function SelectedWorks({ dictionary, locale, projects }: SelectedWorksProps) {
  return (
    <section
      aria-labelledby="selected-works-title"
      id="selected-works"
      className="py-[var(--space-section)]"
    >
      <SectionHeader
        description={dictionary.home.selectedWorksDescription}
        eyebrow={dictionary.home.sectionLabels.selectedWorks}
        index="02"
        title={
          <span id="selected-works-title">
            {dictionary.home.sectionTitles.selectedWorks}
          </span>
        }
      />
      <div className="mt-12">
        <ProjectPreview
          items={projects.map((project) => ({
            id: project.slug,
            status:
              project.contentStatus === "content-pending"
                ? "content-pending"
                : "no-media",
            title: project.title[locale] ?? project.title.zh,
          }))}
          labels={{
            contentPending: dictionary.home.caseStudyInProgress,
            contentTodo: dictionary.home.caseStudyInProgress,
            noApprovedMedia: dictionary.home.previewNoMedia,
          }}
          mode="fixed"
          replayKey={0}
        />
      </div>
      <div className="mt-8 flex justify-end">
        <TextLink href={`/${locale}/projects`}>{dictionary.home.viewProjects}</TextLink>
      </div>
    </section>
  );
}
