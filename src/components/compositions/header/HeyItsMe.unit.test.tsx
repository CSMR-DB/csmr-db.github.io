import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../../data/StaticDataManager'

import { HeyItsMe } from './HeyItsMe'
import { Excerpt } from '../../Excerpt'
import { ImageDot } from '../../ImageDot'
import { Filter } from '../../Filter'
import { DynamicImage } from '../DynamicImage'

describe('HeyItsMe', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <HeyItsMe author={'Jester'} description={'I run far and wide'} />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <HeyItsMe author={'Jester'} description={'I run far and wide'} />
      </ThemeProvider>
    )

    expect(comp.find(Excerpt).length).toEqual(1)
    expect(comp.find(Excerpt).find(ImageDot).length).toEqual(1)
    expect(comp.find(Excerpt).find(ImageDot).find(Filter).length).toEqual(1)
    expect(
      comp.find(Excerpt).find(ImageDot).find(Filter).find(DynamicImage).length
    ).toEqual(1)

    expect(comp.find(Excerpt).find('h1').length).toEqual(1)
    expect(comp.find(Excerpt).find('h1').text()).toEqual(
      expect.stringContaining('Jester')
    )

    expect(comp.find(Excerpt).find('p').length).toEqual(1)
    expect(comp.find(Excerpt).find('p').text()).toEqual(
      expect.stringContaining('I run far and wide')
    )
  })
})
