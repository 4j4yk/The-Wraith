import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  CircleDashed,
  Compass,
  GitBranch,
  Globe2,
  Route,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'

const architecture = [
  {
    icon: Globe2,
    title: 'Browser interface',
    detail: 'A single responsive Next.js experience renders the fleet, voyage, charter, and this log.',
  },
  {
    icon: Route,
    title: 'URL state',
    detail: 'Ship, view, run seed, and choice path remain refreshable and shareable without an account.',
  },
  {
    icon: Compass,
    title: 'Deterministic engine',
    detail: 'The same sanitized seed and choices reconstruct the same encounters, meters, and outcome.',
  },
  {
    icon: GitBranch,
    title: 'Review delivery',
    detail: 'Focused GitHub pull requests receive isolated Vercel previews before a human chooses to merge.',
  },
]

const milestones = [
  ['v0 baseline', 'AI-assisted storefront concept and visual language.'],
  ['Trust pass', 'Visible specifications, mobile reachability, and a fictional charter with no data capture.'],
  ['State design', 'URL-addressable views and a deterministic, replayable Rift Run.'],
  ['Engineering case study', 'Architecture, decisions, guardrails, evidence, and limitations become visible.'],
  ['Pilot complete', 'The bounded one-week trial concluded; further work now requires a specific reason to resume.'],
]

function Status({ children, tone = 'current' }: { children: React.ReactNode; tone?: 'current' | 'proposed' | 'simulated' }) {
  const styles = {
    current: 'border-primary/30 bg-primary/10 text-primary',
    proposed: 'border-border bg-secondary text-muted-foreground',
    simulated: 'border-accent bg-accent/30 text-foreground',
  }

  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${styles[tone]}`}>
      {children}
    </span>
  )
}

export function EngineeringLogView() {
  return (
    <section className="h-full overflow-y-auto" aria-labelledby="engineering-log-title">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
        <div className="grid gap-7 border-b border-border pb-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Captain&apos;s engineering log
            </p>
            <h1 id="engineering-log-title" className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              The machinery behind the myth.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              The-Wraith is a fictional fleet experience and a completed one-week AI-assisted delivery pilot. This preserved case study separates what runs today from what was proposed or simulated.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4" aria-label="Status legend">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Chart legend</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Status>Current</Status>
              <Status tone="proposed">Proposed</Status>
              <Status tone="simulated">Simulated</Status>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Status is always written in text; color is only a secondary cue.
            </p>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">What sails today</h2>
            <Status>Current</Status>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The deployed design is intentionally small: a browser-first modular application, not a hidden fleet of services.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {architecture.map(({ icon: Icon, title, detail }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-4">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 border-y border-border py-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Evidence and boundaries</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />Current application code includes no account, database, analytics, payment collection, or visitor identifier.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />Keyboard choices, live voyage announcements, reduced motion, and browser zoom.</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />Review evidence includes deterministic engine tests, a pinned pnpm version, frozen installs, build-enforced TypeScript, focused CI, and preview validation.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CircleDashed className="size-5 text-muted-foreground" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Known limits</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>The committed regression suite covers deterministic replay, doctrine effects, bounded meters, URL sanitization, and UTC daily seeds; it does not yet test React rendering.</li>
              <li>Type checking prevents incompatible builds but does not replace component, accessibility, or end-to-end runtime coverage.</li>
              <li>No API, queue, cache, multi-region service, or observability backend is deployed. Future diagrams must label these as proposed or simulated.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Evolution, not generation</h2>
            <ol className="mt-5 space-y-4">
              {milestones.map(([title, detail], index) => (
                <li key={title} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-secondary font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">Who holds the wheel</h2>
              <Status>Current</Status>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <Bot className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">Agent responsibility</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  During the pilot: inspect, propose, implement, document, test, and open reversible pull requests within explicit guardrails.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <UserRoundCheck className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">Human authority</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Set direction, review evidence, merge changes, and approve production, external-service, billing, or destructive actions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold">Optional future water</h2>
              <Status tone="proposed">Proposed</Status>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The pilot is no longer under active development. A deterministic reconstruction inspector remains an optional extension only if a future learning or demonstration goal justifies resuming work.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://github.com/4j4yk/The-Wraith/blob/main/README.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Read project log <ArrowUpRight className="size-3.5" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://github.com/4j4yk/The-Wraith/tree/main/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Review design docs <ArrowUpRight className="size-3.5" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
