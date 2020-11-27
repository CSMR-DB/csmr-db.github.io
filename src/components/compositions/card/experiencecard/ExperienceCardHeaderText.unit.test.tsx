import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { RTRTree } from '../../../../types/jest.types'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { ExperienceCardHeaderText } from './ExperienceCardHeaderText'

describe('ExperienceCardHeaderText', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ExperienceCardHeaderText>
          <h1>Hello World</h1>
        </ExperienceCardHeaderText>
      </ThemeProvider>
    )

    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '0 0 0 1rem')
    expect(json).toHaveStyleRule('padding', '0 2rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })
})
