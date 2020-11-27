import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { ColoredText } from './ColoredText'

describe('ColoredText', (): void => {
  it('should have the following configurable style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ColoredText>
        <p>Hello World</p>
      </ColoredText>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('color', 'black')
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ColoredText $color={'red'}>
        <p>Hello World</p>
      </ColoredText>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('color', 'red')
  })
})
