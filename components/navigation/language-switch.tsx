"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getAlternateLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

interface LanguageSwitchProps {
  locale: Locale;
  label: string;
  className?: string;
}

export function LanguageSwitch({ locale, label, className = "" }: LanguageSwitchProps) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);
  const segments = pathname.split("/");
  segments[1] = alternateLocale;
  const href = segments.join("/") || `/${alternateLocale}`;

  return (
    <Link
      aria-label={`Switch language to ${label}`}
      className={`font-mono tracking-[var(--tracking-label)] text-[var(--foreground)] text-[var(--type-label)] uppercase transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent-interactive-hover)] active:translate-y-px ${className}`}
      href={href}
      lang={alternateLocale}
    >
      {label}
    </Link>
  );
}
