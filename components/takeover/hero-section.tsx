import { useState } from 'react'
import {
  HERO_MARK_SRC,
  HERO_POSTER_SRC,
  HERO_SUN_DIVIDER_SRC,
  HERO_VIDEO_PLAYBACK_RATE,
  HERO_VIDEO_SRC,
} from './config'
import { Image } from '@/components/ui/image'

function applySlowPlayback(video: HTMLVideoElement | null) {
  if (!video) return
  video.playbackRate = HERO_VIDEO_PLAYBACK_RATE
}

export function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-ocean-deep">
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={HERO_POSTER_SRC}
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden="true"
            ref={applySlowPlayback}
            onLoadedMetadata={(event) => applySlowPlayback(event.currentTarget)}
            onPlay={(event) => applySlowPlayback(event.currentTarget)}
            onError={() => setVideoFailed(true)}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_POSTER_SRC}
            alt="Takeover Festival La Union 2026"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ocean-deep/35 via-transparent to-ocean-deep/50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(14,42,58,0.25)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-20 pb-16 text-center sm:pt-24">
        <Image
          src={HERO_MARK_SRC}
          alt=""
          width={280}
          height={280}
          priority
          className="h-auto w-[min(58vw,220px)] object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)] sm:w-[min(52vw,260px)] md:w-[280px]"
          aria-hidden="true"
        />

        {/* <p className="mt-3 rounded-full bg-ocean/90 px-4 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-white shadow-lg sm:mt-4 sm:px-5 sm:text-xs">
          {HERO_DATE_LABEL}
        </p> */}

        <h1 className="mt-3 font-display text-[clamp(2.75rem,11vw,5.5rem)] leading-[0.92] tracking-[0.04em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.5)] sm:mt-4">
          TAKEOVER
        </h1>

        <div className="mt-2 flex w-full max-w-md items-center justify-center gap-3 sm:mt-3 sm:gap-4">
          <span className="h-px w-12 bg-gold/80 sm:w-16" aria-hidden="true" />
          <p className="font-display text-lg tracking-[0.18em] text-gold drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-xl md:text-2xl">
            LA UNION 2026
          </p>
          <span className="h-px w-12 bg-gold/80 sm:w-16" aria-hidden="true" />
        </div>

        <Image
          src={HERO_SUN_DIVIDER_SRC}
          alt=""
          width={320}
          height={40}
          priority
          className="mt-4 h-auto w-[min(72vw,280px)] object-contain sm:mt-5 sm:w-[min(64vw,320px)]"
          aria-hidden="true"
        />

        <p className="mt-3 max-w-xl text-[11px] font-semibold tracking-[0.24em] text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:mt-4 sm:text-xs">
          BEACH MUSIC FESTIVAL · PARTY WITH A PURPOSE
        </p>
      </div>
    </section>
  )
}
