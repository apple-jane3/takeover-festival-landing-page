import { Briefcase, Heart, Music, Palmtree } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'
import { assetUrl } from './config'

const pillars = [
  { icon: Music, label: 'Music', caption: 'World-class headliners on the beach' },
  { icon: Palmtree, label: 'Tourism', caption: 'DOT expo & travel partners' },
  { icon: Heart, label: 'Community', caption: 'Purpose-driven coastal action' },
  { icon: Briefcase, label: 'Business', caption: 'B2B expo & local brands' },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={assetUrl('/images/tourism-poropoint.jpg')}
            alt="Poro Point coastline in San Fernando, La Union"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Who We Are
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            More Than A Festival
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/80">
            Three days where music, tourism, and community meet on the shores of La Union.
          </p>
          <p className="mt-3 text-pretty text-base leading-relaxed text-foreground/70">
            Vision: world-class music, premier tourism exhibition, and environmental
            sustainability — one coastal celebration.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
              >
                <pillar.icon className="h-7 w-7 text-teal" aria-hidden="true" />
                <h3 className="mt-2 font-display text-lg text-primary">{pillar.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{pillar.caption}</p>
              </div>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {[
              { value: '3', label: 'Days' },
              { value: '20K', label: 'Capacity' },
              { value: '100%', label: 'Purpose' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-secondary p-3 text-center">
                <dt className="font-display text-2xl text-primary sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
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
