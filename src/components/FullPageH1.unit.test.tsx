import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { FullPageH1 } from './FullPageH1'

describe('Layout', (): void => {
  it('should have the following style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <FullPageH1>I am a big H1</FullPageH1>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('margin-top', '4rem')
  })
})
