# Portfolio work gallery — requirements

## Goal

Present all currently supplied portfolio work as an image-first project archive inspired by the browsing clarity of Behance, while retaining the site's own editorial visual system.

## Observable behavior

- `/zh/projects` and `/en/projects` render a responsive visual gallery from the shared project registry.
- Supplied source material appears as optimized local cover images; no source PDF or presentation is embedded wholesale.
- The three newly identified works — 肌动派、苞米团子、软萌萌海豚 U 型枕 — join the registry with stable archive indexes.
- Projects lacking supplied media remain clearly present with a neutral visual state rather than invented imagery.

## Constraints

- Use only source files supplied under `作品集文件` and existing approved portfolio assets.
- Do not invent dates, roles, results, categories, English titles, or case-study narrative.
- A cover image does not make a case study complete; its `contentStatus` remains `content-pending` until the web case is authored.
- Behance is a reference for image-first browsing, not for copied code, visual assets, or copy.

## Out of scope

- Building project-detail pages for the new works.
- Copying the large source PDFs, PPTX files, or video into `public/`.
- Changing the established site-wide visual system or adding new motion.
