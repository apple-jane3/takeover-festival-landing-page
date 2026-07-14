import { RowMediaImage } from './row-media-image'
import { Reveal } from './reveal'
import { FESTIVAL_VILLAGE_ZONES } from './config'

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
            Step into an immersive festival village — music, wellness, food, tourism, camping, community causes, and
            activities all in one coastal celebration.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-7">
          {FESTIVAL_VILLAGE_ZONES.map((zone, i) => (
            <Reveal
              as="article"
              key={zone.slug}
              delay={i * 60}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <RowMediaImage
                src={zone.image}
                alt={zone.title}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 14vw"
                loading="lazy"
              />
              <div className="p-3">
                <h3 className="font-display text-sm leading-snug text-primary sm:text-base">{zone.title}</h3>
                <p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  {zone.shortBlurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
