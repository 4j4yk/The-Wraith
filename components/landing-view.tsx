'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { View, Product } from '@/lib/product'
import { formatPrice } from '@/lib/product'
import { Button } from '@/components/ui/button'

export function LandingView({
  product,
  products,
  selectedId,
  onSelect,
  onNavigate,
}: {
  product: Product
  products: Product[]
  selectedId: string
  onSelect: (id: string) => void
  onNavigate: (v: View) => void
}) {
  return (
    <section className="mx-auto grid h-full max-w-6xl grid-cols-1 items-center gap-6 px-5 py-6 md:grid-cols-2 md:gap-10 md:px-8">
      {/* Copy */}
      <div className="order-2 flex flex-col justify-center md:order-1">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          The Rift Fleet
        </span>

        <h1 className="text-pretty text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Plunder every reality at once.
        </h1>

        <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          {product.summary}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button size="lg" className="group gap-2" onClick={() => onNavigate('product')}>
            Explore {product.name}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <span className="font-mono text-sm text-muted-foreground">
            from {formatPrice(product.price)}
          </span>
        </div>

        {/* Ship switcher */}
        <div className="mt-7 flex gap-3 border-t border-border pt-5">
          {products.map((p) => {
            const active = p.id === selectedId
            return (
              <button
                key={p.id}
                onClick={() => onSelect(p.id)}
                aria-pressed={active}
                className={`group flex flex-1 items-center gap-3 rounded-xl border p-2.5 text-left transition-colors ${
                  active
                    ? 'border-primary/60 bg-accent/40'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <span className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-secondary">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{p.name}</span>
                  <span className="block truncate font-mono text-[11px] text-muted-foreground">
                    {formatPrice(p.price)}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Visual */}
      <div className="relative order-1 h-full min-h-[220px] md:order-2">
        <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-primary/15">
          <Image
            key={product.id}
            src={product.image || '/placeholder.svg'}
            alt={`${product.name}, a dimension-travel pirate ship, sailing through a glowing interdimensional rift`}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background via-background/10 to-background/30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_90px_20px_var(--background)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
