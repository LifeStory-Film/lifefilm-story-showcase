import { Navigation } from '@/components/Navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FAQPage } from '@/components/faq/FAQPage'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "FAQ | LifeStory.Film - Wedding Videography Questions Answered",
  description: "Get answers to frequently asked questions about wedding videography, pricing, timelines, and our services. Everything you need to know about LifeStory.Film.",
  keywords: "wedding videography FAQ, LifeStory.Film questions, wedding film pricing, wedding videographer questions, wedding video timeline",
}

export default function FAQPageRoute() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      <FAQPage />
      <Footer />
    </main>
  )
}
