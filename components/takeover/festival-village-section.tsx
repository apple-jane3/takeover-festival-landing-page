import { Reveal } from './reveal'
import { Carousel, type Slide } from './carousel'
import { FESTIVAL_VILLAGE_ZONES } from './config'

const slides: Slide[] = FESTIVAL_VILLAGE_ZONES.map((zone) => ({
  id: zone.slug,
  src: zone.image,
  alt: zone.title,
  caption: zone.title,
  description: zone.shortBlurb,
  href: zone.href,
}))

export function FestivalVillageSection() {
  return (
    <section id="festival-village" className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-6 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Enter The Village</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Welcome to the Takeover Festival Village
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-foreground/70">
            Discover everything waiting for you inside Takeover Festival Village — a vibrant destination where music,
            wellness, food, adventure, culture, tourism, and community come together in one unforgettable experience.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Carousel
            slides={slides}
            autoPlayMs={6000}
            ariaLabel="Takeover Festival Village zones"
          />
        </Reveal>
      </div>
    </section>
  )
}
