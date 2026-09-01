import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutPreview } from "@/components/home/about-preview";
import { BuildProcess } from "@/components/home/build-process";
import { CapabilityPreview } from "@/components/home/capability-preview";
import { ContactFinale } from "@/components/home/contact-finale";
import { HomeHero } from "@/components/home/home-hero";
import { ProofPreview } from "@/components/home/proof-preview";
import { SelectedWorks } from "@/components/home/selected-works";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/data/dictionaries";
import { featuredProjects } from "@/data/projects";
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
      <HomeHero dictionary={dictionary} locale={locale} />
      <Container>
        <SelectedWorks
          dictionary={dictionary}
          locale={locale}
          projects={featuredProjects}
        />
        <BuildProcess dictionary={dictionary} />
        <CapabilityPreview dictionary={dictionary} />
        <ProofPreview dictionary={dictionary} />
        <AboutPreview dictionary={dictionary} locale={locale} />
      </Container>
      <ContactFinale dictionary={dictionary} locale={locale} />
    </>
  );
}
