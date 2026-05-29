import type { Metadata } from 'next'

const OG_IMAGE = 'https://img.youtube.com/vi/cAmjboBcwHM/maxresdefault.jpg'

export const metadata: Metadata = {
  title:
    'Jenna — Hindu-Western Fusion Wedding Cinematography at Jasna Polana | LifeStory.Film',
  description:
    'A custom video proposal for Jenna — Hindu-Western fusion wedding at Jasna Polana, Princeton NJ on June 19, 2027. Luxury wedding cinematography, traveling to New Jersey to capture both ceremonies in full.',
  // Private couple-specific landing page — must not be indexed.
  robots: { index: false, follow: false },
  openGraph: {
    title:
      'Jenna — Hindu-Western Fusion Wedding Cinematography at Jasna Polana | LifeStory.Film',
    description:
      'Luxury wedding cinematography for Hindu-Western fusion weddings — the baraat, the mandap, the saat phere, and the full Western ceremony, preserved in full.',
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: 'Hindu-Western fusion wedding cinematography — LifeStory.Film',
      },
    ],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Jenna — Hindu-Western Fusion Wedding Cinematography at Jasna Polana | LifeStory.Film',
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
