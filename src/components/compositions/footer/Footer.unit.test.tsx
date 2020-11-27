import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { RTRTree } from '../../../types/jest.types'
import { StaticDataManager } from '../../../data/StaticDataManager'

import { Footer } from './Footer'
import { FooterQuote } from './FooterQuote'
import { CenteredBlock } from '../../CenteredBlock'
import { PseudoCode } from './PseudoCode'

jest.mock('./PseudoCode', (): {} => ({
  __esModule: true,
  PseudoCode: (): JSX.Element => (
    <h1>class PseudoJest extends PseudoCode {'{}'}</h1>
  ),
}))

describe('Footer', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Footer />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should have the following static style rules', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Footer />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON()

    expect(json).toHaveStyleRule('text-align', 'center')
    expect(json).toHaveStyleRule('width', '100%')
    expect(json).toHaveStyleRule(
      'background',
      StaticDataManager.theme.palette.dark.normal
    )
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Footer />
      </ThemeProvider>
    )

    expect(comp.find(FooterQuote).text()).toEqual(
      '"Success is 1% inspiration, 98% perspiration and 2% attention to detail." - Phil Dunphy'
    )
    expect(comp.find(CenteredBlock).find(PseudoCode).text()).toEqual(
      'class PseudoJest extends PseudoCode {}'
    )
  })
})
