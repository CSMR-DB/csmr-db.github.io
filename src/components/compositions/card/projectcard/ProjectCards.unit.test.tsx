import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { ProjectCards } from './ProjectCards'
import { ProjectCard } from './ProjectCard'

describe('ProjectCards', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ProjectCards edges={StaticDataManager.projectsData.all.edges} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ProjectCards edges={StaticDataManager.projectsData.all.edges} />
      </ThemeProvider>
    )

    expect(comp.find(ProjectCard).length).toEqual(
      StaticDataManager.projectsData.all.edges.length
    )
  })
})
