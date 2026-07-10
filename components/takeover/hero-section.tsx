import { useState } from 'react'
import { HERO_POSTER_SRC, HERO_VIDEO_LEFT_SRC, HERO_VIDEO_RIGHT_SRC } from './config'
import { FestivalLogo } from './festival-logo'
import { Image } from '@/components/ui/image'

function HeroVideo({
  src,
  poster,
  onError,
  preload = 'auto',
}: {
  src: string
  poster: string
  onError: () => void
  preload?: 'auto' | 'metadata' | 'none'
}) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload={preload}
      poster={poster}
      className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-center brightness-[1.06] blur-[2px] motion-reduce:scale-100 motion-reduce:blur-none"
      aria-hidden="true"
      onError={onError}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-ocean-deep">
        {!videoFailed ? (
          <div className="h-full w-full md:grid md:grid-cols-2">
            <div className="relative h-full overflow-hidden">
              <HeroVideo
                src={HERO_VIDEO_LEFT_SRC}
                poster={HERO_POSTER_SRC}
                onError={() => setVideoFailed(true)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/35" />
            </div>

            <div className="relative hidden h-full overflow-hidden md:block md:border-l md:border-white/15">
              <HeroVideo
                src={HERO_VIDEO_RIGHT_SRC}
                poster={HERO_POSTER_SRC}
                preload="metadata"
                onError={() => setVideoFailed(true)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/35" />
            </div>
          </div>
        ) : (
          <Image
            src={HERO_POSTER_SRC}
            alt="Takeover Festival La Union 2026"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.06] blur-[2px] motion-reduce:blur-none"
            aria-hidden="true"
          />
        )}

        <div className="pointer-events-none absolute inset-0 backdrop-blur-[5px] bg-white/[0.08]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ocean-deep/45 via-white/5 to-ocean-deep/55" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,transparent_45%,rgba(14,42,58,0.35)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent md:block" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 pt-16 text-center">
        <FestivalLogo variant="hero" priority className="mb-5 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]" />

        <h1 className="sr-only">Takeover Festival La Union 2026</h1>
        <p className="text-pretty text-base font-medium tracking-wide text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-lg">
          Beach Music Festival · Party With a Purpose
        </p>
      </div>
    </section>
  )
}
