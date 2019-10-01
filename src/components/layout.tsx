/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Header } from './header'
// tslint:disable-next-line: no-import-side-effect
import './layout.css'
import styled, { StyledComponent } from 'styled-components'
import { Footer } from './footer'
import { theme } from '../data/theme'

interface IChildren {
  children: ReactNode
}

interface ISiteQuery {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const StyledLayout: StyledComponent<'div', any, {}, never> = styled.div({
  background: theme.background,
  margin: `0 auto`,
  maxWidth: '100vw',
  padding: `0`,
  paddingTop: 0,
  marginBottom: '32em',
  zIndex: 999,

  p: {
    textAlign: 'justify',
  },
})

const StyledMain: StyledComponent<'main', any, {}, never> = styled.main`
  margin: 0 auto;
  padding: 4rem 1rem;
`

export const Layout: ({ children }: IChildren) => JSX.Element = ({
  children,
}: IChildren): JSX.Element => {
  // tslint:disable-next-line: no-void-expression
  const data: ISiteQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledLayout>
        <StyledMain>{children}</StyledMain>
      </StyledLayout>
      <Footer />
    </>
  )
}
