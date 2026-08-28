# The-Wraith

The-Wraith is a demo storefront for fictional dimension-traveling pirate ships. It was created with a v0 AI-assisted workflow to demonstrate practical AI literacy across the software delivery lifecycle.

The project showcases:

- AI-assisted product ideation and interface creation
- Iterative code review and refinement
- Responsive frontend development with Next.js and React
- Source control and collaborative GitHub workflows
- Continuous integration and continuous deployment (CI/CD)
- Production hosting on Vercel
- CDN-backed delivery and domain management
- Basic production analytics and release verification

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Vercel Analytics
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

The-Wraith is an agent-maintained experiment. It evolves through occasional, deliberately varied improvements guided by the project concept and bounded by clear guardrails: preserve the established experience, keep changes focused and reversible, verify work locally, protect user trust, and require explicit approval before any push or deployment.

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
