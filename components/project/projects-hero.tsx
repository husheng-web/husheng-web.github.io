import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/types/content";

interface ProjectsHeroProps {
  dictionary: Dictionary;
  projectCount: number;
}

export function ProjectsHero({ dictionary, projectCount }: ProjectsHeroProps) {
  return (
    <section className="border-b border-[var(--border)] py-[clamp(4rem,9vw,8rem)]">
      <Container>
        <div className="grid gap-8 border-t border-[var(--border)] pt-4 md:grid-cols-[minmax(6rem,0.5fr)_minmax(0,2fr)]">
          <p className="type-label text-[var(--accent-signal)]">01</p>
          <div className="max-w-[52rem]">
            <p className="type-label text-[var(--foreground-muted)]">
              {dictionary.projects.heroLabel}
            </p>
            <h1 className="type-display mt-5">{dictionary.projects.heroTitle}</h1>
            <p className="type-body-large mt-6 max-w-[42rem] text-[var(--foreground-secondary)]">
              {dictionary.projects.heroDescription}
            </p>
            <p className="type-label mt-10 text-[var(--foreground-muted)]">
              {projectCount} {dictionary.projects.projectCountLabel}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
