# Current Architecture

Status: **CURRENT**

## System boundary

The repository contains a single-page Next.js 16 App Router application. The only page renders a client-side shell that selects among the landing, product, Rift Run, Engineering Log, charter, and success views.

```text
Browser request
    -> statically prerenderable Next.js page
    -> client-side StoreShell
    -> allow-listed query parameters
    -> selected view or deterministic voyage projection
    -> router.replace updates the shareable URL
```

There are no tracked API routes, server actions, databases, queues, middleware, authentication systems, payment processors, analytics SDKs, or application-owned telemetry pipelines.

## Data and state

### Product catalog

The two fictional ships and their specifications are compile-time TypeScript data in `lib/product.ts`.

### Navigation

`components/store-shell.tsx` reads `ship` and `view` from the query string, applies allow-listed fallbacks, renders the selected client view, and writes navigation changes with `router.replace`.

### Rift Run

`lib/rift-run.ts` performs deterministic client-side state reconstruction:

- A sanitized seed and ship ID choose three encounters through a stable hash.
- A sanitized path of choice digits applies encounter and ship-doctrine effects.
- The resulting meters, log, rank, and ending are derived synchronously.
- A new random seed uses browser cryptography; the daily seed uses a UTC date.

This is not currently an event-sourced architecture. There are no explicit command or event records, event identities, append-only store, independent projections, persistence, idempotency protocol, or replay-version strategy.

### Charter

The charter is a fictional local interaction. The current inputs are not read or transmitted. Submission only changes local React state, waits briefly, and navigates to the success view.

## Runtime and delivery

- Next.js currently prerenders the only application page during the production build.
- Checked-in images are served without Next.js image optimization.
- GitHub pull requests receive Vercel previews through repository integration.
- Merging and production authority remain human-controlled.

The repository does not prove a specific Vercel plan, quota, CDN configuration, custom-domain configuration, or absence of platform-level request logs. It only proves the application behavior implemented here.

## Input boundaries

- Ship and view values are allow-listed.
- Run seeds accept lowercase letters, digits, and hyphens up to 20 characters.
- Choice paths accept only `0`, `1`, and `2`, with a maximum of three stages.
- Unknown values fall back to known safe states.

## Current verification evidence

Recent changes have been checked with combinations of:

- Frozen pnpm installation
- Diff validation
- Separate TypeScript checks
- Dependency-free deterministic engine regression tests
- A focused GitHub Actions quality gate for frozen install, tests, types, and production build
- Next.js production builds
- Focused browser interactions
- Console-error inspection
- Vercel preview completion

Verification is recorded per pull request. The repository-owned GitHub Actions workflow enforces the frozen install, deterministic tests, TypeScript, and production build on pull requests and `main`.

## Known limitations

- No component-level or end-to-end test suite is committed; current automated coverage is focused on the deterministic engine boundary.
- TypeScript is enforced by both a focused check and the production build, but static analysis does not replace runtime interaction coverage.
- Clipboard behavior depends on browser permission and secure-context support.
- All shareable application views use query parameters under `/`, not distinct route segments.
- No offline guarantee or service worker.
- No deployed distributed-system components or operational SLO measurement.
