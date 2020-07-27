import React from 'react'
import { Helmet } from 'react-helmet'

import { ISiteMetadata } from '../../types/interfaces'

export interface ISEOProps {
  siteMetadata: ISiteMetadata
  title: string
  description: string
  lang?: string
  image?: string
}

export function SEO({
  siteMetadata,
  description,
  lang = 'en-US',
  title = siteMetadata.site.siteMetadata.title,
  image = siteMetadata.site.siteMetadata.image,
}: ISEOProps): JSX.Element {
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
      <meta property="og:url" content={siteMetadata.site.siteMetadata.url} />
    </Helmet>
  )
}
