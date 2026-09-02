# Data Model

## Review

Represents one quarterly execution.

Conceptual fields: identifier, execution date, information cut-off, quarter, baseline flag, ranking fiscal year, projection year, status, and limitations.

Relationships: contains companies, sources, material events, and an execution record; follows another validated review.

## Company ranking entry

Represents a company’s comparable position.

Conceptual fields: company, rank, normalised sales, reported sales, original currency, fiscal period, exclusions, trend, and top-10 status.

Relationships: belongs to a review and has a projection, drivers, evidence, and a CRM classification.

## Projection

Represents the five-year outlook.

Conceptual fields: horizon, sales range, rank range, illustrative midpoint, confidence, source type, and downside, base, and upside scenarios.

## Momentum signal

Represents information subsequent to the complete fiscal year without changing the annual ranking.

Conceptual fields: YTD/LTM period, reported and constant-currency growth, guidance, consensus change, franchises, and signal direction.

## Competitive driver

Represents a factor that could change sales or rank.

Categories: franchise, launch, pipeline, regulation, loss of exclusivity, generic or biosimilar exposure, M&A or licensing, guidance, manufacturing or commercial capacity, and therapeutic area.

## CRM evidence

Represents public evidence for a commercial technology decision.

Conceptual fields: platform, legacy/new distinction, status, scope, source, date, confidence, and classification rationale.

## Source

Represents a document that was consulted.

Conceptual fields: title, organisation, publication date, URL, access date, source type, accessibility, and supported claims.

## Material change

Represents a difference from the previous review that exceeds an established threshold.

Conceptual fields: company, category, description, magnitude, source, date, and expected effect.

## Execution record

Represents operational completion evidence.

Conceptual fields: review, URL, deployment date, access, visual checks, email status, recipient, subject, Gmail identifier, and final status.
