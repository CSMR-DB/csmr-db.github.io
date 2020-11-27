import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { ImageOverlay } from './ImageOverlay'
import { Blend } from '../Blend'
import { BlendBlock } from '../BlendBlock'

describe('ImageOverlay', (): void => {
  it('should render a grid of "posters"', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ImageOverlay text={'Hello'} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ImageOverlay text={'Hello'} />
      </ThemeProvider>
    )

    expect(comp.find(Blend).length).toEqual(1)
    expect(comp.find(Blend).find(BlendBlock).length).toEqual(1)
    expect(comp.find('h6').length).toEqual(1)
    expect(comp.find('h6').text()).toEqual('Hello')
  })
})
