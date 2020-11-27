import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Underline } from './Underline'

describe('Underline', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <Underline>
        <p>Hello World</p>
      </Underline>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('width', '100%')
    expect(json).toHaveStyleRule('border-bottom', '1px dashed #ddd')
  })
})
