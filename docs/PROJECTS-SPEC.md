# Projects Archive Specification

**Status:** Approved Projects Archive V1

## Purpose

The Projects route is the portfolio's complete evidence archive. It makes the registered work scannable without claiming unprovided project facts.

## Page Narrative

1. `01` Project Archive: factual archive framing and project count.
2. `02` Featured Projects: the four Registry records marked `featured: true`.
3. `03` Complete Project Index: all Registry records in an image-first archive format.

## Featured Logic

Featured work is obtained through `getFeaturedProjects()`. Its preview is a progressive enhancement, controlled by the availability rule below. Mobile remains list-first and has no hover dependency.

## Complete Archive Logic

`getProjects()` supplies the complete index. Each row uses its typed `archiveIndex`, localized title with Chinese fallback, optional approved category/year metadata, and status-aware action.

## ADR - Projects Archive Duplication Strategy

**Option selected:** Featured 4 plus Complete Index.

**Reason:** Featured work needs a richer, interactive reading entrance, while the complete index proves the breadth of the archive. Both sections use an image-first gallery, but the complete index remains the broader scan layer.

**Tradeoff:** The four featured records appear twice. The index is the canonical scan layer, and visual cover media improves quick browsing without implying that every case study is complete.

**Future impact:** Once real case media and metadata arrive, the featured presentation can become richer without changing registry identity or the all-projects index.

## Project Registry Rules

- `data/projects.ts` is the single source of truth.
- `archiveIndex` is a stable archive identity, not a current UI position.
- A missing English title displays the original supplied Chinese title. It does not trigger automatic translation.
- Categories, year, roles, tags, outcomes, and links render only after the owner provides and approves them. Cover media may be derived from source files the owner explicitly supplies for this portfolio.

## Status Presentation and CTA Rules

| Status            | Archive presentation | CTA behavior                                     |
| ----------------- | -------------------- | ------------------------------------------------ |
| `ready`           | available case       | linked `View case` / `查看案例`                  |
| `partial`         | partial case         | linked `View progress` / `查看阶段内容`          |
| `content-pending` | pending case study   | non-link `Case study in progress` / `案例整理中` |

Pending project detail routes are not linked from the archive or listed in the sitemap. A manually visited route shows only a minimal localized case-study-in-progress notice and a return to the archive.

## Media Rules

The archive uses an image-first gallery inspired by Behance's browsing pattern, while retaining the portfolio's own typography and visual tokens. A card may contain an owner-supplied cover, UI screenshot, industrial render, poster, diagram, video poster, or a neutral pending state when no source media exists.

## Preview Availability Rule

- A project with owner-supplied media renders that cover in its gallery card.
- A project without source media renders a restrained neutral card with its stable archive index.
- The neutral card is an honest absence state, not a fabricated cover or a claim that the underlying case study is complete.

## Repeated Pending-State Presentation Rule

When every project in the Complete Index has the same `content-pending` status, present one section-level status explanation and suppress the repetitive row-level label. The Registry keeps every individual status. If statuses diverge, row-level status presentation returns automatically.

## Taxonomy Rules

The archive does not render category filters until at least 6-8 projects have approved, stable category data. The underlying optional categories field remains available in the registry.

## Responsive Rules

Featured work uses a two-column gallery at desktop widths. The complete index uses a three-column gallery at large desktop widths, two columns at tablet width, and one column on mobile. No project interaction depends on pointer hover.

## Motion Rules

The hero is static/lightweight. Featured work uses only the approved Fixed Preview response, including keyboard focus parity. The complete index stays mostly static with short hover/focus feedback. Reduced-motion preferences disable the nonessential preview transition.

## Bilingual, Accessibility, and SEO Rules

- All archive copy is dictionary-driven at `/zh/projects` and `/en/projects`.
- Sections have headings, pending rows are not fake links, and interactive featured rows are keyboard reachable.
- Projects has locale-specific metadata. Published case metadata comes from the Registry; no pending cases are indexed in the sitemap.

## Screenshot QA Note

Viewport captures are the primary visual evidence for this phase. The browser's full-page stitching can duplicate or leave dead space in long mobile captures; when that occurs, it is a capture artifact rather than a DOM-layout claim. Final deployment QA must use a reliable full-page capture process and compare it with responsive viewport captures.

## Content Update Boundaries

Projects Archive V1 is frozen. Project facts, media, English titles, categories, and case-study content must be added from owner-approved source material. Those additions may activate existing status, metadata, taxonomy, and preview rules, but must not require a new project page or a redesigned archive architecture.
