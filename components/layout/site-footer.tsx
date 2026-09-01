import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/types/content";

interface SiteFooterProps {
  dictionary: Dictionary;
}

export function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container className="flex min-h-24 items-center justify-between gap-6 py-6 text-xs text-[var(--color-muted)]">
        <p>{dictionary.shell.footerLabel}</p>
        <p>[CONTACT TODO]</p>
      </Container>
    </footer>
  );
}
