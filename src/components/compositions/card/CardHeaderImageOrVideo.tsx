import React from 'react'
import Image from 'gatsby-image'
import { MaxHeightProperty } from 'csstype'

import { FileChildImageSharp } from '../../../types/graphql.types'
import {
  AnyExoticRefComponent,
  AnyExoticRefTargets,
} from '../../../types/react.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { CardHeaderFeaturedImage } from './CardHeaderFeaturedImage'
import { DynamicImage } from '../DynamicImage'
import { StyledYoutube } from '../../StyledYoutube'

interface IImageOrVideo {
  image?: string | FileChildImageSharp
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
        <DynamicImage
          path={image}
          dynamicImages={StaticDataManager.dynamicImages}
        />
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
