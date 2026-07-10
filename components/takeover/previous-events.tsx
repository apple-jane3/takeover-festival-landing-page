import { Link } from 'react-router-dom'
import { Images } from 'lucide-react'
import { Reveal } from './reveal'
import { Carousel, type Slide } from './carousel'
import { GALLERY_ITEMS } from './config'

const slides: Slide[] = GALLERY_ITEMS.slice(0, 6).map((item) => ({
  src: item.src,
  alt: item.alt,
  caption: item.caption,
  href: '/gallery',
}))

export function PreviousEvents() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-secondary py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
              Activities & Events
            </span>
            <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
              Moments From Past Takeovers
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-teal hover:bg-teal hover:text-white"
          >
            <Images className="h-4 w-4" aria-hidden="true" />
            View Gallery
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <Carousel slides={slides} linkTo="/gallery" />
        </Reveal>
      </div>
    </section>
  )
}
