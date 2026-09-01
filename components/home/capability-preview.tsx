import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/types/content";

export function CapabilityPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section aria-labelledby="capabilities-title" className="py-[var(--space-section)]">
      <SectionHeader
        eyebrow={dictionary.home.sectionLabels.capabilities}
        index="04"
        title={
          <span id="capabilities-title">
            {dictionary.home.sectionTitles.capabilities}
          </span>
        }
      />
      <ul className="mt-12 grid border-b border-[var(--border)] md:grid-cols-2">
        {dictionary.home.capabilityGroups.map((group, index) => (
          <li
            className="md:nth-even:pl-8 border-t border-[var(--border)] py-5 md:pr-8"
            key={group.title}
          >
            <p className="type-label text-[var(--foreground-muted)]">0{index + 1}</p>
            <h3 className="type-h3 mt-5">{group.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
