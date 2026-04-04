import { Navigation } from '@/components/Navigation'
import { FAQPage } from '@/components/faq/FAQPage'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "FAQ | Wedding Photography & Videography | LifeStory.Film",
  description: "Frequently asked questions about wedding photography and videography with LifeStory.Film. Pricing, packages, process, and delivery timelines explained.",
  keywords: "wedding videography FAQ, LifeStory.Film questions, wedding film pricing, wedding videographer questions, wedding video timeline",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does wedding videography cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our combined photo + video packages range from $3,959 to $12,869, depending on coverage length, team size, and deliverables. The Essential package starts at $3,959 for 5 hours of coverage, while the Signature package at $6,928 includes 8 hours of coverage with two photographers and two videographers. For exact pricing based on your wedding date and specific needs, we recommend scheduling a consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in each package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each package includes different levels of coverage and deliverables. All packages include professional editing, color correction, music licensing, and online delivery. Higher tier packages include longer coverage, multiple videographers, same-day highlights, ceremony edits, and premium add-ons like drone footage or extended documentary edits."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer payment plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer flexible payment plans to make our services accessible. Typically, we require a 25% deposit to secure your date, with the remaining balance due 30 days before your wedding. We can also arrange custom payment schedules based on your needs."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between your packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main differences are coverage duration, team size, and deliverables. The Essential package includes single-team coverage and core deliverables. The Signature package adds a second photographer and videographer, more comprehensive coverage, and additional edits. The Multi Day package includes multi-day coverage, rehearsal coverage, extended documentary edits, and premium delivery options."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to receive our wedding film?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delivery times vary by package. The Essential package is delivered within 6-8 weeks, while the Signature and Multi Day packages are completed within 4-6 weeks due to priority processing. We also offer a 48-hour highlight reel for Signature and above to share with friends and family immediately after your wedding."
      }
    },
    {
      "@type": "Question",
      "name": "When should we book our videographer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking 6-12 months in advance, especially for popular wedding dates and seasons. Our calendar fills up quickly, particularly for summer and fall weddings. Early booking also allows more time for planning and ensures you get your preferred package and any additional services."
      }
    },
    {
      "@type": "Question",
      "name": "Do you attend our rehearsal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rehearsal coverage is included in our Multi-day packages and available as an add-on for other packages. We recommend rehearsal attendance for complex ceremonies, unique venues, or when you want additional coverage of pre-wedding events. This helps us understand the ceremony flow and capture better footage on your wedding day."
      }
    },
    {
      "@type": "Question",
      "name": "What's your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We understand that circumstances can change. Cancellations made more than 90 days before your wedding receive a full refund minus a $500 processing fee. Cancellations within 90 days retain the deposit. We're happy to discuss rescheduling options if your plans change due to unforeseen circumstances."
      }
    },
    {
      "@type": "Question",
      "name": "How many videographers will be at our wedding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on your package. The Essential package includes one professional videographer. The Signature and Multi Day packages include two videographers for comprehensive coverage and multiple angles. Having two videographers allows us to capture both wide ceremony shots and intimate reactions simultaneously."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide drone footage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Drone footage is available as an add-on for $500. We're licensed drone operators and will coordinate with your venue to ensure compliance with any restrictions. Drone footage adds stunning aerial perspectives of your venue and surrounding landscape, weather and regulations permitting."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our photographer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We love collaborating with photographers and have worked with many talented professionals. We coordinate closely to ensure we're not in each other's shots and that both teams can capture the best moments. If you need photographer recommendations, we're happy to suggest trusted professionals we've worked with."
      }
    },
    {
      "@type": "Question",
      "name": "What is your travel policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're based in Los Angeles and cover all of Southern California with no travel fee. For weddings within California, a flat travel fee applies depending on distance. For destination weddings — domestic or international — we ask that travel, accommodation, and meals are covered. We've filmed in Hawaii, Mexico, Europe, and across the US. Contact us with your location and we'll send a travel quote within 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What equipment do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We shoot on professional cinema-grade camera systems with a range of prime and zoom lenses suited for low light, documentary, and portrait work. Every setup includes broadcast-quality wireless audio for vows and speeches, and we carry full backup systems for every critical piece of gear. You'll never know we're there — but you'll see everything in the final film."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day highlights?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Same-day highlights are included with the Signature and Multi Day packages. These are 60-90 second highlight reels delivered within 48-72 hours of your wedding, perfect for sharing on social media or with friends and family who couldn't attend."
      }
    },
    {
      "@type": "Question",
      "name": "How do we receive our final films?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All films are delivered via a private online gallery where you can watch, download, and share your videos. Higher tier packages also include a premium USB drive with all files. The online gallery remains active for 2 years, and we maintain archive copies for your peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "Can you edit our film to specific music?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We include professional music licensing in all packages and work with a library of cinema-quality tracks. If you have specific music requests, we can often accommodate them for an additional licensing fee. We'll discuss music preferences during our planning process to ensure your film reflects your style."
      }
    },
    {
      "@type": "Question",
      "name": "Do we need to meet before the wedding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We schedule a planning meeting 4-6 weeks before your wedding to discuss your timeline, key moments, family dynamics, and any special requests. This can be in person, over video call, or phone - whatever works best for you. This ensures we're fully prepared to capture your day perfectly."
      }
    },
    {
      "@type": "Question",
      "name": "What if it rains on our wedding day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weather is never a concern for us! We have experience filming in all conditions and carry weather protection for our equipment. Rain can actually create beautiful, romantic footage. We'll work with you and your planner to adapt to any weather conditions while ensuring great footage."
      }
    },
    {
      "@type": "Question",
      "name": "Can you film our reception and speeches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Reception coverage including speeches, first dances, and party moments are included in all full day packages. We use wireless audio systems to ensure clear speech audio and position ourselves discreetly to capture natural reactions and emotions throughout your celebration."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer engagement sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Engagement sessions are available as a photo add-on starting at $800 and can be added to any photography or combined photo+video package. It's a great way to get comfortable in front of the camera before your wedding day, and the images work beautifully for save-the-dates, wedding websites, and your final gallery. We can also film a short engagement video to incorporate into your wedding film."
      }
    },
    {
      "@type": "Question",
      "name": "Can we request specific shots or moments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We send every couple a shot list and planning questionnaire 4–6 weeks before the wedding. You can request specific family groupings, detail shots, meaningful locations, or moments you don't want missed. We treat your list as a floor — then we go beyond it. The best frames are often the ones no one planned."
      }
    }
  ]
}

export default function FAQPageRoute() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <FAQPage />
      <Footer />
    </main>
  )
}
