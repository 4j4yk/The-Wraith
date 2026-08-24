export const product = {
  name: 'The Wraith',
  tagline: 'Dimension-travel pirate ship',
  price: 1420000,
  currency: 'USD',
  image: '/product-ship.png',
  color: 'Voidwood Hull',
  summary:
    'A galleon rigged to tear through the veil between realities. Sail any sea, any century, any world — then slip back out before the tide even notices you were gone.',
  specs: [
    { label: 'Range', value: '∞ realms' },
    { label: 'Crew', value: '40 souls' },
    { label: 'Jump', value: '3.2 sec' },
    { label: 'Cannons', value: '24' },
  ],
} as const

export type View = 'landing' | 'product' | 'checkout' | 'success'

export function formatPrice(value: number, currency: string = product.currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}
