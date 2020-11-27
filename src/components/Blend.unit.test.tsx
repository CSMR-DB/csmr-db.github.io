import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Blend } from './Blend'

describe('Blend', (): void => {
  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <Blend $mode={'color-burn'} $hoverMode={'color-dodge'}>
        <p>Hello World</p>
      </Blend>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('position', 'relative')
    expect(json).toHaveStyleRule('overflow', 'hidden')
    expect(json).toHaveStyleRule('isolation', 'auto')

    /** Nested rules */
    expect(json).toHaveStyleRule('position', 'relative !important', {
      modifier: '& > :first-child',
    })
    expect(json).toHaveStyleRule('position', 'absolute !important', {
      modifier: '& > *',
    })
    expect(json).toHaveStyleRule('width', '100%', {
      modifier: '& > *',
    })
    expect(json).toHaveStyleRule('height', '100%', {
      modifier: '& > *',
    })
    expect(json).toHaveStyleRule('top', '0', {
      modifier: '& > *',
    })
    expect(json).toHaveStyleRule('transition', 'all 0.25s ease-in-out', {
      modifier: '& > *',
    })
    expect(json).toHaveStyleRule('mix-blend-mode', 'color-burn', {
      modifier: '& > *',
    })
    expect(json).toHaveStyleRule('mix-blend-mode', 'color-dodge', {
      modifier: '& > *:hover',
    })
  })
})
