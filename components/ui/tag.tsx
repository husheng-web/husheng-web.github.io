import type { HTMLAttributes } from "react";

export function Tag({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex border border-[var(--border)] px-2 py-1 font-mono tracking-[0.08em] text-[var(--foreground-secondary)] text-[var(--type-label)] uppercase ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
