import { useState } from 'react'
import { Image } from '@/components/ui/image'
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC, assetUrl } from './config'

export function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={HERO_VIDEO_POSTER}
            className="h-full w-full object-cover"
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={assetUrl('/images/hero.jpg')}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-ken-burns object-cover"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/45" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center">
        <Image
          src={assetUrl('/images/logo.png')}
          alt="Takeover Festival logo"
          width={160}
          height={160}
          priority
          className="mb-4 h-24 w-24 object-contain drop-shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32"
        />

        <h1 className="sr-only">Takeover Beach Music Festival La Union</h1>
        <p className="font-display text-balance text-5xl leading-[0.92] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
          TAKEOVER
        </p>
        <p className="mt-2 font-display text-xl uppercase tracking-[0.35em] text-gold drop-shadow-lg sm:text-2xl">
          La Union
        </p>
        <p className="mt-3 text-pretty text-lg font-medium tracking-wide text-white/90 drop-shadow sm:text-xl">
          Beach Music Festival · Party With a Purpose
        </p>
      </div>
    </section>
  )
}
