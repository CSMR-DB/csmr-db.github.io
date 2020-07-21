import React from 'react'

import { Grid } from '../Grid'
import { ISubbedImage, SubbedImage } from './SubbedImage'

export interface ISubbedImages {
  images: ISubbedImage[]
}

export function SubbedImages({ images }: ISubbedImages): JSX.Element {
  return (
    <Grid columns={images.length} rows={1}>
      {images.map(
        (image: ISubbedImage, i: number): JSX.Element => (
          <SubbedImage {...image} key={i} />
        )
      )}
    </Grid>
  )
}
