import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/types/content";

interface SiteFooterProps {
  dictionary: Dictionary;
}

export function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="mt-[var(--space-macro)] border-t border-[var(--border)] bg-[var(--inverse-background)] text-[var(--inverse-foreground)]">
      <Container className="grid gap-10 py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <p className="type-label text-[var(--accent)]">Portfolio system</p>
        </div>
        <div className="space-y-3 text-right font-mono tracking-[var(--tracking-label)] text-[var(--inverse-foreground)] text-[var(--type-label)] uppercase">
          <a
            className="inline-block border-b border-current pb-1 transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent)] active:translate-y-px"
            href="#top"
          >
            {dictionary.shell.backToTop}
          </a>
          <p className="text-[color:color-mix(in_srgb,var(--inverse-foreground)_55%,transparent)]">
            {dictionary.shell.allRightsReserved}
          </p>
        </div>
      </Container>
    </footer>
  );
}
