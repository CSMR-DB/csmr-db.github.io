import React from 'react'
import { ReactTestRenderer, create } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { Flex } from './Flex'

describe('Flex', (): void => {
  describe('styleRules', (): void => {
    it('should have the following style rules', (): void => {
      const comp: ReactTestRenderer = create(
        <Flex $direction={'row'}>
          <p>Hello World</p>
        </Flex>
      )
      const json: RTRTree = comp.toJSON()

      expect(json).toHaveStyleRule('display', 'flex')
      expect(json).toHaveStyleRule('flex-direction', 'row')
      expect(json).toHaveStyleRule('justify-content', 'space-around')
      expect(json).toHaveStyleRule('align-items', 'center')
    })
  })

  describe('snapshot', (): void => {
    it('renders correctly', (): void => {
      const comp: ReactTestRenderer = create(
        <Flex $direction={'row'}>
          <p>Hello World</p>
        </Flex>
      )
      const json: RTRTree = comp.toJSON()

      expect(json).toMatchSnapshot()
    })
  })
})
