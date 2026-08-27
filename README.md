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
