import { Navigation } from '@/components/Navigation'
import { ReviewsHero } from '@/components/reviews/ReviewsHero'
import { ReviewPlatforms } from '@/components/reviews/ReviewPlatforms'
import { ReviewStats } from '@/components/reviews/ReviewStats'
import { VideoTestimonial } from '@/components/reviews/VideoTestimonial'
import { CustomerReviews } from '@/components/reviews/CustomerReviews'
import { ReviewsCTA } from '@/components/reviews/ReviewsCTA'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Reviews | LifeStory.Film - Client Testimonials & 5-Star Reviews",
  description: "Read authentic reviews from couples who chose LifeStory.Film for their wedding photography and videography. Over 400+ five-star reviews across all platforms.",
  keywords: "wedding reviews, client testimonials, LifeStory.Film reviews, wedding photographer reviews, wedding videographer reviews, five star reviews",
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />
      <ReviewsHero />
      <ReviewPlatforms />
      <ReviewStats />
      <VideoTestimonial />
      <CustomerReviews />
      <ReviewsCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
