// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IImageSharpAllFiles } from '../../types/interfaces'

export interface IDynamicImages {
  dynamicImages: IImageSharpAllFiles
}

export function dynamicImagesProvider(): IDynamicImages {
  const data: IDynamicImages = useStaticQuery(graphql`
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
