import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { Layout } from './layout'

describe('Layout', (): void => {
  it('should have the following style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Layout />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('min-height', '100vh')
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.light.normal
    )
  })

  it('should have the following style rules when isLandingPage === true', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Layout isLandingPage />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('min-height', '100vh')
    expect(json).toHaveStyleRule('background', 'transparent')
  })
})
