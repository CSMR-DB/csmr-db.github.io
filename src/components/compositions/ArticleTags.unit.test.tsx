import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  create,
  ReactTestRenderer,
  ReactTestRendererJSON,
} from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { RTRTree } from '../../types/jest.types'
import { StaticDataManager } from '../../data/StaticDataManager'

import { ArticleTags } from './ArticleTags'
import { StyledLink } from '../StyledLink'

describe('ArticleTags', (): void => {
  it('should render a list of tags linking to routes starting with /skillset', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ArticleTags tags={['Hello', 'World']} />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON() as ReactTestRendererJSON

    expect(comp).toMatchSnapshot()

    expect(JSON.parse(JSON.stringify(json.children))).toEqual([
      'Tags:',
      ' ',
      {
        children: [
          {
            children: ['Hello'],
            props: {
              className: expect.any(String),
              href: '/skillset/hello',
            },
            type: 'a',
          },
          ', ',
        ],
        props: {},
        type: 'span',
      },
      {
        children: [
          {
            children: ['World'],
            props: {
              className: expect.any(String),
              href: '/skillset/world',
            },
            type: 'a',
          },
          '',
        ],
        props: {},
        type: 'span',
      },
    ])
  })

  it('should render 2 StyledLink elements', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ArticleTags tags={['Hello', 'World']} />
      </ThemeProvider>
    )

    expect(comp.find(StyledLink).length).toEqual(2)
    expect(comp.find(StyledLink).get(0).props).toMatchObject({
      to: '/skillset/hello',
    })
  })
})
