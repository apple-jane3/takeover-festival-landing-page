import { Image } from '@/components/ui/image'
import { MEDIA_SAND, mediaCover, mediaCoverTop } from '@/lib/image-frame'
import { cn } from '@/lib/utils'

type PhotoProps = {
  src: string
  alt: string
  layout?: 'natural' | 'banner'
  frameClassName?: string
  className?: string
  priority?: boolean
  sizes?: string
  loading?: 'lazy' | 'eager'
}

export function Photo({
  src,
  alt,
  layout = 'natural',
  frameClassName,
  className,
  priority,
  sizes,
  loading,
}: PhotoProps) {
  if (layout === 'banner') {
    return (
      <div className={cn('relative aspect-[3/2] overflow-hidden', frameClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          loading={loading}
          className={cn(mediaCover, className)}
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5',
        MEDIA_SAND,
        frameClassName,
      )}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        loading={loading}
        sizes={sizes}
        className={cn('block h-auto w-full', className)}
      />
    </div>
  )
}

export { mediaCoverTop }
