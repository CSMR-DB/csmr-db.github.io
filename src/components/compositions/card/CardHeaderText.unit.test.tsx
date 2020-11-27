import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { CardHeaderText } from './CardHeaderText'

describe('CardHeaderText', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CardHeaderText>
          <h1>Hello World</h1>
        </CardHeaderText>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CardHeaderText>
          <h1>Hello World</h1>
        </CardHeaderText>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '2rem 2rem 0 2rem')
    expect(json).toHaveStyleRule('margin-bottom', '0', {
      modifier: '& > h6',
    })
  })
})
