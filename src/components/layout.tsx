/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Header } from './Header'
// tslint:disable-next-line: no-import-side-effect
import '../css/reset.css'
import styled, { StyledComponent } from 'styled-components'
import { Footer } from './Footer'
import { theme } from '../data/theme'
import { MainNav } from './MainNav'
import { routes } from '../data/routes'
import { IONavigator } from '../hooks/IONavigator'

interface IChildren {
  children: ReactNode
  hasFooter?: boolean
}

interface ISiteQuery {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

interface IStyledLayoutProps {
  hasFooter: boolean
}

export const StyledLayout: StyledComponent<
  'div',
  any,
  IStyledLayoutProps,
  never
> = styled.div`
  background: ${theme.background};
  /* margin: 0 auto; */
  /* width: 100vw; */
  /* padding: 0; */
  margin-bottom: ${(props: IStyledLayoutProps): string | number =>
    props.hasFooter ? '48rem' : 0};
  /* z-index: 999; */

  @media ${theme.breakpoints.max.smartphone} {
    margin-bottom: ${(props: IStyledLayoutProps): string | number =>
      props.hasFooter ? '100vh' : 0};
  }
`

const StyledMain: StyledComponent<'main', any, {}, never> = styled.main`
  margin: 0 auto;
  padding: 4rem 1rem;

  a {
    text-decoration: none;
    color: ${theme.primary};

    &:hover {
      color: ${theme.primaryHover};
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`

export const Layout: ({ children, hasFooter }: IChildren) => JSX.Element = ({
  children,
  hasFooter = true,
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
    // <>
    <IONavigator routes={routes}>
      <StyledLayout hasFooter={hasFooter}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
        {hasFooter && <Footer />}
        <MainNav />
      </StyledLayout>
    </IONavigator>
    // </>
  )
}
