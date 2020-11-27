import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'
import { groupBy } from '../../utils/groupBy'

import { CoursesGrid } from './CoursesGrid'
import { Card } from './card/Card'

jest.mock('react-gsap')

describe('CoursesGrid', (): void => {
  it('should render a table-like set of grouped courses', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CoursesGrid
          courses={[...groupBy(StaticDataManager.courses, 'category')]}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render 1 Card element', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <CoursesGrid
          courses={[...groupBy(StaticDataManager.courses, 'category')]}
        />
      </ThemeProvider>
    )

    expect(comp.find(Card).length).toEqual(1)
  })
})
