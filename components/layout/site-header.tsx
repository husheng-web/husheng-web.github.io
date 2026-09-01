import Link from "next/link";

import { LanguageSwitch } from "@/components/navigation/language-switch";
import { Container } from "@/components/ui/container";
import type { Dictionary, Locale } from "@/types/content";

interface SiteHeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const items = [
    { href: `/${locale}/projects`, label: dictionary.navigation.projects },
    { href: `/${locale}/about`, label: dictionary.navigation.about },
    { href: `/${locale}/resume`, label: dictionary.navigation.resume },
  ];

  return (
    <header className="border-b border-[var(--color-border)]">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link
          className="font-mono text-xs tracking-[0.16em] uppercase"
          href={`/${locale}`}
        >
          Index
        </Link>
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-4 text-sm"
        >
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <LanguageSwitch locale={locale} label={dictionary.navigation.language} />
        </nav>
      </Container>
    </header>
  );
}
