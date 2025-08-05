'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "LifeStory.Film exceeded every expectation we had. From our first consultation to receiving our final film, their team was professional, creative, and truly understood our vision. The cinematography is breathtaking, and watching our wedding film feels like reliving the most magical day of our lives. Every time we watch it, we discover new beautiful moments we didn't even know were captured. We cannot recommend them highly enough!",
      author: "Sarah & James",
      location: "Napa Valley Wedding",
      image: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/99b0baa2-f383-4064-9924-58e3986719a9/French+Riviera+Wedding+Videography.jpg"
    },
    {
      quote: "Working with LifeStory.Film was an absolute dream. They captured our love story in the most beautiful, cinematic way. Watching our film feels like experiencing our day all over again. The emotion, the details, the love - everything is perfectly preserved.",
      author: "Emily & Michael",
      location: "Malibu Coastal Wedding",
      image: "https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg"
    },
    {
      quote: "The team at LifeStory.Film has an incredible eye for detail and storytelling. Our wedding film is more than just a video - it's a work of art that captures the essence of our relationship and the joy of our celebration.",
      author: "Jessica & David",
      location: "Beverly Hills Wedding",
      image: "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            client
            <br />
            <span className="text-gray-400">love stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Hear from couples who trusted us to capture their most precious moments.
          </p>
        </AnimatedSection>

        {/* Main Testimonial Display */}
        <AnimatedSection direction="fade" delay={0.4} className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background Image */}
            <div
              className="h-96 md:h-[500px] rounded-2xl bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url('${testimonials[activeTestimonial].image}')` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-4xl">
                  <blockquote className="text-xl md:text-2xl text-white italic font-light leading-relaxed mb-8">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>

                  <div className="text-white">
                    <div className="text-lg font-semibold">{testimonials[activeTestimonial].author}</div>
                    <div className="text-gray-300 text-sm">{testimonials[activeTestimonial].location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection direction="fade" delay={0.8} className="mt-24">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5.0</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Referral Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">72hr</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
