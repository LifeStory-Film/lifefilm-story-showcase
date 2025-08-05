import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { LuxuryCursor } from '@/components/LuxuryCursor'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'LifeStory.Film - Luxury Wedding Videography',
  description: 'Cinematic wedding films that transform your most precious moments into timeless art. Professional luxury wedding videography and photography services.',
  keywords: 'luxury wedding videography, cinematic wedding films, wedding photography, LifeStory.Film, premium wedding videos',
  authors: [{ name: 'LifeStory.Film' }],
  openGraph: {
    title: 'LifeStory.Film - Luxury Wedding Videography',
    description: 'Cinematic wedding films that transform your most precious moments into timeless art.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LifeStory.Film - Luxury Wedding Videography',
    description: 'Cinematic wedding films that transform your most precious moments into timeless art.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className="font-inter antialiased luxury-gradient min-h-screen">
        <LuxuryCursor />
        {children}

        {/* Luxury page transition overlay */}
        <div
          id="page-transition"
          className="fixed inset-0 z-[100] bg-[hsl(var(--luxury-obsidian))] pointer-events-none opacity-0 transition-opacity duration-500"
        />

        {/* Ambient background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[hsl(var(--luxury-obsidian))] via-transparent to-[hsl(var(--luxury-charcoal))] opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--luxury-gold)/0.03)] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--luxury-gold)/0.02)] rounded-full blur-[120px]" />
        </div>
      </body>
    </html>
  )
}
