'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Anchor,
  ChevronLeft,
  Copy,
  RotateCcw,
  Sparkles,
  Swords,
  Waves,
  Zap,
} from 'lucide-react'
import type { Product, View } from '@/lib/product'
import {
  getChoiceEffects,
  getRiftRunState,
  maxRunStages,
  meterLabels,
  type MeterKey,
  type RiftChoice,
} from '@/lib/rift-run'
import { Button } from '@/components/ui/button'

export function RiftRunView({
  product,
  seed,
  path,
  onChoose,
  onRestart,
  onNavigate,
}: {
  product: Product
  seed: string
  path: string
  onChoose: (choiceIndex: number) => void
  onRestart: () => void
  onNavigate: (view: View) => void
}) {
  const state = getRiftRunState(product.id, seed, path)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (state.complete) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) {
        return
      }

      const choiceIndex = Number(event.key) - 1
      if (choiceIndex >= 0 && choiceIndex < 3) onChoose(choiceIndex)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onChoose, state.complete])

  async function copyRunLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  if (state.complete) {
    return (
      <section className="mx-auto grid min-h-full max-w-5xl items-center gap-6 px-5 py-6 md:h-full md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div className="rift-field relative min-h-[260px] overflow-hidden rounded-3xl border border-primary/20">
          <Image
            src={product.image}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 z-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Voyage complete
            </p>
            <p className="mt-1 text-2xl font-semibold">{product.name}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">Run seed {seed}</p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary">
            <Sparkles className="size-3.5" /> {state.rank}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            The rift remembers you.
          </h1>
          <p className="mt-2 max-w-xl text-pretty text-muted-foreground">{state.ending}</p>

          <div className="mt-5 grid grid-cols-4 gap-2" aria-label="Final voyage status">
            {(Object.keys(state.meters) as MeterKey[]).map((key) => (
              <div key={key} className="rounded-xl border border-border bg-card px-2 py-3 text-center">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {meterLabels[key]}
                </p>
                <p className="mt-1 text-lg font-semibold tabular-nums">{state.meters[key]}</p>
              </div>
            ))}
          </div>

          <ol className="mt-5 space-y-2" aria-label="Captain's log">
            {state.log.map((entry, index) => (
              <li key={entry.encounter.id} className="rounded-xl border border-border bg-card/60 p-3 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Log {index + 1} · {entry.encounter.sector}
                </span>
                <p className="mt-1 text-muted-foreground">{entry.result}</p>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Button className="flex-1 gap-2" onClick={onRestart}>
              <RotateCcw className="size-4" /> New run
            </Button>
            <Button className="flex-1 gap-2" variant="outline" onClick={copyRunLink}>
              <Copy className="size-4" /> {copied ? 'Link copied' : 'Copy run link'}
            </Button>
            <Button className="flex-1" variant="outline" onClick={() => onNavigate('checkout')}>
              Charter ship
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const encounter = state.encounter!

  return (
    <section className="mx-auto flex min-h-full max-w-6xl flex-col px-5 py-5 md:h-full md:px-8">
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('product')}
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-3.5" /> Abort run
        </button>
        <div className="flex items-center gap-2" aria-label={`Encounter ${state.stage + 1} of ${maxRunStages}`}>
          {Array.from({ length: maxRunStages }, (_, index) => (
            <span
              key={index}
              className={`h-1.5 w-8 rounded-full ${index <= state.stage ? 'bg-primary' : 'bg-secondary'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid flex-1 gap-5 md:min-h-0 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rift-field relative min-h-[300px] overflow-hidden rounded-3xl border border-primary/20 md:min-h-0">
          <Image
            src={product.image}
            alt={`${product.name} entering ${encounter.sector}`}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 52vw"
            className="object-cover opacity-60 motion-safe:animate-[pulse_6s_ease-in-out_infinite]"
          />
          <div className="rift-orbit" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/35" />

          <div className="absolute inset-x-5 bottom-5 z-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Encounter {state.stage + 1} · {encounter.sector}
            </p>
            <h1 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              {encounter.title}
            </h1>
            <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              {encounter.description}
            </p>
          </div>
        </div>

        <div className="flex min-h-0 flex-col">
          <div className="grid grid-cols-4 gap-2" aria-label="Current voyage status">
            {(Object.keys(state.meters) as MeterKey[]).map((key) => (
              <Meter key={key} meterKey={key} value={state.meters[key]} />
            ))}
          </div>

          <div className="mt-4 flex-1 space-y-2.5">
            {encounter.choices.map((choice, index) => (
              <ChoiceButton
                key={choice.label}
                choice={choice}
                index={index}
                productId={product.id}
                onClick={() => onChoose(index)}
              />
            ))}
          </div>

          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Press 1–3 or choose an action · Run {seed}
          </p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Encounter {state.stage + 1}: {encounter.title}. Hull {state.meters.hull}, rift stability {state.meters.rift}, crew morale {state.meters.crew}, loot {state.meters.loot}.
      </p>
    </section>
  )
}

function Meter({ meterKey, value }: { meterKey: MeterKey; value: number }) {
  const Icon = meterKey === 'hull' ? Anchor : meterKey === 'rift' ? Waves : meterKey === 'crew' ? Swords : Sparkles

  return (
    <div className="rounded-xl border border-border bg-card p-2.5">
      <div className="flex items-center justify-between gap-1">
        <Icon className="size-3.5 text-primary" aria-hidden="true" />
        <span className="text-sm font-semibold tabular-nums">{value}</span>
      </div>
      <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
        {meterLabels[meterKey]}
      </p>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary" aria-hidden="true">
        <div className="h-full rounded-full bg-primary transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

function ChoiceButton({
  choice,
  index,
  productId,
  onClick,
}: {
  choice: RiftChoice
  index: number
  productId: string
  onClick: () => void
}) {
  const effects = getChoiceEffects(productId, choice)
  const doctrine =
    (productId === 'wraith' && choice.kind === 'stealth') ||
    (productId === 'emberdrake' && choice.kind === 'assault')

  return (
    <button
      onClick={onClick}
      aria-keyshortcuts={String(index + 1)}
      className="group w-full rounded-2xl border border-border bg-card p-4 text-left transition-all hover:border-primary/50 hover:bg-accent/20 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      <div className="flex items-start gap-3">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-secondary font-mono text-xs text-primary group-hover:bg-primary group-hover:text-primary-foreground">
          {index + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">{choice.label}</span>
            {doctrine ? (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
                Ship bonus
              </span>
            ) : null}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
            {choice.detail}
          </span>
          <span className="mt-2 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
            {(Object.keys(effects) as MeterKey[]).map((key) => {
              const value = effects[key] ?? 0
              return (
                <span key={key} className={value >= 0 ? 'text-primary' : 'text-destructive'}>
                  {meterLabels[key]} {value >= 0 ? '+' : ''}{value}
                </span>
              )
            })}
          </span>
        </span>
        <Zap className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
      </div>
    </button>
  )
}
