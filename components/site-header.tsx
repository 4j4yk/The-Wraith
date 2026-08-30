'use client'

import type { View } from '@/lib/product'
import { cn } from '@/lib/utils'

const steps: { id: View; label: string }[] = [
  { id: 'landing', label: 'Home' },
  { id: 'product', label: 'Product' },
  { id: 'rift-run', label: 'Run' },
  { id: 'checkout', label: 'Charter' },
]

export function SiteHeader({
  view,
  onNavigate,
}: {
  view: View
  onNavigate: (v: View) => void
}) {
  const activeIndex = view === 'success' ? 3 : steps.findIndex((s) => s.id === view)
  const engineeringActive = view === 'engineering'

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

      <div className="flex items-center gap-1 sm:gap-2">
        <nav aria-label="Progress" className="flex items-center gap-0.5 sm:gap-1">
          {steps.map((step, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={step.id}
                aria-label={`${String(i + 1).padStart(2, '0')} ${step.label}`}
                aria-current={isActive ? 'step' : undefined}
                onClick={() => onNavigate(step.id)}
                className={cn(
                  'rounded-full px-1.5 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors sm:px-3',
                  isActive
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span className="text-primary">{String(i + 1).padStart(2, '0')}</span>{' '}
                <span className="hidden sm:inline">{step.label}</span>
              </button>
            )
          })}
        </nav>
        <span className="h-5 w-px bg-border" aria-hidden="true" />
        <button
          type="button"
          aria-current={engineeringActive ? 'page' : undefined}
          onClick={() => onNavigate('engineering')}
          className={cn(
            'rounded-full px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors sm:px-3 sm:text-xs',
            engineeringActive
              ? 'bg-primary/15 text-primary'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          <span className="sm:hidden">Log</span>
          <span className="hidden sm:inline">Engineering log</span>
        </button>
      </div>
    </header>
  )
}
