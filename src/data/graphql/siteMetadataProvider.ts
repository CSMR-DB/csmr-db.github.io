// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ISiteMetadata } from '../../types/interfaces'

export function siteMetadataProvider(): ISiteMetadata {
  const data: ISiteMetadata = useStaticQuery(graphql`
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
