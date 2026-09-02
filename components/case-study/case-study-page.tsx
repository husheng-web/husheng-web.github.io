import Link from "next/link";

import {
  CaseComparison,
  CaseInsight,
  CaseMedia,
  CaseProcess,
  CaseReflection,
  CaseResult,
  CaseSection,
  CaseText,
} from "@/components/case-study/case-blocks";
import { MotionText } from "@/components/motion/motion-text";
import { Container } from "@/components/ui/container";
import { getLocalizedText } from "@/lib/i18n";
import type { CaseBlock, CaseStudyContent } from "@/types/case-study";
import type { Dictionary, Locale, Project } from "@/types/content";

function renderBlock(block: CaseBlock) {
  if (block.type === "text") return <CaseText>{block.body}</CaseText>;
  if (block.type === "insight") return <CaseInsight block={block} />;
  if (block.type === "process") return <CaseProcess block={block} />;
  if (block.type === "comparison") return <CaseComparison block={block} />;
  if (block.type === "result") return <CaseResult block={block} />;
  if (block.type === "reflection") return <CaseReflection block={block} />;
  return <CaseMedia media={block.media} />;
}

export function CaseHero({
  displayTitle,
  locale,
  project,
}: {
  displayTitle?: string;
  locale: Locale;
  project: Project;
}) {
  const title = displayTitle ?? getLocalizedText(project.title, locale);
  const category = project.categories?.[0];
  return (
    <section className="border-b border-[var(--border)] py-[clamp(4rem,9vw,8rem)]">
      <Container>
        <div className="grid gap-8 border-t border-[var(--border)] pt-4 md:grid-cols-[minmax(6rem,0.5fr)_minmax(0,2fr)]">
          <p className="type-label text-[var(--accent-signal)]">
            {String(project.archiveIndex).padStart(2, "0")}
          </p>
          <div className="max-w-[58rem]">
            {category ? (
              <p className="type-label text-[var(--foreground-muted)]">{category}</p>
            ) : null}
            <MotionText replayKey={0} variant="mask">
              <h1 className="type-display mt-5">{title}</h1>
            </MotionText>
            {project.subtitle ? (
              <p className="type-body-large mt-6 text-[var(--foreground-secondary)]">
                {getLocalizedText(project.subtitle, locale)}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CaseStudyPending({
  dictionary,
  locale,
  project,
}: {
  dictionary: Dictionary;
  locale: Locale;
  project: Project;
}) {
  return (
    <>
      <CaseHero locale={locale} project={project} />
      <Container as="section" size="reading" className="py-[var(--space-section)]">
        <p className="type-body-large text-[var(--foreground-secondary)]">
          {dictionary.projects.caseStudyInProgress}
        </p>
        <Link
          className="type-label mt-10 inline-block border-b border-current pb-1 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent-interactive-hover)]"
          href={`/${locale}/projects`}
        >
          {dictionary.navigation.projects}
        </Link>
      </Container>
    </>
  );
}

export function CaseStudyPage({
  content,
  locale,
  project,
}: {
  content: CaseStudyContent;
  locale: Locale;
  project: Project;
}) {
  return (
    <>
      <CaseHero locale={locale} project={project} />
      {content.sections.map((section) => (
        <CaseSection
          description={section.description}
          index={section.index}
          key={section.id}
          title={section.title}
        >
          {section.blocks.map((block, index) => (
            <div key={`${section.id}-${index}`}>{renderBlock(block)}</div>
          ))}
        </CaseSection>
      ))}
    </>
  );
}
