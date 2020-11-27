import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { WASDLinkOrbTitle } from './WASDLinkOrbTitle'

describe('WASDLinkOrbTitle', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDLinkOrbTitle>A</WASDLinkOrbTitle>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDLinkOrbTitle>A</WASDLinkOrbTitle>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toHaveStyleRule('font-size', '0.75rem')

    /** Media query rules */
    expect(json).toHaveStyleRule('font-size', '1.25rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })
})
