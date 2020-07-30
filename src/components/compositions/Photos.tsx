import React from 'react'
import { ImageSharpEdge } from '../../types/graphql.types'
import Image from 'gatsby-image'

export interface IPhotosProps {
  images: ImageSharpEdge[]
}

export function Photos({ images }: IPhotosProps): JSX.Element {
  return (
    <>
      {images.map(
        (image: ImageSharpEdge, i: number): JSX.Element => (
          <Image fluid={image.node.childImageSharp.fluid} key={i} />
        )
      )}
    </>
  )
}
