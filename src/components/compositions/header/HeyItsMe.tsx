import React from 'react'
import { Tween } from 'react-gsap'

import { Excerpt } from '../../Excerpt'
import { ImageDot } from '../../ImageDot'
import { Filter } from '../../Filter'
import { DynamicImage } from '../../DynamicImage'

export interface IHeyItsMeProps {
  author: string
  description: string
}

export function HeyItsMe({ author, description }: IHeyItsMeProps): JSX.Element {
  return (
    <Excerpt>
      <Tween
        from={{ opacity: 0, scale: 0 }}
        duration={1}
        delay={0.25}
        ease={'back'}
      >
        <ImageDot $width={'8rem'}>
          <Filter>
            <DynamicImage path="wallpaper/me.jpg" />
          </Filter>
        </ImageDot>
      </Tween>
      <h1>Hey, I'm {author}</h1>
      <p>{description}</p>
    </Excerpt>
  )
}
