import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../data/StaticDataManager'

import { PhotographyLayout } from './PhotographyLayout'
import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { Photos } from '../components/compositions/Photos'

describe('PhotographyLayout', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <PhotographyLayout
          photographyData={StaticDataManager.photographyData.photographyData}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <PhotographyLayout
          photographyData={StaticDataManager.photographyData.photographyData}
        />
      </ThemeProvider>
    )

    expect(comp.find(Layout).props().isLandingPage).not.toEqual(true)
    expect(comp.find(Layout).find(CenteredBlock).length).toEqual(1)
    expect(comp.find(Layout).find(Grid).length).toEqual(1)
    expect(comp.find(Layout).find(Grid).props().$columns).toEqual(
      'repeat(auto-fill, minmax(32rem,1fr))'
    )
    expect(comp.find(Layout).find(Grid).find(Photos).length).toEqual(1)
    expect(comp.find(Layout).find(Grid).find(Photos).props().images).toEqual(
      StaticDataManager.photographyData.photographyData.edges
    )
  })
})
