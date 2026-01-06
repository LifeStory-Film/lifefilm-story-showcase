'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { PrimaryCTA } from './PrimaryCTA'
import { useLuxuryCursor } from './LuxuryCursor'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const cursorProps = useLuxuryCursor('pointer')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const isActivePage = (path: string) => pathname === path

  const getNavLinkClass = (path: string) => {
    const baseClass = "relative text-sm font-medium transition-all duration-500 group"
    if (isActivePage(path)) {
      return `${baseClass} text-[hsl(var(--luxury-gold))] font-semibold`
    }
    return `${baseClass} text-[hsl(var(--luxury-platinum))] hover:text-[hsl(var(--luxury-gold))]`
  }

  const NavLink = ({ href, children, onClick }: { href?: string, children: React.ReactNode, onClick?: () => void }) => {
    const linkClass = href ? getNavLinkClass(href) : "relative text-sm font-medium transition-all duration-500 group text-[hsl(var(--luxury-platinum))] hover:text-[hsl(var(--luxury-gold))]"

    const content = (
      <>
        {children}
        {/* Luxury underline effect */}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[hsl(var(--luxury-gold))] to-transparent transition-all duration-500 group-hover:w-full" />
        {/* Glow effect on hover */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[hsl(var(--luxury-gold)/0.05)] rounded blur-sm" />
      </>
    )

    if (href) {
      return (
        <Link href={href} className={linkClass} {...cursorProps}>
          {content}
        </Link>
      )
    }

    return (
      <button onClick={onClick} className={linkClass} {...cursorProps}>
        {content}
      </button>
    )
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled
        ? 'glass-luxury backdrop-blur-xl py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
        : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with Luxury Typography */}
        <Link
          href="/"
          className="group relative"
          {...cursorProps}
        >
          <div className="luxury-heading text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 group-hover:scale-105">
            <span className="luxury-text-gradient">LifeStory</span>
            <span className="text-[hsl(var(--luxury-platinum)/0.8)]">.Film</span>
          </div>
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[hsl(var(--luxury-gold)/0.1)] rounded-lg blur-lg -z-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="/photography">Photography</NavLink>
          <NavLink href="/videography">Videography</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
          {...cursorProps}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block w-6 h-0.5 bg-[hsl(var(--luxury-platinum))] transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
            }`} />
            <span className={`absolute block w-6 h-0.5 bg-[hsl(var(--luxury-platinum))] transition-all duration-300 top-3 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute block w-6 h-0.5 bg-[hsl(var(--luxury-platinum))] transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
            }`} />
          </div>
          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[hsl(var(--luxury-gold)/0.1)] rounded-full blur-sm" />
        </button>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <PrimaryCTA
            variant="primary"
            onClick={() => scrollToSection('contact')}
          >
            Inquire
          </PrimaryCTA>
        </div>
      </div>

      {/* Mobile Menu with Luxury Styling */}
      <div className={`lg:hidden transition-all duration-700 overflow-hidden ${
        isMobileMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-luxury border-t border-[hsl(var(--luxury-smoke)/0.3)] backdrop-blur-xl">
          <div className="px-6 py-8 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <NavLink href="/photography">Photography</NavLink>
              <NavLink href="/videography">Videography</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/reviews">Reviews</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-[hsl(var(--luxury-smoke)/0.3)]">
              <PrimaryCTA
                variant="primary"
                onClick={() => {
                  scrollToSection('contact')
                  setIsMobileMenuOpen(false)
                }}
                className="w-full"
              >
                Inquire
              </PrimaryCTA>
            </div>

            {/* Contact Info */}
            <div className="pt-6 space-y-3 text-center">
              <div className="luxury-caption">Get in Touch</div>
              <div className="luxury-body text-sm">
                <div>info@lifestory.film</div>
                <div>323.556.4362</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active page indicator */}
      {pathname !== '/' && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--luxury-gold)/0.5)] to-transparent" />
      )}
    </nav>
  )
}
