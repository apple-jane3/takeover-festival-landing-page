export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const LOGO_SRC = assetUrl('/images/hero/mark.png')
export const LOGO_ALT = 'Takeover Festival La Union 2026'

export const takeoverImage = (path: string) => assetUrl(`/images/takeover/${path}`)

export const meetingNotesImage = (file: string) => assetUrl(`/images/meeting-notes/${file}`)

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
export const CONTACT_EMAIL = 'Steve1.takeoverfestival@gmail.com'
export const PRESS_EMAIL = 'press@takeoverfestival.com'
export const SPONSOR_EMAIL = 'sponsor@takeoverlu.ph'
export const NEWSLETTER_EMAIL = 'newsletter@takeoverfestival.com'
export const CONTACT_PHONE = '+63 969 520 9950'
export const CONTACT_PHONE_HREF = 'tel:+639695209950'

export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Poro+Point+Freeport+Zone,+San+Fernando,+La+Union&t=&z=14&ie=UTF8&iwloc=&output=embed'

export const heroVideo = (path: string) => assetUrl(`/videos/hero/${path}`)

export const HERO_VIDEO_SRC = heroVideo('hero.mp4')
export const HERO_VIDEO_PLAYBACK_RATE = 0.5
export const HERO_POSTER_SRC = assetUrl('/images/hero/poster.jpg')
export const HERO_MARK_SRC = assetUrl('/images/hero/mark.png')
export const HERO_SUN_DIVIDER_SRC = assetUrl('/images/hero/sun-divider.png')
export const HERO_DATE_LABEL = 'NOVEMBER 25–29, 2026'

export const PROMO_VIDEO_SRC = takeoverVideo('highlights/mayonnaise.mp4')
export const PROMO_VIDEO_POSTER = meetingNotesImage('mayonnaise.png')

export const FESTIVAL_VIDEOS = [
  {
    title: 'Mayonnaise — Bakit Part 2',
    caption: 'Mayonnaise · Live at TakeOver Lounge',
    src: takeoverVideo('highlights/mayonnaise.mp4'),
    poster: meetingNotesImage('mayonnaise.png'),
  },
  {
    title: 'MYMP — Kailan',
    caption: 'MYMP · Live at TakeOver Lounge',
    src: takeoverVideo('highlights/mymp-kailan.mp4'),
    poster: takeoverImage('artists/mymp-live-01.png'),
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
    src: takeoverImage('baywalk/01-day-stage.png'),
    alt: 'Live band performing at Poro Point Baywalk Arena by day',
  },
  {
    type: 'image' as const,
    src: takeoverImage('baywalk/02-night-stage.png'),
    alt: 'Nighttime stage performance at Poro Point Baywalk Arena',
  },
  {
    type: 'image' as const,
    src: takeoverImage('baywalk/03-glow-crowd.png'),
    alt: 'Festival crowd at Poro Point Baywalk during a night event',
  },
  {
    type: 'image' as const,
    src: takeoverImage('baywalk/04-gloc9.png'),
    alt: 'Gloc-9 performing at Poro Point Baywalk Arena',
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

export type ArtistSocialLinks = {
  facebook?: string
  instagram?: string
  tiktok?: string
  youtube?: string
  spotify?: string
}

export type ArtistRelease = {
  title: string
  type: 'single' | 'album' | 'ep'
  year: string
  url: string
}

export const FEATURED_ARTISTS = [
  {
    slug: 'mymp',
    name: 'MYMP',
    genre: 'OPM',
    date: 'Takeover · July 1',
    src: takeoverImage('artists/mymp-portrait.png'),
    shortBlurb: 'Acoustic soul and timeless OPM ballads that defined a generation.',
    biography:
      'MYMP (Make Your Mama Proud) is the Philippines\' biggest-selling pop-acoustic band, known for heartfelt covers and originals that blend R&B, pop, and soul. Now featuring vocalists Juliet and Ethyl, the Bahala sisters, MYMP continues to fill lounge stages and festival crowds across the country — including a moving live performance of "Kailan" at TakeOver Lounge.',
    images: [
      takeoverImage('artists/mymp-portrait.png'),
      takeoverImage('artists/mymp-live-01.png'),
      takeoverImage('artists/mymp-live-02.png'),
      takeoverImage('artists/mymp-live-03.png'),
    ],
    videos: [takeoverVideo('highlights/mymp-kailan.mp4')],
    social: {
      facebook: 'https://www.facebook.com/mympofficial',
      tiktok: 'https://www.tiktok.com/@mympofficial',
      youtube: 'https://www.youtube.com/2010mymp',
      spotify: 'https://open.spotify.com/artist/5elcNQkZ6FCZA3grSOMngY',
    },
    releases: [
      {
        title: 'Kailan',
        type: 'single',
        year: 'Live',
        url: 'https://open.spotify.com/search/Kailan%20MYMP',
      },
      {
        title: 'Especially For You',
        type: 'single',
        year: '2005',
        url: 'https://open.spotify.com/search/Especially%20For%20You%20MYMP',
      },
      {
        title: 'Tell Me Where It Hurts',
        type: 'single',
        year: '2004',
        url: 'https://open.spotify.com/search/Tell%20Me%20Where%20It%20Hurts%20MYMP',
      },
      {
        title: 'Wish I Could',
        type: 'single',
        year: '2024',
        url: 'https://open.spotify.com/search/Wish%20I%20Could%20MYMP',
      },
    ],
  },
  {
    slug: 'apl-de-ap',
    name: 'Apl.de.Ap',
    genre: 'Hip-Hop',
    date: 'Takeover · 2026',
    src: meetingNotesImage('apl-de-ap.png'),
    shortBlurb: 'Black Eyed Peas co-founder bringing global hip-hop home to La Union.',
    biography:
      'Allan Pineda Lindo, known as Apl.de.Ap, is a founding member of the Black Eyed Peas and one of the most internationally recognized Filipino artists in music. Born in Angeles City and raised in the United States, he has bridged Filipino culture and global hip-hop for decades — and returns to Takeover Festival in 2026.',
    images: [meetingNotesImage('apl-de-ap.png'), meetingNotesImage('apl-de-ap-live.png')],
    videos: [] as const,
    social: {
      facebook: 'https://www.facebook.com/apldeap',
      instagram: 'https://www.instagram.com/apldeap/',
      youtube: 'https://www.youtube.com/@apldeap',
      tiktok: 'https://www.tiktok.com/@apldeap',
      spotify: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju',
    },
    releases: [
      {
        title: 'We Can Be Anything',
        type: 'single',
        year: '2012',
        url: 'https://open.spotify.com/search/We%20Can%20Be%20Anything%20Apl.de.Ap',
      },
      {
        title: 'No Fun',
        type: 'single',
        year: '2020',
        url: 'https://open.spotify.com/search/No%20Fun%20Apl.de.Ap',
      },
    ],
  },
  {
    slug: 'gloc-9',
    name: 'Gloc-9',
    genre: 'Hip-Hop',
    date: 'Takeover · 2026',
    src: meetingNotesImage('gloc-9.png'),
    shortBlurb: 'The Philippines\' foremost storyteller in Filipino hip-hop.',
    biography:
      'Aristotle Pollisco, professionally known as Gloc-9, is widely regarded as the greatest Filipino rapper of his generation. His razor-sharp lyricism, social commentary, and mastery of both Tagalog and English have earned him a devoted following. Gloc-9 headlines Takeover Beach Music Festival in 2026.',
    images: [meetingNotesImage('gloc-9.png'), takeoverImage('baywalk/04-gloc9.png')],
    videos: [] as const,
    social: {
      facebook: 'https://www.facebook.com/gloc9official',
      instagram: 'https://www.instagram.com/gloc9official/',
      youtube: 'https://www.youtube.com/@gloc9official',
      spotify: 'https://open.spotify.com/artist/6dI1D5rP2XUyVzc8T0z8yG',
    },
    releases: [
      {
        title: 'Upuan',
        type: 'single',
        year: '2009',
        url: 'https://open.spotify.com/search/Upuan%20Gloc-9',
      },
      {
        title: 'Simpleng Tao',
        type: 'single',
        year: '2004',
        url: 'https://open.spotify.com/search/Simpleng%20Tao%20Gloc-9',
      },
    ],
  },
  {
    slug: 'mayonnaise',
    name: 'Mayonnaise',
    genre: 'Alternative Rock',
    date: 'Takeover · January 24',
    src: meetingNotesImage('mayonnaise.png'),
    shortBlurb: 'Alternative rock anthems that turn every crowd into a singalong.',
    biography:
      'Mayonnaise is a Filipino alternative rock band formed in the early 2000s, beloved for anthems like "Jopay" and "Bakit Part 2." Their high-energy live shows and melodic hooks have made them a festival favorite across the Philippines — including a packed set at Takeover Lounge on January 24.',
    images: [meetingNotesImage('mayonnaise.png'), takeoverImage('artists/mayonnaise.jpg')],
    videos: [takeoverVideo('highlights/mayonnaise.mp4')],
    social: {
      facebook: 'https://www.facebook.com/MayonnaiseBand',
      instagram: 'https://www.instagram.com/mayonnaiseband/',
      youtube: 'https://www.youtube.com/@MayonnaiseBand',
      spotify: 'https://open.spotify.com/artist/5vQqXqXqXqXqXqXqXqXqXq',
    },
    releases: [
      {
        title: 'Jopay',
        type: 'single',
        year: '2005',
        url: 'https://open.spotify.com/search/Jopay%20Mayonnaise',
      },
      {
        title: 'Bakit Part 2',
        type: 'single',
        year: '2008',
        url: 'https://open.spotify.com/search/Bakit%20Part%202%20Mayonnaise',
      },
    ],
  },
  {
    slug: 'siakol',
    name: 'Siakol',
    genre: 'Rock',
    date: 'Takeover · July 4',
    src: takeoverImage('artists/siakol.jpg'),
    shortBlurb: 'Pinoy rock legends with decades of festival-fueling energy.',
    biography:
      'Siakol is a pioneering Filipino rock band that rose to fame in the late 1990s with hits like "Itaktak Mo" and "Bakit Ba." Their raw, energetic performances and working-class anthems have made them a staple of Philippine rock festivals — including a fiery Takeover set on July 4.',
    images: [takeoverImage('artists/siakol.jpg')],
    videos: [] as const,
    social: {
      facebook: 'https://www.facebook.com/SiakolOfficial',
      instagram: 'https://www.instagram.com/siakolofficial/',
      youtube: 'https://www.youtube.com/@SiakolOfficial',
      spotify: 'https://open.spotify.com/artist/7vQqXqXqXqXqXqXqXqXqXq',
    },
    releases: [
      {
        title: 'Itaktak Mo',
        type: 'single',
        year: '1999',
        url: 'https://open.spotify.com/search/Itaktak%20Mo%20Siakol',
      },
      {
        title: 'Bakit Ba',
        type: 'single',
        year: '2001',
        url: 'https://open.spotify.com/search/Bakit%20Ba%20Siakol',
      },
    ],
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
    src: meetingNotesImage('mayonnaise.png'),
    alt: 'Mayonnaise performing at Takeover',
    caption: 'Mayonnaise Live',
    description: 'Mayonnaise brought alternative rock energy to Takeover — January 24.',
  },
  {
    src: meetingNotesImage('apl-de-ap-live.png'),
    alt: 'Apl.de.Ap performing at Takeover',
    caption: 'Apl.de.Ap Live',
    description: 'Apl.de.Ap on stage at Takeover Festival.',
  },
  {
    src: meetingNotesImage('gloc-9.png'),
    alt: 'Gloc-9 Takeover Beach Music Festival poster',
    caption: 'Gloc-9',
    description: 'Gloc-9 headlining Takeover Beach Music Festival at San Juan Beach, La Union.',
  },
  {
    src: meetingNotesImage('beach-cleanup.png'),
    alt: 'Volunteers at a coastal cleanup event',
    caption: 'Coastal Cleanup',
    description: 'Community volunteers removing plastic waste from the shoreline.',
  },
  {
    src: meetingNotesImage('beach-cleanup-2.png'),
    alt: 'Beach cleanup volunteers along the rocky shore',
    caption: 'Beach Cleanup Drive',
    description: 'Festival community causes in action — protecting La Union\'s coast.',
  },
  {
    src: meetingNotesImage('festival-experience.png'),
    alt: 'Live band performing at Takeover Lounge',
    caption: 'Takeover Lounge',
    description: 'The energy of Takeover live — music, crowd, and festival atmosphere.',
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
    image: meetingNotesImage('beach-cleanup.png'),
    icon: 'waves' as const,
    description:
      'Every Takeover Festival begins with purpose. Our beach cleanup program mobilizes volunteers across Poro Point and San Fernando\'s coastline. Partnering with local LGUs, environmental NGOs, and coastal communities, we remove plastic waste, restore dunes, and educate participants on sustainable coastal practices.',
    schedule: [
      'Nov 25 · 7 AM — Kickoff cleanup at Poro Point Baywalk',
      'Nov 27 · 8 AM — Main festival cleanup drive',
      'Nov 29 · 6 AM — Final coastal sweep before finale',
    ],
    images: [meetingNotesImage('beach-cleanup.png'), meetingNotesImage('beach-cleanup-2.png')],
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
    image: takeoverImage('crowd.jpg'),
    icon: 'heart' as const,
    description:
      'Takeover Festival channels tourism revenue into lasting community benefit. Through partnerships with local NGOs, government agencies, and social enterprises, we fund scholarships, support fisherfolk cooperatives, and invest in coastal livelihood programs. Every ticket sold contributes to programs that outlast the festival weekend.',
    schedule: [
      'Nov 25 · 2 PM — Community partner showcase at expo dome',
      'Nov 27 · 11 AM — NGO networking & impact sessions',
      'Nov 28 · 3 PM — Local enterprise marketplace',
    ],
    images: [
      takeoverImage('crowd.jpg'),
      meetingNotesImage('festival-experience.png'),
    ],
    videos: [] as const,
  },
] as const

export const FESTIVAL_VILLAGE_ZONES = [
  {
    slug: 'wellness-experience-zone',
    title: 'Wellness Experience Zone',
    shortBlurb:
      'Recharge your mind and body with yoga, meditation, recovery areas, massage, fitness sessions, and coastal wellness experiences.',
    image: takeoverImage('wellness-golds.png'),
    href: '/expo/wellness-zone',
  },
  {
    slug: 'activities-zone',
    title: 'Activities Zone',
    shortBlurb:
      'HYROX-inspired fitness challenges, obstacle activities, sports games, and action-packed interactive experiences.',
    image: meetingNotesImage('activities-zone.png'),
    href: '/expo/the-takeover-zone',
  },
  {
    slug: 'food-culinary-zone',
    title: 'Food & Culinary Zone',
    shortBlurb:
      'Celebrity chefs, MasterChef-style competitions, culinary demonstrations, VIP kitchen, and world-class cuisine.',
    image: meetingNotesImage('food-culinary.png'),
    href: '/expo/food-park-heaven',
  },
  {
    slug: 'camping-village',
    title: 'Camping Village',
    shortBlurb:
      'Stay close to the excitement with beachfront camping, glamping tents, campfires, and unforgettable outdoor festival nights.',
    image: takeoverImage('camping/01-lounge.png'),
    href: '/expo/camping-village',
  },
  {
    slug: 'tourism-expo',
    title: 'Tourism Expo',
    shortBlurb:
      'Explore the best destinations, attractions, culture, businesses, and tourism opportunities across Region 1.',
    image: assetUrl('/images/dot-region.png'),
    href: '/expo/dot-tourism-exhibition',
  },
  {
    slug: 'community-causes',
    title: 'Community Causes',
    shortBlurb:
      'Be part of beach cleanups, tree planting, mangrove restoration, and projects that create lasting environmental impact.',
    image: meetingNotesImage('beach-cleanup-2.png'),
    href: '/causes',
  },
  {
    slug: 'takeover-festival-experience',
    title: 'Takeover Festival Experience',
    shortBlurb:
      'Unforgettable performances, spectacular productions, immersive attractions, and the energy that makes Takeover unique.',
    image: takeoverImage('baywalk/01-day-stage.png'),
    href: '/expo/poro-point-baywalk-arena',
  },
] as const

export const EXPO_ITEMS = [
  {
    slug: 'poro-point-baywalk-arena',
    title: 'Poro Point Baywalk Arena',
    shortBlurb: 'Cliffs, coves, and festival grounds overlooking the West Philippine Sea.',
    image: takeoverImage('baywalk/01-day-stage.png'),
    description:
      'The heart of Takeover Festival. Poro Point Baywalk Arena offers stunning cliffside views, direct beach access, and a world-class main stage setup. The arena accommodates 20,000+ attendees across multiple zones including main stage, VIP pavilions, wellness area, and food park.',
    highlights: [
      'Main stage with panoramic ocean views',
      'VIP pavilions and premium viewing decks',
      'Direct beach access and baywalk promenade',
      'Multiple F&B and merchandise zones',
    ],
    schedule: ['Nov 25–29 · Gates open daily at 12 PM'],
    images: [
      takeoverImage('baywalk/01-day-stage.png'),
      takeoverImage('baywalk/02-night-stage.png'),
      takeoverImage('baywalk/03-glow-crowd.png'),
      takeoverImage('baywalk/04-gloc9.png'),
    ],
  },
  {
    slug: 'dot-tourism-exhibition',
    title: 'DOT Tourism Exhibition',
    shortBlurb: 'Official Department of Tourism expo in twin white dome marquees.',
    image: assetUrl('/images/dot-region.png'),
    description:
      'The official Department of Tourism exhibition showcases the best destinations, resorts, and experiences across Region 1 and the Philippines. Twin white dome marquees host travel agencies, hotel partners, adventure operators, and cultural exhibits — making Takeover a launchpad for Philippine tourism.',
    highlights: [
      'Official DOT Region 1 showcase',
      'Resort and hotel partner booths',
      'Adventure and eco-tourism exhibits',
      'Cultural performances and demos',
    ],
    schedule: ['Nov 27–28 · 10 AM – 8 PM daily'],
    images: [assetUrl('/images/dot-region.png'), takeoverImage('expo-crowd.jpg')],
  },
  {
    slug: 'food-park-heaven',
    title: 'Food & Culinary Zone',
    shortBlurb: 'Celebrity chefs, culinary demos, MasterChef-style competitions, and 50+ food stalls.',
    image: meetingNotesImage('food-culinary.png'),
    description:
      'La Union is a culinary destination, and our Food & Culinary Zone brings the best of it to the festival. Executive Chef Bill Golding, the Chefs Cooperative, and CCA Manila lead live cooking demonstrations, MasterChef-style competitions, and a VIP kitchen experience — alongside 50+ vendors serving fresh seafood, local delicacies, and international street food with ocean views.',
    highlights: [
      'Executive Chef Bill Golding & celebrity chef showcases',
      'MasterChef-style cooking competition',
      '50+ food trucks and artisan stalls',
      'VIP kitchen and culinary exhibition',
    ],
    schedule: ['Nov 25–29 · 12 PM – 12 AM daily'],
    images: [meetingNotesImage('food-culinary.png'), meetingNotesImage('takeover-lounge.png')],
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
    image: meetingNotesImage('food-culinary.png'),
    description:
      'CCA Culinary brings world-class culinary education to the coast. Watch live cooking demonstrations from CCA Manila chefs, sample signature dishes, and explore pop-up kitchens featuring La Union ingredients. A destination for food lovers who want more than a food truck lineup.',
    highlights: [
      'Live chef demonstrations and tastings',
      'CCA Manila culinary pop-up kitchens',
      'La Union farm-to-table showcases',
      'Hands-on workshops for festival-goers',
    ],
    schedule: ['Nov 27–28 · 11 AM – 7 PM daily'],
    images: [meetingNotesImage('food-culinary.png'), meetingNotesImage('takeover-lounge.png')],
  },
  {
    slug: 'camping-village',
    title: 'Camping Village',
    shortBlurb: 'Beachfront camping, glamping tents, and overnight stays under the stars.',
    image: takeoverImage('camping/01-lounge.png'),
    description:
      'Stay where the festival lives. Camping Village offers beachfront tent sites, premium glamping setups, and communal fire pits steps from the main stage. Wake up to sunrise over the West Philippine Sea and roll straight into the day\'s lineup.',
    highlights: [
      'Beachfront tent and glamping sites',
      'Premium overnight packages available',
      'Communal lounges and fire pit areas',
      'Steps from main stage and food park',
    ],
    schedule: ['Nov 25–29 · Check-in from 2 PM daily'],
    images: [
      takeoverImage('camping/01-lounge.png'),
      takeoverImage('camping/02-tents.png'),
      takeoverImage('camping/03-group.png'),
      takeoverImage('camping/04-friends.png'),
      takeoverImage('camping/05-couple.png'),
      takeoverImage('camping/06-artists.png'),
      takeoverImage('camping/07-family.png'),
    ],
  },
  {
    slug: 'culture-and-arts-zone',
    title: 'Culture and Arts Zone',
    shortBlurb: 'Local artisans, live performances, and Ilocano heritage on display.',
    image: meetingNotesImage('beach-cleanup-2.png'),
    description:
      'Celebrate the soul of La Union. The Culture and Arts Zone spotlights Ilocano heritage through artisan markets, weaving and pottery demos, live folk performances, and contemporary art installations. A space where coastal culture meets festival energy.',
    highlights: [
      'Artisan markets and craft demonstrations',
      'Live folk and contemporary performances',
      'Ilocano heritage and storytelling sessions',
      'Open-air gallery and mural walk',
    ],
    schedule: ['Nov 26–29 · 10 AM – 9 PM daily'],
    images: [meetingNotesImage('beach-cleanup-2.png'), meetingNotesImage('beach-cleanup.png')],
  },
  {
    slug: 'the-takeover-zone',
    title: 'The Takeover Zone',
    shortBlurb: 'Brand activations, merch drops, and the pulse of Takeover Festival.',
    image: meetingNotesImage('activities-zone.png'),
    description:
      'The beating heart of the festival brand. The Takeover Zone hosts exclusive merch drops, partner activations, photo moments, and surprise pop-up performances. This is where the Takeover community gathers between sets.',
    highlights: [
      'Official Takeover merch and collectibles',
      'Partner brand activations and lounges',
      'Photo walls and immersive installations',
      'Surprise pop-up sets and meet-and-greets',
    ],
    schedule: ['Nov 25–29 · 12 PM – 12 AM daily'],
    images: [meetingNotesImage('activities-zone.png'), meetingNotesImage('festival-experience.png')],
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

export function getArtistBySlug(slug: string) {
  return FEATURED_ARTISTS.find((artist) => artist.slug === slug)
}
