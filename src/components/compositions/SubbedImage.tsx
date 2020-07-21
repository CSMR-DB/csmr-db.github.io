import React from 'react'

import { Filter } from '../Filter'
import { DynamicImage } from '../DynamicImage'
import { ImageOverlay } from './ImageOverlay'
import { ImageContainer } from './ImageContainer'

export interface ISubbedImage {
  path: string
  text: string
}

export function SubbedImage({ path, text }: ISubbedImage): JSX.Element {
  return (
    <ImageContainer
      overlay={{
        node: <ImageOverlay text={text} />,
        justifyContent: 'flex-end',
      }}
    >
      <Filter>
        <DynamicImage path={path} />
      </Filter>
    </ImageContainer>
  )
}
