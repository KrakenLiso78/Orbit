# Orbit Constitution

Orbit CRM is a private personal career intelligence product. Its integrated capabilities are Market Intelligence, Job Opportunity Monitoring, Fit Scoring, Personal CRM, a private dashboard, and a public market-intelligence site. The public site is a separate surface and does not make Personal CRM records public.

## Core principles

### I. Comparable data before apparent precision

The ranking MUST use a homogeneous definition of pharmaceutical and vaccine sales. Non-pharmaceutical businesses, incompatible market-spend measures, and non-comparable fiscal periods MUST be excluded or disclosed. A precise-looking number is never preferred to a defensible range.

### II. Evidence and provenance are part of the product

Every material figure, forecast, CRM attribution, and quarterly change MUST remain traceable to a dated source. Reported data, third-party forecasts, and own estimates MUST be visibly differentiated. Paywalled figures MUST NOT be attributed to a source that was not directly consulted.

### III. Annual ranking and quarterly momentum remain separate

The official ranking MUST use the latest complete fiscal year. YTD, LTM, guidance, and clinical or commercial momentum MAY anticipate future changes, but MUST NOT be blended into the annual ranking.

### IV. Uncertainty is explicit

Future sales and positions MUST use ranges whenever evidence does not support a point estimate. Overlapping forecasts, pipeline risk, loss of exclusivity, M&A, and foreign-exchange effects MUST be reflected in confidence levels and scenario language.

### V. CRM claims require explicit public evidence

Veeva CRM legacy, Veeva Vault CRM, and Salesforce Life Sciences Cloud MUST be distinguished. A global decision MUST NOT be inferred from a local deployment, partnership, job posting, or isolated reference. “Not public” means insufficient public evidence, not absence of a platform.

### VI. Every quarterly run is reproducible and comparable

Each execution MUST preserve a dated report, structured snapshot, source register, deployment record, and email identifier. A `latest` reference MUST identify the most recent validated run. Material changes MUST be measured against the immediately preceding validated snapshot.

### VII. Publication is complete only after verification

The visual artifact MUST remain at the stable project URL, work in Spanish and English, and be checked on desktop and mobile. Completion requires successful deployment, recipient access, one non-duplicated notification email, and confirmation in Sent.

### VIII. Maintained project language is English

All maintained repository content MUST be written in English, regardless of the language used in project conversations. This includes specifications, plans, tasks, reports, methodology, operational notes, code comments, maintainer-facing identifiers, and commit messages. The only exceptions are the immutable original Spanish prompt, the exact subject or content of an email intentionally sent in another language, and the Spanish localisation of the bilingual site. Historical evidence MUST remain verbatim when translation would make the record inaccurate.

### IX. Personal CRM is private, historical, and candidate-controlled

Personal CRM MUST be the private system of record for companies, contacts, interactions, opportunities, job postings, submitted applications, tasks, materials, and outcomes. It MUST preserve dated application evidence, including the applicable job-description snapshot and submitted material version when available. A role closing, a source disappearing, or a fit score changing MUST NOT infer an application decision or outcome. Candidate-specific CRM information MUST NOT be published to the public market-intelligence site without an explicit field-level publication policy.

### X. Capability boundaries remain explicit

Market Intelligence, Job Opportunity Monitoring, Fit Scoring, Personal CRM, the private dashboard, and the public market-intelligence site MUST retain separate responsibilities. A monitoring agent MAY contribute job postings and provenance; a scoring capability MAY contribute versioned assessments; only the candidate MAY confirm an application, decision, or outcome. No capability MAY silently overwrite historical evidence owned by another capability.

### XI. Releases are semantic, immutable, and verifiable

The authoritative product version MUST be an immutable `vMAJOR.MINOR.PATCH` Git tag and its corresponding GitHub Release. Conventional Commit intent determines the version increment: `fix:` increments the patch, `feat:` increments the minor version, and `!` or `BREAKING CHANGE:` increments the major version. Documentation, maintenance, test, and continuous-integration changes MUST NOT create a release by themselves.

Before a GitHub Release is published, automation MUST validate the tag format and build the tagged `site/` source successfully. Existing tags MUST NOT be rewritten. Pull request titles SHOULD follow Conventional Commits and are validated automatically; the repository's release automation remains the executable source of truth. The operational procedure is maintained in `docs/versioning.md`.

## Artifact boundaries

- `spec.md` defines required outcomes and observable behaviour: the **what and why**.
- `plan.md` records implementation and operating decisions: the **how**.
- `tasks.md` decomposes the plan into small, ordered, verifiable units of work.
- `research.md` preserves research decisions and evidence context.
- `data-model.md` defines the information concepts shared by snapshots, reports, and the site.
- `reports/`, `data/`, and `operations/` contain execution evidence, never requirements.

## Governance

Changes that weaken comparability, source traceability, CRM evidence thresholds, private-data protection, application-history integrity, access verification, or release integrity require an explicit constitution amendment. Each quarterly run MUST check conformance before publication. Constitution versioning follows semantic intent: material principle changes are major, new principles are minor, and clarifications are patch changes.

**Version**: 1.3.0
**Ratified**: 2026-09-02
**Last amended**: 2026-09-03
