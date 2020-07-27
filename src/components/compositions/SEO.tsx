import React from 'react'
import { Helmet } from 'react-helmet'

import { AStaticDataManager, StaticDataManager } from '../../data/DataManager'

export interface ISEOProps {
  description?: string
  lang?: string
  meta?: any
  title: string
  image?: string
}

export function SEO({
  description,
  lang = 'en-US',
  title,
  image,
}: ISEOProps): JSX.Element {
  const {
    siteMetadata: { site },
  }: typeof AStaticDataManager = StaticDataManager

  const metaDescription: string = description || site.siteMetadata.description
  const metaImage: string = image || site.siteMetadata.image
  const metaTitle: string = title || site.siteMetadata.title
  const metaURL: string = site.siteMetadata.url

  return (
    <Helmet title={title} titleTemplate={`%s · ${site.siteMetadata.title}`}>
      <meta name="lang" content={lang} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaURL} />
    </Helmet>
  )
}
