import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { RowMediaImage } from './row-media-image'
import { Reveal } from './reveal'
import { COMMUNITY_CAUSES } from './config'

export function CausesSection() {
  return (
    <section id="causes" className="bg-ocean-deep py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-6 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">The Heart Of It</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-white md:text-5xl">
            Community Causes
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-white/75">
            Every beat has a purpose. Party with impact on the environment we love.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {COMMUNITY_CAUSES.map((cause, i) => (
            <Reveal
              as="article"
              key={cause.slug}
              delay={i * 80}
              className="group overflow-hidden rounded-2xl bg-white/5 shadow-lg transition-transform hover:-translate-y-1"
            >
              <Link to={`/causes/${cause.slug}`} className="block">
                <RowMediaImage
                  src={cause.image}
                  alt={cause.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-display text-xl text-white md:text-2xl">{cause.title}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-white/80">{cause.shortBlurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-white">
                    Learn More
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
