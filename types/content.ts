export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

export type ContentStatus = "ready" | "partial" | "content-pending";
export type TranslationStatus = "ready" | "partial" | "pending";

export interface LocalizedText {
  zh?: string;
  en?: string;
}

export interface MediaAsset {
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
}

export interface ProjectLinks {
  liveUrl?: string;
  prototypeUrl?: string;
  repoUrl?: string;
  pdfUrl?: string;
}

export interface Project {
  slug: string;
  title: LocalizedText & { zh: string };
  subtitle?: LocalizedText;
  summary?: LocalizedText;
  year?: string;
  period?: string;
  categories?: string[];
  tags?: string[];
  roles?: LocalizedText;
  team?: string;
  featured: boolean;
  status?: string;
  contentStatus: ContentStatus;
  translationStatus: TranslationStatus;
  cover?: MediaAsset;
  thumbnail?: MediaAsset;
  links?: ProjectLinks;
}

export interface Dictionary {
  navigation: {
    home: string;
    projects: string;
    about: string;
    resume: string;
    language: string;
    menu: string;
    closeMenu: string;
    menuButton: string;
    closeButton: string;
    skipToContent: string;
  };
  shell: {
    contentPending: string;
    comingSoon: string;
    footerLabel: string;
    notFoundTitle: string;
    notFoundBody: string;
    returnHome: string;
    allRightsReserved: string;
    backToTop: string;
    designSystem: string;
    archive: string;
    statusReady: string;
    statusPartial: string;
    statusContentPending: string;
    statusTranslationPending: string;
  };
}
