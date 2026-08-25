'use client'

import { useState } from 'react'
import type { View } from '@/lib/product'
import { products } from '@/lib/product'
import { SiteHeader } from './site-header'
import { LandingView } from './landing-view'
import { ProductView } from './product-view'
import { CheckoutView } from './checkout-view'

export function StoreShell() {
  const [view, setView] = useState<View>('landing')
  const [selectedId, setSelectedId] = useState<string>(products[0].id)

  const selected = products.find((p) => p.id === selectedId) ?? products[0]

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background text-foreground">
      <SiteHeader view={view} onNavigate={setView} />
      <main className="relative flex-1 overflow-y-auto md:overflow-hidden">
        {view === 'landing' && (
          <LandingView
            product={selected}
            products={products}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onNavigate={setView}
          />
        )}
        {view === 'product' && <ProductView product={selected} onNavigate={setView} />}
        {(view === 'checkout' || view === 'success') && (
          <CheckoutView product={selected} view={view} onNavigate={setView} />
        )}
      </main>
    </div>
  )
}
