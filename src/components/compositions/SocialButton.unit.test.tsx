import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { SocialButton } from './SocialButton'
import { DynamicIcon } from './DynamicIcon'
import { ClippedBtn } from '../ClippedBtn'

jest.mock('./DynamicIcon', (): {} => {
  return {
    __esModule: true,
    DynamicIcon: (): JSX.Element => {
      return <></>
    },
  }
})

describe('SocialButton', (): void => {
  it('should render a colorful button', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SocialButton
          $background={'red'}
          $color={'white'}
          href={'/'}
          iconPath={'/'}
        >
          Hello
        </SocialButton>
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render 1 DynamicIcon element', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SocialButton
          $background={'red'}
          $color={'white'}
          href={'/'}
          iconPath={'/'}
        >
          Hello
        </SocialButton>
      </ThemeProvider>
    )

    expect(comp.find(DynamicIcon).length).toEqual(1)
    expect(comp.find(ClippedBtn).length).toEqual(1)
  })
})
