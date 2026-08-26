'use client'

import type { View } from '@/lib/product'
import { cn } from '@/lib/utils'

const steps: { id: View; label: string }[] = [
  { id: 'landing', label: 'Home' },
  { id: 'product', label: 'Product' },
  { id: 'checkout', label: 'Charter' },
]

export function SiteHeader({
  view,
  onNavigate,
}: {
  view: View
  onNavigate: (v: View) => void
}) {
  const activeIndex = view === 'success' ? 2 : steps.findIndex((s) => s.id === view)

  return (
    <header className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3.5 md:px-8">
      <button
        onClick={() => onNavigate('landing')}
        className="flex items-center gap-2.5"
        aria-label="Rift Fleet home"
      >
        <span className="grid size-7 place-items-center rounded-md bg-foreground text-background">
          <span className="size-2.5 rounded-full bg-primary" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold tracking-tight">Rift Fleet</span>
      </button>

      <nav aria-label="Progress" className="flex items-center gap-1">
        {steps.map((step, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={step.id}
              onClick={() => onNavigate(step.id)}
              className={cn(
                'rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors',
                isActive
                  ? 'bg-secondary text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <span className="text-primary">{String(i + 1).padStart(2, '0')}</span>{' '}
              {step.label}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
