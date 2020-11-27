import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { SkillCardIndicator } from './SkillCardIndicator'
import { Heart } from '../../../Heart'

describe('SkillCardIndicator', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCardIndicator index={0} instance={0} litColor={'red'} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCardIndicator index={0} instance={0} litColor={'red'} />
      </ThemeProvider>
    )

    expect(comp.find(Heart).length).toEqual(1)
  })
})
