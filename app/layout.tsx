import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
const siteUrl = deploymentHost
  ? `https://${deploymentHost}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'The-Wraith',
  title: 'The-Wraith · Rift Fleet',
  description:
    'Explore fictional dimension-raiding ships, compare their rift specifications, and captain a deterministic three-encounter voyage.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    siteName: 'The-Wraith',
    title: 'The-Wraith · Rift Fleet',
    description: 'Choose a ship. Read the doctrine. Survive a voyage through three impossible realities.',
    images: [{ url: '/product-ship.png', width: 1024, height: 1024, alt: 'The Wraith sailing through an interdimensional rift' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The-Wraith · Rift Fleet',
    description: 'Choose a ship and captain a deterministic voyage through impossible realities.',
    images: ['/product-ship.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0f1c',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased font-sans overflow-hidden">
        {children}
      </body>
    </html>
  )
}
