// Photography Page Image Constants
// Centralized image URLs for hero slider, portfolio, gallery, and albums

export interface SlideImage {
  id: string
  src: string
  alt: string
  title: string
  description: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category?: string
  title?: string
}

// Hero/Portfolio Slider Images (5 images from live site - using CDN for reliability)
export const HERO_IMAGES: SlideImage[] = [
  {
    id: '1',
    src: 'https://ext.same-assets.com/613934530/755836774.jpeg',
    alt: 'Traditional South Asian Bridal Portrait with Intricate Henna',
    title: 'Timeless Elegance',
    description: 'Capturing the intricate beauty of traditional bridal jewelry and makeup artistry'
  },
  {
    id: '2',
    src: 'https://ext.same-assets.com/613934530/2453970422.jpeg',
    alt: 'Couple in Traditional Attire Against Dramatic Sky',
    title: 'Dreams Against the Sky',
    description: 'Cinematic portraiture that captures love stories against dramatic backdrops'
  },
  {
    id: '3',
    src: 'https://ext.same-assets.com/613934530/1045619500.jpeg',
    alt: 'Luxury Wedding Portrait in Elegant Reception Setting',
    title: 'Luxury Romance',
    description: 'Sophisticated formal portraiture in luxurious settings with dramatic lighting'
  },
  {
    id: '4',
    src: 'https://ext.same-assets.com/613934530/1127208617.jpeg',
    alt: 'Artistic South Asian Bridal Photography with Henna Details',
    title: 'Art in Motion',
    description: 'Artistic detail photography showcasing the beauty of traditional henna artistry'
  },
  {
    id: '5',
    src: 'https://ext.same-assets.com/613934530/501135948.jpeg',
    alt: 'Vibrant Traditional Wedding Ceremony in Garden Setting',
    title: 'Cultural Celebration',
    description: 'Vibrant traditional ceremonies captured in natural garden settings'
  }
]

// Portfolio images (same as hero)
export const PORTFOLIO_IMAGES = HERO_IMAGES

// Fine Art Album Sample Image (using CDN for reliable delivery)
export const ALBUM_SAMPLE_IMAGE = 'https://ext.same-assets.com/613934530/3818095455.webp'

// Wedding Gallery Grid Images (21 images from live site - using CDN URLs for reliability)
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: 'https://ext.same-assets.com/613934530/4005707773.jpeg',
    alt: 'Luxury crystal wedding shoes with dramatic lighting',
    title: 'Crystal Elegance',
    category: 'details'
  },
  {
    id: 'gallery-2',
    src: 'https://ext.same-assets.com/613934530/2159466363.jpeg',
    alt: 'Classic bridal portrait with bouquet and natural light',
    title: 'Timeless Grace',
    category: 'bridal'
  },
  {
    id: 'gallery-3',
    src: 'https://ext.same-assets.com/613934530/3213102086.webp',
    alt: 'Outdoor bridal portrait with natural scenery',
    title: 'Natural Beauty',
    category: 'bridal'
  },
  {
    id: 'gallery-4',
    src: 'https://ext.same-assets.com/613934530/24522886.webp',
    alt: 'Window light bridal portrait with soft shadows',
    title: 'Soft Illumination',
    category: 'bridal'
  },
  {
    id: 'gallery-5',
    src: 'https://ext.same-assets.com/613934530/3658960136.jpeg',
    alt: 'Golden hour bridal portrait with dramatic train',
    title: 'Golden Moment',
    category: 'bridal'
  },
  {
    id: 'gallery-6',
    src: 'https://ext.same-assets.com/613934530/4151512435.webp',
    alt: 'Intimate couple moment in rustic setting',
    title: 'Rustic Romance',
    category: 'couples'
  },
  {
    id: 'gallery-7',
    src: 'https://ext.same-assets.com/613934530/2694175199.jpeg',
    alt: 'Traditional couple portrait with dramatic sky',
    title: 'Sky Dreams',
    category: 'couples'
  },
  {
    id: 'gallery-8',
    src: 'https://ext.same-assets.com/613934530/2357869345.webp',
    alt: 'Romantic couple portrait with eucalyptus bouquet',
    title: 'Botanical Love',
    category: 'couples'
  },
  {
    id: 'gallery-9',
    src: 'https://ext.same-assets.com/613934530/722932149.webp',
    alt: 'Black and white bridesmaids helping bride with dress',
    title: 'Sisterhood',
    category: 'documentary'
  },
  {
    id: 'gallery-10',
    src: 'https://ext.same-assets.com/613934530/2180482571.webp',
    alt: 'Bouquet toss reception moment with guests',
    title: 'Celebration',
    category: 'reception'
  },
  {
    id: 'gallery-11',
    src: 'https://ext.same-assets.com/613934530/1996507150.webp',
    alt: 'Traditional South Asian bridal portrait with intricate henna',
    title: 'Henna Artistry',
    category: 'cultural'
  },
  {
    id: 'gallery-12',
    src: 'https://ext.same-assets.com/613934530/1560320730.jpeg',
    alt: 'Traditional South Asian bridal portrait with jewelry',
    title: 'Cultural Heritage',
    category: 'cultural'
  },
  {
    id: 'gallery-13',
    src: 'https://ext.same-assets.com/613934530/2202004677.jpeg',
    alt: 'Traditional wedding ceremony in garden setting',
    title: 'Garden Ceremony',
    category: 'cultural'
  },
  {
    id: 'gallery-14',
    src: 'https://ext.same-assets.com/613934530/2323369167.jpeg',
    alt: 'Romantic outdoor bridal portrait with flowing veil',
    title: 'Flowing Grace',
    category: 'bridal'
  },
  {
    id: 'gallery-15',
    src: 'https://ext.same-assets.com/613934530/4241695944.jpeg',
    alt: 'Bride champagne toast celebration moment',
    title: 'Toast',
    category: 'reception'
  },
  {
    id: 'gallery-16',
    src: 'https://ext.same-assets.com/613934530/345710779.jpeg',
    alt: 'Bride getting ready with soft window light',
    title: 'Preparation',
    category: 'bridal'
  },
  {
    id: 'gallery-17',
    src: 'https://ext.same-assets.com/613934530/929331303.jpeg',
    alt: 'Wedding ring detail shot with elegant styling',
    title: 'Forever',
    category: 'details'
  },
  {
    id: 'gallery-18',
    src: 'https://ext.same-assets.com/613934530/4059596056.jpeg',
    alt: 'Bridal bouquet with eucalyptus and roses',
    title: 'Floral Beauty',
    category: 'details'
  },
  {
    id: 'gallery-19',
    src: 'https://ext.same-assets.com/613934530/4229116691.jpeg',
    alt: 'First dance romantic moment under string lights',
    title: 'First Dance',
    category: 'reception'
  },
  {
    id: 'gallery-20',
    src: 'https://ext.same-assets.com/613934530/1779319859.jpeg',
    alt: 'Wedding reception dancing and celebration',
    title: 'Dance Floor',
    category: 'reception'
  },
  {
    id: 'gallery-21',
    src: 'https://ext.same-assets.com/613934530/1122270631.jpeg',
    alt: 'Emotional father-daughter moment before ceremony',
    title: 'Precious Moments',
    category: 'documentary'
  }
]
