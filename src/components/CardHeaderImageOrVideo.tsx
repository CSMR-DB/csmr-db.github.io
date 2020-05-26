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
          opts={{
            width: '960',
            height: '290',
          }}
          videoId={video.replace('https://www.youtube.com/embed/', '')}
        ></StyledIFrame>
      ))
    )}
  </CardHeaderFeaturedImage>
)
