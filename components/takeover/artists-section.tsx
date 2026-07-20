import { Link } from 'react-router-dom'
import { Calendar, ChevronRight } from 'lucide-react'
import { RowMediaImage } from './row-media-image'
import { Reveal } from './reveal'
import { FEATURED_ARTISTS } from './config'

export function ArtistsSection() {
  return (
    <section id="artists" className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-6 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">The Lineup</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Featured Artists
          </h2>
          <p className="mt-3 text-pretty text-sm text-muted-foreground">
            Past Takeover headliners — proof of what&apos;s coming in 2026.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURED_ARTISTS.map((artist, i) => (
            <Reveal
              as="article"
              key={artist.slug}
              delay={i * 80}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Link to={`/artists/${artist.slug}`} className="block">
                <RowMediaImage
                  src={artist.src}
                  alt={`${artist.name} performing at Takeover`}
                  sizes="(max-width: 768px) 100vw, 20vw"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{artist.genre}</p>
                  <h3 className="mt-1 font-display text-xl text-primary">{artist.name}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-sunset" aria-hidden="true" />
                    {artist.date}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-primary">
                    Learn More
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1 rounded-full border border-teal px-8 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            See Full Gallery
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
