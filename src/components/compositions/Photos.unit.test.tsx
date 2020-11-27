import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Image from 'gatsby-image'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { Photos } from './Photos'

jest.mock('gatsby-image')

describe('Photos', (): void => {
  it('should render a set of photos', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Photos
          images={StaticDataManager.photographyData.photographyData.edges}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render Image(s)', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Photos
          images={StaticDataManager.photographyData.photographyData.edges}
        />
      </ThemeProvider>
    )

    expect(comp.find(Image).length).toEqual(
      StaticDataManager.photographyData.photographyData.edges.length
    )
  })
})
