'use client'

import Image from 'next/image'
import { Check, ChevronLeft, Zap } from 'lucide-react'
import type { View } from '@/lib/product'
import { product, formatPrice } from '@/lib/product'
import { Button } from '@/components/ui/button'

const highlights = [
  'Rift-drive core — jump between realities in seconds',
  'Voidwood hull, immune to cannon fire and paradox',
  'Self-mending sails that catch any wind, in any world',
]

export function ProductView({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <section className="mx-auto grid h-full max-w-6xl grid-cols-1 items-center gap-6 px-5 py-6 md:grid-cols-[1.1fr_1fr] md:gap-10 md:px-8">
      {/* Visual */}
      <div className="relative order-1 h-full min-h-[220px]">
        <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-primary/15">
          <Image
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

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="flex-1 gap-2" onClick={() => onNavigate('checkout')}>
            <Zap className="size-4" />
            Buy Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1"
            onClick={() => onNavigate('checkout')}
          >
            Add to cart
          </Button>
        </div>

        <p className="mt-4 font-mono text-xs text-muted-foreground">
          One in the fleet — moored at the edge of the rift. Delivered across any tide.
        </p>
      </div>
    </section>
  )
}
