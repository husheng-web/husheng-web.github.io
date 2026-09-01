import { FoundationPage } from "@/components/layout/foundation-page";
import { getDictionary } from "@/data/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

interface ResumePageProps {
  params: Promise<{ locale: string }>;
}

export default async function ResumePage({ params }: ResumePageProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  return <FoundationPage dictionary={getDictionary(locale)} label="Resume" />;
}
