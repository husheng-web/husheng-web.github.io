import type { ContentStatus, Dictionary, TranslationStatus } from "@/types/content";

type Status = ContentStatus | TranslationStatus;

interface StatusLabelProps {
  dictionary: Dictionary;
  status: Status;
}

const labelKey: Record<Status, keyof Dictionary["shell"]> = {
  ready: "statusReady",
  partial: "statusPartial",
  "content-pending": "statusContentPending",
  pending: "statusTranslationPending",
};

export function StatusLabel({ dictionary, status }: StatusLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 font-mono tracking-[var(--tracking-label)] text-[var(--foreground-muted)] text-[var(--type-label)] uppercase">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${status === "ready" ? "bg-[var(--accent)]" : "bg-[var(--border-strong)]"}`}
      />
      {dictionary.shell[labelKey[status]]}
    </span>
  );
}
