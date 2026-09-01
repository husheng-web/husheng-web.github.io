import type { LocalizedText, MediaAsset } from "@/types/content";

export type CaseStudyDepth = "flagship" | "medium" | "compact";
export type CaseMediaKind = "ui" | "render" | "diagram" | "poster" | "video";
export type CaseMediaMotion = "mask" | "fade" | "none";

export interface CaseMedia extends MediaAsset {
  caption?: LocalizedText;
  kind: CaseMediaKind;
  motion: CaseMediaMotion;
}

export interface CaseTextBlock {
  type: "text";
  body: string;
}

export interface CaseInsightBlock {
  type: "insight";
  decision: string;
  evidence: string;
  insight: string;
}

export interface CaseComparisonBlock {
  type: "comparison";
  items: ReadonlyArray<{ label: string; value: string }>;
}

export interface CaseProcessBlock {
  type: "process";
  steps: ReadonlyArray<{ label: string; description?: string }>;
}

export interface CaseResultBlock {
  type: "result";
  items: ReadonlyArray<{ label: string; value: string }>;
}

export interface CaseReflectionBlock {
  type: "reflection";
  body: string;
}

export interface CaseMediaBlock {
  type: "media";
  media: CaseMedia;
}

export type CaseBlock =
  | CaseComparisonBlock
  | CaseInsightBlock
  | CaseMediaBlock
  | CaseProcessBlock
  | CaseReflectionBlock
  | CaseResultBlock
  | CaseTextBlock;

export interface CaseStudySection {
  blocks: ReadonlyArray<CaseBlock>;
  id: string;
  index: string;
  title: string;
  description?: string;
}

export interface CaseStudyContent {
  depth: CaseStudyDepth;
  locale: "zh" | "en";
  projectSlug: string;
  sections: ReadonlyArray<CaseStudySection>;
}
