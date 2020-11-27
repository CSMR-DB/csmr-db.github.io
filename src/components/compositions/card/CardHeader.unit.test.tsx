import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { CardHeader } from './CardHeader'

describe('CardHeader', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CardHeader>
          <h1>Hello World</h1>
        </CardHeader>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CardHeader>
          <h1>Hello World</h1>
        </CardHeader>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('grid-area', `'header'`)
  })
})
