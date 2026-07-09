import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/tourism-poropoint.jpg"
            alt="Poro Point coastline in San Fernando, La Union"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Who We Are
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            More Than A Festival
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
            Takeover is where sound meets the shoreline — a 3-day beachside celebration
            welcoming global headliners, surfers, and dreamers on the coast of La Union.
          </p>

          <div className="mt-6 rounded-2xl border border-teal/20 bg-teal/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Our Vision
            </h3>
            <p className="mt-2 text-pretty text-base leading-relaxed text-foreground/85">
              Combining the energy of a world-class music festival, a premier tourism
              exhibition, and actionable environmental sustainability in one cohesive coastal
              celebration.
            </p>
          </div>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/80">
            <strong className="text-primary">Our mission:</strong> unforgettable experiences
            that give back to the coast and the community that make them possible.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: '3', label: 'Days of music' },
              { value: '20K', label: 'Daily capacity' },
              { value: '100%', label: 'Purpose-driven' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-secondary p-4 text-center">
                <dt className="font-display text-3xl text-primary">{stat.value}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
