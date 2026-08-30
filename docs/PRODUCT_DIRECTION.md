# Product Direction

## Purpose

The-Wraith is an interactive AI-assisted product-engineering case study wrapped in a fictional dimension-pirate experience. The pirate world makes the work memorable; the engineering layer makes it useful for portfolio reviews, interviews, and discussions of trustworthy autonomous development.

## Audiences

- A short-form reviewer who wants to understand the product and delivery story in two minutes.
- A technical interviewer who wants evidence of architecture, accessibility, security, testing, and tradeoff judgment.
- An engineer who wants to inspect decisions, limitations, pull requests, and reproducible verification.

## Experience model

The product has two complementary layers:

1. **Captain experience:** ships, fictional specifications, deterministic Rift Run voyages, and a clearly fictional charter.
2. **Engineering log:** current architecture, evidence, decisions, agent guardrails, known limitations, and proposed design exercises.

Pirate metaphors must be paired with standard engineering language whenever they describe a technical concept.

## Product principles

- Demonstrate judgment, not activity.
- Prefer a modular static application until requirements justify another component.
- Label every architectural claim as **CURRENT**, **PROPOSED**, or **SIMULATED**.
- Keep visitor interactions free of accounts, payment collection, analytics, and application-owned persistence.
- Use GitHub history, repository documents, and review evidence as durable project memory.
- Make every code-changing pull request focused, reversible, documented, and verifiable.
- Preserve keyboard access, mobile reachability, reduced-motion behavior, and browser zoom.

## Non-goals

- Building decorative features solely to increase activity.
- Presenting hypothetical microservices, queues, databases, or regions as deployed infrastructure.
- Collecting personal, payment, behavioral, or authentication information.
- Adding paid services or runtime dependencies to imitate production scale.
- Treating build success as proof of properties that were not tested.

## Success criteria

A reviewer should be able to identify:

- What the current system actually does.
- Which behavior is fictional or simulated.
- Which architecture is merely proposed.
- Why each major decision was made.
- What agents may do and what requires a human.
- Which checks support each quality claim.
- What remains incomplete or intentionally absent.
