import React from 'react'
import Image from 'gatsby-image'

import { IImageSharpAllFiles, IImageSharpEdge } from '../../types/interfaces'

import { ImageContainer } from './ImageContainer'
import { Filter } from '../Filter'
import { ImageGrid } from '../ImageGrid'

export interface IPhotographyGrid {
  squares: IImageSharpAllFiles
}

export function PhotographyGrid({ squares }: IPhotographyGrid): JSX.Element {
  return (
    <ImageGrid rows={3} columns={3}>
      {squares.edges.map(
        (edge: IImageSharpEdge, i: number): JSX.Element => (
          <ImageContainer key={i}>
            <Filter>
              <Image fluid={edge.node.childImageSharp.fluid} />
            </Filter>
          </ImageContainer>
        )
      )}
    </ImageGrid>
  )
}
