import { Heart, Sprout, Waves } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

const causes = [
  {
    title: 'Beach Cleanup',
    caption: 'Morning shoreline sessions with festival-goers and local partners.',
    src: '/images/tourism-poropoint.jpg',
    icon: Waves,
  },
  {
    title: 'Tree Planting',
    caption: 'Mangrove and native tree restoration in coastal buffer zones.',
    src: '/images/cause-trees.png',
    icon: Sprout,
  },
  {
    title: 'Community Support',
    caption: 'NGO and government partnerships for lasting coastal impact.',
    src: '/images/prev-4.jpg',
    icon: Heart,
  },
]

export function CausesSection() {
  return (
    <section id="causes" className="bg-ocean-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            The Heart Of It
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-white md:text-5xl">
            Community Causes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-white/75">
            Every beat has a purpose. Party with impact on the coast you love.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {causes.map((cause, i) => (
            <Reveal
              as="article"
              key={cause.title}
              delay={i * 120}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={cause.src}
                alt={cause.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/30 to-transparent" />
              <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal/90 text-white shadow-lg">
                <cause.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-white md:text-3xl">{cause.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-white/85">
                  {cause.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
