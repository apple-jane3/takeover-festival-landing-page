import { Link } from 'react-router-dom'
import { Image } from '@/components/ui/image'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

function SlideContent({ slide, linkTo }: { slide: Slide; linkTo?: string }) {
  const destination = slide.href ?? linkTo
  const inner = (
    <>
      <Image
        src={slide.src || '/placeholder.svg'}
        alt={slide.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/10 to-transparent" />
      {slide.caption ? (
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
          <p className="font-display text-lg uppercase tracking-wide text-gold drop-shadow sm:text-2xl lg:text-3xl">
            {slide.caption}
          </p>
        </div>
      ) : null}
    </>
  )

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/10] sm:rounded-2xl lg:aspect-[16/9]">
      {destination ? (
        <Link to={destination} className="absolute inset-0 block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  )
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
        className="touch-pan-y overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 sm:rounded-3xl"
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
              className="box-border shrink-0 px-1.5 sm:px-2"
              style={{ flexBasis: `${slideBasis}%` }}
              aria-hidden={i < index || i >= index + slidesPerView}
            >
              <SlideContent slide={slide} linkTo={linkTo} />
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
            className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-ocean-deep disabled:pointer-events-none disabled:opacity-40 sm:left-3 sm:h-11 sm:w-11 md:left-5"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next slide"
            className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-ocean-deep disabled:pointer-events-none disabled:opacity-40 sm:right-3 sm:h-11 sm:w-11 md:right-5"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      ) : null}

      {dotCount > 1 ? (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-3">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all sm:h-2.5',
                i === index ? 'w-6 bg-gold sm:w-8' : 'w-2 bg-foreground/25 hover:bg-foreground/50 sm:w-2.5',
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
