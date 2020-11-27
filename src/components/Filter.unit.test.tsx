import React from 'react'
import { ReactTestRenderer, create } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Filter } from './Filter'
import { ThemeProvider } from 'styled-components'
import { StaticDataManager } from '../data/StaticDataManager'

describe('Filter', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Filter>
          <p>Hello World</p>
        </Filter>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toMatchSnapshot()

    expect(json).toHaveStyleRule('position', 'relative')
    expect(json).toHaveStyleRule('transition', 'all 200ms ease-in-out')
    expect(json).toHaveStyleRule('overflow', 'hidden')

    /** Nested style rules */
    expect(json).toHaveStyleRule('content', "''", {
      modifier: '&::after',
    })
    expect(json).toHaveStyleRule('position', 'absolute', {
      modifier: '&::after',
    })
    expect(json).toHaveStyleRule('top', '0', {
      modifier: '&::after',
    })
    expect(json).toHaveStyleRule('bottom', '0', {
      modifier: '&::after',
    })
    expect(json).toHaveStyleRule('left', '0', {
      modifier: '&::after',
    })
    expect(json).toHaveStyleRule('right', '0', {
      modifier: '&::after',
    })
  })

  it('should have the following configurable style rules by default', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Filter>
          <p>Hello World</p>
        </Filter>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toMatchSnapshot()

    expect(json).toHaveStyleRule(
      'filter',
      StaticDataManager.theme.palette.filter.normal
    )

    /** Nested style rules */
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.first.lens,
      {
        modifier: '&::after',
      }
    )
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Filter $filter={'saturation(8) brightness(0.5)'} $lens={'blue'}>
          <p>Hello World</p>
        </Filter>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toMatchSnapshot()

    expect(json).toHaveStyleRule('filter', 'saturation(8) brightness(0.5)')

    /** Nested style rules */
    expect(json).toHaveStyleRule('background', 'blue', {
      modifier: '&::after',
    })
  })
})
