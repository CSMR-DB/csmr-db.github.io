import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { CTAButton } from './CTAButton'

describe('CTAButton', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CTAButton to={'/'}>
          <p>Hello World</p>
        </CTAButton>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('display', 'block')
    expect(json).toHaveStyleRule('border-radius', '999rem')
    expect(json).toHaveStyleRule('cursor', 'pointer')
    expect(json).toHaveStyleRule('text-transform', 'uppercase')
    expect(json).toHaveStyleRule('text-align', 'center')
    expect(json).toHaveStyleRule('text-decoration', 'none')
    expect(json).toHaveStyleRule('max-width', '24rem')
    expect(json).toHaveStyleRule('padding', '1.5rem')
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.second.normal
    )
    expect(json).toHaveStyleRule(
      'color',
      `${StaticDataManager.theme.palette.light.normal} !important`
    )

    /** Nested rules */
    expect(json).toHaveStyleRule('filter', 'grayscale(0.5)', {
      modifier: '&:hover',
    })

    /** Media query rules */
    expect(json).toHaveStyleRule('font-size', '1.25rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })

  it('should have the following configurable style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CTAButton to={'/'}>
          <p>Hello World</p>
        </CTAButton>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('margin', '0 auto')
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CTAButton to={'/'} $margin={'0 auto 8rem'}>
          <p>Hello World</p>
        </CTAButton>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('margin', '0 auto 8rem')
  })
})
