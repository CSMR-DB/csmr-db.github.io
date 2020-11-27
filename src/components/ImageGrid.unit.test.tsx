import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { ImageGrid } from './ImageGrid'

describe('ImageGrid', (): void => {
  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ImageGrid $columns={3} $rows={3}>
        <p>Hello World</p>
      </ImageGrid>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('display', 'grid')
    expect(json).toHaveStyleRule('width', '100%')
    expect(json).toHaveStyleRule('height', '100%')
    expect(json).toHaveStyleRule('top', '0')
    expect(json).toHaveStyleRule('left', '0')
    expect(json).toHaveStyleRule('grid-template-rows', 'repeat(3,1fr)')
    expect(json).toHaveStyleRule('grid-template-columns', 'repeat(3,1fr)')
  })
})
