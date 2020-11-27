import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { BlendBlock } from './BlendBlock'

describe('BlendBlock', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <BlendBlock>
          <p>Hello World</p>
        </BlendBlock>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '1rem')
    expect(json).toHaveStyleRule('border-radius', '999rem')
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.light.normal
    )
  })
})
