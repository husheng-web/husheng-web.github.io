"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TextLink } from "@/components/ui/text-link";
import type { Dictionary, Locale } from "@/types/content";

export function AboutPreview({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <section
      aria-labelledby="about-preview-title"
      className="py-[var(--space-section)]"
    >
      <Reveal>
        <SectionHeader
          eyebrow={dictionary.home.sectionLabels.about}
          index="06"
          title={
            <span id="about-preview-title">{dictionary.home.sectionTitles.about}</span>
          }
        />
      </Reveal>
      <div className="mt-12 grid gap-8 border-y border-[var(--border)] py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
        <p className="type-body-large max-w-[30rem] text-[var(--foreground-secondary)]">
          {dictionary.home.aboutCopy}
        </p>
        <div className="md:justify-self-end">
          <TextLink href={`/${locale}/about`}>{dictionary.home.viewAbout}</TextLink>
        </div>
      </div>
    </section>
  );
}
