import { ProjectPreview } from "@/components/motion/project-preview";
import { SectionHeader } from "@/components/ui/section-header";
import { hasApprovedMedia } from "@/data/projects";
import { getLocalizedText } from "@/lib/i18n";
import type { Dictionary, Locale, Project } from "@/types/content";

interface FeaturedProjectsProps {
  dictionary: Dictionary;
  locale: Locale;
  projects: readonly Project[];
}

export function FeaturedProjects({
  dictionary,
  locale,
  projects,
}: FeaturedProjectsProps) {
  const previewAvailable = hasApprovedMedia(projects);

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="py-[var(--space-section)]"
    >
      <SectionHeader
        description={dictionary.projects.featuredDescription}
        eyebrow={dictionary.projects.featuredLabel}
        index="02"
        title={
          <span id="featured-projects-title">{dictionary.projects.featuredTitle}</span>
        }
      />
      <div className="mt-12">
        <ProjectPreview
          items={projects.map((project) => ({
            id: project.slug,
            index: String(project.archiveIndex).padStart(2, "0"),
            status:
              project.contentStatus === "content-pending"
                ? "content-pending"
                : "no-media",
            title: getLocalizedText(project.title, locale),
          }))}
          labels={{
            contentPending: dictionary.projects.caseStudyInProgress,
            contentTodo: dictionary.projects.caseStudyInProgress,
            noApprovedMedia: dictionary.projects.noApprovedMedia,
          }}
          mode="fixed"
          replayKey={0}
          showPreview={previewAvailable}
        />
      </div>
    </section>
  );
}
