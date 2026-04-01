'use client'

import { AnimatedSection } from '../AnimatedSection'

export function CustomerReviews() {
  const reviews = [
    {
      name: "Sarah W.",
      review: "Choosing LifeStory.Film for our wedding was one of the best decisions we made! Their photographers and videographers blended seamlessly into the background, yet were always in the right place at the right time. The final video was a cinematic masterpiece."
    },
    {
      name: "Maggie A.",
      review: "Rick and his team were amazing to work with and our photos came out beautifully! They inconspicuously took candid pictures which was great, worked with us when it was raining and quickly came up with an alternative location. The photos turned out awesome."
    },
    {
      name: "Jennifer R.",
      review: "Rick was our main contact and he was extremely responsive and helpful throughout the planning process. We used LifeStory.Film for photography and videography. The whole team really made us feel comfortable. We just got our photos and videos back and they look amazing!"
    },
    {
      name: "Merle S.",
      review: "We had the most non-traditional, ethnic-fusion wedding and they rolled with all our punches. The photos and video were the perfect blend of spontaneous emotional moments and artistic images you'd see in a high-end glossy. Our family keeps saying our wedding could be from a magazine."
    },
    {
      name: "Kaitlyn W.",
      review: "lifestory.film is the best! Beautifully creative! You will definitely be blessed to have them capture your milestones and specially weddings!"
    },
    {
      name: "Alexandra F.",
      review: "I'm so glad we have this video to look back on — it's something we'll cherish forever. If you're on the fence about booking lifestory.film, don't hesitate. You'll be in great hands!"
    }
  ]

  const Stars = () => (
    <div className="flex mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )

  return (
    <section className="py-32 bg-[#1a1916]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Verified Reviews</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            From Our Couples
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <AnimatedSection
              key={review.name}
              direction="up"
              delay={index * 0.1}
              className="bg-[#211f1c] border border-white/8 rounded-2xl p-8 hover:border-[#BFA181]/30 transition-all duration-300"
            >
              <Stars />
              <p className="text-white/80 leading-relaxed mb-6 font-light">
                "{review.review}"
              </p>
              <div className="border-t border-white/8 pt-4">
                <div className="text-white font-semibold text-sm">{review.name}</div>
                <div className="text-[#BFA181] text-xs mt-1 tracking-wide">Verified · The Knot</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
