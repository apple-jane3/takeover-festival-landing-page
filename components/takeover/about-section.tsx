import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/about.png"
            alt="A live band performing on a beachfront stage at golden hour"
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
            Takeover is where sound meets the shoreline. We gather artists, surfers and dreamers
            for days of music, movement and meaning on the beaches of La Union.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/80">
            Our mission is simple: unforgettable experiences that give back to the coast and the
            community that make them possible.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: '10K+', label: 'Festival-goers' },
              { value: '3', label: 'Days of music' },
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
