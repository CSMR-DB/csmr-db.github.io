import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { IRouteObject } from '../data/routes'
import { theme } from '../data/theme'
import { Link } from 'gatsby'
import {
  ColorProperty,
  BorderProperty,
  GridAreaProperty,
  GridGapProperty,
  BackgroundProperty,
  BackgroundColorProperty,
} from 'csstype'
import { Tween } from 'react-gsap'

const WASDGrid: StyledComponent<
  'nav',
  any,
  { gap: GridGapProperty<1> },
  never
> = styled.nav`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-areas:
    '. w .'
    'a s d';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${({ gap }: { gap: GridGapProperty<1> }): GridGapProperty<1> =>
    gap};

  & > * {
    justify-self: center;
  }

  @media ${theme.breakpoints.max.smartphone} {
    grid-gap: 2rem;
  }
`

interface IStyledLinkOrbProps {
  color: ColorProperty
  bordercolor: ColorProperty
  area: GridAreaProperty
  background?: BackgroundProperty<1>
  inverted?: boolean
}

const StyledLinkOrb: StyledComponent<
  typeof Link,
  any,
  IStyledLinkOrbProps,
  never
> = styled(Link)`
  height: 8rem;
  width: 8rem;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  background: ${({
    background = 'transparent',
  }: IStyledLinkOrbProps): BackgroundProperty<1> => background};
  border: ${({ bordercolor }: IStyledLinkOrbProps): BorderProperty<1> =>
    `1px solid ${bordercolor}`};
  border-radius: 256rem;
  color: ${({ color }: IStyledLinkOrbProps): ColorProperty => color};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-area: ${({ area }: IStyledLinkOrbProps): GridAreaProperty => area};

  &:hover {
    border: 1px solid ${theme.primaryHover};
    color: ${theme.primaryHover};
  }

  &.active {
    border: 1px solid ${theme.primary};
    color: ${theme.primary};
  }

  @media ${theme.breakpoints.max.smartphone} {
    height: 4rem;
    width: 4rem;
  }
`

const StyledLinkOrbTitle: StyledComponent<'h1', any, {}, never> = styled.h1`
  line-height: inherit;
  margin: 0;

  @media ${theme.breakpoints.max.smartphone} {
    font-size: 0.75rem;
  }
`

const StyledLinkOrbKey: StyledComponent<'span', any, {}, never> = styled.span`
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  line-height: 2rem;

  @media ${theme.breakpoints.max.smartphone} {
    display: none;
  }
`

interface IWASDNavProps {
  routes: IRouteObject[]
  color?: ColorProperty
  gap: GridGapProperty<1>
  background: BackgroundColorProperty
  isLandingPage: boolean
}

export function WASDNav({
  routes,
  color = 'white',
  gap = '2rem',
  background = 'transparent',
  isLandingPage,
}: IWASDNavProps): JSX.Element {
  return (
    <WASDGrid gap={gap}>
      {routes.map(
        (route: IRouteObject, i: number): JSX.Element => (
          <Tween
            key={i}
            from={
              isLandingPage
                ? { boxShadow: `0 0 0 32rem inset white`, opacity: 0, scale: 0 }
                : {}
            }
            duration={1}
            delay={i * 0.25}
            ease={'bounce'}
          >
            <StyledLinkOrb
              key={i}
              to={route.path}
              activeClassName="active"
              partiallyActive
              color={color}
              bordercolor={background === 'transparent' ? color : background}
              background={background}
              area={route.boundKeys[0].toLocaleLowerCase()}
            >
              <StyledLinkOrbKey>{`0${route.boundKeys[1]}`}</StyledLinkOrbKey>
              <StyledLinkOrbTitle>{route.title}</StyledLinkOrbTitle>
              <StyledLinkOrbKey>
                {route.boundKeys[0].toLocaleUpperCase()}
              </StyledLinkOrbKey>
            </StyledLinkOrb>
          </Tween>
        )
      )}
    </WASDGrid>
  )
}
