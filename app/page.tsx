import { Suspense } from 'react'
import { StoreShell } from '@/components/store-shell'

export default function Page() {
  return (
    <Suspense fallback={<FleetLoading />}>
      <StoreShell />
    </Suspense>
  )
}

function FleetLoading() {
  return (
    <div
      className="grid h-[100dvh] place-items-center bg-background font-mono text-xs uppercase tracking-widest text-muted-foreground"
      role="status"
    >
      Opening the rift…
    </div>
  )
}
