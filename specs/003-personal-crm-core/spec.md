# Feature Specification: Personal CRM Core

**Branch**: `003-personal-crm-core`  
**Created**: 2026-09-03  
**Status**: Draft — requirements review  
**Input**: Establish Personal CRM as the private system of record for target companies, professional relationships, career opportunities, submitted applications, follow-ups, and the exact evidence used at the time of each application. The PharmaShift market monitor and the job opportunity monitor remain separate capabilities that may contribute referenced information to the CRM.

## Problem and desired outcome

Career-search information is currently fragmented between career sites, messages, materials, and individual records. A role can disappear after an application, a curriculum vitae version can change, and a relationship interaction can be incorrectly treated as a formal vacancy. This prevents the candidate from reconstructing what was applied for, with which material, through which channel, and what happened next.

Personal CRM must provide a private, trustworthy, and durable history of the candidate's target companies, contacts, opportunities, job postings, applications, interactions, tasks, and materials. It must preserve historical evidence without rewriting it when a source changes, a curriculum vitae is updated, or a role closes. The candidate remains the authority for application decisions and outcomes.

## Scope boundaries

This feature is the system of record for career-relationship and application history. It defines the information and observable behaviour shared by related capabilities, but it does not replace them:

1. **Market intelligence** remains responsible for pharmaceutical-market monitoring and may provide company or market-signal references.
2. **Job opportunity monitoring** remains responsible for finding, normalising, and scoring vacancies. It may create or update a job-posting record and its provenance, but it must not create a submitted application or infer an application outcome.
3. **Personal CRM** owns the candidate's relationships, decisions, submitted applications, follow-ups, material-use history, and private view of those records.

All Personal CRM content is private by default. A public dashboard must not display candidate details, application history, submitted materials, or fit rationale unless a separate explicit publication policy approves a limited field set.

## User scenarios and testing

### User Story 1 — Maintain an accurate professional relationship record (Priority: P1)

As the candidate, I want to maintain target companies, people, relationship opportunities, interactions, and follow-up tasks separately so that I can manage executive networking without confusing a conversation or referral with a published vacancy.

**Why this priority**: reliable application history depends on knowing which company, contact, relationship path, and action each record represents.

**Independent test**: create a company, a contact, a relationship-led opportunity, an interaction, and a follow-up task; verify their links and confirm that none is automatically represented as a job posting or application.

**Acceptance scenarios**:

1. **Given** a target company that is not yet recorded, **When** I add it to Personal CRM, **Then** it is available for links to contacts, opportunities, job postings, applications, interactions, tasks, and market signals.
2. **Given** a professional contact related to a target company, **When** I record an interaction, **Then** the interaction preserves its date, channel, factual notes, related company and contact, and any follow-up that I explicitly identify.
3. **Given** a referral, exploratory conversation, or speculative path, **When** I record it as an opportunity, **Then** it remains distinct from a published job posting unless I explicitly link the two.
4. **Given** an interaction that contains no explicit future action, **When** it is saved, **Then** no follow-up task is created by inference.

### User Story 2 — Preserve a durable job-posting record (Priority: P1)

As the candidate, I want each relevant job posting to retain its source and a dated description snapshot so that I can understand a role even if its original page later changes or disappears.

**Why this priority**: an application cannot be audited or revisited meaningfully if the original role description has vanished.

**Independent test**: record a job posting, change or remove its source page, and verify that the first captured description, provenance, and subsequent snapshots remain available without alteration.

**Acceptance scenarios**:

1. **Given** a job posting found through an approved source or recorded manually, **When** it is added to Personal CRM, **Then** it records its company, title, source URL, source identifier when available, discovery or capture date, and current known status.
2. **Given** a job posting with an accessible description, **When** its description is captured, **Then** Personal CRM preserves a dated snapshot associated with that posting.
3. **Given** that the posting description changes after a snapshot exists, **When** a later version is captured, **Then** the new snapshot is added without modifying the earlier one.
4. **Given** that a posting is closed, unavailable, or its source URL no longer works, **When** its status is updated, **Then** its historical snapshots and links to applications remain available.
5. **Given** that no reliable description can be captured, **When** the posting is recorded, **Then** it is marked as incomplete with the reason recorded rather than being given an invented description.

### User Story 3 — Record a submitted application as a first-class historical record (Priority: P1)

As the candidate, I want every submitted application recorded separately from the job posting and opportunity so that I can reconstruct exactly what I applied for, when, how, and with which material.

**Why this priority**: submitted applications are the central evidence needed for follow-up, learning, and any future outcome analysis.

**Independent test**: record an application against a known job posting, attach its submission evidence and material versions, update the job posting and candidate profile afterward, and verify that the original application record remains unchanged.

**Acceptance scenarios**:

1. **Given** a job posting or a manually identified role, **When** I explicitly record that an application was submitted, **Then** Personal CRM creates an application record linked to the company and, when known, the relevant job posting and opportunity.
2. **Given** a submitted application with an available job-description snapshot, **When** the application is recorded, **Then** it identifies the snapshot that represents the role at submission time.
3. **Given** a submitted application for which the description was unavailable at submission time, **When** it is recorded, **Then** the record preserves the known source information and explicitly records that no submission-time snapshot is available.
4. **Given** that I submit an application with a curriculum vitae, letter, questionnaire responses, or other materials, **When** I record the submission, **Then** each used item is linked as the exact material version used or is explicitly marked unavailable.
5. **Given** that a job posting later closes, **When** Personal CRM updates the posting status, **Then** it does not infer rejection, withdrawal, or any other application outcome.
6. **Given** that no application record exists for a job posting, **When** the posting is viewed, **Then** Personal CRM presents the application state as not recorded rather than asserting that I did not apply.

### User Story 4 — Preserve material and candidate-profile versions (Priority: P1)

As the candidate, I want to manage approved versions of my curriculum vitae and other application materials so that future applications can use current content while historical applications retain the version that was actually used.

**Why this priority**: without immutable material-use history, the CRM cannot establish what was submitted or support honest later review.

**Independent test**: approve a new curriculum vitae version after an application has been recorded and verify that the older application still identifies its original material version.

**Acceptance scenarios**:

1. **Given** a curriculum vitae or application material, **When** I approve a new version, **Then** it becomes available for future use without replacing earlier approved versions that are linked to historical applications.
2. **Given** a material version used in a submitted application, **When** its current version is superseded, **Then** the application continues to identify the exact submitted version.
3. **Given** a material that was used but cannot be retained as a file or copy, **When** I record the application, **Then** Personal CRM stores the available identifying evidence and the reason the material is unavailable.
4. **Given** a candidate-profile version used by a fit assessment, **When** the profile changes later, **Then** the historical assessment continues to identify the profile version used at the time.

### User Story 5 — Manage decisions, outcomes, and follow-ups without rewriting history (Priority: P1)

As the candidate, I want to record reviews, dismissals, submissions, follow-ups, interviews, withdrawals, rejections, and offers over time so that the active pipeline is useful while the historical record remains trustworthy.

**Why this priority**: current status is operationally important, but it must not erase the evidence and decisions that led to it.

**Independent test**: progress an application through multiple recorded events and verify that its current state is clear, its event history is ordered, and none of the original submission evidence changes.

**Acceptance scenarios**:

1. **Given** a recorded job posting, **When** I explicitly mark it reviewed or dismissed, **Then** the decision, date, and stated reason are preserved without changing the source record.
2. **Given** a submitted application, **When** I record a follow-up, interview, withdrawal, rejection, or offer, **Then** the event is added to its dated history and the current application state reflects the most recent recorded outcome.
3. **Given** an application outcome that is unknown, **When** Personal CRM displays or analyses the record, **Then** it remains unknown and is not counted as rejection, withdrawal, or success.
4. **Given** a correction to a factual record, **When** I amend it, **Then** Personal CRM preserves the fact that a correction occurred and does not silently overwrite submission evidence or prior outcome events.

### User Story 6 — Reuse monitored opportunity and fit information safely (Priority: P2)

As the candidate, I want the job monitor's discovered roles and fit assessments to appear in Personal CRM with their provenance and versions so that I can decide whether to pursue them without making the monitor the authority on my actions.

**Why this priority**: it connects recurring discovery to the operational CRM after the core record and history are reliable.

**Independent test**: import a discovered role and its fit assessment, create an application manually, and verify that the monitor's record, score, and the candidate's application decision remain distinct and traceable.

**Acceptance scenarios**:

1. **Given** a job posting discovered by the monitor, **When** it is made available to Personal CRM, **Then** its source provenance, first-seen date, and discovery status remain identifiable.
2. **Given** a fit assessment produced from a job posting and candidate-profile version, **When** it is associated with Personal CRM, **Then** it retains its score, confidence, rationale, assessment date, and referenced versions.
3. **Given** a fit score that suggests a strong match, **When** it appears in Personal CRM, **Then** it is not presented as a submitted application, an application decision, or a probability of hiring unless separately calibrated and labelled.
4. **Given** an application against a monitored role, **When** it is recorded, **Then** the application links to the relevant historical fit assessment when one exists without changing that assessment.

### User Story 7 — Review the private career pipeline (Priority: P2)

As the candidate, I want a private view of active companies, relationships, roles, applications, follow-ups, and material gaps so that I can prioritise the next action without exposing personal information publicly.

**Why this priority**: a usable view turns the record into an operational CRM, but it depends on the P1 records and history.

**Independent test**: create active and historical records, then verify that the private view distinguishes them and that no Personal CRM content appears on the public PharmaShift site by default.

**Acceptance scenarios**:

1. **Given** active applications and follow-up tasks, **When** I review my private pipeline, **Then** I can identify their company, role, current state, next action, and relevant due date.
2. **Given** historical or closed job postings, **When** I review current opportunities, **Then** they do not appear as active roles while remaining searchable in private history.
3. **Given** that no explicit publication policy exists, **When** Personal CRM data is prepared for a dashboard, **Then** no candidate-specific data is published to the public PharmaShift site.

## Edge cases

- A role is reposted with a new identifier, title wording, or source URL.
- A submitted application is manually recorded after the public posting has already disappeared.
- One role produces more than one application over time, location, or recruiting channel.
- An unsolicited application or referral-led application has no public job posting.
- A company, business unit, or contact changes name after historical records exist.
- A candidate uploads a replacement curriculum vitae with the same file name as an earlier version.
- A job description contains sensitive information that must remain private and must not be copied to a public view.
- An agent discovers a role after the candidate has already applied manually.
- A user corrects a mistaken application date or source URL.
- A rejected application is later reopened or the candidate is contacted for a different role.
- A job posting closes without any recorded decision or outcome.

## Functional requirements

- **FR-001**: Personal CRM MUST maintain private records for companies, contacts, opportunities, job postings, applications, interactions, tasks, materials, candidate-profile versions, fit-assessment references, and market-signal references.
- **FR-002**: Personal CRM MUST distinguish a relationship-led opportunity from a published job posting and from a submitted application.
- **FR-003**: A company record MUST be linkable to all related contacts, opportunities, job postings, applications, interactions, tasks, and market-signal references.
- **FR-004**: An interaction MUST preserve its date, channel, factual notes, related entities, and any explicitly identified follow-up.
- **FR-005**: Personal CRM MUST NOT create a follow-up, vacancy, application, or outcome solely by inference from an interaction, source closure, or fit score.
- **FR-006**: Each job posting MUST retain its company, title, source URL, source identifier when available, capture date, current known status, and provenance.
- **FR-007**: Personal CRM MUST preserve one or more dated job-description snapshots for a job posting without altering earlier snapshots.
- **FR-008**: A job posting with unavailable or insufficient source content MUST record its limitation rather than receive an invented description.
- **FR-009**: A submitted application MUST be a first-class record linked to its company and, when known, its job posting and opportunity.
- **FR-010**: Each submitted application MUST preserve submission date, channel, known source information, current state, and a dated history of recorded decisions and outcomes.
- **FR-011**: Each submitted application MUST identify the job-description snapshot applicable at submission time or explicitly record why no such snapshot is available.
- **FR-012**: Each submitted application MUST identify every available submitted material version and explicitly record unavailable material evidence rather than infer it.
- **FR-013**: Personal CRM MUST preserve material versions used in historical applications after newer versions are approved.
- **FR-014**: Personal CRM MUST preserve the candidate-profile version and scoring-rubric version referenced by a historical fit assessment.
- **FR-015**: Personal CRM MUST retain fit score, confidence, rationale, and assessment provenance without treating a fit score as an application decision or a hiring probability.
- **FR-016**: Personal CRM MUST label any future application-success probability separately and only when calibration evidence, outcome definition, sample size, and uncertainty are available.
- **FR-017**: A job posting closing or becoming unavailable MUST NOT change an application outcome by inference.
- **FR-018**: Absence of an application record MUST be represented as not recorded and MUST NOT be interpreted as not applied.
- **FR-019**: Corrections MUST preserve the fact and date of the amendment and MUST NOT silently replace historical submission evidence, job-description snapshots, material versions, or outcome events.
- **FR-020**: The candidate MUST remain the authority for decisions to apply, dismiss, withdraw, submit, and record outcomes.
- **FR-021**: The job opportunity monitor MAY contribute job postings and fit assessments with provenance, but MUST NOT create submitted applications or inferred outcomes.
- **FR-022**: Personal CRM MUST provide a private view that distinguishes active pipeline items from historical records.
- **FR-023**: Personal CRM data, including applications, materials, fit rationale, and private notes, MUST NOT be published to the public PharmaShift site without an explicit field-level publication policy.
- **FR-024**: Any public job-posting display MUST exclude candidate-specific fit scores, application state, materials, private notes, and contact information unless a separate explicit policy permits a field.
- **FR-025**: Maintainer-facing documentation, labels intended for maintainers, and operational records for this feature MUST be written in English; the public interface may provide an approved Spanish localisation.

## Key entities

- **Company**: an employer or target organisation; links to people, opportunities, job postings, applications, interactions, tasks, and market-signal references.
- **Contact**: an identified professional person related to a company or opportunity; may have interactions and follow-up tasks but is not itself a vacancy.
- **Opportunity**: a potential career path, referral, exploratory conversation, or strategic target; may exist with or without a published job posting.
- **Job posting**: a canonical record of a published or manually identified role, with title, company, source provenance, status, and dated description snapshots.
- **Job-description snapshot**: an immutable dated capture of the job-posting content available at a point in time; belongs to a job posting and may be referenced by applications and fit assessments.
- **Application**: a candidate-confirmed submitted application, with submission evidence, channel, current state, event history, and links to the relevant company, job posting, opportunity, materials, and assessments.
- **Application event**: a dated candidate decision, follow-up, interview, withdrawal, recruiter outcome, or correction linked to an application; it does not replace prior events.
- **Material**: a curriculum vitae, cover letter, questionnaire response, portfolio, or other application asset.
- **Material version**: the identifiable version of a material available at a point in time; may be used by one or more submitted applications and is not replaced in their history.
- **Candidate profile version**: an approved representation of supported experience, preferences, and constraints used by fit assessments; it does not rewrite earlier assessments.
- **Fit assessment**: a versioned comparison between a job posting and a candidate-profile version, including score, confidence, rationale, strengths, gaps, constraints, and provenance; generated by the separate scoring capability.
- **Interaction**: a dated professional exchange with a contact, company, opportunity, or application, with factual notes and optional explicitly identified follow-up.
- **Task**: a candidate-owned next action or completed historical action, with state, due date when known, and links to the relevant CRM records.
- **Market-signal reference**: a link to a market-intelligence item relevant to a company, opportunity, or role; the market monitor remains responsible for its underlying analysis.

## Success criteria

- **SC-001**: 100% of submitted applications recorded after adoption include company, submission date, channel, current state, and at least one source reference or an explicit explanation of why it is unavailable.
- **SC-002**: 100% of submitted applications recorded after adoption identify the submitted curriculum vitae or explicitly record that its evidence is unavailable.
- **SC-003**: 100% of applications linked to an accessible job posting identify a dated job-description snapshot at or before submission, or an explicit reason why no such snapshot exists.
- **SC-004**: In a monthly audit sample, 100% of application state changes are traceable to a dated candidate or recruiting event rather than inferred from job-posting availability.
- **SC-005**: In a monthly audit sample, zero historical applications lose their originally linked material version after a newer version is approved.
- **SC-006**: In a monthly audit sample, zero relationship-only opportunities are incorrectly shown as submitted applications without an explicit submission record.
- **SC-007**: The candidate can identify all due follow-ups and active submitted applications in one private review without opening individual historical records.
- **SC-008**: Zero candidate-specific Personal CRM fields appear on the public PharmaShift site unless an explicit field-level publication policy has been approved and verified.

## Out of scope

- Automatically submitting job applications.
- Automatically sending messages to recruiters, contacts, or employers.
- Generating or tailoring a curriculum vitae, cover letter, or application answers.
- Discovering vacancies, crawling career sites, bypassing access controls, or resolving CAPTCHAs.
- Calculating the job opportunity monitor's fit score or success probability.
- Replacing the PharmaShift quarterly market-intelligence workflow.
- Defining the technical storage platform, migration architecture, integration protocol, authentication method, or dashboard implementation.
- Publicly publishing personal career intentions, applications, relationship notes, materials, or candidate-specific scoring data.

## Assumptions

- Personal CRM is the system of record for the candidate's private career-search history; agents and dashboards consume or contribute governed references rather than becoming independent sources of truth.
- The current Personal CRM records and historical application evidence will be assessed for migration or reconciliation in a later implementation plan; this specification does not assert that the existing data model is complete.
- The job opportunity monitor specified in `002-pharma-job-opportunity-monitor` will use the Personal CRM core once its information contracts are agreed.
- The candidate manually confirms every submitted application and every application outcome.
- A job posting may exist without an opportunity, an opportunity may exist without a job posting, and an application may exist without a public job posting.
- The initial private scope is oriented to senior roles in Head of Product, AI Product, Consulting, and Pharma Digital; exact role, geography, and constraint rules remain owned by the job opportunity monitor's requirements.

## Open requirements requiring user confirmation

1. **System of record transition** — `[NEEDS CLARIFICATION: Should the existing Notion workspace remain the initial operational system of record, become an archive, or be migrated before new CRM records are created?]`
2. **Private access model** — `[NEEDS CLARIFICATION: Who, if anyone beyond the candidate, may access Personal CRM records and which categories of material or notes require additional restrictions?]`
3. **Material retention** — `[NEEDS CLARIFICATION: Must Personal CRM retain a file copy of every submitted material, or may a durable reference, version identifier, and checksum be sufficient in defined cases?]`
4. **Application lifecycle** — `[NEEDS CLARIFICATION: Which exact candidate and recruiting states should be available for applications, and which transitions require a mandatory note or evidence?]`
5. **Historical reconciliation** — `[NEEDS CLARIFICATION: Which past applications, interactions, and material versions must be imported or reconciled before the new core is considered operational?]`
6. **Public job display** — `[NEEDS CLARIFICATION: Is there any approved use case for a public listing of non-personalised job postings, and if so which exact fields may appear?]`
7. **Outcome learning** — `[NEEDS CLARIFICATION: What outcome definition would justify future calibration work: interview invitation, final interview, offer, accepted offer, or another explicitly defined measure?]`
