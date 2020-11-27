import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { Contacts } from './Contacts'
import { SocialButton } from './SocialButton'

describe('Contacts', (): void => {
  it('should render strings and url objects', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Contacts contacts={StaticDataManager.contacts} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render 1 SocialButton element', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <Contacts contacts={StaticDataManager.contacts} />
      </ThemeProvider>
    )

    expect(comp.find(SocialButton).length).toEqual(
      StaticDataManager.contacts.length
    )
    expect(comp.find(SocialButton).get(0).props).toMatchObject({
      $background: StaticDataManager.contacts[0].background,
    })
  })
})
