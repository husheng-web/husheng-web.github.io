import type { ReactNode } from "react";

interface SectionHeaderProps {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  className = "",
}: SectionHeaderProps) {
  return (
    <header
      className={`grid gap-5 border-t border-[var(--border)] pt-4 md:grid-cols-[minmax(6rem,0.5fr)_minmax(0,2fr)] ${className}`}
    >
      <div className="flex gap-3 font-mono tracking-[var(--tracking-label)] text-[var(--foreground-muted)] text-[var(--type-label)] uppercase">
        {index ? <span className="text-[var(--accent)]">{index}</span> : null}
        {eyebrow ? <span>{eyebrow}</span> : null}
      </div>
      <div className="max-w-[58rem]">
        <Heading className="type-h2">{title}</Heading>
        {description ? (
          <div className="type-body-large mt-5 text-[var(--foreground-secondary)]">
            {description}
          </div>
        ) : null}
      </div>
    </header>
  );
}
