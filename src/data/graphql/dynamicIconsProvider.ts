// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ImageSharpAllFiles } from '../../types/graphql.types'

export type DynamicIcons = {
  dynamicIcons: ImageSharpAllFiles
}

export function dynamicIconsProvider(): DynamicIcons {
  const data: DynamicIcons = useStaticQuery(graphql`
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
