# Projects Archive Specification

**Status:** Candidate until review

## Purpose

The Projects route is the portfolio's complete evidence archive. It makes the registered work scannable without claiming unprovided project facts.

## Page Narrative

1. `01` Project Archive: factual archive framing and project count.
2. `02` Featured Projects: the four Registry records marked `featured: true`.
3. `03` Complete Project Index: all ten Registry records in a compact archive format.

## Featured Logic

Featured work is obtained through `getFeaturedProjects()`. Its preview is a progressive enhancement, controlled by the availability rule below. Mobile remains list-first and has no hover dependency.

## Complete Archive Logic

`getProjects()` supplies the complete index. Each row uses its typed `archiveIndex`, localized title with Chinese fallback, optional approved category/year metadata, and status-aware action.

## ADR - Projects Archive Duplication Strategy

**Option selected:** Featured 4 plus Complete Index 10.

**Reason:** Featured work needs a richer, interactive reading entrance, while the complete index proves the breadth of the archive. The index uses a deliberately compact row format so the repeated four records do not recreate the featured composition.

**Tradeoff:** The four featured records appear twice. The index is the canonical scan layer and remains compact enough to avoid visual repetition.

**Future impact:** Once real case media and metadata arrive, the featured presentation can become richer without changing registry identity or the all-projects index.

## Project Registry Rules

- `data/projects.ts` is the single source of truth.
- `archiveIndex` is a stable archive identity, not a current UI position.
- A missing English title displays the original supplied Chinese title. It does not trigger automatic translation.
- Categories, year, roles, tags, media, outcomes, and links render only after the owner provides and approves them.

## Status Presentation and CTA Rules

| Status            | Archive presentation | CTA behavior                                     |
| ----------------- | -------------------- | ------------------------------------------------ |
| `ready`           | available case       | linked `View case` / `查看案例`                  |
| `partial`         | partial case         | linked `View progress` / `查看阶段内容`          |
| `content-pending` | pending case study   | non-link `Case study in progress` / `案例整理中` |

Pending project detail routes are not linked from the archive or listed in the sitemap. A manually visited route shows only a minimal localized case-study-in-progress notice and a return to the archive.

## Media Rules

The featured preview is a flexible media container, not a universal cover template. It may later contain an approved cover, UI screenshot, industrial render, poster, diagram, video poster, or neutral pending state for an individual project without media.

## Preview Availability Rule

- **0 approved featured media:** render the Featured list in full-width archive mode. Do not show a large neutral media container.
- **At least 1 approved featured media:** render the approved Archive List plus Fixed Preview layout. A hovered or focused featured project without its own media may use the restrained neutral state.

The Preview API, keyboard focus behavior, and media mapping remain in place in both states. The no-media layout changes only the presentation condition, not the future interaction contract.

## Repeated Pending-State Presentation Rule

When every project in the Complete Index has the same `content-pending` status, present one section-level status explanation and suppress the repetitive row-level label. The Registry keeps every individual status. If statuses diverge, row-level status presentation returns automatically.

## Taxonomy Rules

The archive does not render category filters until at least 6-8 projects have approved, stable category data. The underlying optional categories field remains available in the registry.

## Responsive Rules

Featured work uses a list and stable side preview at desktop widths. The complete index is compact and vertically scannable on mobile. No project interaction depends on pointer hover.

## Motion Rules

The hero is static/lightweight. Featured work uses only the approved Fixed Preview response, including keyboard focus parity. The complete index stays mostly static with short hover/focus feedback. Reduced-motion preferences disable the nonessential preview transition.

## Bilingual, Accessibility, and SEO Rules

- All archive copy is dictionary-driven at `/zh/projects` and `/en/projects`.
- Sections have headings, pending rows are not fake links, and interactive featured rows are keyboard reachable.
- Projects has locale-specific metadata. Published case metadata comes from the Registry; no pending cases are indexed in the sitemap.

## Screenshot QA Note

Viewport captures are the primary visual evidence for this phase. The browser's full-page stitching can duplicate or leave dead space in long mobile captures; when that occurs, it is a capture artifact rather than a DOM-layout claim. Final deployment QA must use a reliable full-page capture process and compare it with responsive viewport captures.

## Content Update Boundaries

Phase 4 establishes archive structure only. Project facts, media, English titles, and case-study content must be added from owner-approved source material. Those additions must not require a new project page or a redesigned archive architecture.
