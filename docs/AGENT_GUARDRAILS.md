# Agent Guardrails

## Authority model

Agents may inspect the repository, propose and implement focused changes, run local verification, push authorized branches, create pull requests, and inspect normal preview checks.

Agents may not merge, promote production, alter domains or external services, enable billing, collect real personal or payment information, dismiss security alerts, or perform destructive repository operations without explicit human approval.

## Context model

Repository documents are durable memory. A normal run should read only:

- `PRODUCT_DIRECTION.md`
- `CURRENT_ARCHITECTURE.md`
- `SYSTEM_DESIGN_ROADMAP.md`
- The relevant ADR or scenario
- Recent commits and README entries
- The active pull request and diff, if one exists

The full conversation history is not a required project dependency.

## Agent roles

### Main agent

- Owns product coherence, scope, integration, verification, documentation, and the final pull request.
- Resolves contradictions and decides whether a proposed change is worth making.

### Bounded subagents

- Receive a narrow work packet and only the context required for that task.
- Prefer read-only architecture, accessibility, security, or verification analysis.
- May implement only when file ownership is explicit and non-overlapping.
- Return concise findings, changed files, evidence, risks, and unresolved questions.

## Work packet template

```text
Objective:
Why it matters:
Current status:
Allowed files:
Required inputs:
Non-goals:
Acceptance criteria:
Verification:
Expected response:
```

## Pull-request gate

Every code-changing run must:

1. Start from current remote `main` or an explicitly related open PR.
2. Remain one focused and reversible vertical slice.
3. Update the README with the date and every material change.
4. Update architecture, ADR, scenario, or roadmap documents when affected.
5. State demonstrated skill, resource impact, trust implications, known limits, and exact verification.
6. Leave merge and production authority with a human.

## Stop conditions

Do not create a PR when the work duplicates an existing demonstration, lacks objective acceptance criteria, requires unapproved external resources, obscures current versus hypothetical behavior, overlaps an open PR, cannot be documented accurately, or adds more complexity than educational value.
