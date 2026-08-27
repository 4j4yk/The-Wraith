'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { View } from '@/lib/product'
import { products } from '@/lib/product'
import { createRunSeed, sanitizePath, sanitizeSeed } from '@/lib/rift-run'
import { SiteHeader } from './site-header'
import { LandingView } from './landing-view'
import { ProductView } from './product-view'
import { CheckoutView } from './checkout-view'
import { RiftRunView } from './rift-run-view'

const urlViews: View[] = ['landing', 'product', 'rift-run', 'checkout', 'success']

function isView(value: string | null): value is View {
  return urlViews.some((view) => view === value)
}

export function StoreShell() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const requestedShip = searchParams.get('ship')
  const requestedView = searchParams.get('view')
  const seed = sanitizeSeed(searchParams.get('run'))
  const path = sanitizePath(searchParams.get('path'))

  const selectedId = products.some((product) => product.id === requestedShip)
    ? requestedShip!
    : products[0].id
  const view: View = isView(requestedView) ? requestedView : 'landing'

  const selected = products.find((p) => p.id === selectedId) ?? products[0]

  function replaceFleetUrl(
    shipId: string,
    nextView: View,
    runSeed: string = seed,
    runPath: string = path,
  ) {
    const params = new URLSearchParams()

    if (shipId !== products[0].id) params.set('ship', shipId)
    if (nextView !== 'landing') params.set('view', nextView)
    if (nextView === 'rift-run') {
      params.set('run', runSeed)
      if (runPath) params.set('path', runPath)
    }

    const query = params.toString()
    router.replace(query ? `/?${query}` : '/', { scroll: false })
  }

  function handleSelect(shipId: string) {
    replaceFleetUrl(shipId, view)
  }

  function handleNavigate(nextView: View) {
    if (nextView === 'rift-run' && !searchParams.has('run')) {
      replaceFleetUrl(selectedId, nextView, createRunSeed(), '')
      return
    }

    replaceFleetUrl(selectedId, nextView)
  }

  function handleRunChoice(choiceIndex: number) {
    replaceFleetUrl(selectedId, 'rift-run', seed, `${path}${choiceIndex}`)
  }

  function handleRunRestart() {
    replaceFleetUrl(selectedId, 'rift-run', createRunSeed(), '')
  }

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background text-foreground">
      <SiteHeader view={view} onNavigate={handleNavigate} />
      <main className="relative flex-1 overflow-y-auto md:overflow-hidden">
        {view === 'landing' && (
          <LandingView
            product={selected}
            products={products}
            selectedId={selectedId}
            onSelect={handleSelect}
            onNavigate={handleNavigate}
          />
        )}
        {view === 'product' && <ProductView product={selected} onNavigate={handleNavigate} />}
        {view === 'rift-run' && (
          <RiftRunView
            product={selected}
            seed={seed}
            path={path}
            onChoose={handleRunChoice}
            onRestart={handleRunRestart}
            onNavigate={handleNavigate}
          />
        )}
        {(view === 'checkout' || view === 'success') && (
          <CheckoutView product={selected} view={view} onNavigate={handleNavigate} />
        )}
      </main>
    </div>
  )
}
