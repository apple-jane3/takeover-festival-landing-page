import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { RowMediaImage } from './row-media-image'
import { Reveal } from './reveal'

type IntroCardLinkProps = {
  to: string
  title: string
  blurb: string
  image: string
  imageAlt: string
  delay?: number
  className?: string
}

export function IntroCardLink({
  to,
  title,
  blurb,
  image,
  imageAlt,
  delay = 0,
  className = '',
}: IntroCardLinkProps) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={`group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <Link to={to} className="block">
        <RowMediaImage
          src={image}
          alt={imageAlt}
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="px-4 py-3.5">
          <h3 className="font-display text-lg text-primary">{title}</h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{blurb}</p>
        </div>
        <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
          <span className="text-xs font-semibold text-teal transition-colors group-hover:text-primary">
            View Details
          </span>
          <ChevronRight className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
        </div>
      </Link>
    </Reveal>
  )
}
