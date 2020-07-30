import React from 'react'
import { Helmet } from 'react-helmet'

import { SiteMetadata } from '../../types/graphql.types'

export interface ISEOProps {
  siteMetadata: SiteMetadata
  title: string
  description: string
  route: string
  lang?: string
  image?: string
}

export function SEO({
  siteMetadata,
  description,
  lang = 'en-US',
  title,
  route,
  image = siteMetadata.site.siteMetadata.image,
}: ISEOProps): JSX.Element {
  const fullURL: string =
    route !== '/'
      ? `${siteMetadata.site.siteMetadata.url}/${
          route.startsWith('/', 0) ? route.replace('/', '') : route
        }`
      : siteMetadata.site.siteMetadata.url

  return (
    <Helmet
      title={title}
      titleTemplate={`%s · ${siteMetadata.site.siteMetadata.title}`}
    >
      <meta name="lang" content={lang} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullURL} />
    </Helmet>
  )
}
