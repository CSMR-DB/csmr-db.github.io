import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../data/StaticDataManager'

import { IndexLayout } from './IndexLayout'
import { Layout } from '../components/Layout'
import { LiftedUpWrapper } from '../components/LiftedUpWrapper'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { ReadMore } from '../components/compositions/ReadMore'
import { Card } from '../components/compositions/card/Card'
import { SkillCards } from '../components/compositions/card/skillcard/SkillCards'
import { ProjectCards } from '../components/compositions/card/projectcard/ProjectCards'

describe('IndexLayout', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <IndexLayout
          skillsetData={StaticDataManager.skillsetData.top}
          projectsData={StaticDataManager.projectsData.top}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <IndexLayout
          skillsetData={StaticDataManager.skillsetData.top}
          projectsData={StaticDataManager.projectsData.top}
        />
      </ThemeProvider>
    )

    expect(comp.find(Layout).props().isLandingPage).toEqual(true)
    expect(comp.find(Layout).find(LiftedUpWrapper).length).toEqual(1)
    expect(
      comp.find(Layout).find(LiftedUpWrapper).find(CenteredBlock).length
    ).toEqual(1)
    expect(
      comp.find(Layout).find(LiftedUpWrapper).find(CenteredBlock).props()
        .$maxWidth
    ).toEqual('110rem')

    expect(
      comp.find(Layout).find(LiftedUpWrapper).find(CenteredBlock).find(Grid)
        .length
    ).toEqual(4)
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(1)
        .find(ReadMore).length
    ).toEqual(1)
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(1)
        .find(ReadMore)
        .props().link
    ).toEqual({
      path: '/about',
      text: 'my story',
    })
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(1)
        .find(Card).length
    ).toEqual(2)
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(1)
        .find(Card)
        .at(1)
        .find('h1')
        .text()
    ).toEqual('TL;WR')

    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(2)
        .find(ReadMore).length
    ).toEqual(1)
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(2)
        .find(ReadMore)
        .props().link
    ).toEqual({
      path: '/skillset',
      text: 'my toolbelt',
    })
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(2)
        .find(SkillCards).length
    ).toEqual(1)

    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(3)
        .find(ReadMore).length
    ).toEqual(1)
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(3)
        .find(ReadMore)
        .props().link
    ).toEqual({
      path: '/projects',
      text: 'my work / experiments',
    })
    expect(
      comp
        .find(Layout)
        .find(LiftedUpWrapper)
        .find(CenteredBlock)
        .find(Grid)
        .at(3)
        .find(ProjectCards).length
    ).toEqual(1)
  })
})
