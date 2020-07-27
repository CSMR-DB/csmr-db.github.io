// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IImageSharpAllFiles } from '../../types/interfaces'

export interface IDynamicIcons {
  dynamicIcons: IImageSharpAllFiles
}

export function dynamicIconsProvider(): IDynamicIcons {
  const data: IDynamicIcons = useStaticQuery(graphql`
    query {
      dynamicIcons: allFile(
        filter: { extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)/" } }
      ) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, cropFocus: CENTER) {
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
