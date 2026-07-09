import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

const spots = [
  {
    title: 'Poro Point',
    caption: 'Cliffs, coves and the festival grounds.',
    src: '/images/tourism-poropoint.png',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Thunderbird Resort',
    caption: 'Stay steps from the stage.',
    src: '/images/tourism-resort.png',
    span: '',
  },
  {
    title: 'San Juan Surf',
    caption: 'The surf capital of the North.',
    src: '/images/tourism-sanjuan.png',
    span: '',
  },
]

export function TourismSection() {
  return (
    <section id="travel" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Make A Trip Of It
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Tourism &amp; Business Expo
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/70">
            Discover La Union with partner resorts, hotels, airlines and a local business expo
            celebrating the region.
          </p>
        </Reveal>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {spots.map((spot, i) => (
            <Reveal
              as="article"
              key={spot.title}
              delay={i * 100}
              className={`group relative overflow-hidden rounded-3xl shadow-lg ${spot.span}`}
            >
              <Image
                src={spot.src}
                alt={spot.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl text-white">{spot.title}</h3>
                <p className="mt-1 text-sm text-white/85">{spot.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
