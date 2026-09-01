# Projects Archive Validation

## Automated

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Manual route checks

- `/zh/projects` and `/en/projects` load without console errors or 404s.
- Header navigation and language switching preserve the Projects route.
- Pending rows do not expose anchors; featured preview responds to keyboard focus.
- Direct paths for pending projects resolve to the existing localized not-found behavior.

## Responsive checks

Check 375, 390, 768, 1024, and 1440 px for no horizontal overflow, readable title wrapping, and compact all-project indexing.
