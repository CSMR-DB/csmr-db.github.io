/**
 * site component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
  description?: string
  lang?: string
  meta?: any
  title: string
  image?: string
}

interface ISiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      image: string
      url: string
    }
  }
}

export function SEO({
  description,
  lang = 'en-US',
  title,
  image,
}: SEOProps): JSX.Element {
  const { site }: ISiteMetadata = useStaticQuery(
    // tslint:disable-next-line: no-void-expression
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  const metaDescription: string = description || site.siteMetadata.description
  const metaImage: string = image || site.siteMetadata.image

  return (
    <Helmet title={title} titleTemplate={`%s · ${site.siteMetadata.title}`}>
      <meta name="lang" content={lang} />
      <meta property="og:type" content="website"></meta>
      {site.siteMetadata.title && (
        <meta property="og:title" content={site.siteMetadata.title} />
      )}
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta property="og:image" content={metaImage} />
      {site.siteMetadata.url && (
        <meta property="og:url" content={site.siteMetadata.url} />
      )}
    </Helmet>
  )
}
