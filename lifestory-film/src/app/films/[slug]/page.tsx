import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

const films = {
  'ryan-and-victoria': {
    title: 'Ryan & Victoria',
    subtitle: 'The Resort at Pelican Hill',
    location: 'The Resort at Pelican Hill, Newport Beach, CA',
    date: 'October 2024',
    category: 'Luxury Resort',
    videoId: 'cp3PmoI9nio',
    embedUrl: 'https://www.youtube.com/embed/cp3PmoI9nio?si=EkwuDwuG3FMy9Uys',
    description:
      'Ryan and Victoria\'s wedding at Pelican Hill was everything a California luxury wedding should be — ocean views at every turn, warm golden light in the late afternoon, and two people genuinely in love. We followed them from morning preparation through their final send-off, letting the day unfold naturally while capturing the small moments that make a film feel real.',
    metaDescription:
      'Watch Ryan & Victoria\'s wedding film shot at The Resort at Pelican Hill, Newport Beach. Cinematic luxury wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg`,
  },
  'katherine-and-harsh': {
    title: 'Katherine & Harsh',
    subtitle: 'Saratoga Springs',
    location: 'Saratoga Springs, CA',
    date: 'September 2024',
    category: 'Indian & Vietnamese',
    videoId: 'G4Mlon9-iLY',
    embedUrl: 'https://www.youtube.com/embed/G4Mlon9-iLY?si=vUBoA_fMh2qzD2kh',
    description:
      'Katherine and Harsh brought two cultures and two families together in the most beautiful way. The multi-day celebration at Saratoga Springs was rich with color, tradition, and genuine joy. We worked to honor every ritual while building a film that felt cohesive — a single love story told through many different lenses.',
    metaDescription:
      'Watch Katherine & Harsh\'s Indian-Vietnamese wedding film at Saratoga Springs. Cinematic multicultural wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/G4Mlon9-iLY/maxresdefault.jpg`,
  },
  'josh-and-whitney': {
    title: 'Josh & Whitney',
    subtitle: 'New York',
    location: 'New York, NY',
    date: 'August 2024',
    category: 'Destination',
    videoId: 'WCjUi2yqK3U',
    embedUrl: 'https://www.youtube.com/embed/WCjUi2yqK3U?si=BGGRwNil8rAHfLIh',
    description:
      'Josh and Whitney chose New York as the backdrop for their destination wedding — a city that never stops moving, wrapped around two people who finally were. The energy of the city and the intimacy of their ceremony created a film with its own rhythm, and we leaned into that contrast.',
    metaDescription:
      'Watch Josh & Whitney\'s New York destination wedding film. Cinematic wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/WCjUi2yqK3U/maxresdefault.jpg`,
  },
  'ayaka-and-kyan': {
    title: 'Ayaka & Kyan',
    subtitle: 'Malibu',
    location: 'Malibu, CA',
    date: 'July 2024',
    category: 'Coastal',
    videoId: '17rIApee9B8',
    embedUrl: 'https://www.youtube.com/embed/17rIApee9B8?si=1iWNkH4CHI1EkXKt',
    description:
      'Ayaka and Kyan\'s Malibu wedding was quiet, warm, and full of the kind of moments you can\'t plan — a laugh mid-vow, a look that says everything. The Pacific stretched out behind them all day. We focused on what made them them, and let the ocean handle the rest.',
    metaDescription:
      'Watch Ayaka & Kyan\'s Malibu beach wedding film. Cinematic coastal wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/17rIApee9B8/maxresdefault.jpg`,
  },
  'michelle-and-jason': {
    title: 'Michelle & Jason',
    subtitle: 'Los Angeles',
    location: 'Los Angeles, CA',
    date: 'June 2024',
    category: 'Indian & Jewish',
    videoId: 'z_6rqvk2tAs',
    embedUrl: 'https://www.youtube.com/embed/z_6rqvk2tAs?si=43vuFod-iY4Pvp0w',
    description:
      'Michelle and Jason\'s wedding brought together Indian and Jewish traditions in a two-day celebration that never slowed down. Between the haldi and the huppah, the mehndi and the hora, we were always moving — because they were. The final film captures all of it without losing the thread.',
    metaDescription:
      'Watch Michelle & Jason\'s Indian-Jewish wedding film in Los Angeles. Cinematic multicultural wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/z_6rqvk2tAs/maxresdefault.jpg`,
  },
  'jazza-and-naim': {
    title: 'Jazza & Naim',
    subtitle: 'Palos Verdes',
    location: 'Palos Verdes, CA',
    date: 'May 2024',
    category: 'Indian',
    videoId: 'ETxaM39nn4E',
    embedUrl: 'https://www.youtube.com/embed/ETxaM39nn4E?si=1iWNkH4CHI1EkXKt',
    description:
      'Jazza and Naim celebrated their Indian wedding on the dramatic cliffs of Palos Verdes, with sweeping coastal views that made every frame cinematic by default. We worked to match the scale of the setting with the warmth of the ceremony — and the result speaks for itself.',
    metaDescription:
      'Watch Jazza & Naim\'s Palos Verdes Indian wedding film. Cinematic coastal wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/ETxaM39nn4E/maxresdefault.jpg`,
  },
  'serena-and-daniel': {
    title: 'Serena & Daniel',
    subtitle: 'Los Angeles',
    location: 'Los Angeles, CA',
    date: 'February 2024',
    category: 'Classic',
    videoId: 'vvYnUEuwOGM',
    embedUrl: 'https://www.youtube.com/embed/vvYnUEuwOGM',
    description:
      'Serena and Daniel\'s Los Angeles wedding was all old-world charm and timeless elegance. Their ceremony had the kind of atmosphere that films itself — and we made sure nothing was missed.',
    metaDescription:
      'Watch Serena & Daniel\'s elegant Los Angeles wedding film. Cinematic wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/vvYnUEuwOGM/maxresdefault.jpg`,
  },
  'ayaka-and-kyan-palos-verdes': {
    title: 'Ayaka & Kyan',
    subtitle: 'Palos Verdes',
    location: 'Palos Verdes, CA',
    date: 'May 2024',
    category: 'Indian',
    videoId: 'ETxaM39nn4E',
    embedUrl: 'https://www.youtube.com/embed/ETxaM39nn4E?si=1iWNkH4CHI1EkXKt',
    description:
      'Filmed on the dramatic cliffs of Palos Verdes, this Indian wedding celebration unfolded over sweeping coastal views that made every frame cinematic by default. We worked to match the scale of the setting with the warmth of the ceremony — and the result speaks for itself.',
    metaDescription:
      'Watch Ayaka & Kyan\'s Palos Verdes Indian wedding film. Cinematic coastal wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/ETxaM39nn4E/maxresdefault.jpg`,
  },
  'charlotte-and-john': {
    title: 'Charlotte & John',
    subtitle: 'San Francisco',
    location: 'San Francisco, CA',
    date: 'April 2024',
    category: 'Destination',
    videoId: 'D_vIC41fA4U',
    embedUrl: 'https://www.youtube.com/embed/D_vIC41fA4U?si=DlnudIoq-MnZGBad',
    description:
      'Charlotte and John brought us up to San Francisco for a weekend that mixed city sophistication with genuine intimacy. Fog rolling over the bay, the warmth of a city they love, and a ceremony that moved everyone in the room — including us.',
    metaDescription:
      'Watch Charlotte & John\'s San Francisco destination wedding film. Cinematic wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/D_vIC41fA4U/maxresdefault.jpg`,
  },
  'carrie-and-grant': {
    title: 'Carrie & Grant',
    subtitle: 'Malibu',
    location: 'Malibu, CA',
    date: 'March 2024',
    category: 'Coastal',
    videoId: 'SoXEpK1tGYo',
    embedUrl: 'https://www.youtube.com/embed/SoXEpK1tGYo?si=BGGRwNil8rAHfLIh',
    description:
      'Carrie and Grant\'s Malibu wedding had a magic-hour ceremony that lasted exactly long enough. The light was perfect, the ocean was there, and everyone knew it was one of those days. We built a film around those twenty minutes and everything that led up to them.',
    metaDescription:
      'Watch Carrie & Grant\'s Malibu wedding film. Cinematic coastal wedding videography by LifeStory.Film.',
    ogImage: `https://img.youtube.com/vi/SoXEpK1tGYo/maxresdefault.jpg`,
  },
  // Legacy slugs preserved
  'sarah-michael-napa-valley': {
    title: 'Sarah & Michael',
    subtitle: 'Napa Valley',
    location: 'Auberge du Soleil, Napa Valley, CA',
    date: 'September 2023',
    category: 'Luxury Resort',
    videoId: 'tocAcQrJNlE',
    embedUrl: 'https://www.youtube.com/embed/tocAcQrJNlE?si=GMMxCP6zZD6zbucd',
    description:
      'Sarah and Michael\'s intimate wedding at Auberge du Soleil showcased the beauty of Napa Valley\'s rolling vineyards, golden hour portraits among the vines, and a romantic reception under the stars.',
    metaDescription:
      'Watch Sarah & Michael\'s Napa Valley wedding film at Auberge du Soleil. Luxury wedding videography by LifeStory.Film.',
    ogImage: 'https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/99b0baa2-f383-4064-9924-58e3986719a9/French+Riviera+Wedding+Videography.jpg',
  },
  'jessica-david-big-sur': {
    title: 'Jessica & David',
    subtitle: 'Big Sur',
    location: 'Big Sur, California',
    date: 'August 2023',
    category: 'Coastal',
    videoId: 'tocAcQrJNlE',
    embedUrl: 'https://www.youtube.com/embed/tocAcQrJNlE?si=GMMxCP6zZD6zbucd',
    description:
      'Jessica and David\'s Big Sur wedding embraced the dramatic coastline and redwood groves. Their ceremony overlooking the Pacific Ocean was both intimate and breathtaking.',
    metaDescription:
      'Watch Jessica & David\'s Big Sur coastal wedding film. Luxury wedding videography by LifeStory.Film.',
    ogImage: 'https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg',
  },
  'emma-james-malibu': {
    title: 'Emma & James',
    subtitle: 'Malibu',
    location: 'Private Malibu Estate',
    date: 'June 2023',
    category: 'Coastal',
    videoId: 'tocAcQrJNlE',
    embedUrl: 'https://www.youtube.com/embed/tocAcQrJNlE?si=GMMxCP6zZD6zbucd',
    description:
      'Emma and James celebrated their love with a chic beachfront wedding in Malibu. The ceremony took place on a private beach with the Pacific Ocean as their backdrop.',
    metaDescription:
      'Watch Emma & James\'s Malibu beach wedding film. Luxury wedding videography by LifeStory.Film.',
    ogImage: 'https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg',
  },
}

type FilmSlug = keyof typeof films

export async function generateStaticParams() {
  return Object.keys(films).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const film = films[slug as FilmSlug]

  if (!film) return { title: 'Film Not Found | LifeStory.Film' }

  const title = `${film.title} — ${film.subtitle} Wedding Film | LifeStory.Film`

  return {
    title,
    description: film.metaDescription,
    alternates: {
      canonical: `https://lifestory.film/films/${slug}`,
    },
    openGraph: {
      title,
      description: film.metaDescription,
      type: 'video.other',
      images: [{ url: film.ogImage, width: 1280, height: 720, alt: `${film.title} wedding film` }],
      siteName: 'LifeStory.Film',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: film.metaDescription,
      images: [film.ogImage],
    },
  }
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const film = films[slug as FilmSlug]

  if (!film) notFound()

  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      <article className="pt-24 pb-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 mb-8">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#BFA181] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#films" className="hover:text-[#BFA181] transition-colors">Films</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{film.title}</span>
          </nav>
        </div>

        {/* Header */}
        <header className="container mx-auto px-6 mb-10 max-w-4xl">
          <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">{film.category}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
            {film.title}
          </h1>
          <p className="text-xl text-gray-400 font-light">{film.location} · {film.date}</p>
        </header>

        {/* Film embed */}
        <div className="container mx-auto px-6 mb-12 max-w-5xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1a1916]">
            <iframe
              src={film.embedUrl}
              title={`${film.title} — ${film.subtitle} Wedding Film`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="container mx-auto px-6 max-w-2xl mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">{film.description}</p>
        </div>

        {/* View more films */}
        <div className="container mx-auto px-6 max-w-2xl mb-8 text-center">
          <Link
            href="/videography"
            className="text-[#BFA181] hover:text-[#d4b896] transition-colors text-sm tracking-wide"
          >
            View more films →
          </Link>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-[#1a1916] rounded-2xl p-10 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-3">Want a film like this?</h2>
            <p className="text-gray-400 mb-6">Tell us your date and we'll let you know if we're available.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#BFA181] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#957C3D] transition-colors"
            >
              Check date availability
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
