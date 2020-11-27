import React from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { WASDLinkOrb } from './WASDLinkOrb'

describe('WASDLinkOrb', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDLinkOrb to={'/jest'} $area={'a'}>
          <p>Hello World</p>
        </WASDLinkOrb>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <WASDLinkOrb to={'/jest'} $area={'a'}>
          <p>Hello World</p>
        </WASDLinkOrb>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toHaveStyleRule('display', 'flex')
    expect(json).toHaveStyleRule('grid-area', 'a')

    expect(json).toHaveStyleRule('margin', '0 auto')
    expect(json).toHaveStyleRule('width', '4rem')
    expect(json).toHaveStyleRule('height', '4rem')

    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.first.lens
    )

    /** Nested rules */
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.first.active,
      {
        modifier: '&.active',
      }
    )
    expect(json).toHaveStyleRule(
      'color',
      StaticDataManager.theme.palette.light.active,
      {
        modifier: '&.active',
      }
    )

    /** Media query rules */
    expect(json).toHaveStyleRule('width', '8rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
    expect(json).toHaveStyleRule('height', '8rem', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })

    /** Media query rules - nested */
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.first.hover,
      {
        media: StaticDataManager.theme.breakpoints.min.smartphone,
        modifier: '&:hover',
      }
    )
    expect(json).toHaveStyleRule(
      'color',
      StaticDataManager.theme.palette.light.hover,
      {
        media: StaticDataManager.theme.breakpoints.min.smartphone,
        modifier: '&:hover',
      }
    )
  })
})
