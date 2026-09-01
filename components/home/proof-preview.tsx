import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/types/content";

export function ProofPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section aria-labelledby="proof-title" className="py-[var(--space-section)]">
      <SectionHeader
        eyebrow={dictionary.home.sectionLabels.proof}
        index="05"
        title={<span id="proof-title">{dictionary.home.sectionTitles.proof}</span>}
      />
      <div className="mt-12 border-y border-dashed border-[var(--border-strong)] py-10 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <p className="type-label text-[var(--accent-signal)]">
          {dictionary.shell.contentPending}
        </p>
        <p className="mt-5 max-w-[34rem] text-[var(--foreground-secondary)] md:mt-0">
          {dictionary.home.proofPending}
        </p>
      </div>
    </section>
  );
}
