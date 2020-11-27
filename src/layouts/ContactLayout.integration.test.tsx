import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../data/StaticDataManager'

import { ContactLayout } from './ContactLayout'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { Contacts } from '../components/compositions/Contacts'
import { Layout } from '../components/Layout'

describe('ContactLayout', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ContactLayout contacts={StaticDataManager.contacts} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ContactLayout contacts={StaticDataManager.contacts} />
      </ThemeProvider>
    )

    expect(comp.find(Layout).props().isLandingPage).not.toEqual(true)
    expect(comp.find(CenteredBlock).at(0).find('h1').text()).toEqual(
      'Get in touch!'
    )
    expect(comp.find(CenteredBlock).at(0).find(Grid).length).toEqual(1)
    expect(
      comp.find(CenteredBlock).at(0).find(Grid).find(Contacts).length
    ).toEqual(1)
  })
})
