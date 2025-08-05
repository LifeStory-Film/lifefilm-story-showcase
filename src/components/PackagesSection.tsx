'use client'

import { useState, useEffect } from 'react'
import { PrimaryCTA } from './PrimaryCTA'

interface Package {
  id: string
  name: string
  basePrice: number
  monthlyPrice: number
  duration: string
  team: string
  description: string
  features: string[]
  popular: boolean
  limited?: boolean
}

interface PricingFactor {
  id: string
  name: string
  multiplier: number
  description: string
}

interface CustomFeature {
  id: string
  name: string
  price: number
  category: 'video' | 'photo' | 'coverage' | 'delivery'
  description: string
}

const COMBO_PACKAGES: Package[] = [
  {
    id: "essential",
    name: "Essential",
    basePrice: 5200,
    monthlyPrice: 1300,
    duration: "5 hours",
    team: "1 photographer + 1 videographer",
    description: "Perfect for intimate ceremonies with photo and video coverage.",
    features: [
      "300+ edited photos",
      "3-4 min feature film",
      "Color correction",
      "Music license",
      "Online gallery",
      "USB drive delivery",
      "6-8 week delivery"
    ],
    popular: false
  },
  {
    id: "signature",
    name: "Signature",
    basePrice: 8400,
    monthlyPrice: 2100,
    duration: "Full day",
    team: "2 photographers + 2 videographers",
    description: "Our most popular package with dual teams for comprehensive coverage.",
    features: [
      "600+ edited photos",
      "Teaser photos (48 hours)",
      "5-6 min feature film",
      "Color correction",
      "Music license",
      "Ceremony & speeches edit",
      "Professional cinema cameras",
      "Online gallery",
      "Premium USB drive",
      "4-6 week delivery"
    ],
    popular: true
  },
  {
    id: "multi-day",
    name: "Multi Day",
    basePrice: 13400,
    monthlyPrice: 3350,
    duration: "Multi day",
    team: "2 photographers + 2 videographers",
    description: "Perfect for destination weddings and multi-day celebrations.",
    features: [
      "800+ edited photos",
      "Teaser photos (48 hours)",
      "6-7 min feature film",
      "Fine art album included",
      "Color correction",
      "Music license",
      "1-2 hr full movie edit",
      "Professional cinema cameras",
      "Online gallery",
      "Premium USB drive",
      "4-6 week delivery"
    ],
    popular: false,
    limited: true
  }
]

const PHOTO_PACKAGES: Package[] = [
  {
    id: "essential-photo",
    name: "Essential Photography",
    basePrice: 2800,
    monthlyPrice: 700,
    duration: "5 hours",
    team: "1 photographer",
    description: "Beautiful wedding photography for intimate ceremonies.",
    features: [
      "300+ edited photos",
      "Teaser photos (48 hours)",
      "Color correction",
      "Online gallery",
      "USB drive delivery",
      "Print release",
      "6-8 week delivery"
    ],
    popular: false
  },
  {
    id: "signature-photo",
    name: "Signature Photography",
    basePrice: 4200,
    monthlyPrice: 1050,
    duration: "Full day",
    team: "2 photographers",
    description: "Comprehensive wedding photography with dual shooter coverage.",
    features: [
      "600+ edited photos",
      "Teaser photos (48 hours)",
      "Color correction",
      "Engagement session",
      "Online gallery",
      "Premium USB drive",
      "Print release",
      "4-6 week delivery"
    ],
    popular: true
  },
  {
    id: "luxury-photo",
    name: "Luxury Photography",
    basePrice: 6800,
    monthlyPrice: 1700,
    duration: "Multi day",
    team: "2 photographers",
    description: "Premium photography package for destination and luxury weddings.",
    features: [
      "800+ edited photos",
      "Teaser photos (48 hours)",
      "Fine art album included",
      "Color correction",
      "Engagement session",
      "Online gallery",
      "Premium USB drive",
      "Print release",
      "4-6 week delivery"
    ],
    popular: false
  }
]

const VIDEO_PACKAGES: Package[] = [
  {
    id: "essential-video",
    name: "Essential Film",
    basePrice: 3200,
    monthlyPrice: 800,
    duration: "5 hours",
    team: "1 videographer",
    description: "Cinematic wedding film to capture your special day.",
    features: [
      "3-4 min feature film",
      "Ceremony highlights",
      "Color correction",
      "Music license",
      "Online gallery",
      "USB drive delivery",
      "6-8 week delivery"
    ],
    popular: false
  },
  {
    id: "signature-video",
    name: "Signature Film",
    basePrice: 5400,
    monthlyPrice: 1350,
    duration: "Full day",
    team: "2 videographers",
    description: "Premium videography with dual camera coverage.",
    features: [
      "5-6 min feature film",
      "Ceremony & speeches edit",
      "Color correction",
      "Music license",
      "Professional cinema cameras",
      "Online gallery",
      "Premium USB drive",
      "4-6 week delivery"
    ],
    popular: true
  },
  {
    id: "luxury-video",
    name: "Luxury Film",
    basePrice: 8200,
    monthlyPrice: 2050,
    duration: "Multi day",
    team: "2 videographers",
    description: "Luxury film production for destination and multi-day celebrations.",
    features: [
      "6-7 min feature film",
      "1-2 hr full movie edit",
      "Color correction",
      "Music license",
      "Professional cinema cameras",
      "Same-day highlights",
      "Online gallery",
      "Premium USB drive",
      "4-6 week delivery"
    ],
    popular: false
  }
]

const PRICING_FACTORS: PricingFactor[] = [
  { id: 'peak-season', name: 'Peak Season (May-October)', multiplier: 1.2, description: 'Higher demand during peak wedding season' },
  { id: 'holiday', name: 'Holiday Weekend', multiplier: 1.3, description: 'Premium for holiday weekends' },
  { id: 'destination', name: 'Destination Wedding', multiplier: 1.4, description: 'Travel and accommodation costs' },
  { id: 'weekday', name: 'Weekday Wedding', multiplier: 0.9, description: 'Discount for weekday celebrations' },
  { id: 'local', name: 'Local LA Area', multiplier: 1.0, description: 'Standard pricing for local venues' },
  { id: 'bay-area', name: 'Bay Area', multiplier: 1.15, description: 'Additional travel to Bay Area' },
  { id: 'last-minute', name: 'Last Minute Booking (<60 days)', multiplier: 1.1, description: 'Rush service premium' }
]

const CUSTOM_FEATURES: CustomFeature[] = [
  { id: 'drone', name: 'Drone Footage', price: 500, category: 'video', description: 'Aerial cinematography with licensed drone pilot' },
  { id: 'extra-hour', name: 'Additional Hour', price: 300, category: 'coverage', description: 'Extend coverage by one hour' },
  { id: 'second-shooter', name: 'Second Shooter', price: 800, category: 'photo', description: 'Additional photographer for more angles' },
  { id: 'raw-footage', name: 'Raw Footage Files', price: 400, category: 'delivery', description: 'Unedited footage from all cameras' },
  { id: 'same-day-edit', name: 'Same Day Edit', price: 1200, category: 'video', description: '3-5 min highlight reel for reception' },
  { id: 'engagement-session', name: 'Engagement Session', price: 600, category: 'photo', description: '2-hour engagement photo session' },
  { id: 'photo-album', name: 'Premium Photo Album', price: 450, category: 'delivery', description: 'Luxury printed album with 50 pages' },
  { id: 'livestream', name: 'Ceremony Livestream', price: 800, category: 'video', description: 'Professional livestream for remote guests' }
]

export function PackagesSection() {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)
  const [viewMode, setViewMode] = useState<'cards' | 'comparison' | 'builder'>('cards')
  const [packageType, setPackageType] = useState<'combo' | 'photo' | 'video'>('combo')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('local')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const [pricingFactors, setPricingFactors] = useState<string[]>([])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getCurrentPackages = () => {
    switch (packageType) {
      case 'photo':
        return PHOTO_PACKAGES
      case 'video':
        return VIDEO_PACKAGES
      default:
        return COMBO_PACKAGES
    }
  }

  const calculateDynamicPrice = (basePrice: number) => {
    let finalPrice = basePrice

    // Apply location factor
    const locationFactor = PRICING_FACTORS.find(f => f.id === selectedLocation)
    if (locationFactor) {
      finalPrice *= locationFactor.multiplier
    }

    // Apply date-based factors
    if (selectedDate) {
      const date = new Date(selectedDate)
      const month = date.getMonth() + 1
      const dayOfWeek = date.getDay()

      // Peak season (May-October)
      if (month >= 5 && month <= 10) {
        const peakFactor = PRICING_FACTORS.find(f => f.id === 'peak-season')
        if (peakFactor && !pricingFactors.includes('peak-season')) {
          setPricingFactors(prev => [...prev.filter(f => f !== 'weekday'), 'peak-season'])
          finalPrice *= peakFactor.multiplier
        }
      }

      // Weekday discount (Monday-Thursday)
      if (dayOfWeek >= 1 && dayOfWeek <= 4) {
        const weekdayFactor = PRICING_FACTORS.find(f => f.id === 'weekday')
        if (weekdayFactor && !pricingFactors.includes('weekday')) {
          setPricingFactors(prev => [...prev.filter(f => f !== 'peak-season'), 'weekday'])
          finalPrice *= weekdayFactor.multiplier
        }
      }

      // Last minute booking
      const daysDiff = Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      if (daysDiff < 60 && daysDiff > 0) {
        const lastMinuteFactor = PRICING_FACTORS.find(f => f.id === 'last-minute')
        if (lastMinuteFactor && !pricingFactors.includes('last-minute')) {
          setPricingFactors(prev => [...prev, 'last-minute'])
          finalPrice *= lastMinuteFactor.multiplier
        }
      }
    }

    return Math.round(finalPrice)
  }

  const calculateCustomPrice = () => {
    if (!selectedPackage) return 0

    const basePackage = getCurrentPackages().find(p => p.id === selectedPackage)
    if (!basePackage) return 0

    let price = calculateDynamicPrice(basePackage.basePrice)

    selectedFeatures.forEach(featureId => {
      const feature = CUSTOM_FEATURES.find(f => f.id === featureId)
      if (feature) {
        price += feature.price
      }
    })

    return price
  }

  const getPackageComparison = () => {
    const currentPackages = getCurrentPackages()
    const allFeatures = Array.from(new Set(currentPackages.flatMap(p => p.features)))
    return allFeatures.map(feature => ({
      feature,
      packages: currentPackages.map(pkg => ({
        id: pkg.id,
        name: pkg.name,
        hasFeature: pkg.features.includes(feature),
        isUpgrade: false
      }))
    }))
  }

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    )
  }

  return (
    <section id="packages" className="py-32 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-text text-heading mb-6">
            {packageType === 'combo' ? 'photo + video' : packageType === 'photo' ? 'photography' : 'videography'}
            <br />
            <span className="text-heading italic font-light">packages</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto font-light">
            {packageType === 'combo'
              ? 'Combined photography and videography packages for complete wedding coverage with seamless coordination.'
              : packageType === 'photo'
              ? 'Professional wedding photography packages to capture every precious moment with artistry and elegance.'
              : 'Cinematic wedding videography packages to tell your love story through beautiful moving images.'
            }
          </p>
        </div>

        {/* Package Type Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#002349]/50 rounded-lg p-1 border border-[#BFA181]/30">
            <button
              onClick={() => setPackageType('combo')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                packageType === 'combo'
                  ? 'bg-[#BFA181] text-[#002349]'
                  : 'text-[#EAE7DD] hover:text-[#BFA181]'
              }`}
            >
              Photo + Video
            </button>
            <button
              onClick={() => setPackageType('photo')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                packageType === 'photo'
                  ? 'bg-[#BFA181] text-[#002349]'
                  : 'text-[#EAE7DD] hover:text-[#BFA181]'
              }`}
            >
              Photography Only
            </button>
            <button
              onClick={() => setPackageType('video')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                packageType === 'video'
                  ? 'bg-[#BFA181] text-[#002349]'
                  : 'text-[#EAE7DD] hover:text-[#BFA181]'
              }`}
            >
              Videography Only
            </button>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#002349]/50 rounded-lg p-1 border border-[#BFA181]/30">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                viewMode === 'cards'
                  ? 'bg-[#BFA181] text-[#002349]'
                  : 'text-[#EAE7DD] hover:text-[#BFA181]'
              }`}
            >
              Package Cards
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                viewMode === 'comparison'
                  ? 'bg-[#BFA181] text-[#002349]'
                  : 'text-[#EAE7DD] hover:text-[#BFA181]'
              }`}
            >
              Compare Plans
            </button>
            <button
              onClick={() => setViewMode('builder')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                viewMode === 'builder'
                  ? 'bg-[#BFA181] text-[#002349]'
                  : 'text-[#EAE7DD] hover:text-[#BFA181]'
              }`}
            >
              Custom Builder
            </button>
          </div>
        </div>

        {/* Dynamic Pricing Controls */}
        {(viewMode === 'cards' || viewMode === 'builder') && (
          <div className="max-w-4xl mx-auto mb-12 p-6 bg-[#002349]/30 rounded-xl border border-[#BFA181]/20">
            <h3 className="text-lg font-semibold text-[#BFA181] mb-4 text-center">
              Get Your Custom Quote
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#EAE7DD] mb-2 font-medium">Wedding Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-[#EAE7DD] focus:border-[#178582] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#EAE7DD] mb-2 font-medium">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-[#002349] border border-[#002349] rounded-lg px-4 py-3 text-[#EAE7DD] focus:border-[#178582] focus:outline-none transition-colors"
                >
                  <option value="local">Los Angeles Area</option>
                  <option value="bay-area">San Francisco Bay Area</option>
                  <option value="destination">Destination Wedding</option>
                </select>
              </div>
            </div>

            {pricingFactors.length > 0 && (
              <div className="mt-4 p-4 bg-[#BFA181]/10 rounded-lg">
                <p className="text-[#BFA181] font-medium mb-2">Applied Pricing Factors:</p>
                <div className="flex flex-wrap gap-2">
                  {pricingFactors.map(factorId => {
                    const factor = PRICING_FACTORS.find(f => f.id === factorId)
                    if (!factor) return null
                    return (
                      <span
                        key={factorId}
                        className="px-3 py-1 bg-[#BFA181]/20 text-[#EAE7DD] rounded-full text-sm"
                      >
                        {factor.name} ({factor.multiplier > 1 ? '+' : ''}{Math.round((factor.multiplier - 1) * 100)}%)
                      </span>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Package Cards View */}
        {viewMode === 'cards' && (
          <>
            {/* Payment Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#002349]/50 rounded-lg p-1 border border-[#BFA181]/30">
                <button
                  onClick={() => setShowPaymentOptions(false)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    !showPaymentOptions
                      ? 'bg-[#BFA181] text-[#002349]'
                      : 'text-[#EAE7DD] hover:text-[#BFA181]'
                  }`}
                >
                  Full Payment
                </button>
                <button
                  onClick={() => setShowPaymentOptions(true)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    showPaymentOptions
                      ? 'bg-[#BFA181] text-[#002349]'
                      : 'text-[#EAE7DD] hover:text-[#BFA181]'
                  }`}
                >
                  Pay in 4
                </button>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {getCurrentPackages().map((pkg, index) => {
                const dynamicPrice = calculateDynamicPrice(pkg.basePrice)
                const dynamicMonthlyPrice = Math.round(dynamicPrice / 4)

                return (
                  <div
                    key={pkg.id}
                    className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#002349' }}
                  >
                    {/* Most Popular Ribbon */}
                    {pkg.popular && (
                      <div className="absolute top-0 left-0 right-0 z-10">
                        <div
                          className="text-center py-3 font-medium text-sm"
                          style={{ backgroundColor: '#4F0341', color: '#957C3D' }}
                        >
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Limited Availability Ribbon */}
                    {pkg.limited && (
                      <div className="absolute top-0 left-0 right-0 z-10">
                        <div className="bg-red-600 text-white text-center py-3 font-medium text-sm">
                          Limited Availability
                        </div>
                      </div>
                    )}

                    {/* Price Change Indicator */}
                    {dynamicPrice !== pkg.basePrice && (
                      <div className="absolute top-0 right-0 z-10 m-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          dynamicPrice > pkg.basePrice
                            ? 'bg-orange-500/20 text-orange-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {dynamicPrice > pkg.basePrice ? '+' : ''}{formatPrice(dynamicPrice - pkg.basePrice)}
                        </div>
                      </div>
                    )}

                    <div className={`p-8 ${pkg.popular || pkg.limited ? 'pt-16' : ''}`}>
                      {/* Package Header */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-[#EAE7DD] mb-4">{pkg.name}</h3>

                        {/* Price Display */}
                        <div className="mb-4">
                          {showPaymentOptions ? (
                            <div>
                              <div className="text-[36px] font-bold text-[#BFA181] leading-none">
                                {formatPrice(dynamicMonthlyPrice)}
                              </div>
                              <div className="text-[#EAE7DD]/70 text-sm mt-1">
                                / month for 4 months
                              </div>
                              <div className="text-[#BFA181] text-lg mt-2">
                                Total: {formatPrice(dynamicPrice)}
                              </div>
                            </div>
                          ) : (
                            <div>
                              {dynamicPrice !== pkg.basePrice && (
                                <div className="text-[#EAE7DD]/60 text-lg line-through mb-1">
                                  {formatPrice(pkg.basePrice)}
                                </div>
                              )}
                              <div className="text-[36px] font-bold text-[#BFA181]">
                                {formatPrice(dynamicPrice)}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="text-[#EAE7DD]/80 text-sm mb-2">{pkg.duration}</div>
                        <div className="text-[#EAE7DD]/70 text-sm flex items-center justify-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                          {pkg.team}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#EAE7DD]/90 text-center mb-8 leading-relaxed">
                        {pkg.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <svg className="w-5 h-5 text-[#BFA181]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-[#EAE7DD]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <div className="space-y-4">
                        <PrimaryCTA variant="primary" className="w-full">
                          Book My Date
                        </PrimaryCTA>

                        <PrimaryCTA
                          variant="secondary"
                          onClick={() => {
                            const element = document.getElementById('contact')
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                          className="w-full"
                        >
                          Customize Package
                        </PrimaryCTA>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Package Comparison View */}
        {viewMode === 'comparison' && (
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-[#002349]/50 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#002349]">
                    <th className="text-left p-6 text-[#BFA181] font-semibold">Features</th>
                    {getCurrentPackages().map(pkg => (
                      <th key={pkg.id} className="text-center p-6 text-[#EAE7DD] font-semibold relative">
                        {pkg.popular && (
                          <div className="absolute top-0 left-0 right-0 bg-[#4F0341] text-[#957C3D] text-xs py-1">
                            Most Popular
                          </div>
                        )}
                        <div className={pkg.popular ? 'mt-6' : ''}>
                          <div className="text-lg font-bold mb-2">{pkg.name}</div>
                          <div className="text-2xl font-bold text-[#BFA181] mb-1">
                            {formatPrice(calculateDynamicPrice(pkg.basePrice))}
                          </div>
                          <div className="text-sm text-[#EAE7DD]/70">{pkg.duration}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getPackageComparison().map((comparison, index) => (
                    <tr key={index} className="border-t border-[#BFA181]/20">
                      <td className="p-4 text-[#EAE7DD] font-medium">{comparison.feature}</td>
                      {comparison.packages.map(pkg => (
                        <td key={pkg.id} className="p-4 text-center">
                          {pkg.hasFeature ? (
                            <svg className="w-6 h-6 text-[#BFA181] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-[#EAE7DD]/30 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#002349]">
                    <td className="p-6"></td>
                    {getCurrentPackages().map(pkg => (
                      <td key={pkg.id} className="p-6 text-center">
                        <PrimaryCTA variant="primary" className="w-full">
                          Select {pkg.name}
                        </PrimaryCTA>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* Custom Package Builder */}
        {viewMode === 'builder' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Package Selection & Customization */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#BFA181] mb-6">Build Your Perfect Package</h3>

                  {/* Base Package Selection */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#EAE7DD] mb-4">Choose Your Base Package</h4>
                    <div className="space-y-3">
                      {getCurrentPackages().map(pkg => (
                        <label
                          key={pkg.id}
                          className="flex items-center p-4 bg-[#002349]/30 rounded-lg border border-[#BFA181]/20 hover:border-[#BFA181]/50 transition-colors cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="basePackage"
                            value={pkg.id}
                            checked={selectedPackage === pkg.id}
                            onChange={(e) => setSelectedPackage(e.target.value)}
                            className="mr-4 text-[#178582]"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold text-[#EAE7DD]">{pkg.name}</div>
                                <div className="text-sm text-[#EAE7DD]/70">{pkg.description}</div>
                              </div>
                              <div className="text-lg font-bold text-[#BFA181]">
                                {formatPrice(calculateDynamicPrice(pkg.basePrice))}
                              </div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Add-on Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#EAE7DD] mb-4">Add Custom Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(
                        CUSTOM_FEATURES.reduce((acc, feature) => {
                          if (!acc[feature.category]) acc[feature.category] = []
                          acc[feature.category].push(feature)
                          return acc
                        }, {} as Record<string, CustomFeature[]>)
                      ).map(([category, features]) => (
                        <div key={category} className="mb-6">
                          <h5 className="text-md font-medium text-[#BFA181] mb-3 capitalize">
                            {category === 'video' ? 'Video Enhancement' :
                             category === 'photo' ? 'Photography Add-ons' :
                             category === 'coverage' ? 'Coverage Extensions' : 'Delivery Options'}
                          </h5>
                          <div className="space-y-2">
                            {features.map(feature => (
                              <label
                                key={feature.id}
                                className="flex items-center p-3 bg-[#002349]/20 rounded-lg border border-[#BFA181]/10 hover:border-[#BFA181]/30 transition-colors cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedFeatures.includes(feature.id)}
                                  onChange={() => toggleFeature(feature.id)}
                                  className="mr-3 text-[#178582]"
                                />
                                <div className="flex-1">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <div className="font-medium text-[#EAE7DD]">{feature.name}</div>
                                      <div className="text-sm text-[#EAE7DD]/70">{feature.description}</div>
                                    </div>
                                    <div className="text-[#BFA181] font-semibold">
                                      +{formatPrice(feature.price)}
                                    </div>
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="lg:sticky lg:top-8">
                <div className="bg-[#002349] p-8 rounded-2xl border border-[#BFA181]/30">
                  <h4 className="text-xl font-bold text-[#BFA181] mb-6">Your Custom Package</h4>

                  {selectedPackage ? (
                    <div className="space-y-4 mb-6">
                      {/* Base Package */}
                      <div className="flex justify-between items-center pb-4 border-b border-[#BFA181]/20">
                        <div>
                          <div className="font-semibold text-[#EAE7DD]">
                            {getCurrentPackages().find(p => p.id === selectedPackage)?.name}
                          </div>
                          <div className="text-sm text-[#EAE7DD]/70">Base package</div>
                        </div>
                        <div className="text-[#BFA181] font-semibold">
                          {formatPrice(calculateDynamicPrice(getCurrentPackages().find(p => p.id === selectedPackage)?.basePrice || 0))}
                        </div>
                      </div>

                      {/* Selected Features */}
                      {selectedFeatures.map(featureId => {
                        const feature = CUSTOM_FEATURES.find(f => f.id === featureId)
                        if (!feature) return null
                        return (
                          <div key={featureId} className="flex justify-between items-center">
                            <div>
                              <div className="text-[#EAE7DD]">{feature.name}</div>
                              <div className="text-sm text-[#EAE7DD]/70">{feature.description}</div>
                            </div>
                            <div className="text-[#BFA181]">
                              +{formatPrice(feature.price)}
                            </div>
                          </div>
                        )
                      })}

                      {/* Pricing Factors */}
                      {pricingFactors.map(factorId => {
                        const factor = PRICING_FACTORS.find(f => f.id === factorId)
                        if (!factor || factor.multiplier === 1) return null
                        const basePrice = getCurrentPackages().find(p => p.id === selectedPackage)?.basePrice || 0
                        const adjustment = Math.round(basePrice * (factor.multiplier - 1))
                        return (
                          <div key={factorId} className="flex justify-between items-center text-sm">
                            <div className="text-[#EAE7DD]/80">{factor.name}</div>
                            <div className={factor.multiplier > 1 ? 'text-orange-400' : 'text-green-400'}>
                              {factor.multiplier > 1 ? '+' : ''}{formatPrice(adjustment)}
                            </div>
                          </div>
                        )
                      })}

                      {/* Total */}
                      <div className="flex justify-between items-center pt-4 border-t border-[#BFA181]/20">
                        <div className="text-xl font-bold text-[#EAE7DD]">Total Investment</div>
                        <div className="text-2xl font-bold text-[#BFA181]">
                          {formatPrice(calculateCustomPrice())}
                        </div>
                      </div>

                      {/* Payment Options */}
                      <div className="mt-6 pt-6 border-t border-[#BFA181]/20">
                        <div className="text-sm text-[#EAE7DD]/80 mb-3">Payment Options:</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#EAE7DD]">Full Payment:</span>
                            <span className="text-[#BFA181] font-semibold">{formatPrice(calculateCustomPrice())}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#EAE7DD]">Pay in 4:</span>
                            <span className="text-[#BFA181] font-semibold">{formatPrice(Math.round(calculateCustomPrice() / 4))}/month</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 mt-8">
                        <PrimaryCTA variant="primary" className="w-full">
                          Request This Package
                        </PrimaryCTA>
                        <PrimaryCTA
                          variant="secondary"
                          onClick={() => {
                            const element = document.getElementById('contact')
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                          className="w-full"
                        >
                          Discuss Customizations
                        </PrimaryCTA>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-[#EAE7DD]/70 py-12">
                      Select a base package to start building your custom package
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Information */}
        {viewMode === 'cards' && (
          <div className="text-center mt-16">
            <p className="text-primary/80 mb-8">
              All packages include professional editing, color correction, and seamless photo+video coordination.
            </p>

            {showPaymentOptions && (
              <div className="bg-[#002349]/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <h4 className="text-[#BFA181] font-semibold mb-2">Payment Plan Details</h4>
                <p className="text-[#EAE7DD]/80 text-sm">
                  Split your investment into 4 equal payments. First payment due at booking,
                  remaining payments automatically charged monthly. No interest or hidden fees.
                </p>
              </div>
            )}



            {/* Transition to Testimonials */}
            <div className="bg-gradient-to-r from-[#4F0341]/30 to-[#002349]/50 rounded-2xl p-12 border border-[#BFA181]/20">
              <h3 className="text-3xl font-bold text-[#BFA181] mb-4">Don't Just Take Our Word For It</h3>
              <p className="text-xl text-[#EAE7DD] mb-8 max-w-2xl mx-auto">
                Hear from hundreds of couples who trusted us to capture their most precious moments.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('testimonials')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center space-x-2 text-[#BFA181] hover:text-[#EAE7DD] transition-colors font-medium"
              >
                <span>Read Love Stories</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
