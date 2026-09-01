import Image from "next/image";
import type { ReactNode } from "react";

import { MediaReveal } from "@/components/motion/media-reveal";
import { Container } from "@/components/ui/container";
import type {
  CaseComparisonBlock,
  CaseInsightBlock,
  CaseMedia,
  CaseProcessBlock,
  CaseReflectionBlock,
  CaseResultBlock,
} from "@/types/case-study";

export function CaseSection({
  children,
  description,
  index,
  title,
}: {
  children: ReactNode;
  description?: string;
  index: string;
  title: string;
}) {
  return (
    <section
      aria-labelledby={`case-section-${index}`}
      className="py-[var(--space-section)]"
    >
      <Container size="reading">
        <header className="border-t border-[var(--border)] pt-4">
          <p className="type-label text-[var(--accent-signal)]">{index}</p>
          <h2 className="type-h2 mt-5" id={`case-section-${index}`}>
            {title}
          </h2>
          {description ? (
            <p className="type-body-large mt-5 text-[var(--foreground-secondary)]">
              {description}
            </p>
          ) : null}
        </header>
        <div className="mt-10 space-y-8">{children}</div>
      </Container>
    </section>
  );
}

export function CaseText({ children }: { children: ReactNode }) {
  return <p className="text-[var(--foreground-secondary)]">{children}</p>;
}

export function CaseMedia({ media }: { media: CaseMedia }) {
  return (
    <Container size={media.kind === "diagram" ? "wide" : "page"}>
      <figure>
        <MediaReveal motion={media.motion} replayKey={0}>
          <Image
            alt={media.alt.zh ?? media.alt.en ?? ""}
            className={
              media.kind === "render" || media.kind === "poster"
                ? "h-auto w-full"
                : "h-auto w-full border border-[var(--border)] bg-[var(--surface)]"
            }
            height={media.height}
            sizes="(min-width: 1280px) 76rem, 100vw"
            src={media.src}
            width={media.width}
          />
        </MediaReveal>
        {media.caption ? (
          <figcaption className="type-meta mt-3 text-[var(--foreground-muted)]">
            {media.caption.zh ?? media.caption.en}
          </figcaption>
        ) : null}
      </figure>
    </Container>
  );
}

export function CaseGallery({ media }: { media: readonly CaseMedia[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {media.map((item) => (
        <CaseMedia key={item.src} media={item} />
      ))}
    </div>
  );
}
export function CaseDiagram({ media }: { media: CaseMedia }) {
  return <CaseMedia media={{ ...media, kind: "diagram", motion: "none" }} />;
}

export function CaseInsight({ block }: { block: CaseInsightBlock }) {
  return (
    <dl className="grid gap-6 border-y border-[var(--border)] py-6 sm:grid-cols-3">
      {[
        ["Evidence", block.evidence],
        ["Insight", block.insight],
        ["Decision", block.decision],
      ].map(([label, value]) => (
        <div key={label}>
          <dt className="type-label text-[var(--accent-signal)]">{label}</dt>
          <dd className="mt-3 text-[var(--foreground-secondary)]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
export function CaseDecision({ children }: { children: ReactNode }) {
  return <CaseText>{children}</CaseText>;
}

export function CaseProcess({ block }: { block: CaseProcessBlock }) {
  return (
    <ol className="border-y border-[var(--border)]">
      {block.steps.map((step, index) => (
        <li
          className="grid gap-3 border-t border-[var(--border)] py-4 first:border-t-0 sm:grid-cols-[2rem_1fr]"
          key={step.label}
        >
          <span className="type-label text-[var(--accent-signal)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-semibold">{step.label}</p>
            {step.description ? (
              <p className="mt-1 text-[var(--foreground-secondary)]">
                {step.description}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
export function CaseResult({
  block,
}: {
  block: CaseResultBlock | CaseComparisonBlock;
}) {
  return (
    <dl className="grid gap-4 border-y border-[var(--border)] py-5 sm:grid-cols-2">
      {block.items.map((item) => (
        <div key={item.label}>
          <dt className="type-label text-[var(--foreground-muted)]">{item.label}</dt>
          <dd className="mt-2 font-semibold">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
export function CaseComparison({ block }: { block: CaseComparisonBlock }) {
  return <CaseResult block={block} />;
}
export function CaseReflection({ block }: { block: CaseReflectionBlock }) {
  return <CaseText>{block.body}</CaseText>;
}
