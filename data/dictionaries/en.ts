import type { Dictionary } from "@/types/content";

export const enDictionary = {
  navigation: {
    home: "Home",
    projects: "Projects",
    about: "About",
    resume: "Resume",
    language: "中文",
    menu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    menuButton: "Menu",
    closeButton: "Close",
    skipToContent: "Skip to main content",
  },
  shell: {
    contentPending: "[CONTENT TODO]",
    comingSoon: "Coming soon",
    footerLabel: "Portfolio system foundation",
    notFoundTitle: "Page not found",
    notFoundBody: "This page has not been created, or its address has changed.",
    returnHome: "Return home",
    allRightsReserved: "All rights reserved",
    backToTop: "Back to top",
    designSystem: "Design system",
    archive: "Project archive",
    statusReady: "Complete",
    statusPartial: "Partial",
    statusContentPending: "Content pending",
    statusTranslationPending: "Translation pending",
  },
} satisfies Dictionary;
