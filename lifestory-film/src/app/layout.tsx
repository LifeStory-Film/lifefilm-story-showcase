import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { LuxuryCursor } from '@/components/LuxuryCursor'
import { ThemeProvider } from '@/components/ThemeProvider'
import MetaPixel from '@/components/MetaPixel'

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
  metadataBase: new URL('https://lifestory.film'),
  title: 'LifeStory.Film | Luxury Wedding Photography & Videography | Los Angeles',
  description: 'Cinematic wedding films and photography for couples who want more than a highlight reel. Based in California, serving worldwide since 2010.',
  keywords: 'luxury wedding videography, cinematic wedding films, wedding photography, LifeStory.Film, premium wedding videos, Los Angeles wedding photographer',
  authors: [{ name: 'LifeStory.Film' }],
  openGraph: {
    title: 'LifeStory.Film | Luxury Wedding Photography & Videography',
    description: 'Cinematic wedding films and photography for couples who want more than a highlight reel. Based in California, serving worldwide since 2010.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LifeStory.Film',
    images: [
      {
        url: 'https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'LifeStory.Film — Ryan & Victoria at Pelican Hill',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LifeStory.Film | Luxury Wedding Photography & Videography',
    description: 'Cinematic wedding films and photography since 2010.',
    images: ['https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg'],
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
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* Anti-FOUC: set theme class before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('lifestory-theme');document.documentElement.classList.add(t==='light'?'light':'dark');}catch(e){document.documentElement.classList.add('dark');}})()` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-32.png" />
        <meta name="theme-color" content="#0f0e0c" />
        <style>{`@media (max-width: 767px) { .whatsapp-btn { bottom: 80px !important; right: 16px !important; } }`}</style>
        <meta name="msapplication-TileColor" content="#0f0e0c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "LifeStory.Film",
              "description": "Luxury wedding photography and videography based in Los Angeles, serving California and worldwide since 2010.",
              "url": "https://lifestory.film",
              "telephone": "323-556-4362",
              "email": "info@lifestory.film",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "78",
                "bestRating": "5"
              },
              "priceRange": "$$$"
            })
          }}
        />
      </head>
      <body className="font-inter antialiased luxury-gradient min-h-screen">
        <MetaPixel />
        <ThemeProvider>
        <LuxuryCursor />
        {children}

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/13235564362"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            transition: 'transform 0.2s ease',
          }}
          className="whatsapp-btn hover:scale-110 md:bottom-6 md:right-6 bottom-20 right-4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M11.99 0C5.364 0 0 5.373 0 12c0 2.117.554 4.103 1.524 5.83L.057 24l6.304-1.654A11.94 11.94 0 0011.99 24C18.626 24 24 18.627 24 12S18.626 0 11.99 0zm.01 21.818a9.822 9.822 0 01-5.028-1.382l-.36-.214-3.742.981 1.001-3.648-.235-.374A9.822 9.822 0 012.18 12c0-5.415 4.407-9.818 9.82-9.818 5.414 0 9.82 4.403 9.82 9.818 0 5.416-4.406 9.818-9.82 9.818z"/>
          </svg>
        </a>

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
        </ThemeProvider>
      </body>
    </html>
  )
}
