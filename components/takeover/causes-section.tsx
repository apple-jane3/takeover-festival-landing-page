import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

const causes = [
  {
    title: 'Beach Cleanup',
    caption: 'Leaving the shoreline better than we found it.',
    src: '/images/cause-cleanup.png',
  },
  {
    title: 'Tree Planting',
    caption: 'Growing coastal forests for the next generation.',
    src: '/images/cause-trees.png',
  },
  {
    title: 'Wellness Fun Run',
    caption: 'Moving together for mind, body and community.',
    src: '/images/cause-run.png',
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
            Every beat has a purpose. This is the soul of Takeover.
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
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/30 to-transparent" />
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
