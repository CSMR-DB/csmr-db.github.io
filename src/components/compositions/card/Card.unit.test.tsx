import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { Card } from './Card'

describe('Card', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Card>
          <h1>Hello World</h1>
        </Card>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Card>
          <h1>Hello World</h1>
        </Card>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('position', 'relative')
    expect(json).toHaveStyleRule('display', 'grid')
    expect(json).toHaveStyleRule('border-radius', '0.25rem')
    expect(json).toHaveStyleRule(
      'grid-template-areas',
      `'header' 'body' 'footer'`
    )
    expect(json).toHaveStyleRule('grid-template-rows', `auto 1fr auto`)
    expect(json).toHaveStyleRule('height', '100%')
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.light.normal
    )

    /** Nested rules */
    expect(json).toHaveStyleRule(
      'transition',
      'all 0.2s ease-in-out !important',
      {
        modifier: '& header img',
      }
    )
    expect(json).toHaveStyleRule('font-size', '1.1rem', {
      modifier: 'h1',
    })
    expect(json).toHaveStyleRule('font-size', '1rem', {
      modifier: 'h2',
    })
    expect(json).toHaveStyleRule('text-align', 'left', {
      modifier: 'p',
    })
    expect(json).toHaveStyleRule('text-align', 'justify', {
      media: StaticDataManager.theme.breakpoints.min.smartphone,
    })
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Card>
          <h1>Hello World</h1>
        </Card>
      </ThemeProvider>
    )

    expect(comp.find('h1').length).toEqual(1)
  })
})
