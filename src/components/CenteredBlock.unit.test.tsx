import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { CenteredBlock } from './CenteredBlock'

describe('CenteredBlock', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <CenteredBlock>
        <p>Hello World</p>
      </CenteredBlock>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('margin', '0 auto')
  })

  it('should have the following configurable style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <CenteredBlock>
        <p>Hello World</p>
      </CenteredBlock>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('max-width', '48rem')
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <CenteredBlock $maxWidth={'16rem'}>
        <p>Hello World</p>
      </CenteredBlock>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('max-width', '16rem')
  })
})
