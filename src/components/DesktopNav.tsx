import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { IRouteObject } from '../data/routes'
import { theme } from '../data/theme'
// import { StyledLink } from './StyledLink'
import { Logo } from './Logo'
import { Link } from 'gatsby'

// const StickyNav: StyledComponent<'div', any, {}, never> = styled.div`
//   display: none;

//   @media ${theme.breakpoints.max.smartphone} {
//     display: grid;
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//     height: auto;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 0;
//     background: ${theme.mainNav.main};
//   }
// `

const StyledNav: StyledComponent<'nav', any, {}, never> = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(5, 1fr)',
  borderBottom: '1px solid lightgrey',
  paddingBottom: '2em',

  '& > *': {
    justifySelf: 'center',
  },
})

const StyledH1: StyledComponent<'h1', any, {}, never> = styled.h1({
  lineHeight: 'inherit',
  margin: 0,
})

const StyledHeaderLogo: StyledComponent<'div', any, {}, never> = styled.div`
  float: left;
  margin: 0 auto;
  text-align: center;
`

const StyledLinkOrb: StyledComponent<typeof Link, any, {}, never> = styled(Link)({
  height: '8rem',
  width: '8rem',
  textAlign: 'center',
  textDecoration: 'none',
  border: `1px solid ${theme.primary}`,
  borderRadius: '999rem',
  color: theme.primary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',

  '&:hover': {
    border: `1px solid ${theme.primaryHover}`,
    color: theme.primaryHover
  }
})

const StyledLogoOrb: StyledComponent<typeof Link, any, {}, never> = styled(StyledLinkOrb)({
  height: '12rem',
  width: '12rem',
  padding: '2rem',

  '&:hover svg path': {
    stroke: theme.primaryHover
  }
})

const StyledLogoOrbKey: StyledComponent<'span', any, {}, never> = styled.span`
  border: 1px solid #DDD;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  line-height: 2rem;
`

export function DesktopNav({ routes }: { routes: IRouteObject[] }): JSX.Element {
  const leftNavItems: IRouteObject[] = routes.slice(0, 2)
  const rightNavItems: IRouteObject[] = routes.slice(2)

  return (
    <StyledNav>
      {leftNavItems.map((route: IRouteObject, i: number): JSX.Element => (
        <StyledLinkOrb
          key={i}
          to={route.path}
          activeClassName="active"
          partiallyActive
        >
          <StyledLogoOrbKey>{`0${route.boundKeys[1]}`}</StyledLogoOrbKey>
          <StyledH1>{route.title}</StyledH1>
          <StyledLogoOrbKey>{route.boundKeys[0].toLocaleUpperCase()}</StyledLogoOrbKey>
        </StyledLinkOrb>
      ))}
      <StyledLogoOrb to="/">
        <StyledHeaderLogo>
          <Logo
            size={128}
            strokeColor={theme.primary}
            strokeSize={8}
            fill={theme.background}
            background={theme.background}
            bordered={true}
          />
        </StyledHeaderLogo>
      </StyledLogoOrb>
      {rightNavItems.map((route: IRouteObject, i: number): JSX.Element => (
        <StyledLinkOrb
          key={i}
          to={route.path}
          activeClassName="active"
          partiallyActive
        >
          <StyledLogoOrbKey>{`0${route.boundKeys[1]}`}</StyledLogoOrbKey>
          <StyledH1>{route.title}</StyledH1>
          <StyledLogoOrbKey>{route.boundKeys[0].toLocaleUpperCase()}</StyledLogoOrbKey>
        </StyledLinkOrb>
      ))}
    </StyledNav>
  )
}