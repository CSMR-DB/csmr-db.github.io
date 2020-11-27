import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { StaticDataManager } from '../../../../data/StaticDataManager'
import { RTRTree } from '../../../../types/jest.types'

import { SkillCardBackdrop } from './SkillCardBackdrop'

describe('SkillCardBackdrop', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCardBackdrop index={0}>
          <h1>Hello World</h1>
        </SkillCardBackdrop>
      </ThemeProvider>
    )

    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('transition', 'all ease 0.5s')
    expect(json).toHaveStyleRule('position', 'absolute')
    expect(json).toHaveStyleRule('max-width', '8rem')
    expect(json).toHaveStyleRule('width', '100%')

    expect(json).toHaveStyleRule('bottom', '1rem')
    expect(json).toHaveStyleRule('right', '1rem')
  })
})
