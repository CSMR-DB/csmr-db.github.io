// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ImageSharpAllFiles } from '../../types/graphql.types'

export type PhotographySquares = {
  photographySquares: ImageSharpAllFiles
}

export function photographySquaresProvider(): PhotographySquares {
  const data: PhotographySquares = useStaticQuery(graphql`
    query {
      photographySquares: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { regex: "/photography/" }
        }
        limit: 9
      ) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 240, maxHeight: 240, cropFocus: CENTER) {
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
