import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { FooterQuote } from './FooterQuote'

describe('FooterQuote', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <FooterQuote>Hello World</FooterQuote>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <FooterQuote>Hello World</FooterQuote>
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toHaveStyleRule('padding', '1rem')
    expect(json).toHaveStyleRule('line-height', '1.2rem !important')
    expect(json).toHaveStyleRule(
      'color',
      StaticDataManager.theme.palette.light.normal
    )
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <FooterQuote>Hello World</FooterQuote>
      </ThemeProvider>
    )

    expect(comp.text()).toEqual('Hello World')
  })
})
