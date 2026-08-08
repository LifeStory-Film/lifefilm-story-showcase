import { Navigation } from '@/components/Navigation'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Contact | Wedding Photography & Videography | LifeStory.Film',
  description:
    'Get in touch with LifeStory.Film — luxury wedding photography and videography based in Los Angeles, serving California and worldwide. Check your date and request pricing.',
  alternates: { canonical: 'https://lifestory.film/contact' },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--t-bg-primary)', color: 'var(--t-text-primary)' }}>
      <Navigation />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
