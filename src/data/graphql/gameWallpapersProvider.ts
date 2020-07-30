// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ImageSharpAllFiles } from '../../types/graphql.types'

export type GameWallpapers = {
  gameWallpapers: ImageSharpAllFiles
}

export function gameWallpapersProvider(): GameWallpapers {
  const data: GameWallpapers = useStaticQuery(graphql`
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
