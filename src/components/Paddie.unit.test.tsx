import React from 'react'
import { ReactTestRenderer, create } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Paddie } from './Paddie'

describe('Paddie', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <Paddie>
        <p>Hello World</p>
      </Paddie>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding', '2rem')
  })
})
