# Personal Portfolio System — Project Brief

## 1. Purpose

Build a bilingual personal portfolio for an **AI Product Builder / Intelligent Service System Designer**. The first release must show a complete product-building capability: problem discovery, product definition, service/system design, AI workflow thinking, interaction design, prototyping, AI-assisted implementation, and validation.

This is a portfolio and case-study archive, not a generic AI SaaS landing page, a UI gallery, or a developer-only profile.

## 2. Phase 0 evidence snapshot

| Item              | Verified status                                                                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workspace         | `D:\code\个人网站`; not a Git repository and no application/package configuration was found.                                                                                             |
| Existing assets   | `作品集文件/` contains PDFs, one PPTX, one PSD, and one MP4. Their filenames indicate possible project material only; their contents have not been treated as verified portfolio claims. |
| Toolchain         | Node.js `v24.14.1`, npm `11.11.0`, Git `2.53.0.windows.1`.                                                                                                                               |
| Dependency access | `npx next --version` could not resolve Next because npm is in offline-cache mode without a cached response. No packages were installed in Phase 0.                                       |
| Reference site    | The supplied URL could not be programmatically opened in this environment. Its requested editorial principles remain the design input; no code, layout, copy, or assets will be copied.  |

## 3. Audience and outcomes

Primary audiences: recruiters and hiring managers for AI product, AI product design, product builder, intelligent service, AI agent, and intelligent hardware roles.

The first 30–60 seconds should establish:

1. who the owner is and their AI Product Builder positioning;
2. the kinds of problems and systems they work on;
3. evidence through selected work;
4. the owner’s specific contribution; and
5. that ideas can be advanced into working products.

## 4. Release-one scope

In scope:

- `/zh` and `/en` home pages;
- projects archive, filters, and project detail route;
- one reusable composable case-study system;
- About, Resume, localized 404, SEO primitives;
- ten project entries with factual-status controls;
- accessible responsive navigation, footer, reduced-motion behavior, and a design-token foundation.

Out of scope:

- Lab, Notes, Blog, CMS, authentication, database, analytics platform, and backend services;
- invented biography, credentials, awards, metrics, project roles, research findings, technology claims, translations, contact details, or resume files.

`/lab` and `/notes` are reserved as future route namespaces but are not built in the first release.

## 5. Design direction

**Rational Editorial × Product Thinking × Technical Craft × Restrained Futurism.**

- Editorial rhythm: numbered sections, generous whitespace, strong readable typography, and archive-like project navigation.
- Product-system focus: every interaction should clarify intent, evidence, and next reading action.
- Restrained visual language: neutral off-white/black/gray tokens plus one configurable accent token.
- Explicit exclusions: full-screen blue-purple gradients, glow-orb motifs, glassmorphism, cyberpunk effects, decorative particles, gratuitous 3D, and repeated rounded-card layouts.
- Motion is progressive enhancement only; it must respect `prefers-reduced-motion` and never block comprehension.

## 6. Project assumptions

| Assumption                                                               | Confidence | Consequence if false                                                                                |
| ------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------- |
| The site will deploy on Vercel with a Next.js server-capable runtime.    | Medium     | If static-only hosting is required, root locale redirection and some routing decisions must change. |
| Locale prefixes are required: `/zh` and `/en`.                           | High       | The route and metadata scheme should not use domain-based locales.                                  |
| Projects will be maintained as repository content, not via a CMS in v1.  | High       | A future CMS adapter can be added behind the content loader.                                        |
| Existing asset filenames do not prove their contents, roles, or results. | High       | Assets remain unlinked until the owner approves their classification and usage.                     |
| Content arrives incrementally.                                           | High       | Missing content must render as an honest pending state, never synthesized case-study evidence.      |

## 7. Recommended initialization baseline

Use the current stable **Next.js 16 Active LTS line**, locked in `package-lock.json`, with the App Router and strict TypeScript. The choice follows current Next.js release guidance, while avoiding a feature-line dependency as the foundation evolves. Tailwind CSS v4.3 is appropriate for the target modern-browser baseline; it requires Safari 16.4+, Chrome 111+, or Firefox 128+.

Planned direct dependencies:

- `next`, `react`, `react-dom`: application framework and rendering;
- `motion`: only for narrative/interaction motion that CSS cannot express cleanly;
- `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `remark-gfm`: project case-study authoring and rendering.

Planned development dependencies:

- `typescript`, `@types/node`, `@types/react`, `@types/react-dom`;
- `eslint`, `eslint-config-next`;
- `prettier`, `prettier-plugin-tailwindcss`;
- `tailwindcss`, `@tailwindcss/postcss`, `postcss`.

No general-purpose i18n library is recommended for v1. Next.js App Router’s dynamic locale segment plus typed server-loaded dictionaries keeps the bilingual surface small, avoids client translation payloads, and preserves locale-specific URLs. Re-evaluate this only if pluralization, many locales, or external translators become real requirements.

## 8. Initial acceptance criteria

- Every public route has Chinese and English variants, locale-aware metadata, canonical URLs, and alternate-language links.
- All ten supplied project names exist in one typed data system, with the four nominated projects configured as featured.
- Every unverified field remains absent or visibly marked `[CONTENT TODO]` / `content-pending`.
- Adding a project does not require creating a new route or duplicating presentation markup.
- The final system has no horizontal overflow at 375, 390, 768, 1024, and 1440 px, supports keyboard navigation, and honors reduced motion.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass before each phase is reported complete.

## 9. Decisions deferred to the owner

The owner must supply or approve personal identity, contact links, brand accent color, biography, education, experience, project facts, translated copy, approved media, and resume PDFs before the corresponding claims or links become public.
