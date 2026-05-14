import type { Metadata } from 'next'

const OG_IMAGE = 'https://img.youtube.com/vi/cAmjboBcwHM/maxresdefault.jpg'

export const metadata: Metadata = {
  title: 'Karen & Edward — Filipino Catholic Wedding Film | LifeStory.Film',
  description:
    'A custom proposal for Karen & Edward. California-based luxury cinematography for Filipino Catholic weddings — full coverage of the entire Catholic mass, every reading, vow, and Filipino unity ritual.',
  // Private couple-specific landing page — must not be indexed.
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Karen & Edward — Filipino Catholic Wedding Film | LifeStory.Film',
    description:
      'California-based luxury cinematography for Filipino Catholic weddings — the entire Catholic mass, every reading, vow, and Filipino unity ritual, preserved in full.',
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: 'Filipino Catholic wedding film — LifeStory.Film',
      },
    ],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karen & Edward — Filipino Catholic Wedding Film | LifeStory.Film',
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
