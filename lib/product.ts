export type Spec = { label: string; value: string }

export type Product = {
  id: string
  name: string
  tagline: string
  price: number
  currency: string
  image: string
  color: string
  summary: string
  specs: Spec[]
  highlights: string[]
}

export const products: Product[] = [
  {
    id: 'wraith',
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
    highlights: [
      'Rift-drive core — jump between realities in seconds',
      'Voidwood hull, immune to cannon fire and paradox',
      'Self-mending sails that catch any wind, in any world',
    ],
  },
  {
    id: 'emberdrake',
    name: 'The Emberdrake',
    tagline: 'Warforged rift raider',
    price: 1880000,
    currency: 'USD',
    image: '/product-ship-2.png',
    color: 'Blackiron Hull',
    summary:
      'A crimson-sailed man-of-war forged in a dying star. It does not slip through the veil — it burns a hole clean through it and drags the fire along for the raid.',
    specs: [
      { label: 'Range', value: '∞ realms' },
      { label: 'Crew', value: '80 souls' },
      { label: 'Jump', value: '1.8 sec' },
      { label: 'Cannons', value: '52' },
    ],
    highlights: [
      'Starforge engine — fastest jump in the fleet',
      'Blackiron hull plated in cooled dragonfire',
      'Ember sails that ignite on the charge, never burn out',
    ],
  },
]

export type View = 'landing' | 'product' | 'rift-run' | 'checkout' | 'success'

export function formatPrice(value: number, currency: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}
