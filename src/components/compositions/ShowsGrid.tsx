import React from 'react'
import Image from 'gatsby-image'

import { ImageSharpAllFiles, ImageSharpEdge } from '../../types/graphql.types'

import { ImageContainer } from './ImageContainer'
import { Filter } from '../Filter'
import { ImageGrid } from '../ImageGrid'

export interface IShowsGridProps {
  posters: ImageSharpAllFiles
}

export function ShowsGrid({ posters }: IShowsGridProps): JSX.Element {
  return (
    <ImageGrid $rows={2} $columns={14}>
      {posters.edges.map(
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
