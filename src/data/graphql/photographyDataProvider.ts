// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ImageSharpAllFiles } from '../../types/graphql.types'

export type PhotographyData = {
  photographyData: ImageSharpAllFiles
}

export function photographyDataProvider(): PhotographyData {
  const data: PhotographyData = useStaticQuery(graphql`
    query {
      photographyData: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)/" }
          relativeDirectory: { in: "photography" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 960, maxHeight: 960, cropFocus: CENTER) {
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
