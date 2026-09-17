import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeAboutProfile } from "@/components/home/home-about-profile";
import { HomeHero } from "@/components/home/home-hero";
import { PortfolioHome } from "@/components/home/portfolio-home";
import { HomeScrollProgress } from "@/components/motion/home-scroll-motion";
import { getDictionary } from "@/data/dictionaries";
import { getProjects } from "@/data/projects";
import { hasLocale } from "@/lib/i18n";
import { createLocaleMetadata } from "@/lib/metadata";

interface LocalizedPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};

  const dictionary = getDictionary(locale);
  return {
    ...createLocaleMetadata(locale),
    title: dictionary.home.heroTitle,
    description: dictionary.home.heroSupporting,
  };
}

export default async function HomePage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const dictionary = getDictionary(locale);

  return (
    <>
      <HomeScrollProgress />
      <HomeHero dictionary={dictionary} locale={locale} />
      <HomeAboutProfile locale={locale} />
      <PortfolioHome dictionary={dictionary} locale={locale} projects={getProjects()} />
    </>
  );
}
