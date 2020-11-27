import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'
import { MDXProvider } from '@mdx-js/react'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { SkillCard } from './SkillCard'
import { Card } from '../Card'
import { SkillCardBackdrop } from './SkillCardBackdrop'
import { CardHeader } from '../CardHeader'
import { SkillCardHeader } from './SkillCardHeader'
import { Flex } from '../../../Flex'
import { SkillCardIndicator } from './SkillCardIndicator'
import { StyledLink } from '../../../StyledLink'
import { CardBody } from '../CardBody'
import { CardFooter } from '../CardFooter'

describe('SkillCard', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCard
          title={'Jest'}
          body={'Automated testing is sweet'}
          generatedRoute={'/skillset/jest'}
          time={1000}
          skillColor={'orange'}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <SkillCard
          title={'Jest'}
          body={'Automated testing is sweet'}
          generatedRoute={'/skillset/jest'}
          time={1000}
          skillColor={'orange'}
        />
      </ThemeProvider>
    )

    expect(comp.find(MDXProvider).find(Card).length).toEqual(1)

    expect(
      comp.find(MDXProvider).find(Card).find(SkillCardBackdrop).length
    ).toEqual(1)

    expect(
      comp.find(MDXProvider).find(Card).find(CardHeader).find(SkillCardHeader)
        .length
    ).toEqual(1)
    expect(
      comp
        .find(MDXProvider)
        .find(Card)
        .find(CardHeader)
        .find(SkillCardHeader)
        .find(Flex).length
    ).toEqual(1)
    expect(
      comp
        .find(MDXProvider)
        .find(Card)
        .find(CardHeader)
        .find(SkillCardHeader)
        .find(Flex)
        .find(SkillCardIndicator).length
    ).toEqual(1)
    expect(
      comp
        .find(MDXProvider)
        .find(Card)
        .find(CardHeader)
        .find(SkillCardHeader)
        .find(Flex)
        .find('h1').length
    ).toEqual(1)
    expect(
      comp
        .find(MDXProvider)
        .find(Card)
        .find(CardHeader)
        .find(SkillCardHeader)
        .find(Flex)
        .find('h1')
        .find(StyledLink).length
    ).toEqual(1)
    expect(
      comp
        .find(MDXProvider)
        .find(Card)
        .find(CardHeader)
        .find(SkillCardHeader)
        .find(Flex)
        .find('h1')
        .find(StyledLink)
        .props().to
    ).toEqual('/skillset/jest')
    expect(
      comp
        .find(MDXProvider)
        .find(Card)
        .find(CardHeader)
        .find(SkillCardHeader)
        .find(Flex)
        .find('h1')
        .find(StyledLink)
        .text()
    ).toEqual('Jest')

    expect(comp.find(MDXProvider).find(Card).find(CardBody).length).toEqual(1)

    expect(comp.find(MDXProvider).find(Card).find(CardFooter).length).toEqual(1)
    expect(
      comp.find(MDXProvider).find(Card).find(CardFooter).find('p').text()
    ).toEqual('(time spent: 0 hours)') // Starts from
  })
})
