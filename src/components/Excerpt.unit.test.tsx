import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { Excerpt } from './Excerpt'
import { ThemeProvider } from 'styled-components'

describe('Excerpt', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Excerpt>Hi there!</Excerpt>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('max-width', '36rem')
    expect(json).toHaveStyleRule('padding', '1rem')
    expect(json).toHaveStyleRule('margin', 'auto 1rem')

    /** Nested rules */
    expect(json).toHaveStyleRule(
      'font-family',
      expect.stringContaining('Fira Code'),
      {
        modifier: '& > p',
      }
    )

    /** Media query rules */
    expect(json).toHaveStyleRule('padding', '2rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
    expect(json).toHaveStyleRule('margin', 'auto', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })
})
