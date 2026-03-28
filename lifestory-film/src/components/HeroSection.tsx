'use client'

import { useEffect, useState, useRef } from 'react'
import { LuxuryButton } from './LuxuryButton'
import { PrimaryCTA } from './PrimaryCTA'
import { ParallaxSection, ParallaxContainer } from './ParallaxSection'
import { useLuxuryCursor } from './LuxuryCursor'
import { OptimizedYouTubeEmbed } from './OptimizedYouTubeEmbed'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [badgesVisible, setBadgesVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const badgesRef = useRef<HTMLDivElement>(null)
  const viewCursor = useLuxuryCursor('view')
  const playCursor = useLuxuryCursor('play')

  useEffect(() => {
    setIsMounted(true)
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Intersection Observer for trust badges
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBadgesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    )

    if (badgesRef.current) {
      observer.observe(badgesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ParallaxContainer className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background - Optimized */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <OptimizedYouTubeEmbed
          videoId="YzK1dHhkZTU"
          title="LifeStory.Film Wedding Videography"
          autoplay={true}
          muted={true}
          loop={true}
          controls={false}
          placeholderQuality="maxres"
        />

        {/* Video Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Floating Particles */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[hsl(var(--luxury-gold)/0.6)] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content with Sophisticated Typography */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-1500 ${isLoaded ? 'luxury-fade-up' : 'opacity-0'}`}>
          {/* Luxury Caption */}
          <div className="luxury-caption mb-8 opacity-90 text-white drop-shadow-lg">
            Cinematic Excellence • Since 2010
          </div>

          {/* Main Heading */}
          <h1 className="hero-text luxury-heading mb-8 drop-shadow-2xl">
            <span className="luxury-text-gradient">Your wedding film should</span>
            <br />
            <span className="luxury-text-gradient italic font-light">
              make you cry.
            </span>
            <br />
            <span className="luxury-text-gradient text-[0.7em]">Every time you watch it.</span>
          </h1>

          {/* Subheadline */}
          <p className="luxury-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-95 text-white drop-shadow-lg">
            Cinematic wedding films for couples who want more than a highlight reel — made by a team that's been doing this since 2010.
          </p>

          {/* Single Primary CTA + subtle text link */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <PrimaryCTA
              variant="primary"
              onClick={() => scrollToSection('films')}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              See Our Films
            </PrimaryCTA>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/70 hover:text-[#BFA181] text-sm tracking-wide transition-colors duration-200 underline underline-offset-4"
            >
              Check date availability →
            </button>
          </div>

          {/* Trust Indicators - Prominent */}
          <div
            ref={badgesRef}
            className={`grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 transition-all duration-1000 ${
              badgesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { number: "1,000+", label: "Couples Served", icon: "💕", delay: "0.1s" },
              { number: "15+", label: "Years Experience", icon: "⭐", delay: "0.2s" },
              { number: "5.0", label: "Google Rating", icon: "🏆", delay: "0.3s" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-700 ${
                  badgesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: badgesVisible ? stat.delay : '0s'
                }}
              >
                <div className="text-3xl mb-2 transition-transform duration-500 hover:scale-125">{stat.icon}</div>
                <div className="luxury-heading text-3xl md:text-4xl mb-2 text-white drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="luxury-caption text-white/90 drop-shadow-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Venue logo strip */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-6 text-center">Filmed at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                'Pelican Hill',
                'Four Seasons',
                'Ritz-Carlton',
                'Malibu Rocky Oaks',
              ].map((venue) => (
                <span
                  key={venue}
                  className="text-white/35 hover:text-white/60 transition-colors duration-300 text-sm md:text-base font-light tracking-widest uppercase select-none"
                >
                  {venue}
                </span>
              ))}
            </div>
          </div>

          {/* Social Proof Testimonial */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-lg italic mb-3">
                "They didn't just film our wedding—they captured the feeling of it. Watching our film brings us right back to that day."
              </p>
              <p className="text-white/70 text-sm">— Sarah & Michael, 2024</p>
            </div>
          </div>

        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--luxury-gold)/0.15)] rounded-full blur-[100px] luxury-glow"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[hsl(var(--luxury-gold)/0.1)] rounded-full blur-[80px]"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </ParallaxContainer>
  )
}
