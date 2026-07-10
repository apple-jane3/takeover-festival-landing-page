import { Link } from 'react-router-dom'
import { Calendar, ChevronRight } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'
import { assetUrl } from './config'

const artists = [
  {
    name: 'Mayonnaise',
    genre: 'Alt Rock',
    date: 'Nov 28, 2026',
    src: assetUrl('/images/artist-1.png'),
  },
  {
    name: 'Brownman Revival',
    genre: 'Reggae',
    date: 'Nov 29, 2026',
    src: assetUrl('/images/artist-2.png'),
  },
]

export function ArtistsSection() {
  return (
    <section id="artists" className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-6 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">The Lineup</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Featured Artists
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {artists.map((artist, i) => (
            <Reveal
              as="article"
              key={artist.name}
              delay={i * 100}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={artist.src}
                  alt={`${artist.name} performing`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{artist.genre}</p>
                <h3 className="mt-1 font-display text-2xl text-primary">{artist.name}</h3>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-sunset" aria-hidden="true" />
                  {artist.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1 rounded-full border border-teal px-8 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            See Full Lineup
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">+ many more to be announced</p>
        </Reveal>
      </div>
    </section>
  )
}
