import React from 'react'

import { Blend } from '../Blend'
import { BlendBlock } from '../BlendBlock'

interface IImageOverlayProps {
  text: string
}

export function ImageOverlay({ text }: IImageOverlayProps): JSX.Element {
  return (
    <Blend mode={'lighten'}>
      <BlendBlock>
        <h6>{text}</h6>
      </BlendBlock>
    </Blend>
  )
}
