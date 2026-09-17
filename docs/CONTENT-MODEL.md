# Content Model

## 1. Content boundary

The portfolio separates three layers:

```text
Typed registry (identity, status, routing, relationships)
        -> MDX/content files (approved narrative and block composition)
        -> reusable components (presentation only)
```

The registry is not a giant prose JSON file. It contains compact metadata and references to localized MDX bodies. Content files provide the story. Components own layout and media behavior.

## 2. Planned source layout

```text
content/
  projects/
    pinlvtu/{zh,en}.mdx
    hepai-pro/{zh,en}.mdx
    academic-assistant/{zh,en}.mdx
    ixdc-website/{zh,en}.mdx
    tea-seed-shampoo/{zh,en}.mdx
    diverse-community/{zh,en}.mdx
    sea-turtle-rescue/{zh,en}.mdx
    service-product-system/{zh,en}.mdx
    kids-swimming-aid/{zh,en}.mdx
    smart-comb/{zh,en}.mdx
data/
  projects.ts
  site.ts
  dictionaries/{zh,en}.ts
types/
  content.ts
public/
  media/projects/[slug]/
  resume/
```

Files are created only when their approved content is ready. The directory map represents the intended scalable contract, not a claim that all project narratives already exist.

## 3. Typed project registry contract

```ts
type Locale = "zh" | "en";
type ContentStatus = "ready" | "partial" | "content-pending";
type TranslationStatus = "ready" | "partial" | "pending";

interface LocalizedText {
  zh?: string;
  en?: string;
}

interface Project {
  slug: string;
  title: Required<LocalizedText>;
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

interface MediaAsset {
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
}

interface ProjectLinks {
  liveUrl?: string;
  prototypeUrl?: string;
  repoUrl?: string;
  pdfUrl?: string;
}
```

Rules:

- Optional facts are omitted when unverified; no empty strings that look like content.
- Tags, categories, roles, links, dates, and media only appear after approval.
- `contentStatus` controls whether a case route is publishable and how its CTA reads.
- `translationStatus` describes availability rather than generating English factual copy.
- `MediaAsset` requires alt text and dimensions before image rendering.

## 4. Seed registry: verified names only

| Slug                     | Supplied name      | Featured | Content status  | Translation status |
| ------------------------ | ------------------ | -------: | --------------- | ------------------ |
| `pinlvtu`                | 拼旅途             |      yes | partial         | pending            |
| `hepai-pro`              | 和拍 Pro           |      yes | content-pending | pending            |
| `academic-assistant`     | AI 学术助手        |      yes | content-pending | pending            |
| `ixdc-website`           | 国际体验设计奖官网 |      yes | content-pending | pending            |
| `tea-seed-shampoo`       | 茶枯洗发           |       no | content-pending | pending            |
| `diverse-community`      | 多元社区           |       no | content-pending | pending            |
| `sea-turtle-rescue`      | 海龟救助           |       no | content-pending | pending            |
| `service-product-system` | 服务产品系统设计   |       no | content-pending | pending            |
| `kids-swimming-aid`      | 儿童游泳辅具设计   |       no | content-pending | pending            |
| `smart-comb`             | 智能梳子           |       no | content-pending | pending            |
| `muscle-motion`          | 肌动派             |       no | content-pending | pending            |
| `baomi-tuanzi`           | 苞米团子           |       no | content-pending | pending            |
| `dolphin-neck-pillow`    | 软萌萌海豚 U 型枕  |       no | content-pending | pending            |

The title `和拍 Pro` is retained exactly as supplied. The supplied source material is presented as cover media only; its local filename `合拍社区.pdf` does not change the public project name or establish additional project facts.

## 5. MDX case-study block contract

Approved case-study MDX may compose only from reusable blocks:

- `CaseHero`, `CaseOverview`, `CaseSection`
- `CaseImage`, `CaseGallery`, `CaseVideo`
- `CaseQuote`, `CaseMetric`, `CaseTimeline`, `CaseProcess`
- `CaseDiagram`, `CaseComparison`, `CaseLinks`, `NextProject`

Each block validates its required data. In particular, metrics need a label, value, source/qualification, and locale-aware wording; media needs alt text and dimensions; external links need an owner-approved URL.

## 6. Content intake checklist

For each project, collect before changing its status to `ready`:

1. approved Chinese and English titles/subtitles;
2. date/period, project type, role, collaboration context;
3. problem, audience, research evidence, and contribution boundaries;
4. approved images/video/PDF/prototype links and usage rights;
5. outcomes, metrics, awards, and validation evidence with source;
6. Chinese/English content approval and translation status.
