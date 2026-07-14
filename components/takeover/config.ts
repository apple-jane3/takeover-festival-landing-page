export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const LOGO_SRC = assetUrl('/images/logo.png')
export const LOGO_ALT = 'Takeover Festival La Union 2026'

export const takeoverImage = (path: string) => assetUrl(`/images/takeover/${path}`)

export const takeoverVideo = (path: string) => assetUrl(`/videos/takeover/${path}`)

export const causeImage = (slug: string, file: string) => assetUrl(`/images/causes/${slug}/${file}`)

export const causeVideo = (slug: string, file: string) => assetUrl(`/videos/causes/${slug}/${file}`)

export const causeGallery = (slug: string, count: number, ext: 'jpg' | 'png' = 'jpg') =>
  Array.from({ length: count }, (_, i) =>
    causeImage(slug, `${String(i + 1).padStart(2, '0')}.${ext}`),
  )

export const TICKETS_ENABLED = import.meta.env.VITE_TICKETS_ENABLED === 'true'

export const TICKETS_URL = 'https://takeover.helixpay.ph/'

export const FESTIVAL_START = '2026-11-25T16:00:00+08:00'
export const FESTIVAL_END = '2026-11-29'
export const FESTIVAL_DATE_RANGE = 'November 25–29, 2026'

export const FESTIVAL_LOCATION = 'Poro Point Baywalk Arena'
export const FESTIVAL_CITY = 'Poro Point Freeport Zone, San Fernando, La Union'

export const SITE_URL = 'https://takeoverfestival.com'
export const CONTACT_EMAIL = 'VIP@takeoverfestival.com'
export const PRESS_EMAIL = 'press@takeoverfestival.com'
export const SPONSOR_EMAIL = 'sponsor@takeoverlu.ph'
export const NEWSLETTER_EMAIL = 'newsletter@takeoverfestival.com'
export const CONTACT_PHONE = '+63 917 123 4567'
export const CONTACT_PHONE_HREF = 'tel:+639171234567'

export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Poro+Point+Freeport+Zone,+San+Fernando,+La+Union&t=&z=14&ie=UTF8&iwloc=&output=embed'

export const heroVideo = (path: string) => assetUrl(`/videos/hero/${path}`)

export const HERO_VIDEO_SRC = heroVideo('hero.mp4')
export const HERO_VIDEO_PLAYBACK_RATE = 0.5
export const HERO_POSTER_SRC = assetUrl('/images/hero/poster.jpg')
export const HERO_MARK_SRC = assetUrl('/images/hero/mark.png')
export const HERO_SUN_DIVIDER_SRC = assetUrl('/images/hero/sun-divider.png')
export const HERO_DATE_LABEL = 'NOVEMBER 25–29, 2026'

export const PROMO_VIDEO_SRC = takeoverVideo('festival-promo.mp4')
export const PROMO_VIDEO_POSTER = takeoverImage('gallery/nina-6409.jpg')

export const FESTIVAL_VIDEOS = [
  {
    title: 'Nina Live at Takeover',
    caption: 'Nina · July 4',
    src: takeoverVideo('festival-promo.mp4'),
    poster: takeoverImage('gallery/nina-6409.jpg'),
  },
  {
    title: 'MYMP at Takeover',
    caption: 'MYMP · July 1',
    src: takeoverVideo('highlights/mymp.mp4'),
    poster: takeoverImage('artists/mymp.jpg'),
  },
  {
    title: 'Fiona at Paramore Night',
    caption: 'Paramore Night · June 27',
    src: takeoverVideo('highlights/fiona.mp4'),
    poster: takeoverImage('gallery/fiona-6221.jpg'),
  },
] as const

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

export const VENUE_PARTNER = {
  name: 'Poro Point Management Corporation',
  shortName: 'PPMC',
  logo: assetUrl('/images/sponsors/ppmc.png'),
  website: 'https://poropointfreeport.gov.ph/',
  description:
    'Takeover Festival 2026 is held in partnership with Poro Point Management Corporation (PPMC), steward of the Poro Point Freeport Zone. A subsidiary of the Bases Conversion and Development Authority, PPMC manages one of Northern Luzon\'s premier coastal destinations — home to the Baywalk Arena, cliffside bay views, and the iconic lighthouse known as the Beacon of the North.',
  highlights: [
    'Poro Point Baywalk Arena — festival main stage',
    '236-hectare coastal freeport zone in San Fernando, La Union',
    'Northern Luzon\'s beacon for tourism, trade, and community events',
  ],
} as const

export const VENUE_PARTNER_MEDIA = [
  {
    type: 'image' as const,
    src: takeoverImage('venue.jpg'),
    alt: 'Aerial view of Poro Point coastline and festival grounds',
  },
  {
    type: 'image' as const,
    src: takeoverImage('countdown.jpg'),
    alt: 'Poro Point cliffside overlooking the bay',
  },
  {
    type: 'video' as const,
    src: takeoverVideo('hero-day.mp4'),
    poster: takeoverImage('venue.jpg'),
    alt: 'Daytime views of Poro Point Freeport Zone',
  },
] as const

export type PartnerTier = 'title' | 'gold' | 'silver' | 'supporting'

export type Partner = {
  name: string
  logo: string
  tier: PartnerTier
  website?: string
}

export const PARTNER_TIER_ORDER: PartnerTier[] = ['title', 'gold', 'silver', 'supporting']

export const PARTNER_TIER_LABELS: Record<PartnerTier, string> = {
  title: 'Title Partners',
  gold: 'Gold Partners',
  silver: 'Silver Partners',
  supporting: 'Supporting Partners',
}

export const PARTNERS: readonly Partner[] = [
  { name: "Gold's Gym", logo: assetUrl('/images/sponsors/golds-gym.png'), tier: 'gold' },
  { name: 'HelixPay', logo: assetUrl('/images/sponsors/helixpay.png'), tier: 'gold' },
  { name: 'DOT Region 1', logo: assetUrl('/images/dot-region.png'), tier: 'silver' },
  { name: 'TakeOver Lounge', logo: LOGO_SRC, tier: 'supporting' },
]

export const CAROUSEL_PARTNERS: readonly Partner[] = [
  {
    name: VENUE_PARTNER.shortName,
    logo: VENUE_PARTNER.logo,
    tier: 'title',
    website: VENUE_PARTNER.website,
  },
  ...PARTNERS,
]

export function getPartnersByTier(tier: PartnerTier) {
  return PARTNERS.filter((partner) => partner.tier === tier)
}

export const PARTNER_BENEFITS = [
  {
    title: 'National Visibility',
    description:
      'Five days on Poro Point with 20,000+ capacity, DOT tourism expo, and coverage across music, travel, and lifestyle media.',
  },
  {
    title: 'On-Site Activation',
    description:
      'Brand lounges, expo booths, wellness zones, and festival village placements across the Baywalk Arena grounds.',
  },
  {
    title: 'Tourism & B2B Reach',
    description:
      'Connect with travelers, resort partners, and business delegates through the official DOT Region 1 tourism exhibition.',
  },
  {
    title: 'Purpose-Driven Association',
    description:
      'Align with beach cleanup, tree planting, and coastal community programs that extend impact beyond the festival weekend.',
  },
] as const

export const FEATURED_ARTISTS = [
  {
    name: 'MYMP',
    genre: 'OPM',
    date: 'Takeover · July 1',
    src: takeoverImage('artists/mymp.jpg'),
  },
  {
    name: 'Nina',
    genre: 'Pop & R&B',
    date: 'Takeover · July 4',
    src: takeoverImage('artists/nina.jpg'),
  },
  {
    name: 'Siakol',
    genre: 'Rock',
    date: 'Takeover · July 4',
    src: takeoverImage('artists/siakol.jpg'),
  },
  {
    name: 'The Youth',
    genre: 'Rock',
    date: 'Takeover · July 4',
    src: takeoverImage('artists/the-youth.jpg'),
  },
  {
    name: 'Mayonnaise',
    genre: 'Alternative Rock',
    date: 'Takeover · January 24',
    src: takeoverImage('artists/mayonnaise.jpg'),
  },
] as const

export const GALLERY_ITEMS = [
  {
    src: takeoverImage('gallery/boracay-lineup-2026.jpg'),
    alt: 'Takeover Beach Music Festival lineup poster at Boracay sunset',
    caption: 'Boracay Beach Festival',
    description: 'Sun-soaked sets and island energy at the Takeover Beach Music Festival in Boracay.',
  },
  {
    src: takeoverImage('gallery/paramore-night-19.jpg'),
    alt: 'Paramore Night crowd at Takeover La Union',
    caption: 'Paramore Night',
    description: 'A packed Paramore Night takeover — June 27 at Takeover La Union.',
  },
  {
    src: takeoverImage('gallery/paramore-night-08.jpg'),
    alt: 'Main stage lights during Paramore Night',
    caption: 'Main Stage Energy',
    description: 'Headline nights light up the Takeover main stage.',
  },
  {
    src: takeoverImage('gallery/nina-6409.jpg'),
    alt: 'Nina performing at Takeover',
    caption: 'Nina Live',
    description: 'Nina brought soulful pop and R&B to Takeover — July 4.',
  },
  {
    src: takeoverImage('gallery/paramore-night-28.jpg'),
    alt: 'Night festival atmosphere at Takeover',
    caption: 'Night Vibes',
    description: 'Coastal nights, live music, and festival lights.',
  },
  {
    src: takeoverImage('gallery/fiona-6221.jpg'),
    alt: 'Fiona performing at Paramore Night',
    caption: 'Fiona',
    description: 'Local talent on the Paramore Night bill.',
  },
  {
    src: takeoverImage('gallery/pixiedaze-6109.jpg'),
    alt: 'Pixiedaze performing at Takeover',
    caption: 'Pixiedaze',
    description: 'Pixiedaze on stage during Paramore Night.',
  },
  {
    src: takeoverImage('gallery/paramore-night-12.jpg'),
    alt: 'Band performing at Takeover festival',
    caption: 'Live Bands',
    description: 'Rock, pop, and OPM across every Takeover weekend.',
  },
  {
    src: takeoverImage('gallery/paramore-night-22.jpg'),
    alt: 'Festival audience with phones raised',
    caption: 'Sing Along',
    description: 'Fans capture unforgettable sets by the sea.',
  },
  {
    src: takeoverImage('gallery/paramore-night-03.jpg'),
    alt: 'Wide shot of Takeover festival grounds',
    caption: 'Festival Grounds',
    description: 'The Takeover experience stretches across Poro Point.',
  },
  {
    src: takeoverImage('gallery/paramore-night-01.jpg'),
    alt: 'Opening moments at Paramore Night',
    caption: 'Opening Night',
    description: 'Every Takeover weekend starts with electric opening sets.',
  },
] as const

export const COMMUNITY_CAUSES = [
  {
    slug: 'beach-cleanup',
    title: 'Beach Cleanup',
    shortBlurb: 'Morning shoreline sessions with festival-goers and local partners.',
    image: causeImage('beach-cleanup', '01.png'),
    icon: 'waves' as const,
    description:
      'Every Takeover Festival begins with purpose. Our beach cleanup program mobilizes volunteers across Poro Point and San Fernando\'s coastline. Partnering with local LGUs, environmental NGOs, and coastal communities, we remove plastic waste, restore dunes, and educate participants on sustainable coastal practices.',
    schedule: [
      'Nov 25 · 7 AM — Kickoff cleanup at Poro Point Baywalk',
      'Nov 27 · 8 AM — Main festival cleanup drive',
      'Nov 29 · 6 AM — Final coastal sweep before finale',
    ],
    images: causeGallery('beach-cleanup', 1, 'png'),
    videos: [] as const,
  },
  {
    slug: 'tree-planting',
    title: 'Tree Planting',
    shortBlurb: 'Mangrove and native tree restoration in coastal buffer zones.',
    image: causeImage('tree-planting', '01.jpg'),
    icon: 'sprout' as const,
    description:
      'Coastal buffer zones are critical to protecting La Union\'s shores from erosion and storm surge. Our tree planting initiative focuses on mangrove restoration and native species reforestation in partnership with DENR, local barangays, and environmental advocates. Festival attendees roll up their sleeves and plant trees that will protect the coast for generations.',
    schedule: [
      'Nov 29 · 8 AM — Mangrove nursery orientation',
      'Nov 29 · 10 AM — Coastal buffer planting session',
      'Nov 29 · 2 PM — Grand planting finale',
    ],
    images: causeGallery('tree-planting', 13),
    videos: [] as const,
  },
  {
    slug: 'community-support',
    title: 'Community Support',
    shortBlurb: 'NGO and government partnerships for lasting coastal impact.',
    image: takeoverImage('community.jpg'),
    icon: 'heart' as const,
    description:
      'Takeover Festival channels tourism revenue into lasting community benefit. Through partnerships with local NGOs, government agencies, and social enterprises, we fund scholarships, support fisherfolk cooperatives, and invest in coastal livelihood programs. Every ticket sold contributes to programs that outlast the festival weekend.',
    schedule: [
      'Nov 25 · 2 PM — Community partner showcase at expo dome',
      'Nov 27 · 11 AM — NGO networking & impact sessions',
      'Nov 28 · 3 PM — Local enterprise marketplace',
    ],
    images: [
      takeoverImage('community.jpg'),
      takeoverImage('gallery/nina-6413.jpg'),
      takeoverImage('crowd.jpg'),
    ],
    videos: [] as const,
  },
] as const

export const FESTIVAL_VILLAGE_ZONES = [
  {
    slug: 'wellness-experience-zone',
    title: 'Wellness Experience Zone',
    shortBlurb: 'Sunrise yoga, fitness, and coastal wellness experiences.',
    image: takeoverImage('wellness-golds.png'),
  },
  {
    slug: 'activities-zone',
    title: 'Activities Zone',
    shortBlurb: 'Festival activities, games, and interactive experiences all day.',
    image: takeoverImage('crowd.jpg'),
  },
  {
    slug: 'food-zone',
    title: 'Food Zone',
    shortBlurb: 'Food trucks, artisan stalls, and curated drink lounges.',
    image: takeoverImage('food-park-heaven.png'),
  },
  {
    slug: 'camping-village',
    title: 'Camping Village',
    shortBlurb: 'Beachfront camping, glamping, and overnight stays under the stars.',
    image: takeoverImage('experience.jpg'),
  },
  {
    slug: 'tourism-expo',
    title: 'Tourism Expo',
    shortBlurb: 'Destinations, businesses, and culture from across Region 1.',
    image: takeoverImage('expo-crowd.jpg'),
  },
  {
    slug: 'community-causes',
    title: 'Community Causes',
    shortBlurb: 'Purpose-driven initiatives that protect the coast we love.',
    image: takeoverImage('community.jpg'),
  },
  {
    slug: 'takeover-festival-experience',
    title: 'Takeover Festival Experience',
    shortBlurb: 'The full Takeover journey — music, community, and coastal celebration.',
    image: takeoverImage('venue.jpg'),
  },
] as const

export const EXPO_ITEMS = [
  {
    slug: 'poro-point-baywalk-arena',
    title: 'Poro Point Baywalk Arena',
    shortBlurb: 'Cliffs, coves, and festival grounds overlooking the West Philippine Sea.',
    image: takeoverImage('venue.jpg'),
    description:
      'The heart of Takeover Festival. Poro Point Baywalk Arena offers stunning cliffside views, direct beach access, and a world-class main stage setup. The arena accommodates 20,000+ attendees across multiple zones including main stage, VIP pavilions, wellness area, and food park.',
    highlights: [
      'Main stage with panoramic ocean views',
      'VIP pavilions and premium viewing decks',
      'Direct beach access and baywalk promenade',
      'Multiple F&B and merchandise zones',
    ],
    schedule: ['Nov 25–29 · Gates open daily at 12 PM'],
    images: [takeoverImage('venue.jpg'), takeoverImage('gallery/paramore-night-03.jpg')],
  },
  {
    slug: 'dot-tourism-exhibition',
    title: 'DOT Tourism Exhibition',
    shortBlurb: 'Official Department of Tourism expo in twin white dome marquees.',
    image: takeoverImage('expo-crowd.jpg'),
    description:
      'The official Department of Tourism exhibition showcases the best destinations, resorts, and experiences across Region 1 and the Philippines. Twin white dome marquees host travel agencies, hotel partners, adventure operators, and cultural exhibits — making Takeover a launchpad for Philippine tourism.',
    highlights: [
      'Official DOT Region 1 showcase',
      'Resort and hotel partner booths',
      'Adventure and eco-tourism exhibits',
      'Cultural performances and demos',
    ],
    schedule: ['Nov 27–28 · 10 AM – 8 PM daily'],
    images: [takeoverImage('expo-crowd.jpg'), assetUrl('/images/dot-region.png')],
  },
  {
    slug: 'food-park-heaven',
    title: 'Food Park Heaven',
    shortBlurb: '50+ food trucks, artisanal seafood stalls, and curated drink lounges.',
    image: takeoverImage('food-park-heaven.png'),
    description:
      'La Union is a culinary destination, and our Food Park Heaven brings the best of it to the festival. Over 50 vendors serve everything from fresh grilled seafood and local delicacies to international street food, craft cocktails, and specialty coffee — all with ocean views.',
    highlights: [
      '50+ food trucks and artisan stalls',
      'Fresh La Union seafood specialties',
      'Craft cocktail and drink lounges',
      'Late-night bites through the finale',
    ],
    schedule: ['Nov 25–29 · 12 PM – 12 AM daily'],
    images: [takeoverImage('food-park-heaven.png')],
  },
  {
    slug: 'wellness-zone',
    title: "Gold's PH Wellness Zone",
    shortBlurb: 'Sunrise yoga, meditation, fitness sessions, and coastal wellness experiences.',
    image: takeoverImage('wellness-golds.png'),
    description:
      "Balance the party with purpose. Gold's PH Wellness Zone offers sunrise yoga on the beach, guided meditation, fitness sessions with Gold's Gym trainers, cold plunge dips, and holistic wellness workshops. A space to recharge body and mind between sets.",
    highlights: [
      'Sunrise beach yoga and meditation',
      "Gold's Gym fitness sessions",
      'Cold plunge and recovery area',
      'Holistic wellness workshops',
    ],
    schedule: ['Nov 26–29 · 6 AM – 11 AM daily'],
    images: [takeoverImage('wellness-golds.png')],
  },
  {
    slug: 'cca-culinary',
    title: 'CCA Culinary',
    shortBlurb: 'Live demos, chef showcases, and hands-on culinary experiences from CCA Manila.',
    image: takeoverImage('food-park.jpg'),
    description:
      'CCA Culinary brings world-class culinary education to the coast. Watch live cooking demonstrations from CCA Manila chefs, sample signature dishes, and explore pop-up kitchens featuring La Union ingredients. A destination for food lovers who want more than a food truck lineup.',
    highlights: [
      'Live chef demonstrations and tastings',
      'CCA Manila culinary pop-up kitchens',
      'La Union farm-to-table showcases',
      'Hands-on workshops for festival-goers',
    ],
    schedule: ['Nov 27–28 · 11 AM – 7 PM daily'],
    images: [takeoverImage('food-park.jpg'), takeoverImage('gallery/paramore-night-01.jpg')],
  },
  {
    slug: 'camping-village',
    title: 'Camping Village',
    shortBlurb: 'Beachfront camping, glamping tents, and overnight stays under the stars.',
    image: takeoverImage('experience.jpg'),
    description:
      'Stay where the festival lives. Camping Village offers beachfront tent sites, premium glamping setups, and communal fire pits steps from the main stage. Wake up to sunrise over the West Philippine Sea and roll straight into the day\'s lineup.',
    highlights: [
      'Beachfront tent and glamping sites',
      'Premium overnight packages available',
      'Communal lounges and fire pit areas',
      'Steps from main stage and food park',
    ],
    schedule: ['Nov 25–29 · Check-in from 2 PM daily'],
    images: [takeoverImage('experience.jpg'), takeoverImage('venue.jpg')],
  },
  {
    slug: 'culture-and-arts-zone',
    title: 'Culture and Arts Zone',
    shortBlurb: 'Local artisans, live performances, and Ilocano heritage on display.',
    image: takeoverImage('community.jpg'),
    description:
      'Celebrate the soul of La Union. The Culture and Arts Zone spotlights Ilocano heritage through artisan markets, weaving and pottery demos, live folk performances, and contemporary art installations. A space where coastal culture meets festival energy.',
    highlights: [
      'Artisan markets and craft demonstrations',
      'Live folk and contemporary performances',
      'Ilocano heritage and storytelling sessions',
      'Open-air gallery and mural walk',
    ],
    schedule: ['Nov 26–29 · 10 AM – 9 PM daily'],
    images: [takeoverImage('community.jpg'), takeoverImage('gallery/paramore-night-19.jpg')],
  },
  {
    slug: 'the-takeover-zone',
    title: 'The Takeover Zone',
    shortBlurb: 'Brand activations, merch drops, and the pulse of Takeover Festival.',
    image: takeoverImage('crowd.jpg'),
    description:
      'The beating heart of the festival brand. The Takeover Zone hosts exclusive merch drops, partner activations, photo moments, and surprise pop-up performances. This is where the Takeover community gathers between sets.',
    highlights: [
      'Official Takeover merch and collectibles',
      'Partner brand activations and lounges',
      'Photo walls and immersive installations',
      'Surprise pop-up sets and meet-and-greets',
    ],
    schedule: ['Nov 25–29 · 12 PM – 12 AM daily'],
    images: [takeoverImage('crowd.jpg'), takeoverImage('gallery/paramore-night-28.jpg')],
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

export const FEATURED_MEDIA_COVERAGE = [
  {
    outlet: 'The Philippine Star',
    title: 'Takeover Festival Brings Five Days of Music and Tourism to La Union',
    summary:
      'Coverage of Takeover Festival 2026 — a beachfront celebration pairing live music, DOT tourism expo, and community causes along Poro Point.',
    date: '2026',
    image: takeoverImage('expo-crowd.jpg'),
  },
  {
    outlet: 'The Manila Times',
    title: 'La Union Coast Set for Takeover Festival Weekend',
    summary:
      'How Takeover Festival is positioning Poro Point as a premier destination for music, wellness, and Philippine tourism.',
    date: '2026',
    image: takeoverImage('venue.jpg'),
  },
  {
    outlet: 'Philippine Tourism & Travel Magazine',
    title: 'Takeover La Union: Where Festival Energy Meets Coastal Discovery',
    summary:
      'A feature on the festival village, tourism expo, and the five-day experience drawing travelers to San Fernando, La Union.',
    date: '2026',
    image: takeoverImage('experience.jpg'),
  },
] as const

export const PRESS_RELEASES = [
  {
    outlet: 'Takeover Festival',
    title: 'Takeover Festival 2026 Announces November Dates at Poro Point',
    summary:
      'Official announcement of the five-day festival running November 25–29, 2026 at Poro Point Baywalk Arena, San Fernando, La Union.',
    date: 'Coming 2026',
  },
  {
    outlet: 'Takeover Festival',
    title: 'DOT Region 1 Partners with Takeover for Tourism Expo',
    summary:
      'Department of Tourism Region 1 joins Takeover Festival with a dedicated tourism exhibition showcasing destinations across Northern Luzon.',
    date: 'Coming 2026',
  },
  {
    outlet: 'Takeover Festival',
    title: 'Community Causes Program Launches Ahead of Festival Weekend',
    summary:
      'Beach cleanup, tree planting, and coastal community support initiatives open to festival-goers and local volunteers.',
    date: 'Coming 2026',
  },
] as const

export const MEDIA_INTERVIEWS = [
  {
    outlet: 'Takeover Festival',
    title: 'Festival Director on Building Takeover La Union',
    summary:
      'Behind the vision for a five-day festival that blends music, tourism, wellness, and purpose-driven community impact.',
    date: 'Coming 2026',
  },
  {
    outlet: 'Takeover Festival',
    title: 'DOT Region 1 on Tourism Expo at Takeover',
    summary:
      'How the official tourism exhibition connects travelers with destinations, resorts, and experiences across Region 1.',
    date: 'Coming 2026',
  },
  {
    outlet: 'Takeover Festival',
    title: 'Artists and Partners on the Takeover Experience',
    summary:
      'Conversations with performers, sponsors, and community partners shaping the Takeover Festival weekend.',
    date: 'Coming 2026',
  },
] as const

export const FUTURE_MEDIA_COVERAGE = [
  'National broadsheet features and lifestyle sections',
  'Broadcast and streaming coverage of headline performances',
  'Travel and tourism trade media spotlights',
  'Regional news and lifestyle program segments',
  'International travel press and festival roundups',
] as const

export function getCauseBySlug(slug: string) {
  return COMMUNITY_CAUSES.find((c) => c.slug === slug)
}

export function getExpoBySlug(slug: string) {
  return EXPO_ITEMS.find((e) => e.slug === slug)
}
