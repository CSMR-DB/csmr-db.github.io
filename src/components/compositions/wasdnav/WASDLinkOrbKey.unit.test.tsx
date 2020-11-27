import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { WASDLinkOrbKey } from './WASDLinkOrbKey'

describe('WASDLinkOrbKey', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDLinkOrbKey>A</WASDLinkOrbKey>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDLinkOrbKey>A</WASDLinkOrbKey>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toHaveStyleRule('display', 'none')

    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${StaticDataManager.theme.palette.light.normal}`
    )
    expect(json).toHaveStyleRule('width', '2rem')
    expect(json).toHaveStyleRule('height', '2rem')
    expect(json).toHaveStyleRule('line-height', '2rem')

    /** Media query rules */
    expect(json).toHaveStyleRule('display', 'initial', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })
})
