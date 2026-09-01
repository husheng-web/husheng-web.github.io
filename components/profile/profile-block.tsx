import type { ReactNode } from "react";

interface ProfileBlockProps {
  children: ReactNode;
  label: string;
}

export function ProfileBlock({ children, label }: ProfileBlockProps) {
  return (
    <section className="border-t border-[var(--border)] py-4">
      <p className="type-label text-[var(--foreground-muted)]">{label}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}
