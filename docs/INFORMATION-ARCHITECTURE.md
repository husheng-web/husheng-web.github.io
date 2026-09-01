# Information Architecture

## 1. Route map

```text
/
└── locale redirect (browser preference -> zh fallback)

/zh | /en
├── /projects
│   └── /projects/[slug]
├── /about
├── /resume
├── /lab                 reserved, not implemented in v1
└── /notes               reserved, not implemented in v1

not-found -> locale-aware 404 experience
```

The first-release navigation is `Projects`, `About`, `Resume`, and the locale switch. The index/logo returns to the localized home page. `/lab` and `/notes` must not appear in v1 navigation.

## 2. Home page narrative

| Sequence                | Purpose                                                                                              | Required evidence rule                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 01 Hero                 | Establish AI Product Builder / Intelligent Service System Designer positioning.                      | Use only owner-approved name and introductory copy; otherwise show a concise content-pending state. |
| 02 Selected Works       | Direct attention to the four featured projects.                                                      | Project names are allowed; descriptions, media, and facts appear only when supplied.                |
| 03 How I Build          | Explain the reusable six-stage approach: Discover, Define, Structure, Intelligence, Build, Validate. | This is a process framework, not proof of execution on every project.                               |
| 04 Capabilities         | Present four capability groups without unsubstantiated proficiency scores.                           | Individual skills require owner confirmation.                                                       |
| 05 Experience / Journey | Supply a timeline-shaped placeholder/data region.                                                    | No dates, employers, schools, titles, or achievements until confirmed.                              |
| 06 About Preview        | Link to positioning, working philosophy, and current focus.                                          | No fabricated bio.                                                                                  |
| 07 Contact CTA          | Create a contact endpoint only when a verified contact method exists.                                | Never guess an email or social URL.                                                                 |

## 3. Projects archive

The archive has a single source of truth and two visible views:

1. `Selected` — derived with `featured: true`.
2. `All Projects` — all project records, with optional category, year, and tag filters only when factual values exist.

Archive records render as editorial catalogue rows/cards with a stable index, localized title, optional approved fields, and status-aware action. `ready` opens a case study; `partial` can open a clearly incomplete case study; `content-pending` displays a non-deceptive pending state.

## 4. Project detail information flow

```text
Case Hero
  -> Overview
  -> Context / Problem
  -> My Role
  -> Research / Insight
  -> Product Definition / Strategy
  -> System / Workflow
  -> Key Experience
  -> AI & Technology
  -> Design Output
  -> Result / Validation
  -> Reflection
  -> Next Project
```

Sections are composable, not mandatory. A project detail only renders an approved section with source content. Incomplete projects may render the hero/overview plus an explicit `[CONTENT TODO]` notice; they must never simulate a completed case study.

## 5. About and Resume

About is a structured identity page: Intro, Positioning, Education, Capability Map, Working Philosophy, Experience, Current Focus, Contact. Each module independently supports a pending state.

Resume is a readable web summary plus two download affordances. Before PDFs are provided, buttons are disabled and labelled `Coming soon`; `public/resume/` is reserved but no fake files are generated.

## 6. Navigation and accessibility model

- Desktop header is sticky only after visual verification confirms it does not compete with reading; mobile uses a controlled disclosure menu.
- The menu must manage focus, support Escape, lock body scroll while open, and restore focus on close.
- Locale switching maps the equivalent route: `/zh/projects/a` <-> `/en/projects/a`. If a project’s target-language content is pending, preserve the route and expose the translation status instead of redirecting to unrelated content.
- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and `footer`; use buttons only for actions and links only for navigation.
