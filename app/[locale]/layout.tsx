import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getDictionary } from "@/data/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { createLocaleMetadata } from "@/lib/metadata";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  return hasLocale(locale) ? createLocaleMetadata(locale) : {};
}

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    return children;
  }

  const dictionary = getDictionary(locale);

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body id="top">
        <a className="skip-link" href="#main-content">
          {dictionary.navigation.skipToContent}
        </a>
        <SiteHeader dictionary={dictionary} locale={locale} />
        <main id="main-content">{children}</main>
        <SiteFooter dictionary={dictionary} locale={locale} />
      </body>
    </html>
  );
}
