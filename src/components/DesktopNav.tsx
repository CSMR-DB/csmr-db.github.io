import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { IRouteObject } from '../data/routes'
import { theme } from '../data/theme'
import { Logo } from './Logo'
import { Link } from 'gatsby'
import { ColorProperty, BorderProperty } from 'csstype'
import { Tween } from 'react-gsap'

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

const StyledNav: StyledComponent<'nav', any, {}, never> = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  
  & > * {
    justify-self: center;
  };

  @media ${theme.breakpoints.max.smartphone} {
    /* flex-direction: column; */
  };
`

const StyledH1: StyledComponent<'h1', any, {}, never> = styled.h1`
  line-height: inherit;
  margin: 0;

  @media ${theme.breakpoints.max.smartphone} {
    font-size: 1rem;
  };
`

const StyledHeaderLogo: StyledComponent<'div', any, {}, never> = styled.div`
  float: left;
  margin: 0 auto;
  text-align: center;

  @media ${theme.breakpoints.max.smartphone} {
    svg {
        width: 4rem;
    }
  };
`

const StyledLinkOrb: StyledComponent<typeof Link, any, { color: ColorProperty }, never> = styled(Link)`
  height: 8rem;
  width: 8rem;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  border: ${(props: { color: ColorProperty }): BorderProperty<1> => `1px solid ${props.color}`};
  border-radius: 999rem;
  color: ${(props: { color: ColorProperty }): ColorProperty => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &:hover {
    border: 1px solid ${theme.primaryHover};
    color: ${theme.primaryHover}
  }
  
  @media ${theme.breakpoints.max.smartphone} {
    height: 4rem;
    width: 4rem;
  };
`

const StyledLogoOrb: StyledComponent<typeof Link, any, { color: ColorProperty }, never> = styled(StyledLinkOrb)`
  height: '12rem';
  width: '12rem';
  padding: '2rem';

  &:hover svg path {
    stroke: ${theme.primaryHover}
  };

  @media ${theme.breakpoints.max.smartphone} {
    padding: 0;
  };
`

const StyledLogoOrbKey: StyledComponent<'span', any, {}, never> = styled.span`
  border: 1px solid #DDD;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  line-height: 2rem;

  @media ${theme.breakpoints.max.smartphone} {
    display: none;
  };
`

export function DesktopNav({ routes, color }: { routes: IRouteObject[], color: ColorProperty }): JSX.Element {
  const leftNavItems: IRouteObject[] = routes.slice(0, 2)
  const rightNavItems: IRouteObject[] = routes.slice(2)

  const currentPage: string = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <StyledNav>
      {leftNavItems.map((route: IRouteObject, i: number): JSX.Element => (
        <Tween key={i} from={ currentPage === '/' ? { boxShadow: `0 0 0 16rem inset ${theme.primary}`, opacity: 0, scale: 0, y: `${(i + 1) * 100}px` } : {} } duration={ 1 } delay={ i === 1 ? .25 : .5 } ease={ 'bounce' }>
          <StyledLinkOrb
            key={i}
            to={route.path}
            activeClassName="active"
            partiallyActive
            color={color}
          >
            <StyledLogoOrbKey>{`0${route.boundKeys[1]}`}</StyledLogoOrbKey>
            <StyledH1>{route.title}</StyledH1>
            <StyledLogoOrbKey>{route.boundKeys[0].toLocaleUpperCase()}</StyledLogoOrbKey>
          </StyledLinkOrb>
        </Tween>
      ))}
      <Tween from={ currentPage === '/' ? { boxShadow: `0 0 0 32rem inset ${theme.primary}`, opacity: 0, scale: 0 } : {} }  duration={ .5 } delay={ 0 }>
        <StyledLogoOrb to="/" color={color}>
          <StyledHeaderLogo>
            <Logo
              size={128}
              strokeColor={color}
              strokeSize={8}
              fill={'transparent'}
              background={theme.background}
              bordered={true}
            />
          </StyledHeaderLogo>
        </StyledLogoOrb>
      </Tween>
      {rightNavItems.map((route: IRouteObject, i: number): JSX.Element => (
        <Tween key={i} from={ currentPage === '/' ? { boxShadow: `0 0 0 16rem inset ${theme.primary}`, opacity: 0, scale: 0, y: `${(i + 1) * 100}px` } : {} } duration={ 1 } delay={ i === 0 ? .25 : .5 } ease={ 'elastic' }>
          <StyledLinkOrb
            key={i}
            to={route.path}
            activeClassName="active"
            partiallyActive
            color={color}
          >
            <StyledLogoOrbKey>{`0${route.boundKeys[1]}`}</StyledLogoOrbKey>
            <StyledH1>{route.title}</StyledH1>
            <StyledLogoOrbKey>{route.boundKeys[0].toLocaleUpperCase()}</StyledLogoOrbKey>
          </StyledLinkOrb>
        </Tween>
      ))}
    </StyledNav>
  )
}