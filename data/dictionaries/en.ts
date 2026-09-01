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
  home: {
    heroLabel: "Portfolio",
    heroTitle: "AI Product Builder / Intelligent Service System Designer",
    heroSupporting:
      "Focused on AI products, intelligent service systems, and taking ideas through to working prototypes.",
    heroSecondary: "Product & Service Designer",
    viewSelectedWork: "View selected work",
    sectionLabels: {
      selectedWorks: "Selected works",
      howIBuild: "How I build",
      capabilities: "Capability framework",
      proof: "Practice proof",
      about: "About",
      contact: "Next step",
    },
    sectionTitles: {
      selectedWorks: "Project archive",
      howIBuild: "From problem to working product",
      capabilities: "Capabilities need evidence",
      proof: "Experience and outcomes pending",
      about: "AI Product Builder",
      contact: "Continue through the portfolio system",
    },
    selectedWorksDescription:
      "Four priority projects. Their material will be added after it is confirmed.",
    previewNoMedia: "No approved media",
    buildSteps: [
      {
        index: "01",
        title: "Discover",
        description: "Real problems / users / contexts",
      },
      { index: "02", title: "Define", description: "Product judgment / value / scope" },
      { index: "03", title: "Structure", description: "Service system / IA / flow" },
      {
        index: "04",
        title: "Intelligence",
        description: "AI workflow / agent / model",
      },
      { index: "05", title: "Build", description: "Prototype / coding / integration" },
      { index: "06", title: "Validate", description: "Testing / feedback / iteration" },
    ],
    capabilityGroups: [
      { title: "Product & Strategy", status: "[CONTENT TODO]" },
      { title: "Experience & Systems", status: "[CONTENT TODO]" },
      { title: "AI Product", status: "[CONTENT TODO]" },
      { title: "Build & Communication", status: "[CONTENT TODO]" },
    ],
    proofPending:
      "Education, experience, and outcome details are pending confirmation.",
    aboutCopy:
      "A Product & Service Design background, focused on AI Product and Intelligent Service Systems.",
    viewAbout: "Learn more",
    contactPending: "Contact details and a personal statement are pending.",
    viewProjects: "Browse projects",
    viewResume: "View resume",
  },
} satisfies Dictionary;
