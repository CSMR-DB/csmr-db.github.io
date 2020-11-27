import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { Grid } from './Grid'

describe('Layout', (): void => {
  it('should have the following style rules by default', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Grid>
          <div>Test</div>
          <div>These</div>
          <div>Divs</div>
        </Grid>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('display', 'grid')
    expect(json).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fill,minmax(16rem,1fr))'
    )
    expect(json).toHaveStyleRule('gap', 'calc(1rem / 2)')
    expect(json).toHaveStyleRule('align-items', 'initial')
    expect(json).toHaveStyleRule('grid-template-rows', 'auto')

    /** Media query rules */
    expect(json).toHaveStyleRule('gap', '1rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
    expect(json).toHaveStyleRule('grid-template-columns', 'auto', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })

  it('should have the following style rules on screen sizes tablet and up', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Grid $rows={3} $columns={3} $gap={'2rem'}>
          <div>Test</div>
          <div>These</div>
          <div>Divs</div>
        </Grid>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('grid-template-rows', 'repeat(3,1fr)')
    expect(json).toHaveStyleRule('gap', 'calc(2rem / 2)')

    /** Media query rules */
    expect(json).toHaveStyleRule('grid-template-columns', 'repeat(3,1fr)', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
    expect(json).toHaveStyleRule('gap', '2rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })
})
