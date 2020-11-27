import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { CardHeaderIconWrapper } from './CardHeaderIconWrapper'

describe('CardHeaderIconWrapper', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CardHeaderIconWrapper>
          <h1>Hello World</h1>
        </CardHeaderIconWrapper>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CardHeaderIconWrapper>
          <h1>Hello World</h1>
        </CardHeaderIconWrapper>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '0.5rem')
    expect(json).toHaveStyleRule('overflow', 'hidden')
    expect(json).toHaveStyleRule('border-radius', '999rem')
  })
})
