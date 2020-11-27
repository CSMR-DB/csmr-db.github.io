import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { ExperienceCard } from './ExperienceCard'
import { Card } from '../Card'
import { ExperienceCardHeader } from './ExperienceCardHeader'
import { DateFormatted } from '../../../DateFormatted'
import { CardBody } from '../CardBody'
import { CardFooter } from '../CardFooter'
import { Flex } from '../../../Flex'
import { ExperienceCardHeaderText } from './ExperienceCardHeaderText'
import { DynamicIcon } from '../../DynamicIcon'

describe('ExperienceCard', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ExperienceCard
          name={'Jest'}
          body={'It is Jest a Test Runner bruh'}
          backgroundColor={'red'}
          icon={''}
          type={'Jester'}
          dateStart={'1994-01-08T00:00:00+0000'}
          dateEnd={'1994-01-09T00:00:00+0000'}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ExperienceCard
          name={'Jest'}
          body={'It is Jest a Test Runner bruh'}
          backgroundColor={'red'}
          icon={''}
          type={'Jester'}
          dateStart={'1994-01-08T00:00:00+0000'}
          dateEnd={'1994-01-09T00:00:00+0000'}
        />
      </ThemeProvider>
    )

    expect(comp.find(Card).length).toEqual(1)

    expect(
      comp.find(Card).find(ExperienceCardHeader).find(Flex).find(DynamicIcon)
        .length
    ).toEqual(1)

    expect(
      comp
        .find(Card)
        .find(ExperienceCardHeader)
        .find(Flex)
        .find(ExperienceCardHeaderText)
        .find('h1').length
    ).toEqual(1)
    expect(
      comp
        .find(Card)
        .find(ExperienceCardHeader)
        .find(Flex)
        .find(ExperienceCardHeaderText)
        .find('h1')
        .text()
    ).toEqual('Jest (Jester)')
    expect(
      comp
        .find(Card)
        .find(ExperienceCardHeader)
        .find(Flex)
        .find(ExperienceCardHeaderText)
        .find('h2')
        .find(DateFormatted).length
    ).toEqual(2)
    expect(
      comp
        .find(Card)
        .find(ExperienceCardHeader)
        .find(Flex)
        .find(ExperienceCardHeaderText)
        .find('h2')
        .find(DateFormatted)
        .first()
        .props().dateString
    ).toEqual('1994-01-08T00:00:00+0000')
    expect(
      comp
        .find(Card)
        .find(ExperienceCardHeader)
        .find(Flex)
        .find(ExperienceCardHeaderText)
        .find('h2')
        .text()
    ).toEqual('08 Jan 1994 - 09 Jan 1994')

    expect(comp.find(Card).find(CardBody).length).toEqual(1)
    expect(comp.find(Card).find(CardBody).text()).toContain(
      'It is Jest a Test Runner bruh'
    )

    expect(comp.find(Card).find(CardFooter).length).toEqual(0)
  })
})
