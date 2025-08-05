import { Navigation } from '@/components/Navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FilmDetailPage } from '@/components/films/FilmDetailPage'
import { Footer } from '@/components/Footer'
import { notFound } from 'next/navigation'

// This would typically come from a database or CMS
const films = {
  'sarah-michael-napa-valley': {
    id: 1,
    title: "Sarah & Michael",
    subtitle: "A Napa Valley Love Story",
    location: "Auberge du Soleil, Napa Valley",
    date: "September 15, 2024",
    duration: "4:32",
    category: "Luxury Resort",
    description: "Sarah and Michael's intimate wedding at Auberge du Soleil showcased the beauty of Napa Valley's rolling vineyards. Their celebration was a perfect blend of elegance and natural beauty, with golden hour portraits among the vines and a romantic reception under the stars.",
    videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/99b0baa2-f383-4064-9924-58e3986719a9/French+Riviera+Wedding+Videography.jpg",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/99b0baa2-f383-4064-9924-58e3986719a9/French+Riviera+Wedding+Videography.jpg",
      "https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg",
      "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg"
    ],
    behindTheScenes: {
      title: "Behind the Scenes",
      content: "Filming at Auberge du Soleil presented unique opportunities with its stunning terraced vineyards and panoramic views. We used a combination of handheld and stabilized shots to capture the intimate moments, while aerial footage showcased the breathtaking landscape. The golden hour lighting provided the perfect romantic atmosphere for the couple's portraits.",
      videoUrl: "https://www.youtube.com/embed/tocAcQrJNlE?si=GMMxCP6zZD6zbucd",
      highlights: [
        "Sunrise preparation shots in the vineyard suite",
        "Ceremony filmed with three camera angles",
        "Aerial drone footage of the valley at sunset",
        "Reception dancing under string lights"
      ]
    },
    testimonial: {
      quote: "LifeStory.Film captured our day beyond our wildest dreams. Watching our film brings back every emotion from that perfect day. The way they filmed our first look in the vineyards still gives us chills. It's not just a wedding video - it's a work of art that we'll treasure forever.",
      author: "Sarah & Michael",
      details: "The couple chose our Signature package for comprehensive coverage of their destination wedding."
    },
    weddingDetails: {
      venue: "Auberge du Soleil",
      guests: 85,
      season: "Early Fall",
      style: "Luxury Resort",
      colors: "Blush, Gold, and Sage Green",
      highlights: [
        "Vineyard ceremony at golden hour",
        "Reception on the terrace with valley views",
        "Live acoustic music during dinner",
        "Sparkler send-off under the stars"
      ]
    }
  },
  'jessica-david-big-sur': {
    id: 2,
    title: "Jessica & David",
    subtitle: "Coastal Elegance",
    location: "Big Sur, California",
    date: "August 20, 2024",
    duration: "5:12",
    category: "Coastal",
    description: "Jessica and David's Big Sur wedding embraced the dramatic coastline and redwood groves. Their ceremony overlooking the Pacific Ocean was both intimate and breathtaking, with natural beauty providing the perfect backdrop for their vows.",
    videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg",
      "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg",
      "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography"
    ],
    behindTheScenes: {
      title: "Coastal Cinematography",
      content: "Big Sur's rugged coastline provided incredible natural lighting and dramatic backdrops. We had to work carefully with the wind and changing light conditions, using specialized equipment to capture smooth footage despite the coastal elements. The redwood grove ceremony required careful audio placement to capture vows over ocean sounds.",
      videoUrl: "https://www.youtube.com/embed/tocAcQrJNlE?si=GMMxCP6zZD6zbucd",
      highlights: [
        "Ceremony setup overlooking McWay Falls",
        "First look in the redwood grove",
        "Reception under a canopy of trees",
        "Sunset portraits on the clifftop"
      ]
    },
    testimonial: {
      quote: "Working with LifeStory.Film in Big Sur was incredible. They captured the raw beauty of the coast and the intimacy of our ceremony perfectly. Every time we watch our film, we're transported back to that magical day with the ocean breeze and the sound of waves.",
      author: "Jessica & David",
      details: "The couple selected our Full Day package with additional coastal location coverage."
    },
    weddingDetails: {
      venue: "Private Big Sur Estate",
      guests: 65,
      season: "Late Summer",
      style: "Coastal Bohemian",
      colors: "Ocean Blue, Sage, and Cream",
      highlights: [
        "Cliffside ceremony with ocean views",
        "Redwood grove first look",
        "Acoustic guitar ceremony music",
        "Sunset cocktails on the terrace"
      ]
    }
  },
  'emma-james-malibu': {
    id: 3,
    title: "Emma & James",
    subtitle: "Malibu Romance",
    location: "Malibu, California",
    date: "June 12, 2024",
    duration: "3:45",
    category: "Beach",
    description: "Emma and James celebrated their love with a chic beachfront wedding in Malibu. The ceremony took place on a private beach with the Pacific Ocean as their backdrop, followed by a sophisticated reception with panoramic coastal views.",
    videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    thumbnail: "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg",
    gallery: [
      "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg",
      "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography",
      "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/99b0baa2-f383-4064-9924-58e3986719a9/French+Riviera+Wedding+Videography.jpg"
    ],
    behindTheScenes: {
      title: "Beach Wedding Cinematography",
      content: "Malibu's stunning coastline provided the perfect setting for Emma and James's romantic beach wedding. We used multiple camera angles to capture both the intimate ceremony moments and the expansive ocean views. The challenge was balancing the bright beach lighting while maintaining the romantic atmosphere.",
      videoUrl: "https://www.youtube.com/embed/tocAcQrJNlE?si=GMMxCP6zZD6zbucd",
      highlights: [
        "Beachfront ceremony at golden hour",
        "Couple portraits on the bluffs",
        "Reception with ocean view terrace",
        "Dancing under market lights"
      ]
    },
    testimonial: {
      quote: "LifeStory.Film made our Malibu wedding feel like a dream. The way they captured the ocean, the sunset, and our joy was absolutely perfect. Our families still talk about how beautiful our wedding film is.",
      author: "Emma & James",
      details: "The couple chose our Essential package with beach location specialty coverage."
    },
    weddingDetails: {
      venue: "Private Malibu Estate",
      guests: 95,
      season: "Early Summer",
      style: "Coastal Chic",
      colors: "Navy, White, and Gold",
      highlights: [
        "Beach ceremony with white florals",
        "Cocktail hour on the bluffs",
        "Farm-to-table dinner reception",
        "Firepit lounge with s'mores"
      ]
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(films).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const film = films[slug as keyof typeof films]

  if (!film) {
    return {
      title: 'Film Not Found | LifeStory.Film',
    }
  }

  return {
    title: `${film.title} - ${film.subtitle} | LifeStory.Film`,
    description: film.description,
    keywords: `${film.title}, ${film.location}, wedding film, luxury wedding videography, LifeStory.Film`,
  }
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const film = films[slug as keyof typeof films]

  if (!film) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      <FilmDetailPage film={film} />
      <Footer />
    </main>
  )
}
