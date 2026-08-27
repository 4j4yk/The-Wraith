'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, ChevronLeft, ShieldCheck } from 'lucide-react'
import type { View, Product } from '@/lib/product'
import { formatPrice } from '@/lib/product'
import { Button } from '@/components/ui/button'

export function CheckoutView({
  product,
  view,
  onNavigate,
}: {
  product: Product
  view: View
  onNavigate: (v: View) => void
}) {
  const [submitting, setSubmitting] = useState(false)
  const charterId = `RF-${product.id.toUpperCase()}-DEMO`

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      onNavigate('success')
    }, 700)
  }

  if (view === 'success') {
    return (
      <section className="mx-auto flex h-full max-w-md flex-col items-center justify-center px-5 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-7" />
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Charter sealed</h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          {product.name} awaits at the nearest rift. This fictional manifest exists only
          in your current demo session; no request, personal data, or payment was sent.
        </p>
        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Charter #{charterId}
        </p>
        <Button className="mt-8" variant="outline" onClick={() => onNavigate('landing')}>
          Back to port
        </Button>
      </section>
    )
  }

  return (
    <section className="mx-auto grid h-full max-w-5xl grid-cols-1 items-center gap-6 px-5 py-6 md:grid-cols-[1fr_0.8fr] md:gap-10 md:px-8">
      {/* Fictional charter form */}
      <div className="flex flex-col justify-center">
        <button
          onClick={() => onNavigate('product')}
          className="mb-4 inline-flex w-fit items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-3.5" /> Back
        </button>

        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Charter manifest
        </h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <ShieldCheck className="size-3.5" /> Fictional demo — nothing is transmitted
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <Field label="Captain call sign">
            <input
              type="text"
              required
              maxLength={32}
              placeholder="Nightglass"
              className="input-base"
              autoComplete="off"
            />
          </Field>

          <Field label="First destination">
            <select required defaultValue="" className="input-base">
              <option value="" disabled>
                Choose a realm
              </option>
              <option value="glass-tide">The Glass Tide</option>
              <option value="ember-meridian">Ember Meridian</option>
              <option value="clockwork-deep">The Clockwork Deep</option>
            </select>
          </Field>

          <Field label="Mission profile">
            <select defaultValue="exploration" className="input-base">
              <option value="exploration">Realm exploration</option>
              <option value="rescue">Rift rescue</option>
              <option value="treasure">Relic recovery</option>
            </select>
          </Field>

          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? 'Sealing charter…' : 'Seal demo charter'}
          </Button>
        </form>
      </div>

      {/* Order summary */}
      <aside className="rounded-2xl border border-border bg-card p-5">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Charter summary
        </h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-secondary">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              fill
              sizes="64px"
              className="object-contain p-1"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium">{product.name}</p>
            <p className="text-sm text-muted-foreground">{product.color}</p>
          </div>
          <span className="ml-auto font-medium tabular-nums">
            {formatPrice(product.price)}
          </span>
        </div>

        <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
          <Row label="Listed fleet value" value={formatPrice(product.price)} />
          <Row label="Rift levy" value="Waived" />
          <Row label="Payment collected" value="$0" />
        </dl>
        <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
          <span className="font-medium">Experience</span>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Simulation only
          </span>
        </div>
      </aside>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="tabular-nums">{value}</dd>
    </div>
  )
}
