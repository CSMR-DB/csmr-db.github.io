import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { ClippedBtn } from './ClippedBtn'

describe('ClippedBtn', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ClippedBtn>
          <p>Hello World</p>
        </ClippedBtn>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('height', '100%')
    expect(json).toHaveStyleRule('border-radius', '0.25rem')
    expect(json).toHaveStyleRule('transition', 'all 0.25s ease-in-out')
    expect(json).toHaveStyleRule('font-size', '1rem')

    /** Media query rules */
    expect(json).toHaveStyleRule('clip-path', 'circle(16em at 50% 50%)', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
    expect(json).toHaveStyleRule('clip-path', 'circle(1em at 50% 50%)', {
      media: StaticDataManager.theme.breakpoints.min.tablet,
    })
    expect(json).toHaveStyleRule('font-size', '2rem', {
      media: StaticDataManager.theme.breakpoints.min.tablet,
    })
    expect(json).toHaveStyleRule('clip-path', 'circle(8em at 50% 50%)', {
      media: StaticDataManager.theme.breakpoints.min.tablet,
      modifier: '&:hover',
    })
  })

  it('should have the following configurable style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ClippedBtn>
          <p>Hello World</p>
        </ClippedBtn>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('color', 'white')
    expect(json).toHaveStyleRule('background', 'grey')
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ClippedBtn $background={'red'} $color={'yellow'}>
          <p>Hello World</p>
        </ClippedBtn>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('color', 'yellow')
    expect(json).toHaveStyleRule('background', 'red')
  })
})
