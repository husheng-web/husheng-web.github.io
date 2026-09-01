import Link from "next/link";

import { getLocalizedText } from "@/lib/i18n";
import type { ContentStatus, Dictionary, Locale, Project } from "@/types/content";

interface ProjectIndexRowProps {
  dictionary: Dictionary;
  locale: Locale;
  project: Project;
  showStatus?: boolean;
}

function getActionLabel(status: ContentStatus, dictionary: Dictionary): string {
  if (status === "ready") return dictionary.projects.viewCase;
  if (status === "partial") return dictionary.projects.viewProgress;
  return dictionary.projects.caseStudyInProgress;
}

export function ProjectIndexRow({
  dictionary,
  locale,
  project,
  showStatus = true,
}: ProjectIndexRowProps) {
  const title = getLocalizedText(project.title, locale);
  const action = getActionLabel(project.contentStatus, dictionary);
  const metadata = [project.categories?.[0], project.year].filter(Boolean);
  const isLinked = project.contentStatus !== "content-pending";

  const row = (
    <article className="grid gap-3 border-t border-[var(--border)] py-5 sm:grid-cols-[3.25rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
      <span className="type-label text-[var(--accent-signal)]">
        {String(project.archiveIndex).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <h3 className="type-h3">{title}</h3>
        {metadata.length ? (
          <p className="type-meta mt-2 text-[var(--foreground-muted)]">
            {metadata.join(" / ")}
          </p>
        ) : null}
      </div>
      {showStatus ? (
        <span
          className="type-label shrink-0 text-[var(--foreground-muted)]"
          data-status={project.contentStatus}
        >
          {action}
        </span>
      ) : null}
    </article>
  );

  if (!isLinked) return row;

  return (
    <Link
      aria-label={`${action}: ${title}`}
      className="group block transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:bg-[var(--background-secondary)] focus-visible:outline-offset-[-3px]"
      href={`/${locale}/projects/${project.slug}`}
    >
      {row}
    </Link>
  );
}
