import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../data/StaticDataManager'

import { SkillsetLayout } from './SkillsetLayout'
import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { SkillCards } from '../components/compositions/card/skillcard/SkillCards'
import { ExperienceCard } from '../components/compositions/card/experiencecard/ExperienceCard'
import { ExperienceCards } from '../components/compositions/card/experiencecard/ExperienceCards'
import { ContentSeparator } from '../components/ContentSeparator'

describe('SkillsetLayout', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillsetLayout
          programmingData={StaticDataManager.skillsetData.allProgramming}
          graphicDesignData={StaticDataManager.skillsetData.allGraphicDesign}
          experienceData={StaticDataManager.experienceData.experienceData}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillsetLayout
          programmingData={StaticDataManager.skillsetData.allProgramming}
          graphicDesignData={StaticDataManager.skillsetData.allGraphicDesign}
          experienceData={StaticDataManager.experienceData.experienceData}
        />
      </ThemeProvider>
    )

    expect(comp.find(Layout).props().isLandingPage).not.toEqual(true)
    expect(comp.find(Layout).find(CenteredBlock).length).toEqual(3)
    expect(comp.find(Layout).find(Grid).length).toEqual(3)

    expect(
      comp.find(Layout).find(CenteredBlock).at(0).find('h1').text()
    ).toEqual('This is what I have developed with')
    expect(comp.find(Layout).find(Grid).at(0).props()).toMatchObject({
      $columns: 'repeat(auto-fill, minmax(25rem, 1fr))',
      $maxWidth: '160rem',
    })
    expect(comp.find(Layout).find(Grid).at(0).find(SkillCards).length).toEqual(
      1
    )
    expect(
      comp.find(Layout).find(Grid).at(0).find(SkillCards).props().edges
    ).toEqual(StaticDataManager.skillsetData.allProgramming.edges)

    expect(
      comp.find(Layout).find(CenteredBlock).at(1).find('h1').text()
    ).toEqual(expect.stringContaining('Graphic Design'))
    expect(comp.find(Layout).find(Grid).at(1).props()).toMatchObject({
      $columns: 'repeat(auto-fill, minmax(25rem, 1fr))',
      $maxWidth: '160rem',
    })
    expect(comp.find(Layout).find(Grid).at(1).find(SkillCards).length).toEqual(
      1
    )
    expect(
      comp.find(Layout).find(Grid).at(1).find(SkillCards).props().edges
    ).toEqual(StaticDataManager.skillsetData.allGraphicDesign.edges)

    expect(
      comp
        .find(Layout)
        .find(CenteredBlock)
        .at(2)
        .find(ContentSeparator)
        .at(0)
        .find('h1')
        .at(0)
        .text()
    ).toEqual('Education')
    expect(
      comp
        .find(Layout)
        .find(CenteredBlock)
        .at(2)
        .find(ContentSeparator)
        .at(1)
        .find('h1')
        .at(0)
        .text()
    ).toEqual('Professional experience')
    expect(comp.find(Layout).find(Grid).at(1).props()).toMatchObject({
      $columns: 'repeat(auto-fill, minmax(25rem, 1fr))',
      $maxWidth: '160rem',
    })

    expect(comp.find(Layout).find(ExperienceCard).first().props().name).toEqual(
      'Digital Media & Communication'
    )

    expect(comp.find(Layout).find(ExperienceCards).length).toEqual(1)
    expect(comp.find(Layout).find(ExperienceCards).props().edges).toEqual(
      StaticDataManager.experienceData.experienceData.edges
    )
  })
})
