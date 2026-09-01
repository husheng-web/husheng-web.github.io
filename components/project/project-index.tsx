import { ProjectIndexRow } from "@/components/project/project-index-row";
import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary, Locale, Project } from "@/types/content";

interface ProjectIndexProps {
  dictionary: Dictionary;
  locale: Locale;
  projects: readonly Project[];
}

export function ProjectIndex({ dictionary, locale, projects }: ProjectIndexProps) {
  return (
    <section
      aria-labelledby="project-index-title"
      className="pb-[var(--space-section)]"
    >
      <SectionHeader
        description={dictionary.projects.indexDescription}
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
          />
        ))}
      </div>
    </section>
  );
}
