import React from 'react'
import {
  create,
  ReactTestRenderer,
  ReactTestRendererJSON,
} from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Quote } from './Quote'

describe('Quote', (): void => {
  it('should have the following style rules', (): void => {
    const comp: ReactTestRenderer = create(<Quote>Quowote</Quote>)
    const json: RTRTree = comp.toJSON() as ReactTestRendererJSON

    expect(json.children![0]).toEqual('Quowote')

    expect(json).toMatchSnapshot()

    expect(json).toHaveStyleRule('color', '#888')
    expect(json).toHaveStyleRule('font-style', 'italic')

    /** Nested rules */
    expect(json).toHaveStyleRule('margin', '2rem', {
      modifier: 'h1',
    })
  })
})
