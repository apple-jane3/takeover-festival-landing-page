import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

const spots = [
  {
    title: 'Poro Point Baywalk Arena',
    caption: 'Cliffs, coves, and the festival grounds overlooking the West Philippine Sea.',
    src: '/images/tourism-poropoint.jpg',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'DOT Tourism Exhibition',
    caption: 'Official Department of Tourism expo in twin white dome marquees.',
    src: '/images/prev-6.png',
    span: '',
  },
  {
    title: 'Food Park Haven',
    caption: '50+ food trucks, artisanal seafood stalls, and curated drink lounges.',
    src: '/images/upcoming.png',
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
            Discover La Union with DOT-endorsed tourism exhibitions, partner resorts, hotels,
            airlines, and a B2B business expo celebrating the region.
          </p>
        </Reveal>

        <Reveal
          delay={60}
          className="mb-10 rounded-3xl border border-border bg-card p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Official Partner
          </p>
          <p className="mt-2 font-display text-2xl text-primary">
            Department of Tourism — Region 1
          </p>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/75 sm:text-base">
            Showcasing Ilocos Norte, Ilocos Sur, La Union, and Pangasinan through the
            &ldquo;Find The One In Region 1&rdquo; tourism campaign.
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
