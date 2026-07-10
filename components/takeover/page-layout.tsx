import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

export function PageLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
