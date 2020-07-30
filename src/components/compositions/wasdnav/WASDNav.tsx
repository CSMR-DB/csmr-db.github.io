import React from 'react'
import { ColorProperty, BackgroundColorProperty } from 'csstype'
import { Tween } from 'react-gsap'

import { RouteObject } from '../../../data/objects/routesProvider'

import { WASDGrid } from './WASDGrid'
import { WASDLinkOrb } from './WASDLinkOrb'
import { WASDLinkOrbTitle } from './WASDLinkOrbTitle'
import { WASDLinkOrbKey } from './WASDLinkOrbKey'

interface IWASDNavProps {
  routes: RouteObject[]
  color?: ColorProperty
  gap: string
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
        (route: RouteObject, i: number): JSX.Element => (
          <Tween
            key={i}
            from={isLandingPage && { opacity: 0, scale: 0 }}
            duration={1}
            delay={route.boundKeys[0] === 's' ? 0.75 : 1}
            ease={'back'}
          >
            <WASDLinkOrb
              key={i}
              to={route.path}
              activeClassName="active"
              partiallyActive
              $color={color}
              $bordercolor={background === 'transparent' ? color : background}
              $background={background}
              $area={route.boundKeys[0].toLocaleLowerCase()}
            >
              <WASDLinkOrbKey>{`0${route.boundKeys[1]}`}</WASDLinkOrbKey>
              <WASDLinkOrbTitle>{route.title}</WASDLinkOrbTitle>
              <WASDLinkOrbKey>
                {route.boundKeys[0].toLocaleUpperCase()}
              </WASDLinkOrbKey>
            </WASDLinkOrb>
          </Tween>
        )
      )}
    </WASDGrid>
  )
}
