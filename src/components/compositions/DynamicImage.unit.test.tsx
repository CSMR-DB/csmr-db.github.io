import React, { Component } from 'react'
import Image from 'gatsby-image'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { StaticDataManager } from '../../data/StaticDataManager'

import { DynamicImage } from './DynamicImage'
import { ThemeProvider } from 'styled-components'
import { mount, ReactWrapper } from 'enzyme'

jest.mock('gatsby-image')

describe('DynamicImage', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <DynamicImage
          dynamicImages={StaticDataManager.dynamicImages}
          path="/photo.jpg"
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render an image if relativePath matches', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <DynamicImage
          dynamicImages={StaticDataManager.dynamicImages}
          path="/photo.jpg"
        />
      </ThemeProvider>
    )

    expect(comp.find(Image).length).toEqual(1)
  })

  it('should render no image if relativePath does not match', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <DynamicImage
          dynamicImages={StaticDataManager.dynamicImages}
          path="/photoo.jepg"
        />
      </ThemeProvider>
    )

    expect(comp.find(Image).length).toEqual(0)
  })
})
