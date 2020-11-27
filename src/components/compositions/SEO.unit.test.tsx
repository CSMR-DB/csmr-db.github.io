import React, { Component } from 'react'
import { create, ReactTestRenderer } from 'react-test-renderer'
import { mount, ReactWrapper } from 'enzyme'

import { StaticDataManager } from '../../data/StaticDataManager'

import { SEO } from './SEO'
import { Helmet } from 'react-helmet'

describe('SEO', (): void => {
  it('should match snapshot', (): void => {
    const comp: ReactTestRenderer = create(
      <SEO
        title={'Test'}
        description={'JestEO'}
        route={'/test'}
        siteMetadata={StaticDataManager.siteMetadata}
      />
    )

    expect(comp).toMatchSnapshot()
  })

  it('should render internally', (): void => {
    const comp: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>> = mount(
      <SEO
        title={'Test'}
        description={'JestEO'}
        route={'/test'}
        siteMetadata={StaticDataManager.siteMetadata}
      />
    )

    expect(comp.find(Helmet).props()).toMatchObject({
      title: 'Test',
      titleTemplate: `%s · Jest`,
      script: [
        {
          type: 'application/ld+json',
          innerHTML: expect.any(String),
        },
      ],
    })
  })
})
