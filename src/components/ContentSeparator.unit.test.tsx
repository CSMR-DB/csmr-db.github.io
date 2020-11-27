import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { ContentSeparator } from './ContentSeparator'

describe('ContentSeparator', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ContentSeparator>
        <p>Hello World</p>
      </ContentSeparator>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('padding-bottom', '4rem')
  })
})
