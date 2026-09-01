# Portfolio Design System

## 1. Design Principles

- **Typography first:** hierarchy, not decoration, establishes the portfolio's editorial confidence.
- **Evidence-aware:** project and profile interfaces reveal only approved fields and make missing content explicit.
- **Structured restraint:** shared grid anchors, hairline borders, generous space, and indexed labels replace dashboard-card decoration.
- **Bilingual by construction:** Chinese and English share semantic components while retaining separate locale routes and dictionaries.
- **Motion has a job:** feedback, orientation, and disclosure only. Reduced-motion users receive the same content without movement.

## 2. Design Tokens

The source of truth is `styles/tokens.css`.

| Group    | Tokens                                                                                        | Intended use                                                     |
| -------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Canvas   | `--background`, `--background-secondary`, `--surface`                                         | Reading field, alternate section, contained content              |
| Ink      | `--foreground`, `--foreground-secondary`, `--foreground-muted`                                | Primary, supporting, and metadata text                           |
| Boundary | `--border`, `--border-strong`                                                                 | Editorial dividers and stronger controls                         |
| Signal   | `--accent: #F04A24`, `--accent-hover`, `--accent-foreground`                                  | Index, active state, link feedback, status point, small emphasis |
| Inverse  | `--inverse-background`, `--inverse-foreground`                                                | Footer and high-contrast utility surface                         |
| Rhythm   | `--space-1` through `--space-32`, `--space-section`, `--space-macro`                          | Micro, component, section, and narrative spacing                 |
| Geometry | `--container-page`, `--container-wide`, `--container-reading`, `--edge-padding`, `--grid-gap` | Shared horizontal anchors and measures                           |
| Motion   | `--motion-fast`, `--motion-normal`, `--motion-slow`, `--ease-standard`, `--ease-out`          | Explicit, purpose-specific transitions                           |

Signal Orange is intentionally not a large background or white-text button color. Its text foreground is near-black because white does not meet normal-text contrast requirements on this orange.

## 3. Typography System

The system uses local system fonts for resilient Chinese coverage and zero font-download dependency: `Arial Black` / `Helvetica Neue` with `PingFang SC` and `Microsoft YaHei` fallbacks for display, `Helvetica Neue` with the same Chinese fallbacks for body, and a system mono stack for technical metadata.

| Level      | Token or class                          | Size                               | Weight / leading | Use                                |
| ---------- | --------------------------------------- | ---------------------------------- | ---------------- | ---------------------------------- |
| Display XL | `--type-display-xl`, `.type-display-xl` | `clamp(3.5rem, 10vw, 9.5rem)`      | 900 / 0.9        | Major positioning or preview title |
| Display    | `--type-display`, `.type-display`       | `clamp(2.625rem, 6vw, 6.5rem)`     | 900 / 0.9        | Section-scale statement            |
| H1         | `--type-h1`, `.type-h1`                 | `clamp(2rem, 4vw, 4rem)`           | 900 / 1.04       | Page title                         |
| H2         | `--type-h2`, `.type-h2`                 | `clamp(1.625rem, 2.6vw, 2.75rem)`  | 900 / 1.04       | Section title                      |
| H3         | `--type-h3`, `.type-h3`                 | `clamp(1.25rem, 1.7vw, 1.625rem)`  | 900 / 1.2        | Project title / module heading     |
| Body Large | `.type-body-large`                      | `clamp(1.125rem, 1.4vw, 1.375rem)` | normal / 1.5     | Framing explanation                |
| Body       | body default                            | `1rem`                             | normal / 1.6     | Reading copy                       |
| Body Small | `--type-body-small`                     | `0.875rem`                         | normal / 1.6     | Supporting copy                    |
| Meta       | `.type-meta`                            | `0.75rem`                          | mono / normal    | Quiet metadata                     |
| Label      | `.type-label`                           | `0.6875rem`                        | mono / normal    | Index and controlled labels        |

Display negative tracking is limited to display/heading classes. `text-wrap: balance` avoids fragile line lengths for mixed Chinese and English titles.

## 4. Layout System

- **Page container:** `76rem`, default site content width.
- **Wide container:** `96rem`, used by wide narrative openings and media-ready areas.
- **Reading container:** `45rem`, reserved for future case-study prose.
- **Edge padding:** `clamp(1rem, 3.4vw, 3.5rem)`, preserving 16px minimum mobile breathing room.
- **Section grid:** SectionHeader uses a label rail plus content column from `md` upward.
- **Archive grid:** archive rows become index, title, metadata, action at `md`; small viewports stack in reading order.
- **Case media grid:** future case-study blocks use WideContainer and `--grid-gap`; visual media layouts do not exist until approved content arrives.

## 5. Core Components

| Component                                    | Responsibility                                                             |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| `Container`, `WideContainer`                 | Semantic width and edge-padding shells                                     |
| `Button`, `ButtonLink`, `TextLink`           | Explicit action / navigation affordances with press feedback               |
| `Tag`, `StatusLabel`                         | Small factual metadata and pending-state indicators                        |
| `SectionHeader`                              | Optional index, eyebrow, title, and description without page-specific copy |
| `ProjectArchiveItem`                         | Status-aware project catalogue entry from typed registry data              |
| `SiteNavigation`, `LanguageSwitch`           | Locale-aware primary navigation and accessible mobile disclosure           |
| `SiteFooter`                                 | Narrative-finale structure with content-pending contact state              |
| `ProfileBlock`, `ProfileGrid`, `ProfileMeta` | Future About foundations without implied personal facts                    |
| `Reveal`                                     | Reduced-motion-safe viewport reveal for future approved narrative surfaces |

## 6. Project Archive System

`ProjectArchiveItem` receives only `Project`, locale, dictionary, and index. It derives the localized title and hides unavailable subtitle/category data. A `content-pending` record is not a clickable case-study promise: it renders a clear pending status and `Coming soon` action state. Translation pending remains visible independently. No project dates, images, tags, roles, or metrics are synthesized.

## 7. Motion System

- Fast 140ms: hover, color, border, and press feedback.
- Normal 220ms: fade and navigation feedback.
- Slow 420ms: optional `Reveal` entrance.
- Easing: standard `cubic-bezier(0.2, 0, 0, 1)` and out `cubic-bezier(0, 0, 0.2, 1)`.
- The global reduced-motion query reduces animations and transitions to near-instant. `Reveal` also disables its initial/in-view movement when `useReducedMotion()` is true.

No parallax, particles, continuous ambient animation, WebGL, or keyboard-initiated animation is part of the system.

## 8. Accessibility Notes

- Page structure uses header, nav, main, section/article, and footer landmarks.
- A skip link targets `#main-content`; focus-visible uses the accent outline.
- The mobile menu exposes `aria-expanded` and `aria-controls`, moves focus to its first link, traps Tab within the menu, closes with Escape, restores trigger focus, and locks body scrolling while open.
- Links navigate and buttons change menu state. Touch targets have a 44px minimum height.
- Status uses text in addition to a colored point.
- Contrast test: `#F04A24` against `#171613` is approximately 5.0:1 and passes normal text. White against `#F04A24` is approximately 3.6:1 and is not used as normal text.

## 9. Component Usage Examples

```tsx
<SectionHeader
  index="02"
  eyebrow="Archive"
  title="Project archive"
  description="Only approved metadata appears."
/>

<ProjectArchiveItem
  dictionary={dictionary}
  index={1}
  locale={locale}
  project={project}
/>
```

The local preview route is `/dev/design-system`. It is intentionally `noindex` and includes token, type, component, status, bilingual project-title, archive, and profile-foundation stress tests.
