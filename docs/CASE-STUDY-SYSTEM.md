# Case Study System

**Status:** Candidate until review

## Purpose

Provide one Registry and content-driven route system for projects of different narrative depth, without forcing unfinished sections or inventing evidence.

## Case Study Depth Strategy

Internal planning supports flagship, medium, and compact depths. These are not visitor-facing labels. Every case renders only its approved blocks.

## Content Model

`types/case-study.ts` defines typed sections and composable blocks. `data/case-studies.ts` accepts only owner-approved localized content. The shared project registry remains the source for identity, status, routing, and approved metadata.

## Section Rules

Case sections are optional. Empty or unsupported sections do not render. Supported blocks include text, insight, process, comparison, result, reflection, and media.

## Media Rules

Media uses the approved `MediaAsset` contract with dimensions and alt text. It distinguishes UI, render, diagram, poster, and video media. UI uses contained framing, render/poster can bleed, and diagrams preserve readability.

## Motion Rules

Case Hero uses approved Mask Rise. Major section content remains reading-first. Media accepts only `mask`, `fade`, or `none`; diagrams default to `none`.

## Responsive Rules

Narrative text uses reading width; media may use page or wide width. Mobile stacks metadata and content, with no hover dependency or forced diagram compression.

## Bilingual Rules

`/[locale]/projects/[slug]` uses the matching locale content. Unapproved English case content is not auto-translated. It shows the project title and localized in-progress state only.

## Status Rules

`content-pending` and records without content show a minimal Case Study Pending state. `partial` and `ready` render only available approved blocks. Pending projects remain excluded from the sitemap.

## SEO and Accessibility

Case metadata is Registry-driven and factual. Semantic section headings, figures, captions, alt text, keyboard links, reduced motion, and native video controls are required when applicable.

## Content Honesty

Unknown facts remain out of public pages. Source inventory, content audit, and owner review are prerequisites for adding claims, media, roles, outcomes, or translations.

## Future Case Production Workflow

Raw Project Materials → Source Inventory → Content Audit → Narrative Outline → User Review → Case Content → Web Implementation → QA → Ready.
