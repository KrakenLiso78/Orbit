# Implementation and Operating Plan

**Feature**: `001-quarterly-big-pharma-review`
**Specification**: [spec.md](spec.md)
**Constitution**: [../../.specify/memory/constitution.md](../../.specify/memory/constitution.md)

## Approach

Orbit maintains the PharmaShift / Market Intelligence capability in this repository with four artifact layers:

1. **SDD definition** in `specs/001-quarterly-big-pharma-review/`.
2. **Historical evidence** in `reports/`, `data/`, and `operations/`.
3. **Visual application** in `site/`, bound to the existing published Sites project.
4. **Controlled inputs** in `inputs/`, preserving the original operating request.

Each quarterly review reads `latest` first, creates new dated files, and only then replaces the `latest` references. Historical data is never overwritten.

## Quarterly workflow

### 1. Preparation

- Read the constitution, specification, and `data/snapshots/latest.json`.
- Read the latest report, source register, and execution metadata.
- Determine the new `YYYY-QN` identifier and exact information cut-off.
- Check whether an execution or email already exists for the same quarter.

### 2. Research and normalisation

- Collect annual reports and company results before using secondary sources.
- Build a universe of at least 15 companies.
- Normalise pharmaceutical sales, fiscal periods, and currencies in a structured dataset.
- Keep the annual ranking, quarterly momentum, forecasts, and CRM evidence separate.
- Compare with `latest` using the materiality thresholds in the specification.

### 3. Synthesis and control

- Generate the dated report in `reports/<YYYY-QN>/report.md`.
- Generate the dated snapshot and source register.
- Validate totals, order, duplicates, conversions, links, ranges, and CRM classifications.
- Update `research.md` only when a durable methodology decision changes.

### 4. Visual application

- Update data and copy in `site/` without changing the `project_id` in `.openai/hosting.json`.
- Maintain the ES/EN toggle and translate labels, visible data, and methodology notes.
- Verify desktop, mobile, navigation, filters, links, overflow, and console errors.
- Build and publish a new version to the same Sites project.

### 5. Verifiable completion

- Verify the public URL and the new information cut-off.
- Send one email using the subject defined for the quarter.
- Find the message in Sent and capture its identifier.
- Save `operations/executions/<YYYY-QN>.json`.
- Update the `latest` copies only after all checks pass.

## Directory structure

```text
Orbit/
├── .specify/memory/constitution.md
├── AGENTS.md
├── README.md
├── spec.md
├── inputs/
├── specs/001-quarterly-big-pharma-review/
│   ├── spec.md
│   ├── plan.md
│   ├── tasks.md
│   ├── research.md
│   ├── data-model.md
│   ├── quickstart.md
│   └── contracts/snapshot.schema.json
├── reports/<YYYY-QN>/report.md
├── data/snapshots/<YYYY-QN>.json
├── data/sources/<YYYY-QN>.csv
├── operations/executions/<YYYY-QN>.json
└── site/
```

## Technical decisions

- The JSON snapshot is the structured source for quarter-to-quarter comparisons.
- The CSV register keeps one row per item of evidence and supports lightweight auditing.
- Operational JSON metadata separates publication and email evidence from analytical content.
- The visual application remains a React/vinext project deployed through Sites.
- The Sites identifier remains only in `site/.openai/hosting.json`.
- `latest` artifacts are validated copies rather than symbolic links for maximum portability.
- Validation uses project-native tools: JSON parsing, focused linting, build, and browser checks at two breakpoints.

## Quality controls

- JSON is valid against `contracts/snapshot.schema.json`.
- The ranking is ordered and contains no duplicate companies.
- The top 10 is derived from the wider universe, not maintained independently.
- Every value includes period, original currency, and source or methodology note.
- Every evidence URL opens or is marked as inaccessible.
- No global CRM classification is based on limited-scope evidence.
- The `site/` build passes and the code in use has no project-owned lint errors.
- The public URL shows the correct quarter and information cut-off.
- Gmail search returns exactly the message sent for the execution.

## Risks and mitigations

- **Inaccessible paid sources**: use only figures that were directly consulted or label secondary references.
- **Different fiscal periods**: disclose the timing difference and avoid false comparability.
- **FX changes close positions**: use a homogeneous annual convention and rank bands where appropriate.
- **Ambiguous CRM announcements**: lower confidence or classify as “not public”.
- **Retries duplicate email**: search by recipient and exact subject before sending.
- **Deployment is private by default**: verify public access before notification.
