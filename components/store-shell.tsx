'use client'

import { useState } from 'react'
import type { View } from '@/lib/product'
import { SiteHeader } from './site-header'
import { LandingView } from './landing-view'
import { ProductView } from './product-view'
import { CheckoutView } from './checkout-view'

export function StoreShell() {
  const [view, setView] = useState<View>('landing')

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background text-foreground">
      <SiteHeader view={view} onNavigate={setView} />
      <main className="relative flex-1 overflow-hidden">
        {view === 'landing' && <LandingView onNavigate={setView} />}
        {view === 'product' && <ProductView onNavigate={setView} />}
        {(view === 'checkout' || view === 'success') && (
          <CheckoutView view={view} onNavigate={setView} />
        )}
      </main>
    </div>
  )
}
