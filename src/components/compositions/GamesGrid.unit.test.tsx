import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Image from 'gatsby-image'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { GamesGrid } from './GamesGrid'
import { ImageContainer } from './ImageContainer'

jest.mock('gatsby-image')

describe('GamesGrid', (): void => {
  it('should render a grid of "posters"', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <GamesGrid
          wallpapers={StaticDataManager.gameWallpapers.gameWallpapers}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <GamesGrid
          wallpapers={StaticDataManager.gameWallpapers.gameWallpapers}
        />
      </ThemeProvider>
    )

    expect(comp.find(ImageContainer).length).toEqual(
      StaticDataManager.gameWallpapers.gameWallpapers.edges.length
    )
    expect(comp.find(Image).length).toEqual(
      StaticDataManager.gameWallpapers.gameWallpapers.edges.length
    )
  })
})
