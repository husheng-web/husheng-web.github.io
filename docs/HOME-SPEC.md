# Home Specification

## Status

**Approved Home V1.** Changes after this freeze should add approved content within this structure. A structural redesign requires evidence of an information-architecture problem.

## Purpose

The Home page establishes the owner as an AI Product Builder / Intelligent Service System Designer, then offers evidence, method, and the next reading action within 30–60 seconds. It is not a résumé, a case-study collection, or a SaaS landing page.

## Frozen Structure

1. Hero
2. Selected Works
3. How I Build
4. Capabilities
5. Practice Record
6. About Preview
7. Contact Finale
8. Persistent Footer

Section numbers are part of the narrative grammar. Header, locale navigation, footer, and route destinations remain shared shell components.

## Hero Rules

- Use the confirmed AI Product Builder / Intelligent Service System Designer positioning only.
- Chinese semantic lines: `设计并构建` / `AI 产品与` / `智能服务系统`.
- English semantic lines: `AI PRODUCT BUILDER` / `INTELLIGENT SERVICE` / `SYSTEM DESIGNER`.
- Preserve the editorial vertical sequence: label, display, supporting copy, then one text CTA.
- Hero identity must remain readable before client Motion initialization and when reduced motion is enabled.

## Selected Works Rules

- Derive the four featured records only from `featuredProjects` in `data/projects.ts`.
- Use fixed preview on eligible desktop widths; pointer hover and keyboard focus select the same record.
- The preview is a media container. It may later receive approved cover images, UI screenshots, renders, posters, diagrams, or video posters.
- A pending project is not a clickable case-study promise. Public copy uses `案例整理中` / `Case study in progress`.

## Motion Rules

- Hero uses visible-safe, line-level Mask Rise only.
- How I Build uses a restrained sequence.
- Selected Works uses Fixed Preview transition.
- Capabilities, Practice Record, and supporting content remain mostly static.
- Native route navigation and `prefers-reduced-motion` behavior remain mandatory.
- No character animation, floating preview, scroll hijacking, route wipe, ambient loop, bounce, or mobile pointer-following.

## Responsive Rules

- Validate 375, 390, 768, 1024, and 1440px without horizontal overflow.
- Mobile prioritizes semantic Hero wrapping and information density.
- Project preview stacks below the archive list where space is constrained.
- Header, focus states, and route links keep their existing accessible behavior.

## Bilingual Rules

- `/zh` and `/en` use typed dictionaries and equivalent section structure.
- Unconfirmed English project titles display the verified original Chinese title, not a fabricated translation.
- Locale switching preserves the corresponding route.

## Pending Content Boundaries

Internal registry states stay factual: `content-pending`, `pending`, and missing fields are retained for content management.

Public Home behavior is different:

- hide unavailable optional fields;
- collapse empty evidence detail instead of creating empty modules;
- show only restrained public status copy when it is necessary;
- never show developer placeholders such as `[CONTENT TODO]` to visitors.

The following may be supplied later without changing Home architecture: project English names, project media, experience details, contact information, résumé files, and capability-to-project evidence mapping.

## Screenshot QA Note

P3.2 measured the live DOM at 390, 768, 1024, and 1440px. Adjacent section gaps were 0–1px, and the English Hero supporting copy and CTA each appeared once in the production DOM.

Earlier full-page screenshots showed dead space and duplicate Hero content because of screenshot stitching artifacts, not a production UI defect. Deployment QA must use a more reliable full-page capture process and compare captured output with DOM section measurements before treating a screenshot anomaly as a layout defect.
