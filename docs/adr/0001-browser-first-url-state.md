# ADR 0001: Browser-first URL state

- Status: Accepted
- Date: 2026-08-29

## Context

The-Wraith needs refreshable and shareable product and voyage state while remaining a free, privacy-conscious demonstration without accounts, a database, or a runtime API.

## Decision

Keep the current experience inside a browser-first Next.js application. Encode only allow-listed fictional state in the query string:

- Selected ship
- Current view
- Sanitized run seed
- Three-choice voyage path

Reconstruct voyage state deterministically from those values.

## Consequences

### Benefits

- Refreshable and shareable without persistence or identity.
- No application-owned backend or storage cost.
- Deterministic behavior is inspectable and suitable for future regression tests.
- Invalid state can fall back to safe defaults.

### Costs

- URLs are not durable database records.
- Query parameters are visible and length-limited.
- There is no cross-device history beyond a copied link.
- Schema changes require backward-compatibility decisions.
- This does not provide event-store semantics or distributed-system guarantees.

## Revisit when

Requirements introduce authenticated ownership, private state, collaborative editing, server-authoritative competition, durable history beyond links, or data that must not appear in a URL.
