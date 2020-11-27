import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Heart } from './Heart'

describe('Heart', (): void => {
  it('should have the following style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <Heart $width={'64rem'} $height={'64rem'} $fill={'red'} />
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('width', '64rem')
    expect(json).toHaveStyleRule('height', '64rem')
    expect(json).toHaveStyleRule('fill', 'red')
  })
})
