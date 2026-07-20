import { ExternalLink } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { PageLayout } from '@/components/takeover/page-layout'
import { ContentBlock, MediaGrid, PageContent, PageHeader } from '@/components/takeover/page-shell'
import { RowMediaImage } from '@/components/takeover/row-media-image'
import { Reveal } from '@/components/takeover/reveal'
import { getArtistBySlug, type ArtistSocialLinks } from '@/components/takeover/config'

const SOCIAL_LABELS: Record<keyof ArtistSocialLinks, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  spotify: 'Spotify',
}

function SocialLinks({ social }: { social: ArtistSocialLinks }) {
  const links = (Object.keys(SOCIAL_LABELS) as (keyof ArtistSocialLinks)[])
    .filter((key) => social[key])
    .map((key) => ({ key, label: SOCIAL_LABELS[key], href: social[key]! }))

  if (links.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ key, label, href }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-teal transition-colors hover:border-teal hover:bg-teal hover:text-white"
        >
          {label}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default function ArtistDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const artist = slug ? getArtistBySlug(slug) : undefined

  if (!artist) {
    return <Navigate to="/#artists" replace />
  }

  const galleryColumns = artist.images.length > 4 ? 3 : 2

  return (
    <PageLayout>
      <PageHeader
        eyebrow={`${artist.genre} · ${artist.date}`}
        title={artist.name}
        description={artist.shortBlurb}
      />

      <PageContent className="space-y-8 pt-6 md:space-y-10 md:pt-8">
        <div className="grid items-start gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 lg:sticky lg:top-24">
            <RowMediaImage
              src={artist.src}
              alt={`${artist.name} performing at Takeover`}
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="rounded-xl shadow-md"
            />
          </Reveal>

          <div className="space-y-6 lg:col-span-3">
            <Reveal delay={60}>
              <ContentBlock title="Biography">
                <p className="text-pretty text-sm leading-relaxed text-foreground/80 md:text-base">
                  {artist.biography}
                </p>
              </ContentBlock>
            </Reveal>

            {Object.keys(artist.social).length > 0 ? (
              <Reveal delay={100}>
                <ContentBlock title="Official Links">
                  <SocialLinks social={artist.social} />
                </ContentBlock>
              </Reveal>
            ) : null}

            {artist.releases.length > 0 ? (
              <Reveal delay={140}>
                <ContentBlock title="Music & Releases">
                  <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                    {artist.releases.map((release) => (
                      <li key={release.title}>
                        <a
                          href={release.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors hover:bg-muted/50"
                        >
                          <span>
                            <span className="font-semibold text-primary">{release.title}</span>
                            <span className="ml-2 text-xs uppercase tracking-wide text-muted-foreground">
                              {release.type} · {release.year}
                            </span>
                          </span>
                          <ExternalLink className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </ContentBlock>
              </Reveal>
            ) : null}
          </div>
        </div>

        {artist.images.length > 1 ? (
          <Reveal delay={180}>
            <ContentBlock title="Photos">
              <MediaGrid images={artist.images} alt={artist.name} columns={galleryColumns} uniform />
            </ContentBlock>
          </Reveal>
        ) : null}

        {artist.videos.length > 0 ? (
          <Reveal delay={220}>
            <ContentBlock title="Videos">
              <div className="grid gap-4 sm:grid-cols-2">
                {artist.videos.map((src) => (
                  <video
                    key={src}
                    controls
                    playsInline
                    preload="metadata"
                    poster={artist.src}
                    className="aspect-video w-full rounded-xl bg-black object-cover object-center"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                ))}
              </div>
            </ContentBlock>
          </Reveal>
        ) : null}
      </PageContent>
    </PageLayout>
  )
}
