# Feature Specification: Quarterly Global Big Pharma Ranking Review

**Branch**: `001-quarterly-big-pharma-review`
**Created**: 2026-09-02
**Status**: Active
**Input**: Quarterly review of leading pharmaceutical companies by medicines and vaccine sales, including a five-year outlook, momentum, competitive factors, the CRM landscape, a bilingual visual artifact, and verifiable notification.

## Problem and desired outcome

Sector rankings often combine incompatible businesses, fiscal periods, and metrics, while forecasts and CRM attributions may appear more certain than the available evidence allows. Orbit's Market Intelligence capability must provide a comparable, auditable, and easy-to-understand quarterly review that preserves enough history to identify material changes only.

## User scenarios and testing

### User Story 1 — Review a homogeneous ranking (Priority: P1)

As a decision-maker assessing Big Pharma’s competitive position, I want to compare pharmaceutical sales using a homogeneous metric so that non-pharmaceutical businesses or incompatible periods do not distort conclusions.

**Why this priority**: without a comparable baseline, no forecast or position movement is reliable.

**Independent test**: verify that all 15 companies analysed disclose period, currency, source, adjustments, and comparable sales, and that the top 10 is derived only from those figures.

**Acceptance scenarios**:

1. **Given** that a latest complete fiscal year exists, **When** the ranking is generated, **Then** it shows the ten largest companies by net medicines and vaccine sales.
2. **Given** that a company operates diversified businesses, **When** its comparable figure is calculated, **Then** non-pharmaceutical revenue is excluded and documented.
3. **Given** that a company uses another currency or fiscal calendar, **When** it enters the universe, **Then** the difference and its possible impact are disclosed.

### User Story 2 — Understand trajectory and uncertainty (Priority: P1)

As a reader of the analysis, I want the annual ranking separated from recent momentum and a range-based five-year projection so that I can distinguish reported facts from early signals and uncertain scenarios.

**Why this priority**: the project’s value lies in anticipating movement without presenting forecasts as facts.

**Independent test**: verify that every relevant company has clearly separated annual ranking, recent momentum, and future range, with forecast type and confidence.

**Acceptance scenarios**:

1. **Given** that YTD, LTM, or guidance information is newer than the complete fiscal year, **When** it is analysed, **Then** it appears in the momentum monitor and does not retrospectively change the annual ranking.
2. **Given** that projected sales ranges overlap or differ by less than 5%, **When** future position is presented, **Then** a rank band is used.
3. **Given** that a forecast comes from the company, a third party, or the analysis itself, **When** it is displayed, **Then** its nature is identified.

### User Story 3 — Assess material competitive changes (Priority: P1)

As a sector decision-maker, I want to understand the factors behind gains, declines, and divergences so that I can focus on events capable of changing the competitive balance.

**Why this priority**: a ranking without drivers does not explain why it may change or where the risk lies.

**Independent test**: verify that every relevant company covers applicable franchises, launches, pipeline, loss of exclusivity, generics or biosimilars, M&A, guidance, and therapeutic areas.

**Acceptance scenarios**:

1. **Given** that a company grows sales more slowly than competitors, **When** its evolution is summarised, **Then** absolute growth is distinguished from relative rank deterioration.
2. **Given** that an event exceeds the defined materiality threshold, **When** it is compared with the previous review, **Then** it appears under “What has changed”.
3. **Given** that no previous review exists, **When** execution finishes, **Then** a baseline is created for future comparisons.

### User Story 4 — Review verifiable CRM attributions (Priority: P2)

As a professional interested in pharmaceutical commercial technology, I want to know which CRM decisions are public and their scope so that commercial relationships or local deployments are not confused with global decisions.

**Why this priority**: the CRM landscape is a differentiated part of the analysis, but it depends on the core ranking and research.

**Independent test**: trace every attribution to public evidence that records platform, scope, date, and confidence.

**Acceptance scenarios**:

1. **Given** that only Veeva CRM legacy evidence exists, **When** the company is classified, **Then** Veeva Vault CRM is not attributed.
2. **Given** that an announcement limits deployment to one business unit or country, **When** it is presented, **Then** the limited scope is explicit.
3. **Given** that evidence is insufficient, **When** the table is completed, **Then** the platform is classified as “not public”.

### User Story 5 — Explore and receive the review (Priority: P2)

As the review recipient, I want a bilingual visual artifact at a stable URL and one notification email so that I can digest the conclusions and revisit them on any device.

**Why this priority**: it turns the research into a recurring, consumable product.

**Independent test**: open the URL without authentication on desktop and mobile, switch all visible content between Spanish and English, and confirm exactly one email in Sent.

**Acceptance scenarios**:

1. **Given** that a review has been validated, **When** it is published, **Then** the stable URL shows the new information cut-off and updated data.
2. **Given** that a reader changes language, **When** they use the top-right control, **Then** all visible content and data change between Spanish and English.
3. **Given** that deployment and access have been verified, **When** notification occurs, **Then** one email is sent and its identifier is preserved.
4. **Given** that research, publication, access, or delivery fails, **When** execution ends, **Then** it is not declared complete and the failure point is recorded.

## Edge cases

- A company changes its fiscal calendar or reporting currency.
- An acquisition is announced but has not closed by the information cut-off.
- A source later corrects a previously published figure.
- Two companies are effectively tied within the foreign-exchange conversion margin.
- A paywalled forecast is only referenced by a secondary source.
- A CRM provider announces a customer without clarifying product, scope, or migration status.
- Execution is retried after the email has already been sent.
- The URL responds but requires the recipient to authenticate.

## Functional requirements

- **FR-001**: The system MUST analyse at least the 15 largest companies or candidates and derive a comparable top 10.
- **FR-002**: The system MUST use net medicines and vaccine sales from the latest complete fiscal year and document period, currency, source, conversion, and exclusions.
- **FR-003**: The system MUST exclude non-pharmaceutical businesses and avoid combining manufacturer sales with pharmaceutical spending or list prices.
- **FR-004**: The system MUST maintain a separate quarterly momentum monitor using recent results, growth, guidance, consensus, franchises, and clinical events.
- **FR-005**: The system MUST project the ranking to the latest complete fiscal year plus five years using sales and rank ranges whenever uncertainty is material.
- **FR-006**: The system MUST identify the nature and confidence of each forecast and distinguish base, downside, and upside scenarios when useful.
- **FR-007**: The system MUST assess applicable competitive drivers for every relevant company.
- **FR-008**: The system MUST classify CRM only from explicit public evidence and record platform, scope, date, source, and confidence.
- **FR-009**: The system MUST present a main table, watchlist, executive commentary, CRM landscape, and material-change section.
- **FR-010**: The system MUST preserve a report, snapshot, source register, visual version, URL, deployment date, and email identifier for each execution.
- **FR-011**: The system MUST maintain `latest` references for the next execution without deleting historical snapshots.
- **FR-012**: The artifact MUST show current and projected comparisons, filters, movements, watchlist, risks, CRM, methodology, and sources in Spanish and English.
- **FR-013**: The artifact MUST work without clipped content, overlaps, or errors on desktop and mobile.
- **FR-014**: The system MUST always update the same site to preserve a stable URL.
- **FR-015**: The system MUST verify access before sending one email and confirm its identifier in Sent.
- **FR-016**: “What has changed” MUST be limited to changes that exceed the materiality thresholds defined by the project input.

## Key entities

- **Quarterly review**: dated execution with status, information cut-off, base period, published version, and notification outcome.
- **Company**: manufacturer analysed with comparable sales, rank, currency, period, trend, and drivers.
- **Sales metric**: reported or adjusted figure with inclusions, exclusions, currency, and conversion.
- **Projection**: sales and rank range, horizon, source or authorship, confidence, and scenarios.
- **Material event**: sales, rank, guidance, transaction, approval, clinical result, loss of exclusivity, or CRM decision change.
- **CRM evidence**: platform, status, scope, source, date, and attribution confidence.
- **Source**: consulted document with entity, date, URL, access date, and evidence type.
- **Publication**: stable URL, date, access status, and deployed version.
- **Notification**: recipient, subject, date, identifier, and Sent confirmation.

## Success criteria

- **SC-001**: 100% of top-10 companies have a traceable figure and an explanation of applicable comparability adjustments.
- **SC-002**: 100% of uncertain future positions are presented as ranges rather than false point precision.
- **SC-003**: 100% of CRM attributions have linked public evidence or are classified as “not public”.
- **SC-004**: Each review identifies zero previously covered facts as new material changes.
- **SC-005**: The artifact passes visual and interaction checks on desktop and mobile in both languages.
- **SC-006**: Every completed review preserves all historical artifacts and updates the `latest` references.
- **SC-007**: Every completed execution ends with an accessible URL and exactly one email confirmed in Sent.

## Out of scope

- Investment recommendations or equity valuation.
- Share-price predictions.
- Unauthorised access to paid databases.
- CRM inference from indirect signals.
- Replacing analytical judgement with an automated ranking that has no comparability review.

## Assumptions

- The review runs once per calendar quarter.
- The published site keeps the same URL across executions.
- The first validated snapshot is `2026-Q3` and serves as the baseline.
- Own forecasts are reviewed every quarter and are not treated as consensus.
- Publicly accessible primary sources take priority over aggregators and secondary press.
