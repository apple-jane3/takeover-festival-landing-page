import { cn } from '@/lib/utils'

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  loading?: 'lazy' | 'eager'
  sizes?: string
  className?: string
  onError?: () => void
}

export function Image({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  loading,
  sizes,
  className,
  onError,
}: ImageProps) {
  const imgLoading = priority ? 'eager' : loading ?? 'lazy'

  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={imgLoading}
        fetchPriority={priority ? 'high' : undefined}
        className={cn('absolute inset-0 h-full w-full', className)}
        onError={onError}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={imgLoading}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      onError={onError}
    />
  )
}
