import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'
import {
  AnyExoticRefComponent,
  AnyExoticRefTargets,
} from '../../types/react.types'

import { SVGLogos } from './SVGLogos'
import { SVGLogo } from './SVGLogo'
import { Grid } from '../Grid'

const RandomSampleSVG: AnyExoticRefComponent<any> = React.forwardRef(
  (_props: any, ref: AnyExoticRefTargets): JSX.Element => (
    <svg ref={ref} viewBox={'0 0 16px 16px'}>
      <g>
        <circle x={8} y={8} r={16} />
      </g>
    </svg>
  )
)

describe('SVGLogos', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SVGLogos
          svgs={[
            {
              name: 'Null',
              svg: RandomSampleSVG,
            },
            {
              name: 'Undefined',
              svg: RandomSampleSVG,
            },
            {
              name: 'False',
              svg: RandomSampleSVG,
            },
          ]}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SVGLogos
          svgs={[
            {
              name: 'Null',
              svg: RandomSampleSVG,
            },
            {
              name: 'Undefined',
              svg: RandomSampleSVG,
            },
            {
              name: 'False',
              svg: RandomSampleSVG,
            },
          ]}
        />
      </ThemeProvider>
    )

    expect(comp.find(Grid).length).toEqual(1)
    expect(comp.find(SVGLogo).length).toEqual(3)
  })
})
