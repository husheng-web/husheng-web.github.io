import { ProjectIndexRow } from "@/components/project/project-index-row";
import { SectionHeader } from "@/components/ui/section-header";
import { getSharedContentStatus } from "@/data/projects";
import type { Dictionary, Locale, Project } from "@/types/content";

interface ProjectIndexProps {
  dictionary: Dictionary;
  locale: Locale;
  projects: readonly Project[];
}

export function ProjectIndex({ dictionary, locale, projects }: ProjectIndexProps) {
  const sharedStatus = getSharedContentStatus(projects);
  const hideRepeatedPendingStatus = sharedStatus === "content-pending";

  return (
    <section
      aria-labelledby="project-index-title"
      className="pb-[var(--space-section)]"
    >
      <SectionHeader
        description={
          <>
            <span>{dictionary.projects.indexDescription}</span>
            {hideRepeatedPendingStatus ? (
              <span className="mt-2 block text-[var(--foreground-muted)]">
                {dictionary.projects.indexUniformPendingNote}
              </span>
            ) : null}
          </>
        }
        eyebrow={dictionary.projects.indexLabel}
        index="03"
        title={<span id="project-index-title">{dictionary.projects.indexTitle}</span>}
      />
      <div className="mt-12 border-b border-[var(--border)]">
        {projects.map((project) => (
          <ProjectIndexRow
            dictionary={dictionary}
            key={project.slug}
            locale={locale}
            project={project}
            showStatus={!hideRepeatedPendingStatus}
          />
        ))}
      </div>
    </section>
  );
}
