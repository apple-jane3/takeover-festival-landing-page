import { ExternalLink } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { MEDIA_SAND } from '@/lib/image-frame'
import { Reveal } from './reveal'
import { VENUE_PARTNER, VENUE_PARTNER_MEDIA } from './config'

export function VenuePartnerSection() {
  return (
    <section id="venue-partner" className="bg-secondary py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mb-8 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Where It Happens</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Official Venue Partner
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-foreground/70">
            Takeover Festival is held in partnership with Poro Point Management Corporation (PPMC) — official venue
            partner and steward of Poro Point Freeport Zone.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="grid grid-cols-2 gap-3">
            {VENUE_PARTNER_MEDIA.map((item) => (
              <div
                key={item.alt}
                className={`relative overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 ${MEDIA_SAND} ${
                  item.type === 'video' ? 'col-span-2 aspect-video' : 'aspect-[4/5]'
                }`}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover"
                  />
                ) : (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </Reveal>

          <Reveal delay={80} className="flex flex-col">
            <a
              href={VENUE_PARTNER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
            >
              <Image
                src={VENUE_PARTNER.logo}
                alt={VENUE_PARTNER.name}
                width={200}
                height={72}
                className="h-14 w-auto max-w-[220px] object-contain sm:h-16"
              />
            </a>

            <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/80">
              {VENUE_PARTNER.description}
            </p>

            <ul className="mt-5 space-y-2">
              {VENUE_PARTNER.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={VENUE_PARTNER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal px-5 py-2.5 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
            >
              Explore Poro Point
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
