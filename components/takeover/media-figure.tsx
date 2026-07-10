import { Link } from 'react-router-dom'
import { Image } from '@/components/ui/image'
import { MEDIA_SAND } from '@/lib/image-frame'
import { cn } from '@/lib/utils'

type MediaFigureProps = {
  src: string
  alt: string
  caption?: string
  description?: string
  to?: string
  className?: string
  captionClassName?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
}

export function MediaFigure({
  src,
  alt,
  caption,
  description,
  to,
  className,
  captionClassName,
  sizes,
  loading,
  priority,
}: MediaFigureProps) {
  const figure = (
    <figure
      className={cn(
        'overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5',
        MEDIA_SAND,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        loading={loading}
        priority={priority}
        className="block h-auto w-full"
      />
      {caption || description ? (
        <figcaption
          className={cn(
            'border-t border-black/5 bg-card/90 px-4 py-3',
            captionClassName,
          )}
        >
          {caption ? (
            <p className="font-display text-base text-primary">{caption}</p>
          ) : null}
          {description ? (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  )

  if (to) {
    return (
      <Link to={to} className="block">
        {figure}
      </Link>
    )
  }

  return figure
}
