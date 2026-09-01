import type { ReactNode } from "react";

export function ProfileGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-x-[var(--grid-gap)] gap-y-0 md:grid-cols-2">
      {children}
    </div>
  );
}
