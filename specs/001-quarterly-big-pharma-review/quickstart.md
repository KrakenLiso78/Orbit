# Operating Quickstart

## Read before a review

1. `.specify/memory/constitution.md`
2. `specs/001-quarterly-big-pharma-review/spec.md`
3. `specs/001-quarterly-big-pharma-review/plan.md`
4. `data/snapshots/latest.json`
5. `reports/latest.md`
6. `data/sources/latest.csv`
7. `operations/executions/latest.json`

## Local validation

From the project root:

```bash
python3 scripts/validate_snapshot.py data/snapshots/latest.json
cmp data/snapshots/2026-Q3.json data/snapshots/latest.json
cmp data/sources/2026-Q3.csv data/sources/latest.csv
cmp reports/2026-Q3/report.md reports/latest.md
```

From `site/`:

```bash
npm ci
npx oxlint app/page.tsx app/layout.tsx
npm run build
```

Final validation also requires browser checks for:

- desktop and mobile;
- ES/EN toggle;
- no global overflow, overlap, or clipped text;
- navigation and source links;
- correct information cut-off;
- public access without authentication.

## Completing a review

Do not update `latest` until all of the following exist:

- validated dated report and snapshot;
- dated source register;
- successful build;
- publication accessible through the stable URL;
- one email confirmed in Sent;
- operational record with `completed` status.
