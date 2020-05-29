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
import styled, { StyledComponent, CSSObject } from 'styled-components'
import { Footer } from './Footer'
import { theme } from '../data/theme'
// import { DesktopNav } from './DesktopNav'
import { IONavigator } from '../hooks/IONavigator'
import { HeightProperty } from 'csstype'

interface ILayoutProps {
  children?: ReactNode
  fixed?: boolean
  hasFooter?: boolean
  showImage?: boolean
  headerHeight?: HeightProperty<1>
}

interface ISiteQuery {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

interface IStyledLayoutProps {
  fixed: boolean
  hasFooter: boolean
}

export const StyledLayout: StyledComponent<
  'div',
  any,
  IStyledLayoutProps,
  never
> = styled.div`
  background: ${theme.background};
  min-height: 100vh;
  margin-bottom: ${(props: IStyledLayoutProps): string | number =>
    props.hasFooter ? '48rem' : 0};

  ${(props: IStyledLayoutProps): CSSObject => props.fixed && {
    background: 'transparent',
    position: "fixed",
    display: "flex",
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  } || {}}

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

export const Layout: (props: ILayoutProps) => JSX.Element = ({
  children,
  hasFooter = true,
  fixed = false,
  showImage = true,
  headerHeight = '24rem'
}: ILayoutProps): JSX.Element => {
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
    <IONavigator>
      <StyledLayout hasFooter={hasFooter} fixed={fixed}>
        <Header height={headerHeight} siteTitle={data.site.siteMetadata.title} showImage={showImage} color={'white'}/>
        {children && <StyledMain>{children}</StyledMain>}
        {hasFooter && <Footer />}
        {/* <DesktopNav routes={routes} /> */}
        {/* ^^^^ Has to be MobileNav ^^^^ */}
      </StyledLayout>
    </IONavigator>
  )
}
