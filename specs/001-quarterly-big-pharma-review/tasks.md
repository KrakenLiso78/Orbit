# Executable Tasks

Each task must be completable and verifiable in one session. Tasks marked `[P]` may run in parallel once their dependencies are resolved.

## Phase 1 — Initial structure

- [x] T001 Create the SDD and historical-artifact structure; validate with `find . -maxdepth 3 -type f`.
- [x] T002 Create `.specify/memory/constitution.md`; verify that it covers comparability, evidence, uncertainty, CRM, history, and completion.
- [x] T003 Create the canonical specification and root copy; verify that they are identical.
- [x] T004 Create `plan.md`, `research.md`, `data-model.md`, `quickstart.md`, and the snapshot contract.
- [x] T005 Migrate the site source while preserving `site/.openai/hosting.json` and the existing `project_id`.
- [x] T006 Migrate the `2026-Q3` baseline report, snapshot, sources, and execution record.
- [x] T007 Create the `latest` references from the validated baseline.

## Phase 2 — Baseline validation

- [x] T008 Validate `data/snapshots/2026-Q3.json` against `contracts/snapshot.schema.json`.
- [x] T009 [P] Confirm that `data/snapshots/latest.json` matches the dated baseline.
- [x] T010 [P] Confirm that `data/sources/latest.csv` matches the dated source register.
- [x] T011 [P] Confirm that `reports/latest.md` matches the dated report.
- [x] T012 Install `site/` dependencies with `npm ci`.
- [x] T013 Run focused linting on `site/app/` and resolve project-owned findings.
- [x] T014 Build `site/` with `npm run build`.
- [x] T015 Confirm that the visual source matches the desktop/mobile validated version and that the public URL remains active.

## Phase 3 — Prepare the next quarterly review

- [ ] T016 Read `operations/executions/latest.json` and confirm the latest completed execution.
- [ ] T017 Search Gmail for the exact new-quarter subject to prevent duplicates.
- [ ] T018 Create `reports/<YYYY-QN>/` and new dated files without modifying `latest`.
- [ ] T019 [P] Update complete-FY sales for a universe of at least 15 companies.
- [ ] T020 [P] Update the YTD/LTM momentum monitor and guidance.
- [ ] T021 [P] Update five-year forecasts, ranges, scenarios, and confidence.
- [ ] T022 [P] Update competitive drivers, pipeline, loss of exclusivity, M&A, and therapeutic areas.
- [ ] T023 [P] Update the CRM appendix using explicit evidence, scope, and confidence.
- [ ] T024 Compare with `data/snapshots/latest.json` and retain only material changes.
- [ ] T025 Generate and review the quarterly report.
- [ ] T026 Generate the snapshot and validate ranking, duplicates, types, and sources.
- [ ] T027 Generate the source register with publication and access dates.

## Phase 4 — Update and publish the artifact

- [ ] T028 Update data, information cut-off, and ES/EN copy in `site/`.
- [ ] T029 Implement or review filters for company, trend, therapeutic area, and CRM.
- [ ] T030 Run focused linting and build.
- [ ] T031 Visually validate desktop and mobile and check links.
- [ ] T032 Publish a new version to the existing Sites project.
- [ ] T033 Verify that the stable URL is public and shows the new information cut-off.

## Phase 5 — Notification and completion

- [ ] T034 Confirm again that no email was sent for the same quarter.
- [ ] T035 Send one email with the URL, information cut-off, three key changes, and review type.
- [ ] T036 Confirm the email in Sent and capture its identifier.
- [ ] T037 Save `operations/executions/<YYYY-QN>.json` with control and publication results.
- [ ] T038 Update `latest` only when research, build, deployment, access, and email are confirmed.
- [ ] T039 Run the final integrity checks described in `quickstart.md`.
