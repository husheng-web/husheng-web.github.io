import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/types/content";

export function ProofPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section aria-labelledby="proof-title" className="py-[clamp(3rem,5vw,5rem)]">
      <SectionHeader
        eyebrow={dictionary.home.sectionLabels.proof}
        index="05"
        title={<span id="proof-title">{dictionary.home.sectionTitles.proof}</span>}
      />
    </section>
  );
}
