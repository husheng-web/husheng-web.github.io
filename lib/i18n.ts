import { locales, type Locale } from "@/types/content";

export { locales };
export type { Locale };

export const defaultLocale: Locale = "zh";

export function hasLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export function getLocalizedText(
  value: { zh?: string; en?: string } | undefined,
  locale: Locale,
): string {
  return value?.[locale] ?? value?.zh ?? "[CONTENT TODO]";
}
