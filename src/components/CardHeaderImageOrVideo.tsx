import React from 'react'
import { CardHeaderFeaturedImage } from './Card'
import { DynamicImage } from './DynamicImage'
import { StyledIFrame } from './StyledIFrame'
import Img from 'gatsby-image'
import { IFeaturedImage } from '../templates/interfaces'
import { MaxHeightProperty } from 'csstype'

interface IImageOrVideo {
  image?: string | IFeaturedImage
  video?: string
  maxHeight?: MaxHeightProperty<1>
}

export const CardHeaderImageOrVideo: ({
  image,
  video,
  maxHeight,
}: IImageOrVideo) => JSX.Element = ({
  image,
  video,
  maxHeight,
}: IImageOrVideo): JSX.Element => (
  <CardHeaderFeaturedImage maxHeight={maxHeight}>
    {image && typeof image === 'string' ? (
      <DynamicImage path={image} />
    ) : (
      (image && typeof image !== 'string' && (
        <Img fluid={image.childImageSharp.fluid} />
      )) ||
      (video && (
        <StyledIFrame
          width="960"
          height="340"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></StyledIFrame>
      ))
    )}
  </CardHeaderFeaturedImage>
)
