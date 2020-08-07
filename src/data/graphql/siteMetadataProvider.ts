// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { SiteMetadata } from '../../types/graphql.types'

type SiteMetadataQuery = {
  site: {
    siteMetadata: SiteMetadata
  }
}

export function siteMetadataProvider(): SiteMetadata {
  const {
    site: { siteMetadata },
  }: SiteMetadataQuery = useStaticQuery(graphql`
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
  `)

  return siteMetadata
}
