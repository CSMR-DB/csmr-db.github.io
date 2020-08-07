import React from 'react'
import { Helmet } from 'react-helmet'
import { helmetJsonLdProp } from 'react-schemaorg'
import { WebPage, WithContext } from 'schema-dts'

import { SiteMetadata } from '../../types/graphql.types'
import { breadCrumbJsonLdGenerator } from '../../utils/breadcrumbJsonLdGenerator'

export interface ISEOProps {
  siteMetadata: SiteMetadata
  title: string
  description: string
  route: string
  lang?: string
  image?: string
  jsonLd?: any[]
  webpageJsonLd?: Partial<WithContext<WebPage>>
}

export function SEO({
  siteMetadata,
  description,
  lang = 'en-US',
  title,
  route,
  image,
  jsonLd,
  webpageJsonLd,
}: ISEOProps): JSX.Element {
  const fullURL: string =
    route !== '/'
      ? `${siteMetadata.site.siteMetadata.url}/${
          route.startsWith('/', 0) ? route.replace('/', '') : route
        }`
      : siteMetadata.site.siteMetadata.url

  const universalJsonLd: {
    type: 'application/ld+json'
    innerHTML: string
  } = helmetJsonLdProp<WebPage>({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    ...webpageJsonLd,
    url: fullURL,
    name: title,
    about: description,
    image,
    breadcrumb: breadCrumbJsonLdGenerator(
      siteMetadata.site.siteMetadata.title,
      route
    ),
  })

  return (
    <Helmet
      title={title}
      titleTemplate={`%s · ${siteMetadata.site.siteMetadata.title}`}
      script={jsonLd ? [...jsonLd, universalJsonLd] : [universalJsonLd]}
    >
      <meta name="lang" content={lang} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      {image && (
        <>
          <meta name="image" content={image} />
          <meta property="og:image" content={image} />
        </>
      )}
      <meta property="og:url" content={fullURL} />
    </Helmet>
  )
}
