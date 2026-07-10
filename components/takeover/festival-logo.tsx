import { Image } from '@/components/ui/image'
import { cn } from '@/lib/utils'
import { LOGO_ALT, LOGO_SRC } from './config'

type FestivalLogoProps = {
  variant?: 'header' | 'hero' | 'footer'
  className?: string
  priority?: boolean
}

const plateStyles = {
  header:
    'inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#e8dbbf] shadow-[0_2px_10px_rgba(0,0,0,0.28)]',
  hero: 'inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#e8dbbf] shadow-[0_12px_40px_rgba(0,0,0,0.38)]',
  footer: 'inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#e8dbbf] shadow-[0_4px_18px_rgba(0,0,0,0.22)]',
} as const

const imageStyles = {
  header: 'block h-11 w-11 object-contain sm:h-12 sm:w-12',
  hero: 'block h-auto w-[min(82vw,300px)] object-contain sm:w-[min(70vw,340px)] md:w-[380px]',
  footer: 'block h-auto w-[140px] object-contain',
} as const

export function FestivalLogo({ variant = 'header', className, priority }: FestivalLogoProps) {
  return (
    <span className={cn(plateStyles[variant], className)}>
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={variant === 'hero' ? 380 : variant === 'footer' ? 140 : 48}
        height={variant === 'hero' ? 380 : variant === 'footer' ? 140 : 48}
        priority={priority ?? variant === 'header'}
        className={imageStyles[variant]}
      />
    </span>
  )
}
