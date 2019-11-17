import { Link } from 'gatsby'
import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Logo } from './Logo'
import { routes, IRouteObject } from '../data/routes'
import { theme } from '../data/theme'

interface IHeaderProps {
  siteTitle: string
}

const StyledHeader: StyledComponent<'header', any, {}, never> = styled.header({
  background: theme.background,
  paddingBottom: '2rem',
  paddingTop: '2rem',

  '@media screen and (max-width: 600px)': {
    paddingBottom: 0,
    paddingTop: 0,
  },
})

const StyledHeaderDiv: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const StyledNav: StyledComponent<'nav', any, {}, never> = styled.nav({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))',
  borderBottom: '1px solid lightgrey',
  paddingBottom: '2em',

  '& > *': {
    justifySelf: 'center',
  },
})

const StyledH1: StyledComponent<'h1', any, {}, never> = styled.h1({
  margin: 0,
})

const StyledLink: StyledComponent<typeof Link, any, {}, never> = styled(Link)({
  color: theme.primary,
  textDecoration: 'none',
  width: '100%',
  textAlign: 'center',
  padding: '.5rem',
  borderRadius: '.25rem',

  ':hover': {
    color: theme.primaryHover,
  },

  '&.active': {
    color: 'white',
    background: theme.primaryHover,
  },
})

const StyledHeaderLogo: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;
  text-align: center;
`

export const Header: ({ siteTitle }: IHeaderProps) => JSX.Element = ({
  siteTitle,
}: IHeaderProps): JSX.Element => (
  <StyledHeader>
    <StyledHeaderLogo>
      <StyledLink to="/">
        <Logo
          size={128}
          strokeColor={theme.primary}
          strokeSize={8}
          fill={theme.background}
          background={theme.background}
          bordered={true}
        />
      </StyledLink>
    </StyledHeaderLogo>
    <StyledHeaderDiv>
      <StyledNav>
        {routes.map((route: IRouteObject, i: number) => (
          <StyledLink
            key={i}
            to={route.path}
            activeClassName="active"
            partiallyActive
          >
            <StyledH1>{route.title}</StyledH1>
          </StyledLink>
        ))}
      </StyledNav>
    </StyledHeaderDiv>
  </StyledHeader>
)
