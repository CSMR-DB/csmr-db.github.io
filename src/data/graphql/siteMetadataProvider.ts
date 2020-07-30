// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { SiteMetadata } from '../../types/graphql.types'

export function siteMetadataProvider(): SiteMetadata {
  const data: SiteMetadata = useStaticQuery(graphql`
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

  return data
}
