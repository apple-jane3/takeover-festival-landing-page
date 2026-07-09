import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

const artists = [
  { name: 'Mayonnaise', genre: 'Alt Rock', src: '/images/artist-1.png', slug: 'mayonnaise' },
  { name: 'Brownman Revival', genre: 'Reggae', src: '/images/artist-2.png', slug: 'brownman-revival' },
]

export function ArtistsSection() {
  return (
    <section id="artists" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            The Lineup
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Featured Artists
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {artists.map((artist, i) => (
            <Reveal
              as="article"
              key={artist.name}
              delay={i * 100}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg"
            >
              <a href={`#artists-${artist.slug}`} className="absolute inset-0 z-10" aria-label={`${artist.name} — more info coming soon`}>
                <span className="sr-only">{artist.name}</span>
              </a>
              <Image
                src={artist.src}
                alt={`${artist.name} performing`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                  {artist.genre}
                </p>
                <h3 className="mt-1 font-display text-2xl leading-tight text-white md:text-3xl">
                  {artist.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-10 text-center text-lg font-medium text-muted-foreground">
            + many more to be announced
          </p>
        </Reveal>
      </div>
    </section>
  )
}
