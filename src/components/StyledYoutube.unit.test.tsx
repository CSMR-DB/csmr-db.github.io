import React from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../types/jest.types'

import { StyledYoutube } from './StyledYoutube'

jest.mock('react-youtube')

describe('StyledYoutube', (): void => {
  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <StyledYoutube videoId={'/fakeId'} />
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('max-width', '100%')
    expect(json).toHaveStyleRule('width', '100%')
    expect(json).toHaveStyleRule('margin', '0')
    expect(json).toHaveStyleRule('border', 'none')
  })
})
