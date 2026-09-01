# Development Plan

## Working agreement

Each phase is independently reviewable and must leave the repository in a usable buildable state. No phase uses unapproved factual portfolio content. Before modifying an existing file, read it; before reporting a phase complete, run the listed validation commands.

## Phase 0 — Discovery (complete)

Deliverables: environment snapshot; project brief; information architecture; content model; this plan; documented unknowns and initialization recommendation.

Completion condition: the first implementation phase can start without re-deciding scope, routing, content ownership, or non-fabrication rules.

## Phase 1 — Foundation

Deliverables:

- initialize Git and a new Next.js App Router project with strict TypeScript, Tailwind, ESLint, Prettier, Motion, and MDX;
- create locale routing (`zh`, `en`), typed dictionaries, redirect/proxy behavior, reserved future namespaces, and locale-aware page shell;
- establish `app`, `components`, `content`, `data`, `lib`, `public`, `styles`, and `types` boundaries;
- add project registry, placeholder-safe content loading, metadata helpers, robots, sitemap, and basic 404;
- create token-based global CSS, responsive container primitives, header shell, footer shell, and empty `public/resume/` directory.

Validation: `npm run lint`, `npm run typecheck`, `npm run build`; manually verify `/`, `/zh`, `/en`, locale redirect, route switching, and 404.

## Phase 2 — Design system

Deliverables: typography and spacing scale, layout grid, buttons, links, tags, section headers, project-card primitive, motion utilities, accessible navigation/menu, and `docs/DESIGN-SYSTEM.md`.

Validation: automated checks above; visual checks at 375, 390, 768, 1024, 1440 px; keyboard and reduced-motion checks.

## Phase 3 — Home

Deliverables: Hero, selected work, How I Build, capabilities, experience placeholder, About preview, and contact CTA. Use only registry-approved facts and clear pending states.

Validation: automated checks; visual checks on mobile and desktop; verify selected project ordering is registry-driven.

## Phase 4 — Projects archive

Deliverables: complete ten-project archive, status-aware cards, featured/all derived views, and safe optional filters for approved category/year/tag metadata.

Validation: automated checks; filter states, empty result, all status modes, and locale mapping.

## Phase 5 — Case-study system

Deliverables: composable project detail template and reusable case-study blocks, tested with the `pinlvtu` route. If content remains absent, the route presents only a truthful pending template.

Validation: automated checks; optional/missing section behavior, media responsiveness, external-link semantics, and Next Project navigation.

## Phase 6 — About and Resume

Deliverables: bilingual structured About modules and Resume web view; disabled download affordances until real PDFs are supplied.

Validation: automated checks; keyboard navigation, disabled states, and localized metadata.

## Phase 7 — QA and release readiness

Deliverables: `docs/QA-REPORT.md`, responsive/accessibility/link/SEO/motion/image audit, and remediation of defects found.

Validation: `npm run lint`, `npm run typecheck`, `npm run build`, manual viewport matrix, keyboard sweep, locale/404/sitemap/robots review, and production preview where deployment access exists.

## Planned repository structure after Foundation

```text
app/
  [locale]/
components/
  case-study/ layout/ motion/ navigation/ project/ ui/
content/projects/
data/
lib/
public/
  media/ resume/
styles/
types/
docs/
```

## Dependency and deployment decisions

- Deploy target: Vercel, to retain straightforward locale redirect behavior, dynamic metadata, and future flexibility.
- Content source: local typed registry plus MDX; no CMS/database in v1.
- i18n: native App Router locale segment/dictionary loader; do not add a library before the complexity warrants it.
- Images: `next/image`, dimensions required in metadata, responsive `sizes`, lazy loading except intentional LCP media. Video requires poster image and metadata.
- Motion: use CSS for simple state transitions; use `motion` in isolated client components only where it improves narrative or input feedback.

## Known risk and mitigation

| Risk                                                      | Mitigation                                                                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Missing portfolio facts/assets delay visual completeness. | Build truthful pending states and composable content blocks first; do not generate claims.                         |
| Package access is currently unavailable from npm cache.   | Confirm network/package registry access before Phase 1; do not scaffold a partial hand-written dependency tree.    |
| Large source PDFs/PPTX/assets can damage performance.     | Keep source files out of page bundles; generate approved, optimized derivatives in a later media-preparation step. |
| English case-study content is incomplete.                 | Preserve English routes and show translation status; do not machine-translate factual narratives without approval. |
