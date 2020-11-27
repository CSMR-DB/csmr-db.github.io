import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { StyledLink } from './StyledLink'

describe('StyledLink', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <StyledLink to="/">
          <p>Hello World</p>
        </StyledLink>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('text-decoration', 'none')
    expect(json).toHaveStyleRule('display', 'inline-block')
    expect(json).toHaveStyleRule(
      'color',
      `${StaticDataManager.theme.palette.first.normal} !important`
    )

    /** Nested rules */
    expect(json).toHaveStyleRule(
      'color',
      StaticDataManager.theme.palette.first.hover,
      {
        modifier: '&:hover',
      }
    )
    expect(json).toHaveStyleRule(
      'color',
      StaticDataManager.theme.palette.first.active,
      {
        modifier: '&.active',
      }
    )
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <StyledLink to="/" $color={'green'}>
          <p>Hello World</p>
        </StyledLink>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('color', 'green !important')
  })
})
