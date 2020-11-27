import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Image from 'gatsby-image'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { ImageContainer } from './ImageContainer'
import { Absolute } from '../Absolute'
import { DynamicImage } from './DynamicImage'
import { Flex } from '../Flex'

jest.mock('gatsby-image')

describe('ImageContainer', (): void => {
  it('should render a grid of "posters"', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ImageContainer
          overlay={{
            node: <div className="test">Hello</div>,
            justifyContent: 'baseline',
          }}
        >
          <DynamicImage
            dynamicImages={StaticDataManager.dynamicImages}
            path="/photo.jpg"
          />
        </ImageContainer>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ImageContainer
          overlay={{
            node: <div className="test">Hello</div>,
            justifyContent: 'baseline',
          }}
        >
          <DynamicImage
            dynamicImages={StaticDataManager.dynamicImages}
            path="/photo.jpg"
          />
        </ImageContainer>
      </ThemeProvider>
    )

    expect(comp.find(Absolute).find(Flex).find('.test').length).toEqual(1)
    expect(comp.find(Absolute).find(Flex).find('.test').text()).toEqual('Hello')
    expect(comp.find('.children').find(Image).length).toEqual(1)
  })
})
