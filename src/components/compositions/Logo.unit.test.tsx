import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { Logo } from './Logo'
import { RTRTree } from '../../types/jest.types'

describe('Logo', (): void => {
  it('should render correctly', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Logo />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Logo />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    expect(json).toHaveStyleRule('float', 'left')
    expect(json).toHaveStyleRule('border-radius', '999rem')
    expect(json).toHaveStyleRule('display', 'block')
    expect(json).toHaveStyleRule('z-index', '999')
  })

  it('should have the following configurable style rules when configured', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Logo
          $size={'64rem'}
          $strokeColor={StaticDataManager.theme.palette.second.normal}
          $strokeWidth={8}
        />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(comp).toMatchSnapshot()

    // expect(json).toHaveStyleRule('border', `1px solid ${StaticDataManager.theme.palette.first.normal}`)
    expect(json).toHaveStyleRule('width', '64rem', {
      modifier: 'svg',
    })
    expect(json).toHaveStyleRule('height', '64rem', {
      modifier: 'svg',
    })
    expect(json).toHaveStyleRule('stroke-width', '8', {
      modifier: 'svg > g > path',
    })
    expect(json).toHaveStyleRule(
      'stroke',
      StaticDataManager.theme.palette.second.normal,
      {
        modifier: 'svg > g > path',
      }
    )
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Logo />
      </ThemeProvider>
    )

    expect(comp.find('path').length).toEqual(2)
  })
})
