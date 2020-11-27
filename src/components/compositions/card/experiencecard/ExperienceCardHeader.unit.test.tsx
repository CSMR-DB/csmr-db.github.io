import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { RTRTree } from '../../../../types/jest.types'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { ExperienceCardHeader } from './ExperienceCardHeader'

describe('ExperienceCardHeader', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ExperienceCardHeader>
          <h1>Hello World</h1>
        </ExperienceCardHeader>
      </ThemeProvider>
    )

    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '2rem 2rem 0rem 2rem')
    expect(json).toHaveStyleRule('margin', '0', {
      modifier: 'h2',
    })
  })
})
