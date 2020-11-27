import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { ExperienceCards } from './ExperienceCards'
import { ExperienceCard } from './ExperienceCard'

describe('ExperienceCards', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ExperienceCards
          edges={StaticDataManager.experienceData.experienceData.edges}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ExperienceCards
          edges={StaticDataManager.experienceData.experienceData.edges}
        />
      </ThemeProvider>
    )

    expect(comp.find(ExperienceCard).length).toEqual(
      StaticDataManager.experienceData.experienceData.edges.length
    )
  })
})
