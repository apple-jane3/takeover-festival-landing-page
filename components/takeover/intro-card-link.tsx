import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'

type IntroCardLinkProps = {
  to: string
  title: string
  blurb: string
  image: string
  imageAlt: string
  delay?: number
  variant?: 'light' | 'dark'
  className?: string
}

export function IntroCardLink({
  to,
  title,
  blurb,
  image,
  imageAlt,
  delay = 0,
  variant = 'light',
  className = '',
}: IntroCardLinkProps) {
  const isDark = variant === 'dark'

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <Link to={to} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              isDark ? 'from-ocean-deep/90 via-ocean-deep/20' : 'from-ocean-deep/70 via-transparent'
            } to-transparent`}
          />
          <div className="absolute inset-x-0 bottom-0 p-3.5">
            <h3 className="font-display text-lg text-white">{title}</h3>
            <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-white/85">{blurb}</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-3.5 py-2.5">
          <span className="text-xs font-semibold text-teal transition-colors group-hover:text-primary">
            View Details
          </span>
          <ChevronRight className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
        </div>
      </Link>
    </Reveal>
  )
}
