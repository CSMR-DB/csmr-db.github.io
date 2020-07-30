// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ImageSharpAllFiles } from '../../types/graphql.types'

export type SeriesPosters = {
  seriesPosters: ImageSharpAllFiles
}

export function seriesPostersProvider(): SeriesPosters {
  const data: SeriesPosters = useStaticQuery(graphql`
    query {
      seriesPosters: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { regex: "/bio/series/" }
        }
        limit: 28
      ) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 270, maxHeight: 480, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return data
}
