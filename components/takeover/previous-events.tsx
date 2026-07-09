import { Images } from 'lucide-react'
import { Reveal } from './reveal'
import { Carousel, type Slide } from './carousel'
import { assetUrl } from './config'

const slides: Slide[] = [
  { src: assetUrl('/images/prev-6.png'), alt: 'Fireworks over the festival beach at night', caption: 'Fireworks Finale' },
  { src: assetUrl('/images/upcoming.png'), alt: 'Aerial view of the beachfront festival', caption: 'Main Stage' },
  { src: assetUrl('/images/tourism-poropoint.jpg'), alt: 'Poro Point cliffs and turquoise water', caption: 'Golden Shores' },
  { src: assetUrl('/images/prev-4.jpg'), alt: 'Outdoor yoga session at sunrise', caption: 'Wellness Zone' },
  { src: assetUrl('/images/cause-trees.png'), alt: 'Community mangrove planting along the coast', caption: 'Coastal Action' },
  { src: assetUrl('/images/artist-1.png'), alt: 'Live band performing on stage', caption: 'Live Music' },
]

export function PreviousEvents() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
              The Story So Far
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
              Moments From Past Takeovers
            </h2>
          </div>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-teal hover:bg-teal hover:text-white"
          >
            <Images className="h-4 w-4" aria-hidden="true" />
            View Gallery
          </a>
        </Reveal>

        <Reveal delay={120}>
          <Carousel slides={slides} />
        </Reveal>
      </div>
    </section>
  )
}
