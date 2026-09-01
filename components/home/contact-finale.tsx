import { TextLink } from "@/components/ui/text-link";
import { WideContainer } from "@/components/ui/container";
import type { Dictionary, Locale } from "@/types/content";

export function ContactFinale({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <section
      aria-labelledby="contact-title"
      className="bg-[var(--inverse-background)] py-[var(--space-section)] text-[var(--inverse-foreground)]"
    >
      <WideContainer>
        <p className="type-label text-[var(--accent-signal)]">
          07 / {dictionary.home.sectionLabels.contact}
        </p>
        <h2 id="contact-title" className="type-display mt-8 max-w-[12ch]">
          {dictionary.home.sectionTitles.contact}
        </h2>
        <div className="mt-12 grid gap-8 border-t border-[color:color-mix(in_srgb,var(--inverse-foreground)_30%,transparent)] pt-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-[32rem] text-[color:color-mix(in_srgb,var(--inverse-foreground)_68%,transparent)]">
            {dictionary.home.contactPending}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <TextLink
              className="text-[var(--inverse-foreground)] hover:text-[var(--accent)]"
              href={`/${locale}/projects`}
            >
              {dictionary.home.viewProjects}
            </TextLink>
            <TextLink
              className="text-[var(--inverse-foreground)] hover:text-[var(--accent)]"
              href={`/${locale}/resume`}
            >
              {dictionary.home.viewResume}
            </TextLink>
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
