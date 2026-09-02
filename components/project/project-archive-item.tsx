import Link from "next/link";

import { StatusLabel } from "@/components/ui/status-label";
import { Tag } from "@/components/ui/tag";
import { getLocalizedText } from "@/lib/i18n";
import type { Dictionary, Locale, Project } from "@/types/content";

interface ProjectArchiveItemProps {
  dictionary: Dictionary;
  index: number;
  locale: Locale;
  project: Project;
}

export function ProjectArchiveItem({
  dictionary,
  index,
  locale,
  project,
}: ProjectArchiveItemProps) {
  const title = getLocalizedText(project.title, locale);
  const hasCase = project.contentStatus !== "content-pending";
  const body = (
    <article className="motion-project grid gap-5 border-t border-[var(--border)] py-5 md:grid-cols-[4rem_minmax(12rem,1.25fr)_minmax(10rem,0.75fr)_auto] md:items-start md:gap-8">
      <span className="font-mono tracking-[var(--tracking-label)] text-[var(--accent)] text-[var(--type-label)]">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="type-h3">{title}</h3>
        {project.subtitle ? (
          <p className="mt-2 text-[var(--foreground-secondary)]">
            {getLocalizedText(project.subtitle, locale)}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-2 md:justify-self-start">
        <StatusLabel dictionary={dictionary} status={project.contentStatus} />
        {project.translationStatus !== "ready" ? (
          <StatusLabel dictionary={dictionary} status={project.translationStatus} />
        ) : null}
        {project.categories?.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </div>
      <span className="font-mono tracking-[var(--tracking-label)] text-[var(--foreground-muted)] text-[var(--type-label)] uppercase">
        {hasCase ? dictionary.projects.viewCase : dictionary.shell.comingSoon}
      </span>
    </article>
  );

  if (!hasCase) return body;

  return (
    <Link
      aria-label={`${dictionary.projects.viewCase}：${title}`}
      className="block hover:bg-[var(--background-secondary)]"
      href={`/${locale}/projects/${project.slug}`}
    >
      {body}
    </Link>
  );
}
