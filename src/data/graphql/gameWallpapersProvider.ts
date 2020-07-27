// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IImageSharpAllFiles } from '../../types/interfaces'

export interface IGameWallpapers {
  gameWallpapers: IImageSharpAllFiles
}

export function gameWallpapersProvider(): IGameWallpapers {
  const data: IGameWallpapers = useStaticQuery(graphql`
    query {
      gameWallpapers: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { regex: "/bio/games/" }
        }
        limit: 14
      ) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER) {
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
