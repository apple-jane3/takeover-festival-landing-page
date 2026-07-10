import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RowMediaImage } from './row-media-image'

export type Slide = {
  src: string
  alt: string
  caption?: string
  href?: string
}

const SWIPE_THRESHOLD = 48

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    const sm = window.matchMedia('(min-width: 640px)')
    const lg = window.matchMedia('(min-width: 1024px)')

    const update = () => {
      if (lg.matches) setSlidesPerView(3)
      else if (sm.matches) setSlidesPerView(2)
      else setSlidesPerView(1)
    }

    update()
    sm.addEventListener('change', update)
    lg.addEventListener('change', update)
    return () => {
      sm.removeEventListener('change', update)
      lg.removeEventListener('change', update)
    }
  }, [])

  return slidesPerView
}

function CarouselSlide({ slide, linkTo }: { slide: Slide; linkTo?: string }) {
  const destination = slide.href ?? linkTo
  const card = (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <RowMediaImage
        src={slide.src}
        alt={slide.alt}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {slide.caption ? (
        <div className="border-t border-border px-4 py-3">
          <p className="text-center font-display text-base uppercase tracking-wide text-primary">
            {slide.caption}
          </p>
        </div>
      ) : null}
    </article>
  )

  if (destination) {
    return (
      <Link to={destination} className="block">
        {card}
      </Link>
    )
  }

  return card
}

export function Carousel({
  slides,
  autoPlayMs = 5000,
  linkTo,
}: {
  slides: Slide[]
  autoPlayMs?: number
  linkTo?: string
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [dragging, setDragging] = useState(false)

  const slidesPerView = useSlidesPerView()
  const count = slides.length
  const maxIndex = Math.max(0, count - slidesPerView)
  const slideBasis = 100 / slidesPerView

  const go = useCallback(
    (next: number) => setIndex(Math.min(Math.max(next, 0), maxIndex)),
    [maxIndex],
  )
  const prev = useCallback(() => go(index - 1), [go, index])
  const next = useCallback(() => go(index + 1), [go, index])

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    if (paused || dragging || count <= slidesPerView) return
    timer.current = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, autoPlayMs)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused, dragging, count, slidesPerView, maxIndex, autoPlayMs])

  const viewportRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const activePointer = useRef<number | null>(null)

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    activePointer.current = event.pointerId
    startX.current = event.clientX
    setDragging(true)
    setPaused(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (activePointer.current !== event.pointerId) return
    setDragOffset(event.clientX - startX.current)
  }

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (activePointer.current !== event.pointerId) return
    const delta = event.clientX - startX.current
    if (delta > SWIPE_THRESHOLD) prev()
    else if (delta < -SWIPE_THRESHOLD) next()
    activePointer.current = null
    setDragging(false)
    setDragOffset(0)
    setPaused(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const dotCount = maxIndex + 1

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Past festival highlights"
    >
      <div
        ref={viewportRef}
        className="overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className={cn(
            'flex',
            dragging ? 'transition-none' : 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          )}
          style={{
            transform: `translateX(calc(-${index * slideBasis}% + ${dragOffset}px))`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="box-border shrink-0 px-2"
              style={{ flexBasis: `${slideBasis}%` }}
              aria-hidden={i < index || i >= index + slidesPerView}
            >
              <CarouselSlide slide={slide} linkTo={linkTo} />
            </div>
          ))}
        </div>
      </div>

      {count > slidesPerView ? (
        <>
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous slide"
            className="absolute -left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-primary shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-ocean-deep disabled:pointer-events-none disabled:opacity-40 sm:-left-3 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next slide"
            className="absolute -right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-primary shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-ocean-deep disabled:pointer-events-none disabled:opacity-40 sm:-right-3 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      ) : null}

      {dotCount > 1 ? (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-7 bg-sunset' : 'w-2 bg-primary/25 hover:bg-primary/45',
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
