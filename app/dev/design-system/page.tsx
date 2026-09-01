import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProfileBlock } from "@/components/profile/profile-block";
import { ProfileGrid } from "@/components/profile/profile-grid";
import { ProfileMeta } from "@/components/profile/profile-meta";
import { ProjectArchiveItem } from "@/components/project/project-archive-item";
import { Button, ButtonLink } from "@/components/ui/button";
import { Container, WideContainer } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusLabel } from "@/components/ui/status-label";
import { Tag } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import { enDictionary } from "@/data/dictionaries/en";
import { zhDictionary } from "@/data/dictionaries/zh";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Design System Preview",
  robots: { index: false, follow: false },
};

const typeRows = [
  ["English Display", "type-display", "AI PRODUCT SYSTEMS", "en"],
  ["Chinese Display", "type-display", "设计智能服务系统", "zh-CN"],
  ["Mixed Display", "type-display", "AI 产品与 Product Systems", "zh-CN"],
  ["English Label", "type-label", "ARCHIVE / STATUS / LOCALE", "en"],
  ["Chinese Label", "type-label", "项目档案 / 状态 / 语言", "zh-CN"],
] as const;

export default function DesignSystemPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader dictionary={enDictionary} locale="en" showLanguageSwitch={false} />
      <main id="main-content">
        <WideContainer className="py-[var(--space-section)]">
          <p className="type-label text-[var(--accent)]">DEV / FOUNDATION / 02</p>
          <h1 className="type-display-xl mt-5 max-w-[10ch]">Design system</h1>
          <p className="type-body-large mt-8 max-w-[52rem] text-[var(--foreground-secondary)]">
            A visual and component foundation for a bilingual AI Product Builder
            portfolio. The examples deliberately avoid unverified project facts.
          </p>
        </WideContainer>

        <Container className="space-y-[var(--space-section)] pb-[var(--space-section)]">
          <section>
            <SectionHeader
              description="Responsive type keeps Chinese, English, and mixed strings readable before visual decoration is added."
              eyebrow="Typography"
              index="01"
              title="Type is the primary hierarchy."
            />
            <div className="mt-10 space-y-8">
              {typeRows.map(([label, className, sample, language]) => (
                <div className="border-b border-[var(--border)] pb-6" key={label}>
                  <p className="type-label mb-3 text-[var(--foreground-muted)]">
                    {label}
                  </p>
                  <p className={className} lang={language}>
                    {sample}
                  </p>
                </div>
              ))}
              <p className="type-body-large">
                Body Large: 设计并构建 AI 产品与智能服务系统。
              </p>
              <p>
                Body: [CONTENT TODO] is a deliberate content state, not filler text.
              </p>
              <p className="type-meta text-[var(--foreground-muted)]">
                Meta / archive / status / locale
              </p>
            </div>
          </section>

          <section>
            <SectionHeader
              eyebrow="Tokens"
              index="02"
              title="Semantic colors and spacing."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "background",
                "surface",
                "foreground",
                "accent",
                "border",
                "inverse-background",
                "background-secondary",
                "foreground-muted",
              ].map((token) => (
                <div
                  className="min-h-28 border border-[var(--border)] p-4"
                  key={token}
                  style={
                    token === "accent"
                      ? {
                          background: "var(--accent)",
                          color: "var(--accent-foreground)",
                        }
                      : token === "foreground" || token === "inverse-background"
                        ? {
                            background: `var(--${token})`,
                            color: "var(--inverse-foreground)",
                          }
                        : { background: `var(--${token})` }
                  }
                >
                  <p className="type-label">--{token}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 border-t border-[var(--border)] pt-4 md:grid-cols-3">
              <div className="border border-[var(--border)] p-4">
                <p className="type-label text-[var(--accent-signal)]">
                  Signal / Status
                </p>
                <p className="mt-3 text-[var(--foreground-secondary)]">
                  A controlled cue for active or important state.
                </p>
              </div>
              <div className="border border-[var(--border)] p-4">
                <p className="type-label text-[var(--accent-interactive)]">
                  Interactive
                </p>
                <p className="mt-3 text-[var(--foreground-secondary)]">
                  Link hover, active navigation, selected control.
                </p>
              </div>
              <div className="border border-[var(--border)] p-4">
                <p className="type-label text-[var(--accent-action)]">
                  High-commit Action
                </p>
                <p className="mt-3 text-[var(--foreground-secondary)]">
                  A small-area choice reserved for an important action.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader
              eyebrow="Components"
              index="03"
              title="Interaction and metadata primitives."
            />
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="quiet">Quiet action</Button>
              <ButtonLink href="/en/projects" variant="secondary">
                Link button
              </ButtonLink>
              <TextLink href="/en/projects">Text link</TextLink>
              <Tag>Future tag</Tag>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--border)] pt-4">
              <StatusLabel dictionary={enDictionary} status="ready" />
              <StatusLabel dictionary={enDictionary} status="partial" />
              <StatusLabel dictionary={enDictionary} status="content-pending" />
              <StatusLabel dictionary={enDictionary} status="pending" />
            </div>
          </section>

          <section>
            <SectionHeader
              description="Current registry records are intentionally pending. Missing titles, facts, covers, dates, and tags remain hidden."
              eyebrow="Archive"
              index="04"
              title="Project archive states."
            />
            <div className="mt-10">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectArchiveItem
                  dictionary={zhDictionary}
                  index={index + 1}
                  key={project.slug}
                  locale="zh"
                  project={project}
                />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader
              eyebrow="Profile foundation"
              index="05"
              title="Structured without invented biography."
            />
            <ProfileGrid>
              <ProfileBlock label="POSITIONING">
                <ProfileMeta label="Status" />
              </ProfileBlock>
              <ProfileBlock label="CURRENT FOCUS">
                <ProfileMeta label="Status" />
              </ProfileBlock>
            </ProfileGrid>
          </section>
        </Container>
      </main>
      <SiteFooter dictionary={enDictionary} />
    </>
  );
}
