# PharmaShift

PharmaShift is a recurring project that reviews the global Big Pharma ranking by comparable medicines and vaccine sales, its five-year outlook, and the commercial CRM landscape.

**Published artifact**: [pharma-shift-2030.guillermo1983.chatgpt.site](https://pharma-shift-2030.guillermo1983.chatgpt.site)
**Latest validated review**: `2026-Q3` · initial baseline · information cut-off 1 September 2026

## SDD structure

| Path | Responsibility |
|---|---|
| `.specify/memory/constitution.md` | Non-negotiable principles and governance |
| `spec.md` | Convenient root copy of the functional specification |
| `specs/001-quarterly-big-pharma-review/spec.md` | What the product must achieve and how it is accepted |
| `specs/002-pharma-job-opportunity-monitor/spec.md` | Draft requirements for vacancy discovery, fit scoring, notification, and dashboard presentation |
| `specs/001-quarterly-big-pharma-review/plan.md` | How each review is researched, validated, published, and operated |
| `specs/001-quarterly-big-pharma-review/tasks.md` | Small, ordered, verifiable tasks |
| `specs/001-quarterly-big-pharma-review/research.md` | Durable methodology decisions |
| `specs/001-quarterly-big-pharma-review/data-model.md` | Shared information concepts |
| `specs/001-quarterly-big-pharma-review/contracts/` | Structured snapshot contracts |
| `reports/` | Historical reports and the `latest` reference |
| `data/snapshots/` | Comparable data used to identify changes |
| `data/sources/` | Source register for each review |
| `operations/executions/` | Deployment, access, and email evidence |
| `inputs/` | The original request and controlled operational inputs |
| `site/` | Visual artifact source and Sites project binding |

## Update rule

A review is not complete until research, validation, build, publication, public access, and email delivery are confirmed. Dated historical artifacts are never overwritten. The `latest` references are updated only after every completion control has passed.

Start with [quickstart.md](specs/001-quarterly-big-pharma-review/quickstart.md) when running or validating a review.

## Language policy

All maintained documentation, reports, code comments, maintainer-facing identifiers, operational notes, and commit messages are written in English. Exceptions are limited to the immutable original Spanish prompt, email subjects or content deliberately sent in another language, and the Spanish localisation of the bilingual site.
