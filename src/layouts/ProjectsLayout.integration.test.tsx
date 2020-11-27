import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../data/StaticDataManager'

import { ProjectsLayout } from './ProjectsLayout'
import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { ProjectCards } from '../components/compositions/card/projectcard/ProjectCards'

describe('ProjectsLayout', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ProjectsLayout
          programmingData={StaticDataManager.projectsData.allProgramming}
          graphicDesignData={StaticDataManager.projectsData.allGraphicDesign}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ProjectsLayout
          programmingData={StaticDataManager.projectsData.allProgramming}
          graphicDesignData={StaticDataManager.projectsData.allGraphicDesign}
        />
      </ThemeProvider>
    )

    expect(comp.find(Layout).props().isLandingPage).not.toEqual(true)
    expect(comp.find(Layout).find(Grid).length).toEqual(2)
    expect(comp.find(Layout).find(CenteredBlock).length).toEqual(2)

    expect(
      comp.find(Layout).find(CenteredBlock).at(0).find('h1').text()
    ).toEqual(expect.stringContaining('my projects'))
    expect(comp.find(Layout).find(Grid).at(0).props()).toMatchObject({
      $columns: 'repeat(auto-fill, minmax(32rem, 1fr))',
      $maxWidth: '100rem',
    })
    expect(
      comp.find(Layout).find(Grid).at(0).find(ProjectCards).length
    ).toEqual(1)
    expect(
      comp.find(Layout).find(Grid).at(0).find(ProjectCards).props().edges
    ).toEqual(StaticDataManager.projectsData.allProgramming.edges)

    expect(
      comp.find(Layout).find(CenteredBlock).at(1).find('h1').text()
    ).toEqual(expect.stringContaining('Graphic Design'))
    expect(comp.find(Layout).find(Grid).at(1).props()).toMatchObject({
      $columns: 'repeat(auto-fill, minmax(32rem, 1fr))',
      $maxWidth: '100rem',
    })
    expect(
      comp.find(Layout).find(Grid).at(1).find(ProjectCards).length
    ).toEqual(1)
    expect(
      comp.find(Layout).find(Grid).at(1).find(ProjectCards).props().edges
    ).toEqual(StaticDataManager.projectsData.allGraphicDesign.edges)
  })
})
