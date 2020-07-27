import React from 'react'
import Image from 'gatsby-image'

import { IImageSharpEdge } from '../types/interfaces'
import { AStaticDataManager, StaticDataManager } from '../data/DataManager'

export interface IDynamicIconProps {
  path: string
}

export function DynamicIcon({ path }: IDynamicIconProps): JSX.Element {
  const {
    dynamicIcons: { dynamicIcons },
  }: typeof AStaticDataManager = StaticDataManager

  function renderImage(
    file: IImageSharpEdge | null = null
  ): JSX.Element | null {
    return file && <Image fluid={file.node.childImageSharp.fluid} />
  }

  return (
    <>
      {renderImage(
        dynamicIcons.edges.find(
          ({ node }: IImageSharpEdge): boolean => node.relativePath === path
        )
      )}
    </>
  )
}
