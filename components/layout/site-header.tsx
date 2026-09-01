import Link from "next/link";

import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Container } from "@/components/ui/container";
import type { Dictionary, Locale } from "@/types/content";

interface SiteHeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]">
      <Container className="flex min-h-[4.0625rem] items-center justify-between gap-6">
        <Link
          className="font-mono tracking-[var(--tracking-label)] text-[var(--type-label)] uppercase transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent-hover)] active:translate-y-px"
          href={`/${locale}`}
        >
          Index
        </Link>
        <SiteNavigation dictionary={dictionary} locale={locale} />
      </Container>
    </header>
  );
}
