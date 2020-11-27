import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { RTRTree } from '../../../../types/jest.types'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { SkillCardHeader } from './SkillCardHeader'

describe('SkillCardHeader', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCardHeader>
          <h1>Hello World</h1>
        </SkillCardHeader>
      </ThemeProvider>
    )

    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '2rem 2rem 0 2rem')
    expect(json).toHaveStyleRule('font-size', '1rem', {
      modifier: 'h1',
    })
    expect(json).toHaveStyleRule('font-size', '0.8rem', {
      modifier: 'h2',
    })
  })
})
