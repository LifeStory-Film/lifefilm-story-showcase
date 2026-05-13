'use client'

import { useState } from 'react'
import { PrimaryCTA } from '../PrimaryCTA'

interface AddOn {
  id: string
  name: string
  description: string
  price: number
  category: 'filming' | 'editing' | 'delivery'
}

interface Package {
  id: string
  name: string
  basePrice: number
  features: string[]
  duration: string
  team: string
}

type Location = '' | 'local' | 'bay-area' | 'destination'

const BASE_PACKAGES: Package[] = [
  {
    id: 'essential',
    name: 'Essential',
    basePrice: 3959,
    duration: '5 hours',
    team: '1 photographer + 1 videographer',
    features: [
      '300+ edited photos',
      '3-4 min feature film',
      'Color correction',
      'Music license',
      'Online gallery',
      'USB drive delivery',
      '6-8 week delivery'
    ]
  },
  {
    id: 'signature',
    name: 'Signature',
    basePrice: 6928,
    duration: '8 Hours',
    team: '2 photographers + 2 videographers',
    features: [
      '600+ edited photos',
      'Teaser photos (48 hours)',
      '5-6 min feature film',
      'Color correction',
      'Music license',
      'Ceremony & speeches edit',
      'Professional cinema cameras',
      'Online gallery',
      'Premium USB drive',
      '4-6 week delivery'
    ]
  },
  {
    id: 'multi-day',
    name: 'Multi Day',
    basePrice: 12869,
    duration: 'Multi day',
    team: '2 photographers + 2 videographers',
    features: [
      '800+ edited photos',
      'Teaser photos (48 hours)',
      '6-7 min feature film',
      'Fine art album included',
      'Color correction',
      'Music license',
      '1-2 hr full movie edit',
      'Professional cinema cameras',
      'Online gallery',
      'Premium USB drive',
      '4-6 week delivery'
    ]
  }
]

const ADD_ONS: AddOn[] = [
  {
    id: 'drone',
    name: 'Drone Coverage',
    description: 'Aerial footage and photography',
    price: 500,
    category: 'filming'
  },
  {
    id: 'raw-footage',
    name: 'Raw Footage',
    description: 'All unedited video files',
    price: 300,
    category: 'delivery'
  },
  {
    id: 'additional-editor',
    name: 'Additional Editor',
    description: 'Faster turnaround time',
    price: 750,
    category: 'editing'
  },
  {
    id: 'engagement-session',
    name: 'Engagement Session',
    description: '2 hour photo session',
    price: 800,
    category: 'filming'
  }
]

export function PricingCalculator() {
  const [selectedPackage, setSelectedPackage] = useState<Package>(BASE_PACKAGES[1])
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<Location>('')

  const today = new Date().toISOString().split('T')[0]

  const isWeekend = selectedDate
    ? [0, 5, 6].includes(new Date(selectedDate + 'T12:00:00').getDay())
    : false

  const weekendPremium = isWeekend ? Math.round(selectedPackage.basePrice * 0.1) : 0
  const locationSurcharge = selectedLocation === 'bay-area' ? 1000 : 0
  const packageDisplayPrice = selectedPackage.basePrice + weekendPremium + locationSurcharge

  const getDisplayPrice = (basePrice: number) => {
    let price = basePrice
    if (selectedLocation === 'bay-area') price += 1000
    if (isWeekend) price += Math.round(basePrice * 0.1)
    return price
  }
  const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
    const addOn = ADD_ONS.find(a => a.id === addOnId)
    return total + (addOn?.price || 0)
  }, 0)
  const totalPrice = packageDisplayPrice + addOnTotal

  const isDestination = selectedLocation === 'destination'
  const isPriceReady = !!selectedDate && !!selectedLocation && !isDestination

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    )
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-32 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Build Your Quote</p>
            <h2
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
            >
              Pricing Calculator
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto font-light">
              Customize your perfect wedding package with our interactive calculator.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Package Selection */}
            <div className="space-y-8">
              {/* Wedding Date */}
              <div className="flex items-center justify-between p-4 rounded-xl border-2 border-[#BFA181]/30 bg-[#211f1c]/30">
                <div>
                  <div className="text-white font-medium">Wedding Date</div>
                  <div className="text-sm text-white/50">Weekend dates (Fri/Sat/Sun) include a 10% premium</div>
                </div>
                <input
                  type="date"
                  value={selectedDate}
                  min={today}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-[#0f0e0c] border border-[#BFA181]/40 rounded-lg px-3 py-2 text-white text-sm focus:border-[#BFA181] focus:outline-none transition-colors"
                />
              </div>

              {/* Location selector */}
              <div className="flex items-center justify-between p-4 rounded-xl border-2 border-[#BFA181]/30 bg-[#211f1c]/30">
                <div>
                  <div className="text-white font-medium">Wedding Location</div>
                  <div className="text-sm text-white/50">Affects travel and pricing</div>
                </div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value as Location)}
                  className="bg-[#0f0e0c] border border-[#BFA181]/40 rounded-lg px-3 py-2 text-white text-sm focus:border-[#BFA181] focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select location</option>
                  <option value="local">Southern California</option>
                  <option value="bay-area">Northern California</option>
                  <option value="destination">Destination Wedding</option>
                </select>
              </div>

              <div>
                <h3 className="text-2xl text-heading font-semibold mb-6">Choose Your Base Package</h3>
                <div className="space-y-4">
                  {BASE_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedPackage.id === pkg.id
                          ? 'bg-pale-gold/20 border-2 border-pale-gold'
                          : 'bg-royal-blue-light/30 border-2 border-transparent hover:border-pale-gold/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl text-heading font-semibold">{pkg.name}</h4>
                          <p className="text-primary/80">{pkg.duration} • {pkg.team}</p>
                        </div>
                        <div className="text-2xl font-bold text-heading">
                          {isDestination
                            ? 'Custom Quote'
                            : `$${getDisplayPrice(pkg.basePrice).toLocaleString()}`}
                        </div>
                      </div>
                      <div className="text-sm text-primary/80 space-y-1">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <div key={index}>• {feature}</div>
                        ))}
                        {pkg.features.length > 3 && (
                          <div className="text-pale-gold">+ {pkg.features.length - 3} more features</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-2xl text-heading font-semibold mb-6">Add-ons</h3>
                <div className="space-y-4">
                  {ADD_ONS.map((addOn) => (
                    <div
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedAddOns.includes(addOn.id)
                          ? 'bg-turquoise-light/20 border-2 border-turquoise-light'
                          : 'bg-royal-blue-light/30 border-2 border-transparent hover:border-turquoise-light/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-lg text-heading font-medium">{addOn.name}</h5>
                          <p className="text-primary/80 text-sm">{addOn.description}</p>
                        </div>
                        <div className="text-xl font-semibold text-heading">
                          +${addOn.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-8">
              <div className="glass-luxury rounded-2xl p-8">
                <h3 className="text-2xl text-heading font-semibold mb-6">Your Package</h3>

                {isDestination ? (
                  <>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                        <div>
                          <h4 className="text-lg text-heading font-medium">{selectedPackage.name} Package</h4>
                          <p className="text-primary/80 text-sm">{selectedPackage.duration}</p>
                        </div>
                      </div>
                      <p
                        className="text-center py-4"
                        style={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}
                      >
                        Destination pricing is tailored to your location and coverage needs.
                      </p>
                    </div>

                    <div className="border-t border-gray-600 pt-6 mb-8">
                      <div className="flex justify-between items-center">
                        <h4 className="text-2xl text-heading font-bold">Total</h4>
                        <div className="text-3xl font-bold text-heading">Custom Quote</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToContact() }}
                        className="w-full inline-flex items-center justify-center h-12 px-4 rounded-lg font-medium transition-all duration-300 ease-out hover:scale-105 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
                      >
                        Contact Us →
                      </a>
                    </div>
                  </>
                ) : isPriceReady ? (
                  <>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                        <div>
                          <h4 className="text-lg text-heading font-medium">{selectedPackage.name} Package</h4>
                          <p className="text-primary/80 text-sm">
                            {selectedPackage.duration}
                          </p>
                        </div>
                        <div className="text-xl font-semibold text-heading">
                          ${packageDisplayPrice.toLocaleString()}
                        </div>
                      </div>

                      {selectedAddOns.map((addOnId) => {
                        const addOn = ADD_ONS.find(a => a.id === addOnId)
                        if (!addOn) return null

                        return (
                          <div key={addOnId} className="flex justify-between items-center">
                            <div>
                              <span className="text-primary">{addOn.name}</span>
                            </div>
                            <div className="text-heading font-medium">
                              +${addOn.price}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="border-t border-gray-600 pt-6 mb-8">
                      <div className="flex justify-between items-center">
                        <h4 className="text-2xl text-heading font-bold">Total</h4>
                        <div className="text-3xl font-bold text-heading">
                          ${totalPrice.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <PrimaryCTA
                        onClick={scrollToContact}
                        className="w-full"
                      >
                        Book My Package
                      </PrimaryCTA>

                      <button className="w-full py-3 px-6 border border-gray-600 text-primary rounded-lg hover:border-pale-gold hover:text-pale-gold transition-colors">
                        Save My Quote
                      </button>
                    </div>
                  </>
                ) : (
                  <p
                    className="text-center py-12"
                    style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}
                  >
                    Select your date and location to see pricing
                  </p>
                )}

                <div className="mt-6 p-4 bg-royal-blue/50 rounded-lg">
                  <p className="text-primary/80 text-sm text-center">
                    All packages include professional editing, color correction, and delivery timeline as specified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
