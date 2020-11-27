import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { StaticDataManager } from '../../../../data/StaticDataManager'

import { ProjectCard } from './ProjectCard'
import { Card } from '../Card'
import { CardHeader } from '../CardHeader'
import { StyledLink } from '../../../StyledLink'
import { DateFormatted } from '../../../DateFormatted'
import { CardBody } from '../CardBody'
import { CardFooter } from '../CardFooter'
import { ArticleTags } from '../../ArticleTags'

describe('ProjectCard', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ProjectCard
          title={'Jest a Project'}
          body={'What more is there to say, really?'}
          generatedRoute={'/projects/jest_a_project'}
          date={'1994-01-08T00:00:00+0000'}
          tags={['Jest', 'Enzyme']}
        />
      </ThemeProvider>
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ProjectCard
          title={'Jest a Project'}
          body={'What more is there to say, really?'}
          generatedRoute={'/projects/jest_a_project'}
          date={'1994-01-08T00:00:00+0000'}
          tags={['Jest', 'Enzyme']}
        />
      </ThemeProvider>
    )

    expect(comp.find(Card).length).toEqual(1)

    expect(
      comp.find(Card).find(CardHeader).find('h1').find(StyledLink).length
    ).toEqual(1)
    expect(
      comp.find(Card).find(CardHeader).find('h1').find(StyledLink).text()
    ).toEqual('Jest a Project')
    expect(
      comp.find(Card).find(CardHeader).find('h1').find(StyledLink).props().to
    ).toEqual('/projects/jest_a_project')
    expect(
      comp.find(Card).find(CardHeader).find('h6').find(DateFormatted).length
    ).toEqual(1)
    expect(
      comp.find(Card).find(CardHeader).find('h6').find(DateFormatted).props()
        .dateString
    ).toEqual('1994-01-08T00:00:00+0000')
    expect(
      comp.find(Card).find(CardHeader).find('h6').find(DateFormatted).text()
    ).toEqual('08 Jan 1994')

    expect(comp.find(Card).find(CardBody).length).toEqual(1)
    expect(comp.find(Card).find(CardBody).text()).toContain(
      'What more is there to say, really?'
    )

    expect(comp.find(Card).find(CardFooter).find(ArticleTags).length).toEqual(1)
    expect(
      comp.find(Card).find(CardFooter).find(ArticleTags).props().tags!.length
    ).toEqual(2)
    expect(comp.find(Card).find(CardFooter).find(ArticleTags).text()).toEqual(
      'Tags: Jest, Enzyme'
    )
  })
})
