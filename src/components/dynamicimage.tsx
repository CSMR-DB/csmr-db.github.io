import React from 'react'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { IImageSharpAllFiles, IImageSharpEdge } from '../types/interfaces'

export interface IDynamicImageProps {
  path: string
}

export function DynamicImage({ path }: IDynamicImageProps): JSX.Element {
  return (
    <StaticQuery
      // tslint:disable-next-line: no-void-expression
      query={graphql`
        query {
          images: allFile(
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
      `}
      render={({
        images,
      }: {
        images: IImageSharpAllFiles
      }): (JSX.Element | null)[] => {
        return images.edges.map(
          (image: IImageSharpEdge, i: number): JSX.Element | null =>
            image.node.relativePath === path ||
            image.node.relativePath.includes(path) ? (
              <Image key={i} fluid={image.node.childImageSharp.fluid} />
            ) : null
        )
        /**
         * Refactored so I can get ALL images from a provided folder portion of 'relativePath'
         * Note: Don't even bother trying to use query variables in this way. Can apparently only be done for page queries.
         * See https://stackoverflow.com/a/53804805 if you ever consider rewriting this again.
         */
      }}
    />
  )
}
