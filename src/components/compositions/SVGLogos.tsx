import React from 'react'

import { ITool } from '../../data/tools'

import { Flex } from '../Flex'
import { Grid } from '../Grid'
import { SVGLogo } from './SVGLogo'

interface ISVGLogos {
  svgs: ITool[]
}

export function SVGLogos({ svgs }: ISVGLogos): JSX.Element {
  return (
    <Flex $direction={'column'} $justifyContent={'center'}>
      <Grid $rows={2} $columns={8}>
        {svgs.map(
          (logo: ITool, i: number): JSX.Element => (
            <SVGLogo logo={logo} key={i} />
          )
        )}
      </Grid>
    </Flex>
  )
}
