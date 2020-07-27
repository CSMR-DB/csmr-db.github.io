// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IImageSharpAllFiles } from '../../types/interfaces'

export interface IPhotographyData {
  photographyData: IImageSharpAllFiles
}

export function photographyDataProvider(): IPhotographyData {
  const data: IPhotographyData = useStaticQuery(graphql`
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
