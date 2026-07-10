import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  backTo?: { label: string; href: string }
  className?: string
}

export function PageHeader({ eyebrow, title, description, backTo, className }: PageHeaderProps) {
  return (
    <header className={cn('border-b border-white/10 bg-ocean-deep pt-20 pb-6 md:pb-7', className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {backTo ? (
          <Link
            to={backTo.href}
            className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-white/70 transition-colors hover:text-teal"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {backTo.label}
          </Link>
        ) : null}
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{eyebrow}</span>
        <h1 className="mt-1.5 text-balance font-display text-3xl leading-tight text-white md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-white/75 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  )
}

export function PageContent({
  children,
  className,
  narrow,
}: {
  children: ReactNode
  className?: string
  narrow?: boolean
}) {
  return (
    <div
      className={cn(
        'mx-auto px-4 py-8 md:px-8 md:py-10',
        narrow ? 'max-w-3xl' : 'max-w-6xl',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ContentBlock({
  title,
  children,
  className,
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn('space-y-3', className)}>
      {title ? <h2 className="font-display text-xl text-primary md:text-2xl">{title}</h2> : null}
      {children}
    </section>
  )
}

export function InfoList({ items }: { items: readonly string[] }) {
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
      {items.map((item) => (
        <li key={item} className="px-4 py-2.5 text-sm leading-snug text-foreground/80">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function MediaGrid({
  images,
  alt,
  columns = 3,
}: {
  images: readonly string[]
  alt: string
  columns?: 2 | 3 | 4
}) {
  const colClass =
    columns === 4
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
      : columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-2 sm:grid-cols-3'

  return (
    <div className={cn('grid gap-2', colClass)}>
      {images.map((src) => (
        <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
          <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
