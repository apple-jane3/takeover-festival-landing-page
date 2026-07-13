import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Reveal } from './reveal'
import { EXPO_ITEMS } from './config'
import { ExpoZoneCard } from './expo-zone-card'

function ExpoMarquee() {
  const items = [...EXPO_ITEMS, ...EXPO_ITEMS]

  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-secondary to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-secondary to-transparent sm:w-16" />
      <div className="flex w-max animate-expo-marquee items-stretch gap-3">
        {items.map((spot, i) => (
          <div key={`${spot.slug}-${i}`} className="expo-marquee-card">
            <ExpoZoneCard
              slug={spot.slug}
              title={spot.title}
              shortBlurb={spot.shortBlurb}
              image={spot.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function TourismSection() {
  return (
    <section id="travel" className="bg-secondary py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-6 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Make A Trip Of It</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Tourism &amp; Business Expo
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-foreground/70">
            Explore expo zones, wellness experiences, and the best of La Union tourism.
          </p>
        </Reveal>

        <Reveal delay={60} className="-mx-4 md:-mx-8">
          <ExpoMarquee />
        </Reveal>

        <Reveal delay={120} className="mt-6 text-center">
          <Link
            to="/expo"
            className="inline-flex items-center gap-1 rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            Explore All Expo Zones
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
