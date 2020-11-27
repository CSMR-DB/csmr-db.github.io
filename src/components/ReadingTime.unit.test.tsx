import React from 'react'
import {
  create,
  ReactTestRenderer,
  ReactTestRendererJSON,
} from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { ReadingTime } from './ReadingTime'

describe('ReadingTime', (): void => {
  it('should return null when timeToRead is falsy', (): void => {
    const comp: ReactTestRenderer = create(<ReadingTime timeToRead={0} />)
    const json: RTRTree = comp.toJSON() as ReactTestRendererJSON

    expect(comp).toMatchSnapshot()

    expect(json).toEqual(null)
  })

  it('should render the following string when timeToRead === 1', (): void => {
    const comp: ReactTestRenderer = create(<ReadingTime timeToRead={1} />)
    const json: RTRTree = comp.toJSON() as ReactTestRendererJSON

    expect(comp).toMatchSnapshot()

    expect(json.children).toEqual(['Reading time: ~', '1', ' minute', ''])
  })

  it('should render the following string when timeToRead >= 1', (): void => {
    const comp: ReactTestRenderer = create(<ReadingTime timeToRead={3} />)
    const json: RTRTree = comp.toJSON() as ReactTestRendererJSON

    expect(comp).toMatchSnapshot()

    expect(json.children).toEqual(['Reading time: ~', '3', ' minute', 's'])
  })
})
