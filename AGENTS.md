# AGENTS.md

## Context

Orbit follows Spec-Driven Development using a GitHub Spec Kit-compatible structure. Orbit CRM is a private personal career intelligence product in which companies, market signals, professional relationships, job opportunities, and applications orbit around the candidate.

The repository has separate but integrated capabilities:

1. `specs/001-quarterly-big-pharma-review`: PharmaShift / Market Intelligence.
2. `specs/002-pharma-job-opportunity-monitor`: job discovery, normalisation, fit scoring, and notification.
3. `specs/003-personal-crm-core`: the private Personal CRM system of record for relationships, applications, tasks, materials, and history.

PharmaShift is the public market-intelligence site and not the product or repository name. It may display only market intelligence, except for an explicitly approved non-personalised job view. Orbit CRM records are private by default.

## Required reading order

Before changing a feature, read its canonical `spec.md` first. Read its `plan.md` and `tasks.md` when they exist. Before changing PharmaShift market intelligence or the public site, also read:

1. `.specify/memory/constitution.md`
2. `specs/001-quarterly-big-pharma-review/spec.md`
3. `specs/001-quarterly-big-pharma-review/plan.md`
4. `specs/001-quarterly-big-pharma-review/tasks.md`
5. `data/snapshots/latest.json`
6. `reports/latest.md`
7. `operations/executions/latest.json`

## Artifact boundaries

- `spec.md`: what and why; behaviour and acceptance criteria. Do not include stack or technical decisions.
- `plan.md`: how; artifact architecture, process, validation, and technical decisions. Do not duplicate requirements.
- `tasks.md`: small, ordered units with a concrete path and validation step.
- `research.md`: reusable methodology decisions, not quarterly news.
- Results from each execution belong in `reports/`, `data/`, and `operations/`.

## Working rules

- Do not overwrite dated historical artifacts.
- Do not update `latest` until all controls have passed.
- Preserve the distinction between the public PharmaShift market-intelligence site and the private Orbit CRM experience.
- Treat Personal CRM as the system of record for contacts, companies, interactions, applications, tasks, materials, and application history.
- Keep job discovery, fit scoring, and CRM application decisions separate. Agents may contribute referenced job or assessment records but must not infer a submitted application or outcome.
- Do not publish candidate details, application status, materials, private notes, or fit rationale to the public PharmaShift site without an explicit field-level publication policy.
- Keep the annual ranking separate from quarterly momentum.
- Distinguish reported data, third-party forecasts, and own estimates.
- Do not attribute a CRM without explicit public evidence and documented scope.
- Reuse the existing `project_id` in `site/.openai/hosting.json`; do not create another site.
- Verify desktop, mobile, and ES/EN before publishing.
- Search Sent for the exact subject before sending an email and record its ID afterwards.
- Use Conventional Commits and keep each commit focused on one checkpoint.
- Maintain all repository documentation, reports, specifications, plans, task descriptions, code comments, identifiers intended for maintainers, commit messages, and operational notes in English, regardless of the language used in chat.
- The only permitted non-English content is:
  1. the immutable original Spanish prompt;
  2. the exact subject or content of an email intentionally sent in another language;
  3. the Spanish localisation of the bilingual site.
- Do not translate historical evidence when translation would make it inaccurate; label it clearly as quoted or immutable source material.

## Initial state

The validated PharmaShift market-intelligence baseline is `2026-Q3`. The stable public market-intelligence URL is `https://pharma-shift-2030.guillermo1983.chatgpt.site`.
