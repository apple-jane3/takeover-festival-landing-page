export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const TICKETS_URL = 'https://takeover.helixpay.ph/'

export const FESTIVAL_START = '2026-11-27T16:00:00+08:00'
export const FESTIVAL_END = '2026-11-29'
export const FESTIVAL_DATE_RANGE = 'November 27–29, 2026'

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
    date: 'Nov 27',
    title: 'Opening Night',
    items: ['Gates open · 4 PM', 'Beach cleanup · 8 AM', 'Main stage headliners · 6 PM'],
  },
  {
    day: 'Day 2',
    date: 'Nov 28',
    title: 'Expo & Wellness',
    items: ['DOT Tourism Expo · All day', 'Wellness Zone · 7 AM', 'Sunset sessions · 5 PM'],
  },
  {
    day: 'Day 3',
    date: 'Nov 29',
    title: 'Grand Finale',
    items: ['Food Park · 12 PM', 'Tree planting · 9 AM', 'Fireworks finale · 10 PM'],
  },
] as const

export const FAQ_ITEMS = [
  {
    q: 'Where is Takeover Festival held?',
    a: 'Poro Point Baywalk Arena, Poro Point Freeport Zone, San Fernando, La Union.',
  },
  {
    q: 'What are the festival dates?',
    a: 'November 27–29, 2026 — a 3-day beachfront celebration.',
  },
  {
    q: 'How do I buy tickets?',
    a: 'Purchase passes online through our official HelixPay ticket page.',
  },
  {
    q: 'Is the festival family-friendly?',
    a: 'Yes. The festival includes music, tourism, wellness, and community causes for all ages.',
  },
  {
    q: 'What should I bring?',
    a: 'Sunscreen, reusable water bottle, valid ID, and your festival pass. Beach attire recommended.',
  },
] as const

export const SPONSORS = [
  "Gold's Gym",
  'HelixPay',
  'DOT Region 1',
  'Thunderbird Resort',
  'La Union Tourism',
  'TakeOver Lounge',
] as const

export const TOURISM_PARTNERS = [
  { name: 'Thunderbird Resort', icon: 'hotel' as const },
  { name: 'La Union Surf', icon: 'surf' as const },
  { name: 'Poro Point', icon: 'map' as const },
  { name: 'Regional Airlines', icon: 'plane' as const },
  { name: 'Beachside Hotels', icon: 'hotel' as const },
  { name: 'Local Business Expo', icon: 'store' as const },
] as const
