import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { ReadMore } from './ReadMore'
import { StyledLink } from '../StyledLink'
import { Card } from './card/Card'

jest.mock('react-gsap')

describe('ReadMore', (): void => {
  it('should render a read more Card with link', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ReadMore title={'Hello'} link={{ path: '/hello', text: 'World' }} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ReadMore title={'Hello'} link={{ path: '/hello', text: 'World' }} />
      </ThemeProvider>
    )

    expect(comp.find(Card).length).toEqual(1)
    expect(comp.find(Card).find('h1').length).toEqual(1)
    expect(comp.find(Card).find('h1').text()).toEqual('Hello')
    expect(comp.find(Card).find(StyledLink).length).toEqual(1)
    expect(comp.find(Card).find(StyledLink).text()).toEqual('World')
  })
})
