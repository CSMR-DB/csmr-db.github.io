/**
 * site component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface ISiteProps {
  description?: string
  lang?: string
  meta?: any
  title: string
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
}: ISiteProps): JSX.Element {
  const { site }: ISiteMetadata = useStaticQuery(
    // tslint:disable-next-line: no-void-expression
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            defaultImage: image
            siteUrl: url
          }
        }
      }
    `
  )

  const metaDescription: string = description || site.siteMetadata.description

  return (
    <Helmet title={title} titleTemplate={`%s · ${site.siteMetadata.title}`}>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={site.siteMetadata.image} />
      <meta name="lang" content={lang} />
      {site.siteMetadata.title && (
        <meta property="og:title" content={site.siteMetadata.title} />
      )}
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      {site.siteMetadata.image && (
        <meta property="og:image" content={site.siteMetadata.image} />
      )}
      {site.siteMetadata.url && (
        <meta property="og:url" content={site.siteMetadata.url} />
      )}
    </Helmet>
  )
}
