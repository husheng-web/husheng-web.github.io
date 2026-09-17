import Link from "next/link";

import { HomeScrollReveal } from "@/components/motion/home-scroll-motion";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/types/content";

const profileContent = {
  zh: {
    educationLabel: "教育经历",
    experienceLabel: "工作经历",
    skillsLabel: "专业技能",
    languageLabel: "语言能力",
    timelineLabel: "简历时间线",
    contactLabel: "我目前开放新的机会",
    educationTitle: "广东工业大学",
    educationDetail: "工业设计工程硕士在读",
    educationPeriod: "2025.08 至今",
    workTitle: "万力轮胎股份有限公司",
    workDetail: "研发工程师",
    workPeriod: "2024.08 至 2025.08",
    language: "大学英语四级",
    contactCopy: "如果你对我的背景和方向感兴趣，欢迎通过下方按钮查看完整经历。",
    contactCta: "查看我的简历",
  },
  en: {
    educationLabel: "Education",
    experienceLabel: "Experience",
    skillsLabel: "Skills",
    languageLabel: "Language",
    timelineLabel: "Timeline",
    contactLabel: "Open to new opportunities",
    educationTitle: "Guangdong University of Technology",
    educationDetail: "MEng, Industrial Design Engineering",
    educationPeriod: "Aug 2025 to present",
    workTitle: "Wanli Tire Corporation",
    workDetail: "R&D Engineer",
    workPeriod: "Aug 2024 to Aug 2025",
    language: "College English Test Band 4",
    contactCopy:
      "If my background and direction resonate with you, please review my full experience below.",
    contactCta: "View my resume",
  },
} as const;

const tags = [
  "AI Product",
  "User Research",
  "Figma",
  "Codex",
  "Cursor",
  "Rhino",
  "SolidWorks",
  "Creo",
] as const;

type ProfileIconName =
  "education" | "experience" | "skills" | "language" | "timeline" | "contact";

function ProfileIcon({ name }: { name: ProfileIconName }) {
  const paths = {
    education: <path d="m3 10 9-5 9 5-9 5-9-5Zm3 3v4.5c3.6 2 6.4 2 12 0V13M21 10v5" />,
    experience: (
      <path d="M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm4 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20" />
    ),
    skills: (
      <path d="M12 3.5 14 6l3-.15.9 2.85 2.6 1.5-1.1 2.75 1.1 2.75-2.6 1.5-.9 2.85-3-.15-2 2.4-2-2.4-3 .15-.9-2.85-2.6-1.5 1.1-2.75-1.1-2.75 2.6-1.5.9-2.85L10 6l2-2.5Zm0 6.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    ),
    language: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a4 9 0 0 1 0 18 4 9 0 0 1 0-18" />
      </>
    ),
    timeline: <path d="M7 4v16M7 7h10M7 12h8M7 17h10M4.5 7h.1m-.1 5h.1m-.1 5h.1" />,
    contact: <path d="M4 11.5 20 4l-5.4 16-3.25-6.15L4 11.5Zm7.35 2.35L20 4" />,
  } as const;

  return (
    <span aria-hidden="true" className="home-about-profile__icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </svg>
    </span>
  );
}

export function HomeAboutProfile({ locale }: { locale: Locale }) {
  const content = profileContent[locale];

  return (
    <section className="home-about-profile" aria-label={content.timelineLabel}>
      <HomeScrollReveal>
        <Container className="home-about-profile__grid">
          <article className="home-about-profile__card home-about-profile__education">
            <header className="home-about-profile__card-header">
              <div>
                <ProfileIcon name="education" />
                <p>{content.educationLabel}</p>
              </div>
              <span>EDUCATION</span>
            </header>
            <h2>{content.educationTitle}</h2>
            <p>{content.educationDetail}</p>
            <time>{content.educationPeriod}</time>
          </article>

          <article className="home-about-profile__card home-about-profile__experience">
            <header className="home-about-profile__card-header">
              <div>
                <ProfileIcon name="experience" />
                <p>{content.experienceLabel}</p>
              </div>
              <span>EXPERIENCE</span>
            </header>
            <h2>{content.workTitle}</h2>
            <p>{content.workDetail}</p>
            <time>{content.workPeriod}</time>
          </article>

          <article className="home-about-profile__card home-about-profile__skills">
            <header className="home-about-profile__card-header">
              <div>
                <ProfileIcon name="skills" />
                <p>{content.skillsLabel}</p>
              </div>
              <span>SKILLS</span>
            </header>
            <ul aria-label={content.skillsLabel}>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>

          <article className="home-about-profile__card home-about-profile__language">
            <header className="home-about-profile__card-header">
              <div>
                <ProfileIcon name="language" />
                <p>{content.languageLabel}</p>
              </div>
              <span>LANGUAGE</span>
            </header>
            <p className="home-about-profile__language-value">{content.language}</p>
          </article>

          <article className="home-about-profile__card home-about-profile__timeline">
            <header className="home-about-profile__card-header">
              <div>
                <ProfileIcon name="timeline" />
                <p>{content.timelineLabel}</p>
              </div>
              <span>TIMELINE</span>
            </header>
            <ol>
              <li>
                <time>{content.educationPeriod}</time>
                <div>
                  <strong>{content.educationTitle}</strong>
                  <span>{content.educationDetail}</span>
                </div>
              </li>
              <li>
                <time>{content.workPeriod}</time>
                <div>
                  <strong>{content.workTitle}</strong>
                  <span>{content.workDetail}</span>
                </div>
              </li>
            </ol>
          </article>

          <article className="home-about-profile__card home-about-profile__contact">
            <header className="home-about-profile__card-header">
              <div>
                <ProfileIcon name="contact" />
                <p>{content.contactLabel}</p>
              </div>
              <span>LET&apos;S TALK</span>
            </header>
            <p>{content.contactCopy}</p>
            <Link
              className="home-about-profile__contact-cta"
              href={`/${locale}/resume`}
            >
              {content.contactCta}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </Container>
      </HomeScrollReveal>
    </section>
  );
}
