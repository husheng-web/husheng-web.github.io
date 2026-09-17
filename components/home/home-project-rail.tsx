"use client";

import { useState } from "react";

import { MagneticProjectRail } from "@/components/home/magnetic-project-rail";
import { ProjectPreviewDialog } from "@/components/project/projects-archive-grid";
import { getLocalizedText } from "@/lib/i18n";
import type { Dictionary, Locale, Project } from "@/types/content";

interface HomeProjectRailProps {
  dictionary: Dictionary;
  locale: Locale;
  projects: readonly Project[];
}

export function HomeProjectRail({
  dictionary,
  locale,
  projects,
}: HomeProjectRailProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const items = projects.map((project, index) => ({
    id: project.slug,
    index: String(project.archiveIndex ?? index + 1).padStart(2, "0"),
    title: getLocalizedText(project.title, locale),
    summary:
      index === 0 && project.subtitle
        ? getLocalizedText(project.subtitle, locale)
        : project.summary
          ? getLocalizedText(project.summary, locale)
          : undefined,
    actionLabel: dictionary.projects.viewProgress,
    featured: index === 0,
    project,
    cover: project.cover ? { src: project.cover.src } : undefined,
  }));

  return (
    <>
      <MagneticProjectRail items={items} onOpen={setActiveProject} />
      {activeProject ? (
        <ProjectPreviewDialog
          dictionary={dictionary}
          locale={locale}
          onClose={() => setActiveProject(null)}
          project={activeProject}
        />
      ) : null}
    </>
  );
}
