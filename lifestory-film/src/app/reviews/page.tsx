import { Navigation } from '@/components/Navigation'
import { ReviewsHero } from '@/components/reviews/ReviewsHero'
import { ReviewPlatforms } from '@/components/reviews/ReviewPlatforms'
import { ReviewStats } from '@/components/reviews/ReviewStats'
import { CustomerReviews } from '@/components/reviews/CustomerReviews'
import { ReviewsCTA } from '@/components/reviews/ReviewsCTA'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Reviews & Testimonials | LifeStory.Film",
  description: "Read authentic reviews from couples who chose LifeStory.Film for their wedding photography and videography. 5.0 stars on The Knot and Google, 7x Best of Weddings winner.",
  keywords: "wedding reviews, client testimonials, LifeStory.Film reviews, wedding photographer reviews, wedding videographer reviews, five star reviews",
  openGraph: {
    title: "Reviews & Testimonials | LifeStory.Film",
    description: "5.0 stars on The Knot and Google. 7x Best of Weddings winner. Read what real couples say about their LifeStory.Film experience.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2357869345.webp', width: 1200, height: 800, alt: 'LifeStory.Film wedding photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reviews & Testimonials | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2357869345.webp'],
  },
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />
      <ReviewsHero />
      <ReviewPlatforms />
      <ReviewStats />
      <CustomerReviews />
      <ReviewsCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
