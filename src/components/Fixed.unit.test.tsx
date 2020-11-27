import React from 'react'
import { ReactTestRenderer, create } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Fixed } from './Fixed'

describe('Flex', (): void => {
  it('should have the following style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <Fixed>
        <p>Hello World</p>
      </Fixed>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toMatchSnapshot()

    /** Static rules */
    expect(json).toHaveStyleRule('position', 'fixed')

    expect(json).toHaveStyleRule('top', 'unset')
    expect(json).toHaveStyleRule('bottom', 'unset')
    expect(json).toHaveStyleRule('left', 'unset')
    expect(json).toHaveStyleRule('right', 'unset')
    expect(json).toHaveStyleRule('z-index', '1')
    expect(json).toHaveStyleRule('width', '100%')
    expect(json).toHaveStyleRule('height', 'auto')
  })

  it('should have the following style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <Fixed
        $top={'0'}
        $bottom={'0'}
        $left={'0'}
        $right={'0'}
        $width={'100vw'}
        $height={'100vh'}
        $zIndex={999}
      >
        <p>Hello World</p>
      </Fixed>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toMatchSnapshot()

    /** Static rules */
    expect(json).toHaveStyleRule('position', 'fixed')

    expect(json).toHaveStyleRule('top', '0')
    expect(json).toHaveStyleRule('bottom', '0')
    expect(json).toHaveStyleRule('left', '0')
    expect(json).toHaveStyleRule('right', '0')
    expect(json).toHaveStyleRule('z-index', '999')
    expect(json).toHaveStyleRule('width', '100vw')
    expect(json).toHaveStyleRule('height', '100vh')
  })
})
