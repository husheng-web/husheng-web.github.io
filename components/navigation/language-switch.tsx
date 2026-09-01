"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getAlternateLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

interface LanguageSwitchProps {
  locale: Locale;
  label: string;
}

export function LanguageSwitch({ locale, label }: LanguageSwitchProps) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);
  const segments = pathname.split("/");
  segments[1] = alternateLocale;
  const href = segments.join("/") || `/${alternateLocale}`;

  return (
    <Link aria-label={`Switch language to ${label}`} href={href} lang={alternateLocale}>
      {label}
    </Link>
  );
}
