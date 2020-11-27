import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { WideBoi } from './WideBoi'

describe('WideBoi', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WideBoi>
          <p>Hello World</p>
        </WideBoi>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('position', 'relative')
    expect(json).toHaveStyleRule('padding', '4rem')
    expect(json).toHaveStyleRule('margin', '4rem auto')
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.third.normal
    )
  })

  it.skip('should have the following configurable style rules default', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WideBoi>
          <p>Hello World</p>
        </WideBoi>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('max-width', '100vw')
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WideBoi $maxWidth={'50vw'}>
          <p>Hello World</p>
        </WideBoi>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('max-width', '50vw')
  })
})
