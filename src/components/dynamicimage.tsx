import React from 'react'
import Image from 'gatsby-image'

import { ImageSharpEdge } from '../types/graphql.types'
import {
  AStaticDataManager,
  StaticDataManager,
} from '../data/StaticDataManager'

export interface IDynamicImageProps {
  path: string
}

export function DynamicImage({ path }: IDynamicImageProps): JSX.Element {
  const {
    dynamicImages: { dynamicImages },
  }: typeof AStaticDataManager = StaticDataManager

  /**
   * Refactored so I can get ALL images from a provided folder portion of 'relativePath'
   * Note: Don't even bother trying to use query variables in this way. Can apparently only be done for page queries.
   * See https://stackoverflow.com/a/53804805 if you ever consider rewriting this again.
   */
  return (
    <>
      {dynamicImages.edges.map(
        (image: ImageSharpEdge, i: number): JSX.Element | null =>
          image.node.relativePath === path ||
          image.node.relativePath.includes(path) ? (
            <Image key={i} fluid={image.node.childImageSharp.fluid} />
          ) : null
      )}
    </>
  )
}
