// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IImageSharpAllFiles } from '../../types/interfaces'

export interface IPhotographySquares {
  photographySquares: IImageSharpAllFiles
}

export function photographySquaresProvider(): IPhotographySquares {
  const data: IPhotographySquares = useStaticQuery(graphql`
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
