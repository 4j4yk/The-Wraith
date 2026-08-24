'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, ChevronLeft, Lock } from 'lucide-react'
import type { View, Product } from '@/lib/product'
import { formatPrice } from '@/lib/product'
import { Button } from '@/components/ui/button'

function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits
}

export function CheckoutView({
  product,
  view,
  onNavigate,
}: {
  product: Product
  view: View
  onNavigate: (v: View) => void
}) {
  const shipping = 0
  const tax = Math.round(product.price * 0.08)
  const total = product.price + shipping + tax

  const [card, setCard] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      onNavigate('success')
    }, 900)
  }

  if (view === 'success') {
    return (
      <section className="mx-auto flex h-full max-w-md flex-col items-center justify-center px-5 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-7" />
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">The ship is yours</h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          {product.name} awaits at the nearest rift. A charter for {formatPrice(total)} was
          sealed and sent to your inbox.
        </p>
        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Charter #RF-{Math.floor(100000 + Math.random() * 899999)}
        </p>
        <Button className="mt-8" variant="outline" onClick={() => onNavigate('landing')}>
          Back to port
        </Button>
      </section>
    )
  }

  return (
    <section className="mx-auto grid h-full max-w-5xl grid-cols-1 items-center gap-6 px-5 py-6 md:grid-cols-[1fr_0.8fr] md:gap-10 md:px-8">
      {/* Payment form */}
      <div className="flex flex-col justify-center">
        <button
          onClick={() => onNavigate('product')}
          className="mb-4 inline-flex w-fit items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-3.5" /> Back
        </button>

        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Checkout</h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Lock className="size-3.5" /> Encrypted &amp; secure payment
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <Field label="Email">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="input-base"
              autoComplete="email"
            />
          </Field>

          <Field label="Card number">
            <input
              inputMode="numeric"
              required
              placeholder="4242 4242 4242 4242"
              value={card}
              onChange={(e) => setCard(formatCardNumber(e.target.value))}
              className="input-base font-mono"
              autoComplete="cc-number"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Expiry">
              <input
                inputMode="numeric"
                required
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                className="input-base font-mono"
                autoComplete="cc-exp"
              />
            </Field>
            <Field label="CVC">
              <input
                inputMode="numeric"
                required
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                className="input-base font-mono"
                autoComplete="cc-csc"
              />
            </Field>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? 'Processing…' : `Pay ${formatPrice(total)}`}
          </Button>
        </form>
      </div>

      {/* Order summary */}
      <aside className="rounded-2xl border border-border bg-card p-5">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Order summary
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
          <Row label="Subtotal" value={formatPrice(product.price)} />
          <Row label="Shipping" value="Free" />
          <Row label="Tax" value={formatPrice(tax)} />
        </dl>
        <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
          <span className="font-medium">Total</span>
          <span className="text-xl font-semibold tabular-nums">{formatPrice(total)}</span>
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
