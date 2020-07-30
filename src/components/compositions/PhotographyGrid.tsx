import React from 'react'
import Image from 'gatsby-image'

import { ImageSharpAllFiles, ImageSharpEdge } from '../../types/graphql.types'

import { ImageContainer } from './ImageContainer'
import { Filter } from '../Filter'
import { ImageGrid } from '../ImageGrid'

export interface IPhotographyGrid {
  squares: ImageSharpAllFiles
}

export function PhotographyGrid({ squares }: IPhotographyGrid): JSX.Element {
  return (
    <ImageGrid $rows={3} $columns={3}>
      {squares.edges.map(
        (edge: ImageSharpEdge, i: number): JSX.Element => (
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
