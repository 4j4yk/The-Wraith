# The-Wraith

The-Wraith is a demo storefront for fictional dimension-traveling pirate ships. It was created with a v0 AI-assisted workflow to demonstrate practical AI literacy across the software delivery lifecycle.

The project showcases:

- AI-assisted product ideation and interface creation
- Iterative code review and refinement
- Responsive frontend development with Next.js and React
- Source control and collaborative GitHub workflows
- Pull-request review and preview-based delivery
- Production hosting on Vercel
- CDN-backed delivery and domain management
- Privacy-conscious release verification without application analytics

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- v0 by Vercel

## Run locally

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
pnpm build
```

## Purpose

This is a demonstration project, not a real commerce service. The ships, specifications, prices, and checkout experience are fictional and are included only to showcase the design and delivery workflow.

## Agent-maintained evolution

The-Wraith is an agent-maintained experiment. It evolves through deliberately scoped improvements guided by the project concept and bounded by clear guardrails: preserve the established experience, keep changes focused and reversible, verify work locally and in previews, protect user trust, and leave merging, production promotion, external services, billing, and destructive actions under explicit human authority.

## Change log

### 2026-08-25

- Added a compact Rift Registry to each product view so the existing range, crew, jump-time, and cannon specifications are visible.
- Enabled vertical scrolling on small screens so product details remain reachable while preserving the single-viewport desktop layout.
- Replaced the card-shaped checkout with a clearly fictional charter manifest that collects no real payment or contact information and transmits nothing.

### 2026-08-26

- Made the selected ship and current fleet view URL-addressable, so product and charter links survive refreshes and can be shared.
- Added safe fallbacks for unknown ship or view parameters and a lightweight loading state for URL-driven navigation.

### 2026-08-27

- Added Rift Run, a playable three-encounter voyage with deterministic branching events, ship-specific doctrine bonuses, and hull, rift, crew, and loot systems.
- Added number-key and touch controls, reduced-motion behavior, live status announcements, captain's logs, multiple outcome ranks, replay, and copyable run links.
- Encoded only a random run seed and choice path in the URL so voyages can be refreshed or shared without accounts, storage, tracking, or personal data.
- Added a Daily Rift Signal from the fleet landing page, giving every captain the same date-seeded encounter route without a backend, account, scheduled function, or external API.

### 2026-08-28

- Added copyable voyage scorecards with the ship, outcome rank, final meters, encountered sectors, and replay link, making Rift Run results easy to share without accounts, tracking, or a backend.
- Added an accessible copy confirmation and reorganized voyage actions into a responsive two-column control deck.
- Prioritized the completed-voyage hero image to avoid delayed loading on direct scorecard and replay links.
- Added visible ship-doctrine briefings to Rift Run, clearly explaining The Wraith's stealth bonuses and The Emberdrake's assault bonuses before captains choose a tactic.
- Centralized doctrine metadata so the briefing, choice badges, and gameplay calculations remain consistent without adding services or dependencies.
- Added descriptive Open Graph and social-card metadata using the existing ship artwork, so shared deployment links explain the fictional Rift Fleet experience without generating or hosting another asset.
- Removed production analytics and its dependency so the static demo does not track visitors or spend its free-tier allowance on telemetry.
- Restored browser pinch-to-zoom by removing the restrictive viewport cap, improving accessibility without changing the visual layout.

### 2026-08-29

- Fixed Daily Rift Signal seeds so the complete UTC date survives URL sanitization; daily encounters now actually rotate each day instead of unintentionally repeating for a month.
- Preserved readable `signal-YYYY-MM-DD` seeds across launch, decisions, refreshes, and shared voyage links while continuing to strip unsafe URL characters and cap seed length.
- Centralized daily-seed creation in the deterministic Rift Run engine so the landing-page action and future entry points use one consistent format.
- Added a globally reachable Engineering Log that documents the implemented browser architecture, URL state, deterministic voyage reconstruction, delivery workflow, responsibility boundaries, evidence, and known limitations.
- Added explicit CURRENT, PROPOSED, and SIMULATED labels so design exercises cannot be mistaken for deployed infrastructure.
- Added durable product direction, current architecture, system-design roadmap, case-study, guardrail, ADR, and scenario documentation under `docs/` to reduce dependence on chat history.
- Corrected stale README claims about analytics and CI, and strengthened the disclosure of human approval boundaries.

### 2026-08-31

- Added a dependency-free deterministic Rift Run regression suite covering replay equivalence, ship doctrines, meter boundaries, URL sanitization, unknown-ship fallback, and UTC daily signals.
- Added a focused GitHub Actions quality gate that runs a frozen pnpm install, the engine tests, TypeScript validation, and the production build on pull requests and main.
- Updated the in-site Engineering Log and durable architecture, roadmap, and case-study documents so quality claims and remaining test limitations match the committed evidence.
