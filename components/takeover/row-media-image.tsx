import { Image } from '@/components/ui/image'
import { MEDIA_SAND, mediaCover } from '@/lib/image-frame'
import { cn } from '@/lib/utils'

export const ROW_MEDIA_ASPECT = 'aspect-[4/5]'

type RowMediaImageProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
}

export function RowMediaImage({
  src,
  alt,
  className,
  sizes,
  loading,
  priority,
}: RowMediaImageProps) {
  return (
    <div className={cn('relative overflow-hidden', ROW_MEDIA_ASPECT, MEDIA_SAND, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={loading}
        priority={priority}
        className={mediaCover}
      />
    </div>
  )
}
