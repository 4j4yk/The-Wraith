'use client'

import Image from 'next/image'
import { Check, ChevronLeft, Zap } from 'lucide-react'
import type { View, Product } from '@/lib/product'
import { formatPrice } from '@/lib/product'
import { Button } from '@/components/ui/button'

export function ProductView({
  product,
  onNavigate,
}: {
  product: Product
  onNavigate: (v: View) => void
}) {
  const highlights = product.highlights
  return (
    <section className="mx-auto grid min-h-full max-w-6xl grid-cols-1 items-center gap-6 px-5 py-6 md:h-full md:grid-cols-[1.1fr_1fr] md:gap-10 md:px-8">
      {/* Visual */}
      <div className="relative order-1 h-full min-h-[220px]">
        <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-primary/15">
          <Image
            key={product.id}
            src={product.image || '/placeholder.svg'}
            alt={`${product.name}, a dimension-travel pirate ship with a ${product.color}`}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 50vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background via-transparent to-background/25"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_16px_var(--background)]"
            aria-hidden="true"
          />
          <span className="absolute left-4 top-4 z-10 rounded-full border border-primary/20 bg-background/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary backdrop-blur-sm">
            {product.color}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="order-2 flex flex-col justify-center">
        <button
          onClick={() => onNavigate('landing')}
          className="mb-4 inline-flex w-fit items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-3.5" /> Back
        </button>

        <p className="font-mono text-sm uppercase tracking-widest text-primary">
          {product.tagline}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          {product.name}
        </h1>

        <div className="mt-3 flex items-baseline gap-3">
          <span className="text-2xl font-semibold tabular-nums">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-muted-foreground">Crewed &amp; provisioned</span>
        </div>

        <dl
          className="mt-5 grid grid-cols-4 divide-x divide-border rounded-xl border border-border bg-card/60 py-3"
          aria-label={`${product.name} rift registry specifications`}
        >
          {product.specs.map((spec) => (
            <div key={spec.label} className="min-w-0 px-2 text-center sm:px-3">
              <dt className="truncate font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {spec.label}
              </dt>
              <dd className="mt-1 truncate text-sm font-semibold tabular-nums text-foreground">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <Button size="lg" className="w-full gap-2" onClick={() => onNavigate('checkout')}>
            <Zap className="size-4" />
            Begin demo charter
          </Button>
        </div>

        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Fictional fleet experience — no purchase or payment information required.
        </p>
      </div>
    </section>
  )
}
