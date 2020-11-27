import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Image from 'gatsby-image'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { SubbedImage } from './SubbedImage'
import { DynamicImage } from './DynamicImage'
import { ImageContainer } from './ImageContainer'
import { ImageOverlay } from './ImageOverlay'
import { Filter } from '../Filter'

jest.mock('gatsby-image')

describe('SubbedImage', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SubbedImage path={'/photo'} text={'Photo'} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SubbedImage path={'/photo'} text={'Photo'} />
      </ThemeProvider>
    )

    expect(
      comp.find(ImageContainer).find(Filter).find(DynamicImage).length
    ).toEqual(1)
    expect(comp.find(ImageContainer).find(ImageOverlay).length).toEqual(1)
    expect(comp.find(ImageContainer).find(ImageOverlay).props()).toEqual({
      text: 'Photo',
    })
    expect(
      comp.find(ImageContainer).find(Filter).find(DynamicImage).find(Image)
        .length
    ).toEqual(1)
  })
})
