import { Reveal } from './reveal'
import { Carousel, type Slide } from './carousel'

const slides: Slide[] = [
  { src: '/images/prev-1.png', alt: 'Festival crowd cheering at sunset', caption: 'Sunset Singalong' },
  { src: '/images/prev-4.png', alt: 'Main stage with LED screens at blue hour', caption: 'Main Stage' },
  { src: '/images/prev-2.png', alt: 'DJ performing with lasers at night', caption: 'After Dark' },
  { src: '/images/prev-6.png', alt: 'Fireworks over the beach festival at night', caption: 'Fireworks Finale' },
  { src: '/images/prev-3.png', alt: 'Friends celebrating with flags on the beach', caption: 'Good Vibes Only' },
  { src: '/images/prev-5.png', alt: 'Surfer walking the beach at golden hour', caption: 'Surf & Sound' },
]

export function PreviousEvents() {
  return (
    <section className="bg-secondary py-20 md:py-28">
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
