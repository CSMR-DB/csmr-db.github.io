import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { routes, IRouteObject } from '../data/routes'
import { theme } from '../data/theme'
import { StyledLink } from './StyledLink'

const StickyNav: StyledComponent<'div', any, {}, never> = styled.div`
  display: none;

  @media ${theme.breakpoints.max.smartphone} {
    display: grid;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0;
    background: ${theme.mainNav.main};
  }
`

const StickyNavItem: StyledComponent<'div', any, {}, never> = styled.div`
  & a {
    font-size: 0.75rem;
    background: ${theme.mainNav.main};
    width: 100%;
    text-align: center;
    height: 4em;
    line-height: 4em;

    &.active {
      background: ${theme.mainNav.active};
    }
  }
`

export const MainNav: () => JSX.Element = (): JSX.Element => (
  <StickyNav>
    {routes.map((route: IRouteObject, i: number) => (
      <StickyNavItem>
        <StyledLink
          key={i}
          to={route.path}
          activeClassName="active"
          partiallyActive
        >
          {route.title}
        </StyledLink>
      </StickyNavItem>
    ))}
  </StickyNav>
)
