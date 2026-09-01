import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/types/content";

interface FoundationPageProps {
  dictionary: Dictionary;
  label: string;
}

export function FoundationPage({ dictionary, label }: FoundationPageProps) {
  return (
    <Container as="section" className="py-24 sm:py-32">
      <p className="font-mono text-xs tracking-[0.14em] text-[var(--color-muted)] uppercase">
        Foundation
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
        {label}
      </h1>
      <p className="mt-6 max-w-xl text-[var(--color-muted)]">
        {dictionary.shell.contentPending}
      </p>
    </Container>
  );
}
