import React from 'react'
import Image from 'gatsby-image'
import { MaxHeightProperty } from 'csstype'

import { IImageSharp } from '../../../types/interfaces'
import {
  AnyExoticRefComponent,
  AnyExoticRefTargets,
} from '../../../types/types'

import { CardHeaderFeaturedImage } from './CardHeaderFeaturedImage'
import { DynamicImage } from '../../DynamicImage'
import { StyledYoutube } from '../../StyledYoutube'

interface IImageOrVideo {
  image?: string | IImageSharp
  video?: string
  maxHeight?: MaxHeightProperty<1>
}

export const CardHeaderImageOrVideo: AnyExoticRefComponent<IImageOrVideo> = React.forwardRef(
  (
    { image, video, maxHeight }: IImageOrVideo,
    ref: AnyExoticRefTargets
  ): JSX.Element => (
    <CardHeaderFeaturedImage $maxHeight={maxHeight} ref={ref}>
      {image && typeof image === 'string' ? (
        <DynamicImage path={image} />
      ) : (
        (image && typeof image !== 'string' && (
          <Image fluid={image.childImageSharp.fluid} />
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
