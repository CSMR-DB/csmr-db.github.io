import React from 'react'
import {
  create,
  ReactTestRenderer,
  ReactTestRendererJSON,
} from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { DateFormatted } from './DateFormatted'

describe('DateFormatted', (): void => {
  it('should return null when no dateString is provided', (): void => {
    const comp: ReactTestRenderer = create(<DateFormatted />)
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toEqual(null)
  })

  it('should return a formatted string when provided with a dateString', (): void => {
    const comp: ReactTestRenderer = create(
      <DateFormatted dateString={'1994-01-08T00:00:00+0000'} />
    )
    const json: RTRTree = comp.toJSON() as ReactTestRendererJSON

    expect(comp).toMatchSnapshot()

    expect(json.children![0]).toEqual('08 Jan 1994')
  })
})
