'use client'

import { AnimatedSection } from '../AnimatedSection'

export function CustomerReviews() {
  const reviews = [
    {
      name: "Sarah & Michael",
      rating: 5.0,
      review: "LifeStory.Film exceeded every expectation we had. From our first consultation to receiving our final film, their team was professional, creative, and truly understood our vision. The cinematography is breathtaking, and watching our wedding film feels like reliving the most magical day of our lives. We cannot recommend them highly enough!"
    },
    {
      name: "Jessica Chen",
      rating: 5.0,
      review: "Absolutely incredible experience from start to finish! The team was so professional and made us feel comfortable throughout the entire day. The final video brought tears to our eyes - they captured every emotion, every laugh, every tender moment perfectly. The quality is outstanding and the storytelling is beautiful."
    },
    {
      name: "David & Emma",
      rating: 5.0,
      review: "Working with LifeStory.Film was the best decision we made for our wedding. Their attention to detail is remarkable, and the way they capture authentic moments is truly special. Our friends and family are still talking about how amazing our wedding film is. Professional, talented, and genuinely wonderful people to work with."
    },
    {
      name: "Maria Rodriguez",
      rating: 5.0,
      review: "We were blown away by the final result. The team managed to capture the essence of our day in such a beautiful way. From the ceremony to the reception, every important moment was documented with artistic flair. The editing is seamless and the music selection was perfect. This is more than just a wedding video - it's a masterpiece."
    },
    {
      name: "James & Taylor",
      rating: 5.0,
      review: "LifeStory.Film delivered beyond our wildest dreams. The cinematography is Hollywood-quality, and the storytelling approach made our wedding film feel like a movie. They were unobtrusive during the day but captured everything beautifully. The team is professional, creative, and truly passionate about their craft."
    },
    {
      name: "Rachel Thompson",
      rating: 5.0,
      review: "From our engagement session to our wedding day, LifeStory.Film was exceptional. They took the time to understand our story and captured it perfectly. The final film is emotional, beautiful, and something we'll treasure forever. Their attention to detail and artistic vision is unmatched. Highly recommend!"
    },
    {
      name: "Alex & Jordan",
      rating: 5.0,
      review: "We couldn't be happier with our choice to work with LifeStory.Film. The team was professional, friendly, and incredibly talented. They captured our day in the most beautiful way possible. The cinematography is stunning, and the way they edited our story together brought us to tears. Worth every penny!"
    },
    {
      name: "Sophie Williams",
      rating: 5.0,
      review: "LifeStory.Film created magic for our wedding day. The quality of their work is incredible - from the camera work to the editing to the final presentation. They captured moments we didn't even know happened and created a film that tells our story perfectly. Professional, artistic, and absolutely wonderful to work with."
    },
    {
      name: "Robert & Lisa",
      rating: 5.0,
      review: "The team at LifeStory.Film is absolutely amazing. They were professional, creative, and made us feel so comfortable on our wedding day. The final film is a work of art - the cinematography is breathtaking and the storytelling is perfect. We watch it regularly and it brings back all the emotions from that special day."
    },
    {
      name: "Amanda Foster",
      rating: 5.0,
      review: "Working with LifeStory.Film was one of the best decisions we made for our wedding. Their artistic vision and technical skill created a film that is beyond anything we imagined. They captured the love, joy, and magic of our day perfectly. The team is professional, talented, and truly cares about their craft."
    },
    {
      name: "Chris & Monica",
      rating: 5.0,
      review: "LifeStory.Film delivered exactly what we hoped for and more. The cinematography is stunning, the editing is seamless, and the final product is a beautiful representation of our love story. They were professional throughout the process and created something we'll treasure for the rest of our lives."
    },
    {
      name: "Jennifer Lee",
      rating: 5.0,
      review: "Exceptional work from an exceptional team. LifeStory.Film captured our wedding day with such artistry and emotion. The final film is cinematic, beautiful, and tells our story in the most perfect way. They were professional, creative, and wonderful to work with. We couldn't recommend them more highly!"
    }
  ]

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )

  return (
    <section className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <AnimatedSection
              key={review.name}
              direction="up"
              delay={index * 0.1}
              className="bg-black border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{review.name}</h3>
                <StarRating rating={review.rating} />
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{review.review}"
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
