import React from 'react'

import { Tool } from '../../data/objects/toolsProvider'

import { Flex } from '../Flex'
import { Grid } from '../Grid'
import { SVGLogo } from './SVGLogo'

interface ISVGLogos {
  svgs: Tool[]
}

export function SVGLogos({ svgs }: ISVGLogos): JSX.Element {
  return (
    <Flex $direction={'column'} $justifyContent={'center'}>
      <Grid $rows={2} $columns={8}>
        {svgs.map(
          (logo: Tool, i: number): JSX.Element => (
            <SVGLogo logo={logo} key={i} />
          )
        )}
      </Grid>
    </Flex>
  )
}
