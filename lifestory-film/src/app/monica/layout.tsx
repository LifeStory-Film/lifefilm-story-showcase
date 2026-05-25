import type { Metadata } from 'next'

const OG_IMAGE = 'https://img.youtube.com/vi/cAmjboBcwHM/maxresdefault.jpg'

export const metadata: Metadata = {
  title: 'Monica — Persian Wedding Photography & Cinematography at Hotel Casa Del Mar | LifeStory.Film',
  description:
    'A custom proposal for Monica — Persian wedding at Hotel Casa Del Mar, Santa Monica on November 28, 2026. California-based luxury photography and cinematography honoring the full Persian ceremony, the Sofreh Aghd, and every ritual.',
  // Private couple-specific landing page — must not be indexed.
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Monica — Persian Wedding Photography & Cinematography at Hotel Casa Del Mar | LifeStory.Film',
    description:
      'California-based luxury photography and cinematography for Persian weddings — the full ceremony, the Sofreh Aghd, mirror and candelabra, sugar grinding, honey ritual, and the knife dance, preserved in full.',
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: 'Persian wedding photography and cinematography — LifeStory.Film',
      },
    ],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monica — Persian Wedding Photography & Cinematography at Hotel Casa Del Mar | LifeStory.Film',
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
