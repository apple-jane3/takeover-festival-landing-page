import { MapPin, Navigation } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'
import { FESTIVAL_CITY, FESTIVAL_LOCATION, MAP_EMBED_URL } from './config'

export function LocationSection() {
  return (
    <section id="location" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Find Us
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Event Location
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-lg text-foreground/80">
            <MapPin className="h-5 w-5 text-sunset" aria-hidden="true" />
            {FESTIVAL_LOCATION} · {FESTIVAL_CITY}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/images/tourism-poropoint.jpg"
              alt="Aerial view of Poro Point coastline"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <iframe
              title="Takeover Festival location map"
              src={MAP_EMBED_URL}
              className="h-[320px] w-full border-0 sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8 text-center">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(FESTIVAL_CITY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions
          </a>
        </Reveal>
      </div>
    </section>
  )
}
