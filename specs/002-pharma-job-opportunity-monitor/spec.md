# Feature Specification: Job Opportunity Monitor and Fit Scoring

**Branch**: `002-pharma-job-opportunity-monitor`
**Created**: 2026-09-03
**Status**: Draft — requirements review
**Input**: Monitor career opportunities across the initial 15 pharmaceutical companies tracked by Orbit's Market Intelligence capability, compare vacancies with the candidate’s professional profile, notify relevant opportunities, and optionally surface selected results in Orbit's private dashboard while keeping discovery and scoring separate.

## Problem and desired outcome

Reviewing multiple pharmaceutical career sites manually is repetitive and makes it easy to miss relevant vacancies or discover them too late. The candidate needs a recurring monitor that finds current roles across a controlled company list, normalises them, assesses their fit against an authoritative professional profile, and highlights opportunities worth reviewing.

The desired outcome is a trustworthy shortlist rather than a high-volume job feed. Every recommendation must show why the role may fit, which requirements are supported or missing, how fresh the vacancy is, and how certain the assessment is.

The system must not describe a fit score as a real probability of application success unless it has been calibrated with sufficient historical application outcomes. Until that evidence exists, the output is a **profile-to-role fit score**, not a hiring probability.

## Scope boundaries

The feature contains three separately governed capabilities:

1. **Opportunity discovery**: maintains companies and career sources, checks them on schedule, and produces deduplicated job records.
2. **Fit scoring**: compares a normalised job record with the approved candidate profile and produces an explainable assessment.
3. **Presentation and notification**: selects eligible results for private notification and for Orbit's private dashboard. A non-personalised public job view is allowed only under an explicit publication policy.

Discovery must not use the fit score to decide whether a vacancy exists. Scoring must not browse or alter the source vacancy. Presentation must not expose candidate information or scoring rationale beyond the approved publication scope.

## Initial monitored company universe

The initial universe is derived from the validated `2026-Q3` Orbit Market Intelligence snapshot:

1. Eli Lilly
2. Pfizer
3. Johnson & Johnson
4. AstraZeneca
5. Merck & Co. / MSD
6. Roche
7. AbbVie
8. Novartis
9. Sanofi
10. Bristol Myers Squibb
11. Novo Nordisk
12. GSK
13. Amgen
14. Takeda
15. Boehringer Ingelheim

Proposed default cadence: check the current top 10 daily and ranks 11–15 every five days. Cadence must remain configurable per company and source.

## User scenarios and testing

### User Story 1 — Maintain the monitored company and source registry (Priority: P1)

As the job seeker, I want one controlled list of target pharmaceutical companies, official career sources, and review cadence so that monitoring scope is explicit and can change without redefining the scoring rules.

**Why this priority**: discovery cannot be complete or auditable without a defined source universe.

**Independent test**: inspect the registry and verify that every active company has at least one approved careers source, a cadence, status, last-check time, and source scope.

**Acceptance scenarios**:

1. **Given** an active target company, **When** its registry entry is reviewed, **Then** it identifies at least one official careers source and a review cadence.
2. **Given** that a company operates multiple regional career sites, **When** those sources are registered, **Then** each source identifies its geography and overlap with other sources.
3. **Given** that a careers source becomes unavailable or is replaced, **When** the next monitoring cycle runs, **Then** the issue is recorded without deleting historical vacancy evidence.
4. **Given** that the company ranking changes, **When** the monitored universe is refreshed, **Then** additions, removals, and cadence changes require an explicit registry update rather than occurring silently.

### User Story 2 — Discover and normalise open vacancies (Priority: P1)

As the job seeker, I want the monitor to detect current vacancies across approved sources so that I do not need to visit each site manually.

**Why this priority**: reliable vacancy discovery is the foundation for scoring and notification.

**Independent test**: run discovery for a sample of companies and compare the resulting records with vacancies visibly open on their approved career sources.

**Acceptance scenarios**:

1. **Given** that a new vacancy is visible on an approved source, **When** the source is checked, **Then** a normalised job record is created with company, title, location, source URL, posting identifier when available, and discovery time.
2. **Given** that the same vacancy appears on multiple sources or URLs, **When** records are consolidated, **Then** one canonical vacancy is retained with all relevant source references.
3. **Given** that a previously discovered vacancy is no longer open, **When** the source is checked again, **Then** the vacancy is marked closed or unavailable and is not presented as open.
4. **Given** that a source requires authentication, blocks automated access, or presents a CAPTCHA, **When** monitoring cannot proceed normally, **Then** the source is marked as requiring manual review and no bypass is attempted.
5. **Given** that a vacancy lacks enough content for assessment, **When** it is normalised, **Then** it remains discoverable but is marked as insufficient for reliable scoring.

### User Story 3 — Maintain an authoritative candidate profile (Priority: P1)

As the job seeker, I want scoring to use an approved version of my curriculum vitae, experience, preferences, and constraints so that assessments are consistent and do not invent qualifications.

**Why this priority**: fit scores are unreliable without one explicit source of truth.

**Independent test**: review the profile used for a scoring run and trace every claimed skill, role, achievement, language, location preference, and constraint to approved candidate information.

**Acceptance scenarios**:

1. **Given** an approved candidate profile version, **When** a role is assessed, **Then** only evidence present in that profile is treated as supported experience.
2. **Given** that the curriculum vitae changes, **When** a new version is approved, **Then** subsequent scores identify and use the new profile version without rewriting historical scores.
3. **Given** an unknown qualification or preference, **When** scoring encounters it, **Then** it is treated as unknown rather than inferred.
4. **Given** a hard candidate constraint, **When** a vacancy conflicts with it, **Then** the conflict is shown separately from the general fit score.

### User Story 4 — Produce an explainable fit assessment separately from discovery (Priority: P1)

As the job seeker, I want each eligible vacancy assessed against my profile by a separate scoring capability so that discovery remains objective and the recommendation can be audited.

**Why this priority**: separation prevents potentially relevant vacancies from disappearing because of an opaque or changing score.

**Independent test**: feed the same normalised vacancy and candidate-profile version to the scorer twice and verify that it returns the same structured assessment within the defined scoring tolerance.

**Acceptance scenarios**:

1. **Given** a normalised vacancy and approved candidate profile, **When** scoring runs, **Then** it returns an overall fit score, confidence level, supported strengths, material gaps, hard constraints, and rationale.
2. **Given** that a vacancy requirement is not evidenced in the profile, **When** the score is calculated, **Then** it is labelled missing or unknown and is not treated as satisfied.
3. **Given** that the vacancy text is incomplete or ambiguous, **When** scoring runs, **Then** confidence is reduced and the reason is shown.
4. **Given** that historical outcome data is insufficient for calibration, **When** results are presented, **Then** the score is labelled “fit score” and not “probability of success”.
5. **Given** that sufficient labelled application outcomes later exist, **When** a success probability is introduced, **Then** calibration quality, sample size, outcome definition, and uncertainty are disclosed separately from fit.
6. **Given** personal characteristics unrelated to job requirements, **When** scoring runs, **Then** they do not affect the score.

### User Story 5 — Receive timely, non-duplicated opportunity notifications (Priority: P2)

As the job seeker, I want to be notified only about sufficiently relevant and fresh vacancies so that I can review them before deadlines without receiving repetitive alerts.

**Why this priority**: notifications create practical value once discovery and scoring are reliable.

**Independent test**: process a set containing new, repeated, closed, low-confidence, and high-fit vacancies and verify that only eligible new records appear in the notification.

**Acceptance scenarios**:

1. **Given** a new vacancy above the approved notification threshold, **When** scoring completes, **Then** the notification includes company, role, location, source URL, fit score, confidence, key strengths, gaps, and discovery date.
2. **Given** that the same vacancy has already been notified without a material change, **When** it is encountered again, **Then** no duplicate notification is sent.
3. **Given** that the score or vacancy content changes materially, **When** the role is reassessed, **Then** an updated notification may be sent and must explain what changed.
4. **Given** that monitoring or scoring fails, **When** a scheduled cycle ends, **Then** the failure is reported separately from opportunity notifications.

### User Story 6 — Review selected opportunities in Orbit's private dashboard (Priority: P2)

As the candidate, I want a concise private job-opportunity section containing current role, company, fit score, confidence, freshness, and source link so that I can review the shortlist alongside my active career pipeline.

**Why this priority**: dashboard presentation adds convenience but must not compromise privacy or couple discovery to scoring.

**Independent test**: provide approved private-dashboard records and verify that the section displays only current eligible vacancies and no unapproved public disclosure.

**Acceptance scenarios**:

1. **Given** a vacancy approved for private-dashboard display, **When** the dashboard is updated, **Then** it shows role, company, location, fit score, confidence, freshness, and source link.
2. **Given** that a vacancy closes or expires, **When** the dashboard refreshes, **Then** it is removed from the active shortlist while remaining in private history.
3. **Given** that public job publication has not received an explicit policy approval, **When** opportunities are processed, **Then** no candidate-specific job-scoring information is added to the public PharmaShift site.
4. **Given** an approved public-display policy, **When** the public PharmaShift site is rendered, **Then** it exposes only the non-personalised fields explicitly permitted by that policy.

### User Story 7 — Capture application feedback and improve scoring (Priority: P3)

As the job seeker, I want to record whether I reviewed, dismissed, applied, interviewed, or received an offer so that the system learns which recommendations are useful and may eventually calibrate outcomes.

**Why this priority**: feedback improves prioritisation but is not required for the first useful monitor.

**Independent test**: record a sequence of decisions and outcomes and verify that they remain linked to the vacancy, candidate-profile version, and score used at the time.

**Acceptance scenarios**:

1. **Given** a scored vacancy, **When** I record a decision or outcome, **Then** it is preserved with date and status without changing the historical score.
2. **Given** enough historical outcomes, **When** calibration is evaluated, **Then** the system reports sample size and reliability before showing any success probability.
3. **Given** that an outcome is unknown, **When** reports are generated, **Then** it is not counted as a rejection or success.

## Edge cases

- The same job is reposted with a new identifier or slightly changed title.
- One global role appears across multiple country sites.
- A vacancy has no posting date, closing date, or full description.
- A careers site returns different results by language, geography, cookies, or session.
- The source is temporarily unavailable for several monitoring cycles.
- A job description changes after it was scored or notified.
- A role is remote but restricted to specific countries or work authorisations.
- Job-title wording suggests fit while mandatory requirements clearly conflict with the profile.
- The candidate profile contains conflicting or outdated information.
- A high fit score is based on generic language rather than concrete evidence.
- The same role receives different scores after the profile or rubric changes.
- The public dashboard would reveal sensitive career intentions or personal constraints.

## Functional requirements

- **FR-001**: The system MUST maintain a separate, auditable registry of monitored companies and approved vacancy sources.
- **FR-002**: Each active source MUST record company, URL, geography or business scope, cadence, status, last successful check, and next due check.
- **FR-003**: The initial registry MUST cover the 15 companies in the validated Orbit Market Intelligence baseline.
- **FR-004**: Monitoring cadence MUST be configurable by company and source.
- **FR-005**: The discovery capability MUST identify new, changed, closed, and unavailable vacancies without using fit scores to suppress discovery.
- **FR-006**: The system MUST retain source URL, source identifier when available, first-seen time, last-seen time, and source status for every vacancy.
- **FR-007**: The system MUST deduplicate the same vacancy across sources while preserving provenance.
- **FR-008**: The system MUST NOT bypass access controls, CAPTCHAs, or explicit source restrictions.
- **FR-009**: The system MUST use one approved, versioned candidate profile as the source of truth for scoring.
- **FR-010**: Historical scores MUST retain the candidate-profile and scoring-rubric versions used.
- **FR-011**: Discovery and fit scoring MUST remain independently executable and exchange only an agreed vacancy record.
- **FR-012**: The scorer MUST return an overall fit score, confidence, evidence-backed strengths, material gaps, hard-constraint conflicts, and a concise rationale.
- **FR-013**: Unsupported candidate qualifications MUST be treated as missing or unknown, never inferred.
- **FR-014**: The score MUST exclude protected or job-irrelevant personal characteristics.
- **FR-015**: The system MUST label the output as a fit score unless a separately validated calibration supports an application-success probability.
- **FR-016**: Any future success probability MUST disclose sample size, outcome definition, calibration quality, and uncertainty.
- **FR-017**: Notification eligibility MUST consider score threshold, confidence, freshness, vacancy status, and prior notification history.
- **FR-018**: The system MUST prevent duplicate notifications for unchanged vacancies.
- **FR-019**: Notifications MUST include the evidence needed for a quick human decision and link to the original vacancy.
- **FR-020**: Monitoring failures MUST be reported separately from vacancy recommendations.
- **FR-021**: The private dashboard MUST consume approved scoring output and MUST NOT trigger discovery or scoring.
- **FR-022**: The private dashboard MUST show only current eligible vacancies and remove closed roles from the active list.
- **FR-023**: The private dashboard MUST make its candidate-facing content available in English and Spanish while maintainer-facing documentation and code remain in English.
- **FR-024**: Candidate-specific job-search information MUST NOT be placed on the public PharmaShift site without an explicit field-level publication policy.
- **FR-025**: The system SHOULD capture review, dismissal, application, interview, rejection, withdrawal, and offer outcomes without rewriting historical assessments.
- **FR-026**: Every monitoring cycle MUST preserve an execution record containing scope, timestamps, source outcomes, discovered changes, scoring outcome, notification outcome, and failures.

## Key entities

- **Target company**: monitored pharmaceutical company, priority, active status, and relationship to the current Orbit Market Intelligence ranking.
- **Career source**: approved vacancy source with URL, geography, scope, cadence, access status, and check history.
- **Monitoring cycle**: scheduled review of due sources with start, completion, source results, and failures.
- **Vacancy**: canonical job opportunity with company, title, location, work arrangement, description, identifiers, dates, status, and provenance.
- **Candidate profile**: approved, versioned representation of curriculum vitae evidence, role preferences, locations, languages, work authorisation, compensation constraints, and exclusions.
- **Scoring rubric**: versioned assessment dimensions, weights, hard constraints, confidence rules, and threshold definitions.
- **Fit assessment**: vacancy/profile comparison containing score, confidence, strengths, gaps, constraints, rationale, versions, and timestamp.
- **Notification**: delivery event with vacancy, channel, date, content scope, and duplicate-prevention key.
- **Publication record**: approved subset of a vacancy or fit assessment eligible for private-dashboard display or, under a separate policy, non-personalised public display.
- **Application outcome**: human-recorded decision or recruiting result linked to the historical vacancy and assessment.

## Success criteria

- **SC-001**: 100% of active target companies have at least one approved official careers source and an explicit cadence.
- **SC-002**: At least 95% of visibly open roles in a quarterly manual sample of accessible approved sources are represented in discovery results.
- **SC-003**: 100% of discovered vacancies preserve a source URL and first-seen timestamp.
- **SC-004**: Duplicate active records represent less than 2% of the manually reviewed sample.
- **SC-005**: 100% of scored vacancies identify the candidate-profile version, scoring-rubric version, confidence, strengths, and gaps.
- **SC-006**: Zero unsupported qualifications are presented as candidate strengths in the reviewed scoring sample.
- **SC-007**: Zero uncalibrated fit scores are labelled as application-success probabilities.
- **SC-008**: 100% of notifications link to an open vacancy and are not duplicates of an unchanged prior notification.
- **SC-009**: 100% of public PharmaShift site entries comply with the approved publication policy and expose no candidate-specific data.
- **SC-010**: The user can decide whether to review or dismiss a notified role using the information in the notification without first opening every source page.

## Out of scope

- Automatically submitting applications.
- Automatically editing or tailoring the curriculum vitae or cover letter.
- Contacting recruiters or employees without explicit user approval.
- Bypassing authentication, CAPTCHAs, rate limits, or source restrictions.
- Inferring protected characteristics or using them in scoring.
- Claiming a hiring probability without validated calibration data.
- Publishing private candidate-profile details, fit assessments, or application history on the public PharmaShift site.
- Replacing the existing quarterly pharmaceutical ranking workflow.

## Assumptions

- The 15 companies in the `2026-Q3` snapshot form the initial monitoring universe.
- Official company career sites are the primary sources; secondary job boards may supplement them only when provenance and deduplication remain clear.
- Proposed default cadence is daily for current ranks 1–10 and every five days for ranks 11–15.
- A human makes every application decision and submits every application.
- Discovery history, scoring history, and application outcomes remain available for audit.

## Open requirements requiring user confirmation

1. **Candidate source of truth** — `[NEEDS CLARIFICATION: Which CV or profile file should be authoritative, and may the feature use the candidate-profile versions governed by Orbit CRM?]`
2. **Target role profile** — `[NEEDS CLARIFICATION: Which role families, seniority levels, functions, and keywords should be actively prioritised or excluded?]`
3. **Geography and constraints** — `[NEEDS CLARIFICATION: Which countries, remote/hybrid preferences, languages, travel level, work authorisations, and compensation constraints apply?]`
4. **Notification policy** — `[NEEDS CLARIFICATION: Which channel, frequency, score threshold, and maximum number of roles per digest should be used?]`
5. **Public job display** — `[NEEDS CLARIFICATION: Should all job matches remain private, or may the public PharmaShift site show a deliberately limited non-personalised job listing?]`
6. **Success definition** — `[NEEDS CLARIFICATION: Should the MVP show only an explainable fit score, or is there enough historical application/interview/offer data to attempt a separately calibrated success probability?]`
