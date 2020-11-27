import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { SubbedImages } from './SubbedImages'
import { SubbedImage } from './SubbedImage'

jest.mock('gatsby-image')

describe('SubbedImages', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SubbedImages
          images={[
            {
              path: '/photo.jpg',
              text: 'Photo',
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
        <SubbedImages
          images={[
            {
              path: '/photo.jpg',
              text: 'Photo',
            },
          ]}
        />
      </ThemeProvider>
    )

    expect(comp.find(SubbedImage).length).toEqual(1)
  })
})
