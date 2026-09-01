# Projects Archive Requirements

## Goal

Replace the foundation Projects route with a bilingual, data-driven editorial archive for the ten registered portfolio projects.

## Observable behavior

- `/zh/projects` and `/en/projects` show an archive hero, four featured projects, and a compact complete index of all ten records.
- The featured set is derived from `featured: true`; the complete index is derived from the single Project Registry.
- Archive numbers are stable `archiveIndex` values, never a filtered-list position.
- `content-pending` projects show a non-link pending state. No project metadata is invented.
- English falls back to the supplied Chinese project name when an approved English title is unavailable.

## Constraints

- Preserve Approved Home V1 and its existing page architecture.
- Do not add taxonomy filters without factual category data.
- Use only approved motion: fixed preview for featured work and short interaction feedback.
- Pending case-study routes must not present an empty case shell or be listed in the sitemap. A direct visit may show a minimal, localized pending notice.

## Out of scope

- Case-study narrative production, project media, filters, and changes to project content status.

## Acceptance criteria

- A public archive never exposes `[CONTENT TODO]` for the current pending registry.
- Pending rows are not links; ready and partial records can become links through the same component.
- The route has localized metadata and no horizontal overflow at 375, 390, 768, 1024, and 1440 pixels.
- Featured work does not reserve a large preview region while every featured record lacks approved media.
- A uniform pending status is explained once at index-section level rather than repeated across all rows.
