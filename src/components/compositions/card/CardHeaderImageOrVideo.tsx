import React from 'react'
import { DynamicImage } from '../../DynamicImage'
import { StyledYoutube } from '../../StyledYoutube'
import Img from 'gatsby-image'
import { IFeaturedImage } from '../../../types/interfaces'
import { MaxHeightProperty } from 'csstype'
import {
  AnyExoticRefComponent,
  AnyExoticRefTargets,
} from '../../../types/types'
import { CardHeaderFeaturedImage } from './CardHeaderFeaturedImage'

interface IImageOrVideo {
  image?: string | IFeaturedImage
  video?: string
  maxHeight?: MaxHeightProperty<1>
}

export const CardHeaderImageOrVideo: AnyExoticRefComponent<IImageOrVideo> = React.forwardRef(
  (
    { image, video, maxHeight }: IImageOrVideo,
    ref: AnyExoticRefTargets
  ): JSX.Element => (
    <CardHeaderFeaturedImage maxHeight={maxHeight} ref={ref}>
      {image && typeof image === 'string' ? (
        <DynamicImage path={image} />
      ) : (
        (image && typeof image !== 'string' && (
          <Img fluid={image.childImageSharp.fluid} />
        )) ||
        (video && (
          <StyledYoutube
            opts={{
              width: '960',
              height: '290',
            }}
            videoId={video.replace('https://www.youtube.com/embed/', '')}
          ></StyledYoutube>
        ))
      )}
    </CardHeaderFeaturedImage>
  )
)
