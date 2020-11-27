import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Absolute } from './Absolute'

describe('Absolute', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <Absolute>
        <p>Hello World</p>
      </Absolute>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('position', 'absolute')

    expect(json).toHaveStyleRule('width', 'auto')
    expect(json).toHaveStyleRule('min-height', 'auto')

    expect(json).toHaveStyleRule('top', '0')
    expect(json).toHaveStyleRule('bottom', '0')
    expect(json).toHaveStyleRule('left', '0')
    expect(json).toHaveStyleRule('right', '0')
  })
})
