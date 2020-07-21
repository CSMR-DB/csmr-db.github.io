import React from 'react'
import { IImageSharpEdge } from '../../types/interfaces'
import Image from 'gatsby-image'

export interface IPhotosProps {
  images: IImageSharpEdge[]
}

export function Photos({ images }: IPhotosProps): JSX.Element {
  return (
    <>
      {images.map(
        (image: IImageSharpEdge, i: number): JSX.Element => (
          <Image fluid={image.node.childImageSharp.fluid} key={i} />
        )
      )}
    </>
  )
}
