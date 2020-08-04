import React from 'react'

import { Tool } from '../../data/objects/toolsProvider'

import { ColoredCircle } from '../ColoredCircle'

interface ISVGLogo {
  logo: Tool
}

export function SVGLogo({ logo }: ISVGLogo): JSX.Element {
  return (
    <ColoredCircle color={logo.color}>
      <logo.svg />
    </ColoredCircle>
  )
}
