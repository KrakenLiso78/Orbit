# AGENTS.md

## Context

This repository follows Spec-Driven Development using a GitHub Spec Kit-compatible structure. The canonical feature directory is `specs/001-quarterly-big-pharma-review`.

## Required reading order

Before researching or changing the site, read:

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
- Keep the annual ranking separate from quarterly momentum.
- Distinguish reported data, third-party forecasts, and own estimates.
- Do not attribute a CRM without explicit public evidence and documented scope.
- Reuse the existing `project_id` in `site/.openai/hosting.json`; do not create another site.
- Verify desktop, mobile, and ES/EN before publishing.
- Search Sent for the exact subject before sending an email and record its ID afterwards.
- Use Conventional Commits and keep each commit focused on one checkpoint.
- Maintain project documentation and reports in English. Preserve source material in its original language when required for auditability.

## Initial state

The validated baseline is `2026-Q3`. The stable URL is `https://pharma-shift-2030.guillermo1983.chatgpt.site`.
