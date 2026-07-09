import { Building2, Hotel, MapPin, Plane, Store, Waves } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'
import { TOURISM_PARTNERS } from './config'

const iconMap = {
  hotel: Hotel,
  surf: Waves,
  map: MapPin,
  plane: Plane,
  store: Store,
  business: Building2,
}

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
            Resorts, hotels, airlines, and local businesses — all in one coastal celebration.
          </p>
        </Reveal>

        <Reveal delay={40} className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TOURISM_PARTNERS.map((partner) => {
            const Icon = iconMap[partner.icon] ?? Building2
            return (
              <div
                key={partner.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
              >
                <Icon className="h-7 w-7 text-teal" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold leading-tight text-primary">{partner.name}</p>
              </div>
            )
          })}
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
                className="object-cover transition-transform duration-700 group-hover:scale-110"
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
