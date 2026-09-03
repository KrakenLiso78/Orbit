# Orbit

Orbit is a personal career intelligence CRM where companies, market signals, professional relationships, job opportunities, and applications orbit around the candidate. It combines a private CRM with governed market and opportunity intelligence so that the candidate can act on current information without losing the history behind each decision.

## What Orbit is

Orbit CRM is the private product and system of record for the candidate's career search. It preserves companies, contacts, interactions, opportunities, job postings, submitted applications, follow-ups, and the exact materials and evidence used at the time of each application.

PharmaShift is Orbit's public market-intelligence surface. It remains focused on pharmaceutical-market analysis and may show a deliberately limited, non-personalised job view only when an explicit publication policy permits it. It is not the public interface for Personal CRM data.

## Capabilities

| Capability | Primary responsibility |
|---|---|
| PharmaShift / Market Intelligence | Monitor the sector, companies, rankings, pipelines, M&A, and market signals. |
| Job Opportunity Monitor | Discover, normalise, and archive job postings. |
| Fit Scoring | Assess role-to-profile fit with a versioned, explainable rubric. |
| Personal CRM | Serve as the system of record for companies, contacts, interactions, applications, tasks, and materials. |
| Private dashboard | Present active roles, fit assessments, application status, and follow-ups to the candidate. |
| Public PharmaShift site | Present market intelligence only; optionally show a non-personalised job view under an explicit publication policy. |

The capabilities have separate responsibilities. The job monitor can contribute job postings and fit assessments, but only the candidate can confirm an application, a decision, or an outcome in Personal CRM. A fit score is not an application decision or a probability of hiring unless separately calibrated and labelled.

## License

Orbit is licensed under the [GNU Affero General Public License v3.0](LICENSE) (`AGPL-3.0-only`). See [LICENSE](LICENSE) for the complete terms and the source-availability obligations for network use.

## Public PharmaShift site

PharmaShift is Orbit's recurring market-intelligence capability. It reviews the global Big Pharma ranking by comparable medicines and vaccine sales, its five-year outlook, and the commercial CRM landscape.

**Published artifact**: [pharma-shift-2030.guillermo1983.chatgpt.site](https://pharma-shift-2030.guillermo1983.chatgpt.site)
**Latest validated review**: `2026-Q3` · initial baseline · information cut-off 1 September 2026

## SDD structure

| Path | Responsibility |
|---|---|
| `.specify/memory/constitution.md` | Non-negotiable principles and governance |
| `spec.md` | Convenient root copy of the active Market Intelligence specification |
| `specs/001-quarterly-big-pharma-review/spec.md` | Requirements for the PharmaShift / Market Intelligence capability |
| `specs/002-pharma-job-opportunity-monitor/spec.md` | Draft requirements for job discovery, fit scoring, notification, and private-dashboard presentation |
| `specs/003-personal-crm-core/spec.md` | Draft requirements for the private Personal CRM system of record and application history |
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

## Operating boundaries

- The public PharmaShift site keeps its stable URL and contains market intelligence. It does not publish candidate-specific CRM information by default.
- Personal CRM is private by default and owns relationship history, submitted applications, material versions, follow-ups, and outcomes.
- A job posting closing or disappearing does not imply that an application was rejected, withdrawn, or never submitted.
- Dated evidence and application snapshots are retained; new information is appended or versioned rather than silently replacing history.

## Update rule

A PharmaShift market review is not complete until research, validation, build, publication, public access, and email delivery are confirmed. Dated historical artifacts are never overwritten. The `latest` references are updated only after every completion control has passed.

Start with [quickstart.md](specs/001-quarterly-big-pharma-review/quickstart.md) when running or validating a review.

## Language policy

All maintained documentation, reports, code comments, maintainer-facing identifiers, operational notes, and commit messages are written in English. Exceptions are limited to the immutable original Spanish prompt, email subjects or content deliberately sent in another language, and the Spanish localisation of the bilingual site.
