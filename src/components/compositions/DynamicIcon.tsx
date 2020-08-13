import React from 'react'
import Image from 'gatsby-image'

import { ImageSharpEdge } from '../../types/graphql.types'
import { AStaticDataManager } from '../../data/StaticDataManager'

export interface IDynamicIconProps {
  path: string
  dynamicIcons: typeof AStaticDataManager['dynamicIcons']
}

export function DynamicIcon({
  path,
  dynamicIcons: { dynamicIcons },
}: IDynamicIconProps): JSX.Element {
  function renderImage(file: ImageSharpEdge | null = null): JSX.Element | null {
    return file && <Image fluid={file.node.childImageSharp.fluid} />
  }

  return (
    <>
      {renderImage(
        dynamicIcons.edges.find(
          ({ node }: ImageSharpEdge): boolean => node.relativePath === path
        )
      )}
    </>
  )
}
