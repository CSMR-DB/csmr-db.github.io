import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { SkillCards } from './SkillCards'
import { SkillCard } from './SkillCard'

describe('SkillCards', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCards edges={StaticDataManager.skillsetData.all.edges} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCards edges={StaticDataManager.skillsetData.all.edges} />
      </ThemeProvider>
    )

    expect(comp.find(SkillCard).length).toEqual(
      StaticDataManager.skillsetData.all.edges.length
    )
  })
})
