import { Reveal } from './reveal'
import { Carousel, type Slide } from './carousel'

const slides: Slide[] = [
  { src: '/images/prev-6.png', alt: 'Fireworks over the festival beach at night', caption: 'Fireworks Finale' },
  { src: '/images/upcoming.png', alt: 'Aerial view of the beachfront festival', caption: 'Main Stage' },
  { src: '/images/tourism-poropoint.jpg', alt: 'Poro Point cliffs and turquoise water', caption: 'Golden Shores' },
  { src: '/images/prev-4.jpg', alt: 'Outdoor yoga session at sunrise', caption: 'Wellness Zone' },
  { src: '/images/cause-trees.png', alt: 'Community mangrove planting along the coast', caption: 'Coastal Action' },
  { src: '/images/artist-1.png', alt: 'Live band performing on stage', caption: 'Live Music' },
]

export function PreviousEvents() {
  return (
    <section id="past-events" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            The Story So Far
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Moments From Past Takeovers
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Carousel slides={slides} />
        </Reveal>
      </div>
    </section>
  )
}
