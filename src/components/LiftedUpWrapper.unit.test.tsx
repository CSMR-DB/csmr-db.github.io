import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { LiftedUpWrapper } from './LiftedUpWrapper'

describe('LiftedUpWrapper', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <LiftedUpWrapper>
          <p>Hello World</p>
        </LiftedUpWrapper>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('margin', '0 auto')

    /** Media query rules */
    expect(json).toHaveStyleRule('margin', '-8rem auto 0', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })
})
