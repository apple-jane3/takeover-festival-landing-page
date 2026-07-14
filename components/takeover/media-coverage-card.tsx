import { ExternalLink } from 'lucide-react'
import { RowMediaImage } from './row-media-image'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type MediaCoverageCardProps = {
  outlet: string
  title: string
  summary: string
  date?: string
  href?: string
  image?: string
  delay?: number
  featured?: boolean
  compact?: boolean
}

export function MediaCoverageCard({
  outlet,
  title,
  summary,
  date,
  href,
  image,
  delay = 0,
  featured = false,
  compact = false,
}: MediaCoverageCardProps) {
  const isExternal = Boolean(href)
  const Wrapper = isExternal ? 'a' : 'div'
  const wrapperProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Reveal
      as="article"
      delay={delay}
      className={cn(
        'group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow',
        isExternal && 'hover:shadow-md',
        compact && 'flex flex-col sm:flex-row',
      )}
    >
      <Wrapper {...wrapperProps} className={cn('block', compact && 'flex flex-1 flex-col sm:flex-row')}>
        {image ? (
          <RowMediaImage
            src={image}
            alt={title}
            sizes={featured ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 100vw, 50vw'}
            loading="lazy"
            className={cn(featured ? undefined : 'aspect-[16/9] sm:aspect-[3/2]', compact && 'sm:w-44 sm:shrink-0')}
          />
        ) : null}

        <div className={cn('px-4 py-3.5', compact && 'flex flex-1 flex-col justify-center')}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">{outlet}</span>
            {date ? <span className="text-[10px] text-muted-foreground">{date}</span> : null}
          </div>
          <h3
            className={cn(
              'mt-1.5 font-display text-primary',
              featured ? 'text-lg md:text-xl' : 'text-base',
            )}
          >
            {title}
          </h3>
          <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{summary}</p>

          <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-teal transition-colors group-hover:text-primary">
            {isExternal ? (
              <>
                Read Article
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </>
            ) : (
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </Wrapper>
    </Reveal>
  )
}
