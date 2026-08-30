# System Design Roadmap

## Admission gate

A proposed slice is admitted only when it demonstrates a distinct engineering skill, serves a defined reviewer, remains honest about current versus hypothetical architecture, fits free-tier constraints, has objective acceptance checks, and can be reverted independently.

Scheduled inspection does not require scheduled modification.

## Roadmap

### 1. Engineering Log foundation — CURRENT

- Durable project direction, architecture, guardrails, case study, ADR, and scenario documents.
- In-site Engineering Log with evidence and limitations.
- Explicit CURRENT, PROPOSED, and SIMULATED vocabulary.

### 2. Deterministic reconstruction inspector — PROPOSED

Reveal the existing seed, choice path, encounter selection, doctrine effects, and final projection. Describe it accurately as deterministic reconstruction. Introducing event-sourcing terminology requires explicit command/event models and regression tests first.

### 3. Architecture explorer — PROPOSED

Compare the current browser-first design with hypothetical modular-monolith and event-driven alternatives. Show triggers, tradeoffs, cost, ownership, failure domains, and why added complexity is not currently justified.

### 4. Incident Commander — PROPOSED

Add deterministic browser-only exercises for duplicate commands, timeout ambiguity, retry storms, poison messages, consumer lag, and reconciliation. Every infrastructure component must be labeled SIMULATED.

### 5. SLO and capacity console — PROPOSED

Provide local calculations for traffic, event volume, storage growth, concurrency, cache behavior, and error-budget consumption. Inputs and assumptions must remain visible.

### 6. Repository quality evidence — PROPOSED

- Deterministic engine regression tests
- Repository-owned CI workflow
- TypeScript enforced inside the production build
- Accessibility and performance budgets
- Dependency and security review evidence

## Completion rule

The roadmap is successful when the project demonstrates architecture and delivery judgment with verifiable evidence. It is not measured by the number of features, services, agents, or pull requests.
