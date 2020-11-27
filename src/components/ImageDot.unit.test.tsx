import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { ImageDot } from './ImageDot'

describe('ImageDot', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ImageDot $width={'4rem'}>
          <p>Hello World</p>
        </ImageDot>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('margin', '0 auto 1rem')
    expect(json).toHaveStyleRule('border-radius', '256rem')
    expect(json).toHaveStyleRule('overflow', 'hidden')
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ImageDot $width={'4rem'}>
          <p>Hello World</p>
        </ImageDot>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('width', 'calc(4rem / 2)')
    expect(json).toHaveStyleRule('height', 'calc(4rem / 2)')

    /** Nested rules */
    expect(json).toHaveStyleRule('max-width', 'calc(4rem / 2)', {
      modifier: '.gatsby-image-wrapper',
    })
    expect(json).toHaveStyleRule('max-height', 'calc(4rem / 2)', {
      modifier: '.gatsby-image-wrapper',
    })

    /** Media query rules */
    expect(json).toHaveStyleRule('width', '4rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
    expect(json).toHaveStyleRule('max-width', '4rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
      modifier: '.gatsby-image-wrapper',
    })
    expect(json).toHaveStyleRule('max-height', '4rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
      modifier: '.gatsby-image-wrapper',
    })
  })
})
