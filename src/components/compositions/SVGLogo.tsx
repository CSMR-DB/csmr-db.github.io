import React from 'react'

import { ITool } from '../../data/tools'

import { ColoredCircle } from '../ColoredCircle'

interface ISVGLogo {
  logo: ITool
}

export function SVGLogo({ logo }: ISVGLogo): JSX.Element {
  return (
    <ColoredCircle color={logo.color}>
      <logo.svg />
    </ColoredCircle>
  )
}
