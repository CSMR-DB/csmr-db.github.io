// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ImageSharpAllFiles } from '../../types/graphql.types'

export type DynamicImages = {
  dynamicImages: ImageSharpAllFiles
}

export function dynamicImagesProvider(): DynamicImages {
  const data: DynamicImages = useStaticQuery(graphql`
    query {
      dynamicImages: allFile(
        filter: { extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)/" } }
      ) {
        edges {
          node {
            extension
            relativePath
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
