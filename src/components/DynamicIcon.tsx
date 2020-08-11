import React from 'react'
import Image from 'gatsby-image'

import { ImageSharpEdge } from '../types/graphql.types'
import {
  AStaticDataManager,
  StaticDataManager,
} from '../data/StaticDataManager'

export interface IDynamicIconProps {
  path: string
}

export function DynamicIcon({ path }: IDynamicIconProps): JSX.Element {
  const {
    dynamicIcons: { dynamicIcons },
  }: typeof AStaticDataManager = StaticDataManager

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
