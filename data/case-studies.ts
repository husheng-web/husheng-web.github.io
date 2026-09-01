import type { CaseStudyContent } from "@/types/case-study";

/** Only owner-approved narrative blocks are added to this registry. */
export const caseStudies: readonly CaseStudyContent[] = [];

export function getCaseStudy(
  projectSlug: string,
  locale: CaseStudyContent["locale"],
): CaseStudyContent | undefined {
  return caseStudies.find(
    (caseStudy) => caseStudy.projectSlug === projectSlug && caseStudy.locale === locale,
  );
}
