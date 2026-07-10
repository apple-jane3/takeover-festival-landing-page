import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { RowMediaImage } from './row-media-image'
import { Reveal } from './reveal'
import { EXPO_ITEMS } from './config'

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPO_ITEMS.map((spot, i) => (
            <Reveal
              as="article"
              key={spot.slug}
              delay={i * 80}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-transform hover:-translate-y-1"
            >
              <Link to={`/expo/${spot.slug}`} className="block">
                <RowMediaImage
                  src={spot.image}
                  alt={spot.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-display text-xl text-primary sm:text-2xl">{spot.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{spot.shortBlurb}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal sm:text-sm">
                    View Details
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

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
