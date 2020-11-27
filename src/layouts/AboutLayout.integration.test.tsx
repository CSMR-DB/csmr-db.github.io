import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../data/StaticDataManager'

import { AboutLayout } from './AboutLayout'
import { CoursesGrid } from '../components/compositions/CoursesGrid'
import { SVGLogos } from '../components/compositions/SVGLogos'
import { WideBoi } from '../components/WideBoi'
import { CenteredBlock } from '../components/CenteredBlock'
import { SubbedImages } from '../components/compositions/SubbedImages'
import { CTAButton } from '../components/CTAButton'
import { groupBy } from '../utils/groupBy'
import { Quote } from '../components/Quote'
import { ShowsGrid } from '../components/compositions/ShowsGrid'
import { GamesGrid } from '../components/compositions/GamesGrid'
import { PhotographyGrid } from '../components/compositions/PhotographyGrid'
import { StyledLink } from '../components/StyledLink'
import { Layout } from '../components/Layout'
// import { DynamicImage } from '../components/compositions/DynamicImage'

describe('AboutLayout', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <AboutLayout
          courses={StaticDataManager.courses}
          tools={StaticDataManager.tools}
          gameWallpapers={StaticDataManager.gameWallpapers.gameWallpapers}
          photographySquares={
            StaticDataManager.photographySquares.photographySquares
          }
          seriesPosters={StaticDataManager.seriesPosters.seriesPosters}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <AboutLayout
          courses={StaticDataManager.courses}
          tools={StaticDataManager.tools}
          gameWallpapers={StaticDataManager.gameWallpapers.gameWallpapers}
          photographySquares={
            StaticDataManager.photographySquares.photographySquares
          }
          seriesPosters={StaticDataManager.seriesPosters.seriesPosters}
        />
      </ThemeProvider>
    )

    expect(comp.find(Layout).props().isLandingPage).not.toEqual(false)
    expect(comp.find(CenteredBlock).at(0).find('h1').text()).toEqual(
      expect.stringContaining('Casimir')
    )
    // expect(comp.find(CenteredBlock).at(0).find(DynamicImage).props().path).toEqual(expect.stringContaining('me.jpg'))
    expect(comp.find(CenteredBlock).at(0).find('h2').text()).toEqual(
      expect.stringContaining('my story')
    )

    expect(comp.find(WideBoi).at(0).find(SubbedImages).length).toEqual(1)
    expect(
      comp.find(WideBoi).at(0).find(SubbedImages).props().images[0]
    ).toMatchObject({
      path: expect.stringContaining('hu_'),
      text: expect.stringContaining('HU Building'),
    })
    expect(comp.find(CenteredBlock).at(1).find('h2').text()).toEqual(
      expect.stringContaining('DMC')
    )
    expect(comp.find(WideBoi).at(1).find(CoursesGrid).length).toEqual(1)
    expect(comp.find(WideBoi).at(1).find(CoursesGrid).props().courses).toEqual([
      ...groupBy(StaticDataManager.courses, 'category'),
    ])
    expect(comp.find(WideBoi).at(1).find(CTAButton).length).toEqual(1)
    expect(comp.find(WideBoi).at(1).find(CTAButton).props().to).toEqual(
      '/skillset'
    )

    expect(comp.find(CenteredBlock).at(2).find('h2').text()).toEqual(
      expect.stringContaining('Internship')
    )
    expect(comp.find(WideBoi).at(2).find(Quote).length).toEqual(1)
    expect(comp.find(WideBoi).at(2).find('h3').first().text()).toEqual(
      expect.stringContaining('TDD')
    )
    expect(comp.find(WideBoi).at(2).find('h3').last().text()).toEqual(
      expect.stringContaining('SOLID')
    )

    expect(comp.find(WideBoi).at(3).find(SVGLogos).length).toEqual(1)
    expect(comp.find(WideBoi).at(3).find(SVGLogos).props().svgs).toEqual(
      StaticDataManager.tools
    )
    expect(comp.find(WideBoi).at(3).find(CTAButton).length).toEqual(1)
    expect(comp.find(WideBoi).at(3).find(CTAButton).props().to).toEqual(
      '/skillset'
    )

    expect(comp.find(WideBoi).at(4).find(ShowsGrid).length).toEqual(1)
    expect(comp.find(WideBoi).at(5).find(GamesGrid).length).toEqual(1)
    expect(comp.find(WideBoi).at(6).find(PhotographyGrid).length).toEqual(1)
    expect(comp.find(CenteredBlock).last().find(StyledLink).length).toEqual(1)
    expect(comp.find(CenteredBlock).last().find(StyledLink).props().to).toEqual(
      '/photography'
    )
  })
})
