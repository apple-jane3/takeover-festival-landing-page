import { Navigation } from 'lucide-react'
import { ContentBlock, PageContent, PageHeader } from './page-shell'
import { Photo } from './photo'
import { Reveal } from './reveal'
import { FESTIVAL_CITY, FESTIVAL_LOCATION, LOCATION_DETAILS, MAP_EMBED_URL, takeoverImage } from './config'

export function LocationSection({ fullPage = false }: { fullPage?: boolean }) {
  if (fullPage) {
    return (
      <>
        <PageHeader
          eyebrow="Find Us"
          title="Event Location"
          description={`${FESTIVAL_LOCATION} · ${FESTIVAL_CITY}`}
        />

        <PageContent className="space-y-6 pt-6 md:space-y-8 md:pt-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <Photo
                src={takeoverImage('venue.jpg')}
                alt="Aerial view of Poro Point coastline"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                frameClassName="rounded-xl shadow-md"
              />
            </Reveal>

            <Reveal delay={60} className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Takeover Festival location map"
                src={MAP_EMBED_URL}
                className="h-[260px] w-full border-0 sm:h-[300px] lg:h-full lg:min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Reveal delay={80}>
              <ContentBlock title="Venue Info">
                <ul className="space-y-1.5">
                  {LOCATION_DETAILS.venueInfo.map((item) => (
                    <li key={item} className="text-sm leading-snug text-foreground/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </ContentBlock>
            </Reveal>

            <Reveal delay={100}>
              <ContentBlock title="Parking">
                <ul className="space-y-1.5">
                  {LOCATION_DETAILS.parking.map((item) => (
                    <li key={item} className="text-sm leading-snug text-foreground/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </ContentBlock>
            </Reveal>

            <Reveal delay={120}>
              <ContentBlock title="Getting There">
                <ul className="space-y-1.5">
                  {LOCATION_DETAILS.transportation.map((item) => (
                    <li key={item} className="text-sm leading-snug text-foreground/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </ContentBlock>
            </Reveal>
          </div>

          <Reveal delay={140} className="text-center">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(FESTIVAL_CITY)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-teal px-5 py-2.5 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </Reveal>
        </PageContent>
      </>
    )
  }

  return null
}
