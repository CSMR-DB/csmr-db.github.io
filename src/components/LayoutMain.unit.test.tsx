import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { LayoutMain } from './LayoutMain'

describe('LayoutMain', (): void => {
  it('should have the following style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <LayoutMain />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '1rem')

    /** Nested rules */
    expect(json).toHaveStyleRule(
      'color',
      StaticDataManager.theme.palette.first.normal,
      {
        modifier: 'a',
      }
    )
  })
})
