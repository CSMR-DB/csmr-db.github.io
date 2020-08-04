import React from 'react'

import { Tool } from '../../data/objects/toolsProvider'

import { Filter } from '../Filter'

interface ISVGLogo {
  logo: Tool
}

export function SVGLogo({ logo }: ISVGLogo): JSX.Element {
  return (
    <Filter $lens="transparent">
      <logo.svg />
    </Filter>
  )
}
