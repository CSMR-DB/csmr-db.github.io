import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { WASDGrid } from './WASDGrid'

describe('WASDGrid', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDGrid>
          <p>Hello World</p>
        </WASDGrid>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDGrid>
          <p>Hello World</p>
        </WASDGrid>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toHaveStyleRule('display', 'grid')

    expect(json).toHaveStyleRule('margin', '0 auto')
    expect(json).toHaveStyleRule('gap', '2rem')

    expect(json).toHaveStyleRule('gap', '4rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })

    expect(json).toHaveStyleRule('grid-template-areas', `'. w .' 'a s d'`)
    expect(json).toHaveStyleRule('grid-template-rows', '1fr 1fr')
    expect(json).toHaveStyleRule('grid-template-columns', '1fr 1fr 1fr')
  })
})
