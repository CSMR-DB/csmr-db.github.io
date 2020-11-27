import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../../data/StaticDataManager'

import { Header } from './Header'
import { HeyItsMe } from './HeyItsMe'
import { WASDNav } from '../wasdnav/WASDNav'

describe('Header', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Header staticDataManager={StaticDataManager} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Header staticDataManager={StaticDataManager} />
      </ThemeProvider>
    )

    expect(comp.find(WASDNav).length).toEqual(1)

    expect(comp.find(HeyItsMe).length).toEqual(0)
  })

  it('should render internally [@landingPage=true]', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Header isLandingPage={true} staticDataManager={StaticDataManager} />
      </ThemeProvider>
    )

    expect(comp.find(WASDNav).length).toEqual(1)

    expect(comp.find(HeyItsMe).length).toEqual(1)
  })
})
