import React from 'react'
import Image from 'gatsby-image'

import { IBioImagesMarkdownRemark, IBioImagesEdge } from '../../types/types'

import { ImageContainer } from './ImageContainer'
import { Filter } from '../Filter'
import { ImageGrid } from '../ImageGrid'

export function PhotographyGrid(props: {
  squares: IBioImagesMarkdownRemark
}): JSX.Element {
  return (
    <ImageGrid rows={3} columns={3}>
      {props.squares.edges.map(
        (edge: IBioImagesEdge, i: number): JSX.Element => (
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
