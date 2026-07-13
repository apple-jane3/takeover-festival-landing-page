import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { RowMediaImage } from './row-media-image'

type ExpoZoneCardProps = {
  slug: string
  title: string
  shortBlurb: string
  image: string
}

export function ExpoZoneCard({ slug, title, shortBlurb, image }: ExpoZoneCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <Link to={`/expo/${slug}`} className="group block">
        <RowMediaImage
          src={image}
          alt={title}
          sizes="(max-width: 1280px) 25vw, 300px"
          loading="lazy"
          className="aspect-[3/2]"
        />
        <div className="p-2.5 sm:p-3">
          <h3 className="line-clamp-2 font-display text-sm leading-snug text-primary">{title}</h3>
          <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-muted-foreground sm:text-xs">{shortBlurb}</p>
          <span className="mt-1.5 inline-flex items-center gap-0.5 text-[10px] font-semibold text-teal sm:text-xs">
            Details
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  )
}
