import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../../data/StaticDataManager'
import { RouteObject } from '../../../data/objects/routesProvider'

import { WASDNav } from './WASDNav'
import { WASDGrid } from './WASDGrid'
import { WASDLinkOrb } from './WASDLinkOrb'
import { WASDLinkOrbTitle } from './WASDLinkOrbTitle'
import { WASDLinkOrbKey } from './WASDLinkOrbKey'

describe('WASDNav', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDNav routes={StaticDataManager.routes} isLandingPage={false} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDNav routes={StaticDataManager.routes} isLandingPage={false} />
      </ThemeProvider>
    )

    expect(comp.find(WASDGrid).length).toEqual(1)
    expect(comp.find(WASDLinkOrb).length).toEqual(
      StaticDataManager.routes.length
    )
    expect(comp.find(WASDLinkOrb).first().props().to).toEqual(
      StaticDataManager.routes[0].path
    )
    expect(comp.find(WASDLinkOrb).find(WASDLinkOrbTitle).length).toEqual(
      StaticDataManager.routes.length
    )
    expect(comp.find(WASDLinkOrb).first().find(WASDLinkOrbKey).length).toEqual(
      2
    )
    expect(comp.find(WASDLinkOrb).find(WASDLinkOrbKey).length).toEqual(
      StaticDataManager.routes.reduce(
        (acc: number, val: RouteObject): number => acc + val.boundKeys.length,
        0
      )
    )
  })
})
