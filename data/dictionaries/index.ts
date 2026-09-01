import { enDictionary } from "@/data/dictionaries/en";
import { zhDictionary } from "@/data/dictionaries/zh";
import type { Locale, Dictionary } from "@/types/content";

const dictionaries: Record<Locale, Dictionary> = {
  zh: zhDictionary,
  en: enDictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
