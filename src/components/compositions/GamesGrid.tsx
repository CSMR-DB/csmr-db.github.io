import React from 'react'
import Image from 'gatsby-image'

import { ImageSharpAllFiles, ImageSharpEdge } from '../../types/graphql.types'
import { ImageContainer } from './ImageContainer'
import { cleanAndCapitalize } from '../../utils/textTransformer'

import { Blend } from '../Blend'
import { Filter } from '../Filter'
import { ImageGrid } from '../ImageGrid'

export interface IGamesGridProps {
  wallpapers: ImageSharpAllFiles
}

export function GamesGrid({ wallpapers }: IGamesGridProps): JSX.Element {
  return (
    <ImageGrid $rows={2} $columns={7}>
      {wallpapers.edges.map(
        (edge: ImageSharpEdge, i: number): JSX.Element => (
          <ImageContainer
            overlay={{
              node: (
                <Blend $mode={'difference'}>
                  <h3 style={{ color: 'white' }}>
                    {cleanAndCapitalize(edge.node.name)}
                  </h3>
                </Blend>
              ),
            }}
            key={i}
          >
            <Filter>
              <Image fluid={edge.node.childImageSharp.fluid} />
            </Filter>
          </ImageContainer>
        )
      )}
    </ImageGrid>
  )
}
