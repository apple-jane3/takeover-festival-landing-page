export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const TICKETS_ENABLED = import.meta.env.VITE_TICKETS_ENABLED === 'true'

export const TICKETS_URL = 'https://takeover.helixpay.ph/'

export const FESTIVAL_START = '2026-11-25T16:00:00+08:00'
export const FESTIVAL_END = '2026-11-29'
export const FESTIVAL_DATE_RANGE = 'November 25–29, 2026'

export const FESTIVAL_LOCATION = 'Poro Point Baywalk Arena'
export const FESTIVAL_CITY = 'Poro Point Freeport Zone, San Fernando, La Union'

export const SITE_URL = 'https://takeoverfestival.com'
export const CONTACT_EMAIL = 'VIP@takeoverfestival.com'
export const SPONSOR_EMAIL = 'sponsor@takeoverlu.ph'
export const NEWSLETTER_EMAIL = 'newsletter@takeoverfestival.com'
export const CONTACT_PHONE = '+63 917 123 4567'
export const CONTACT_PHONE_HREF = 'tel:+639171234567'

export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Poro+Point+Freeport+Zone,+San+Fernando,+La+Union&t=&z=14&ie=UTF8&iwloc=&output=embed'

export const HERO_VIDEO_SRC = assetUrl('/videos/hero-loop.mp4')
export const HERO_VIDEO_POSTER = assetUrl('/images/hero.jpg')

export const PROMO_VIDEO_EMBED = 'https://www.youtube.com/embed?listType=search&list=beach%20music%20festival'

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1D7HZ9znoM/',
  facebookLounge: 'https://web.facebook.com/TakeOverLounge',
  instagram: 'https://www.instagram.com/takeoverph/',
  youtube: 'https://www.youtube.com/@takeoverph',
  tiktok: 'https://www.tiktok.com/@takeoverph',
} as const

export const HASHTAGS = ['#TakeoverFestival2026', '#TakeoverLaUnion'] as const

export const FESTIVAL_SCHEDULE = [
  {
    day: 'Day 1',
    date: 'Nov 25',
    title: 'Kickoff & Welcome',
    items: ['Gates open · 4 PM', 'Beach welcome sessions · 5 PM', 'Sunset acoustic sets · 6 PM'],
  },
  {
    day: 'Day 2',
    date: 'Nov 26',
    title: 'Music & Culture',
    items: ['Community causes · 8 AM', 'Local artist showcases · 2 PM', 'Evening main stage · 7 PM'],
  },
  {
    day: 'Day 3',
    date: 'Nov 27',
    title: 'Opening Night',
    items: ['Beach cleanup · 8 AM', 'DOT Tourism Expo opens · 10 AM', 'Headliners · 6 PM'],
  },
  {
    day: 'Day 4',
    date: 'Nov 28',
    title: 'Expo & Wellness',
    items: ['Wellness Zone · 7 AM', 'Business expo · All day', 'Sunset sessions · 5 PM'],
  },
  {
    day: 'Day 5',
    date: 'Nov 29',
    title: 'Grand Finale',
    items: ['Tree planting · 9 AM', 'Food Park · 12 PM', 'Fireworks finale · 10 PM'],
  },
] as const

export const FAQ_ITEMS = [
  {
    q: 'Where is Takeover Festival held?',
    a: 'Poro Point Baywalk Arena, Poro Point Freeport Zone, San Fernando, La Union.',
  },
  {
    q: 'What are the festival dates?',
    a: 'November 25–29, 2026 — a 5-day beachfront celebration.',
  },
  {
    q: 'How do I buy tickets?',
    a: 'Purchase passes online through our official HelixPay ticket page once tickets are available.',
  },
  {
    q: 'Is the festival family-friendly?',
    a: 'Yes. The festival includes music, tourism, wellness, and community causes for all ages.',
  },
  {
    q: 'What should I bring?',
    a: 'Sunscreen, reusable water bottle, valid ID, and your festival pass. Beach attire recommended.',
  },
  {
    q: 'How do I get to Poro Point?',
    a: 'Drive via MacArthur Highway to San Fernando, La Union. Shuttle services from San Juan and Bauang will be announced closer to the event.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes. On-site parking is available at Poro Point Freeport Zone with overflow lots nearby. VIP pass holders receive dedicated parking.',
  },
] as const

export const SPONSORS = [
  { name: "Gold's Gym", logo: assetUrl('/images/sponsors/golds-gym.png') },
  { name: 'HelixPay', logo: assetUrl('/images/sponsors/helixpay.png') },
  { name: 'DOT Region 1', logo: assetUrl('/images/dot-region.png') },
  { name: 'TakeOver Lounge', logo: assetUrl('/images/logo.png') },
] as const

export const GALLERY_ITEMS = [
  {
    src: assetUrl('/images/prev-6.png'),
    alt: 'Fireworks over the festival beach at night',
    caption: 'Fireworks Finale',
    description: 'The grand finale lights up the Poro Point skyline every Takeover weekend.',
  },
  {
    src: assetUrl('/images/upcoming.png'),
    alt: 'Aerial view of the beachfront festival',
    caption: 'Main Stage',
    description: 'World-class headliners perform against the backdrop of La Union\'s golden shores.',
  },
  {
    src: assetUrl('/images/tourism-poropoint.jpg'),
    alt: 'Poro Point cliffs and turquoise water',
    caption: 'Golden Shores',
    description: 'The festival grounds sit on one of the most scenic coastlines in the Philippines.',
  },
  {
    src: assetUrl('/images/prev-4.jpg'),
    alt: 'Outdoor yoga session at sunrise',
    caption: 'Wellness Zone',
    description: 'Morning wellness sessions bring balance to the festival experience.',
  },
  {
    src: assetUrl('/images/cause-trees.png'),
    alt: 'Community mangrove planting along the coast',
    caption: 'Coastal Action',
    description: 'Festival-goers join hands with local partners for environmental restoration.',
  },
  {
    src: assetUrl('/images/artist-1.png'),
    alt: 'Live band performing on stage',
    caption: 'Live Music',
    description: 'From alt rock to reggae, Takeover delivers unforgettable live performances.',
  },
  {
    src: assetUrl('/images/prev-1.jpg'),
    alt: 'Festival crowd enjoying the beach',
    caption: 'Beach Vibes',
    description: 'Thousands gather on the sand for music, food, and community.',
  },
  {
    src: assetUrl('/images/prev-2.jpg'),
    alt: 'Sunset over the festival grounds',
    caption: 'Sunset Sessions',
    description: 'Golden hour sets create magical moments on the baywalk.',
  },
  {
    src: assetUrl('/images/prev-3.jpg'),
    alt: 'Food park and vendor stalls',
    caption: 'Food Park',
    description: 'Local flavors and artisanal eats fuel the celebration.',
  },
  {
    src: assetUrl('/images/prev-5.jpg'),
    alt: 'DOT tourism exhibition dome',
    caption: 'Tourism Expo',
    description: 'The official DOT exhibition showcases the best of Region 1 travel.',
  },
] as const

export const COMMUNITY_CAUSES = [
  {
    slug: 'beach-cleanup',
    title: 'Beach Cleanup',
    shortBlurb: 'Morning shoreline sessions with festival-goers and local partners.',
    image: assetUrl('/images/cause-cleanup.png'),
    icon: 'waves' as const,
    description:
      'Every Takeover Festival begins with purpose. Our beach cleanup program mobilizes thousands of volunteers across Poro Point and San Fernando\'s coastline. Partnering with local LGUs, environmental NGOs, and coastal communities, we remove plastic waste, restore dunes, and educate participants on sustainable coastal practices.',
    schedule: [
      'Nov 25 · 7 AM — Kickoff cleanup at Poro Point Baywalk',
      'Nov 27 · 8 AM — Main festival cleanup drive',
      'Nov 29 · 6 AM — Final coastal sweep before finale',
    ],
    images: [
      assetUrl('/images/cause-cleanup.png'),
      assetUrl('/images/tourism-poropoint.jpg'),
      assetUrl('/images/prev-4.jpg'),
    ],
  },
  {
    slug: 'tree-planting',
    title: 'Tree Planting',
    shortBlurb: 'Mangrove and native tree restoration in coastal buffer zones.',
    image: assetUrl('/images/causes/tree-planting/01.jpg'),
    icon: 'sprout' as const,
    description:
      'Coastal buffer zones are critical to protecting La Union\'s shores from erosion and storm surge. Our tree planting initiative focuses on mangrove restoration and native species reforestation in partnership with DENR, local barangays, and environmental advocates. Festival attendees roll up their sleeves and plant trees that will protect the coast for generations.',
    schedule: [
      'Nov 26 · 9 AM — Mangrove nursery orientation',
      'Nov 28 · 8 AM — Coastal buffer planting session',
      'Nov 29 · 9 AM — Grand planting finale with community partners',
    ],
    images: Array.from({ length: 13 }, (_, i) =>
      assetUrl(`/images/causes/tree-planting/${String(i + 1).padStart(2, '0')}.jpg`),
    ),
  },
  {
    slug: 'community-support',
    title: 'Community Support',
    shortBlurb: 'NGO and government partnerships for lasting coastal impact.',
    image: assetUrl('/images/prev-4.jpg'),
    icon: 'heart' as const,
    description:
      'Takeover Festival channels tourism revenue into lasting community benefit. Through partnerships with local NGOs, government agencies, and social enterprises, we fund scholarships, support fisherfolk cooperatives, and invest in coastal livelihood programs. Every ticket sold contributes to programs that outlast the festival weekend.',
    schedule: [
      'Nov 25 · 2 PM — Community partner showcase at expo dome',
      'Nov 27 · 11 AM — NGO networking & impact sessions',
      'Nov 28 · 3 PM — Local enterprise marketplace',
    ],
    images: [
      assetUrl('/images/prev-4.jpg'),
      assetUrl('/images/cause-run.png'),
      assetUrl('/images/cause-wellness.jpg'),
    ],
  },
] as const

export const EXPO_ITEMS = [
  {
    slug: 'poro-point-baywalk-arena',
    title: 'Poro Point Baywalk Arena',
    shortBlurb: 'Cliffs, coves, and festival grounds overlooking the West Philippine Sea.',
    image: assetUrl('/images/tourism-poropoint.jpg'),
    span: 'md:col-span-2 md:row-span-2',
    description:
      'The heart of Takeover Festival. Poro Point Baywalk Arena offers stunning cliffside views, direct beach access, and a world-class main stage setup. The arena accommodates 20,000+ attendees across multiple zones including main stage, VIP pavilions, wellness area, and food park.',
    highlights: [
      'Main stage with panoramic ocean views',
      'VIP pavilions and premium viewing decks',
      'Direct beach access and baywalk promenade',
      'Multiple F&B and merchandise zones',
    ],
    schedule: ['Nov 25–29 · Gates open daily at 12 PM'],
    images: [assetUrl('/images/tourism-poropoint.jpg'), assetUrl('/images/upcoming.png')],
  },
  {
    slug: 'dot-tourism-exhibition',
    title: 'DOT Tourism Exhibition',
    shortBlurb: 'Official Department of Tourism expo in twin white dome marquees.',
    image: assetUrl('/images/prev-6.png'),
    span: '',
    description:
      'The official Department of Tourism exhibition showcases the best destinations, resorts, and experiences across Region 1 and the Philippines. Twin white dome marquees host travel agencies, hotel partners, adventure operators, and cultural exhibits — making Takeover a launchpad for Philippine tourism.',
    highlights: [
      'Official DOT Region 1 showcase',
      'Resort and hotel partner booths',
      'Adventure and eco-tourism exhibits',
      'Cultural performances and demos',
    ],
    schedule: ['Nov 27–28 · 10 AM – 8 PM daily'],
    images: [assetUrl('/images/prev-6.png'), assetUrl('/images/dot-region.png'), assetUrl('/images/tourism-expo.jpg')],
  },
  {
    slug: 'food-park-heaven',
    title: 'Food Park Heaven',
    shortBlurb: '50+ food trucks, artisanal seafood stalls, and curated drink lounges.',
    image: assetUrl('/images/upcoming.png'),
    span: '',
    description:
      'La Union is a culinary destination, and our Food Park Heaven brings the best of it to the festival. Over 50 vendors serve everything from fresh grilled seafood and local delicacies to international street food, craft cocktails, and specialty coffee — all with ocean views.',
    highlights: [
      '50+ food trucks and artisan stalls',
      'Fresh La Union seafood specialties',
      'Craft cocktail and drink lounges',
      'Late-night bites through the finale',
    ],
    schedule: ['Nov 25–29 · 12 PM – 12 AM daily'],
    images: [assetUrl('/images/upcoming.png'), assetUrl('/images/tourism-foodpark.jpg'), assetUrl('/images/prev-3.jpg')],
  },
  {
    slug: 'wellness-zone',
    title: 'Wellness Zone',
    shortBlurb: 'Sunrise yoga, meditation, fitness sessions, and coastal wellness experiences.',
    image: assetUrl('/images/cause-wellness.jpg'),
    span: '',
    description:
      'Balance the party with purpose. The Wellness Zone offers sunrise yoga on the beach, guided meditation, fitness sessions with Gold\'s Gym trainers, cold plunge dips, and holistic wellness workshops. A space to recharge body and mind between sets.',
    highlights: [
      'Sunrise beach yoga and meditation',
      'Gold\'s Gym fitness sessions',
      'Cold plunge and recovery area',
      'Holistic wellness workshops',
    ],
    schedule: ['Nov 26–29 · 6 AM – 11 AM daily'],
    images: [assetUrl('/images/cause-wellness.jpg'), assetUrl('/images/prev-4.jpg')],
  },
] as const

export const LOCATION_DETAILS = {
  parking: [
    'On-site parking at Poro Point Freeport Zone (limited, first-come basis)',
    'Overflow parking at San Fernando city center with shuttle service',
    'VIP pass holders receive dedicated parking near the arena entrance',
    'Motorcycle parking available at the east gate',
  ],
  transportation: [
    'By car: MacArthur Highway to San Fernando, La Union — follow Poro Point signage',
    'By bus: Victory Liner / Partas to San Fernando, then tricycle or shuttle to Poro Point',
    'By air: Clark International Airport (2.5 hrs) or Laoag International Airport (1.5 hrs)',
    'Shuttle services from San Juan and Bauang surf towns (schedules TBA)',
  ],
  venueInfo: [
    'Open-air beachfront arena with multiple zones',
    'Accessible pathways throughout the venue',
    'First aid stations and security checkpoints at all gates',
    'Re-entry allowed with valid wristband and ID',
  ],
} as const

export function getCauseBySlug(slug: string) {
  return COMMUNITY_CAUSES.find((c) => c.slug === slug)
}

export function getExpoBySlug(slug: string) {
  return EXPO_ITEMS.find((e) => e.slug === slug)
}
