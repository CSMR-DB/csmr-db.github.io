import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  create,
  ReactTestRenderer,
  ReactTestRendererJSON,
} from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import { RTRTree } from '../../types/jest.types'
import { StaticDataManager } from '../../data/StaticDataManager'

import { ArticleBody } from './ArticleBody'
import { StyledA } from '../StyledLink'

describe('ArticleBody', (): void => {
  it('should render strings and url objects', (): void => {
    const comp: ReactTestRenderer = create(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ArticleBody
          body={[
            'Hello everyone',
            {
              text: 'Lorem ipsum',
              url: 'https://lorem.ipsum',
            },
          ]}
        />
      </ThemeProvider>
    )
    const json: RTRTree = comp.toJSON() as ReactTestRendererJSON

    expect(comp).toMatchSnapshot()

    expect(json.children![0]).toEqual('Hello everyone')
    expect(json.children![1]).toEqual({
      type: 'a',
      children: ['Lorem ipsum'],
      props: {
        href: 'https://lorem.ipsum',
        target: 'blank',
        className: expect.any(String),
      },
    })
  })

  it('should render 1 StyledLink element', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <ThemeProvider theme={StaticDataManager.theme}>
        <ArticleBody
          body={[
            'Hello everyone',
            {
              text: 'Lorem ipsum',
              url: 'https://lorem.ipsum',
            },
          ]}
        />
      </ThemeProvider>
    )

    expect(comp.find(StyledA).length).toEqual(1)
    expect(comp.find(StyledA).get(0).props).toMatchObject({
      href: 'https://lorem.ipsum',
    })
  })
})
