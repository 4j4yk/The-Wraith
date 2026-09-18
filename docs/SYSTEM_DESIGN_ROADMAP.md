# System Design Roadmap

> **Lifecycle note:** the one-week pilot is complete and this document is now a catalog of optional extensions, not an active delivery commitment.

## Admission gate

A proposed slice is admitted only when it demonstrates a distinct engineering skill, serves a defined reviewer, remains honest about current versus hypothetical architecture, fits free-tier constraints, has objective acceptance checks, and can be reverted independently.

Scheduled inspection does not require scheduled modification.

## Delivered foundation and optional extensions

### 1. Engineering Log foundation — CURRENT

- Durable project direction, architecture, guardrails, case study, ADR, and scenario documents.
- In-site Engineering Log with evidence and limitations.
- Explicit CURRENT, PROPOSED, and SIMULATED vocabulary.

### 2. Deterministic reconstruction inspector — OPTIONAL / PROPOSED

Reveal the existing seed, choice path, encounter selection, doctrine effects, and final projection. Describe it accurately as deterministic reconstruction. Introducing event-sourcing terminology requires explicit command/event models and regression tests first.

### 3. Architecture explorer — OPTIONAL / PROPOSED

Compare the current browser-first design with hypothetical modular-monolith and event-driven alternatives. Show triggers, tradeoffs, cost, ownership, failure domains, and why added complexity is not currently justified.

### 4. Incident Commander — OPTIONAL / PROPOSED

Add deterministic browser-only exercises for duplicate commands, timeout ambiguity, retry storms, poison messages, consumer lag, and reconciliation. Every infrastructure component must be labeled SIMULATED.

### 5. SLO and capacity console — OPTIONAL / PROPOSED

Provide local calculations for traffic, event volume, storage growth, concurrency, cache behavior, and error-budget consumption. Inputs and assumptions must remain visible.

### 6. Repository quality evidence — CURRENT WITH OPTIONAL EXTENSIONS

- Deterministic engine regression tests (delivered 2026-08-31)
- Focused pull-request quality gate (delivered 2026-08-31)
- Repository-owned CI workflow (delivered 2026-08-31)
- TypeScript enforced inside the production build (delivered 2026-09-01)
- Accessibility and performance budgets
- Dependency and security review evidence

## Completion rule

The roadmap is successful when the project demonstrates architecture and delivery judgment with verifiable evidence. It is not measured by the number of features, services, agents, or pull requests.
