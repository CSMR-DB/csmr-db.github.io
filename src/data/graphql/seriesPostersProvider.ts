// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IImageSharpAllFiles } from '../../types/interfaces'

export interface ISeriesPosters {
  seriesPosters: IImageSharpAllFiles
}

export function seriesPostersProvider(): ISeriesPosters {
  const data: ISeriesPosters = useStaticQuery(graphql`
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
