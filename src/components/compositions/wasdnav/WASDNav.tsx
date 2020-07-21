import React from 'react'
import { ColorProperty, BackgroundColorProperty } from 'csstype'
import { Tween } from 'react-gsap'

import { IRouteObject } from '../../../data/routes'

import { WASDGrid } from './WASDGrid'
import { WASDLinkOrb } from './WASDLinkOrb'
import { WASDLinkOrbTitle } from './WASDLinkOrbTitle'
import { WASDLinkOrbKey } from './WASDLinkOrbKey'

interface IWASDNavProps {
  routes: IRouteObject[]
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
            <WASDLinkOrb
              key={i}
              to={route.path}
              activeClassName="active"
              partiallyActive
              color={color}
              bordercolor={background === 'transparent' ? color : background}
              background={background}
              area={route.boundKeys[0].toLocaleLowerCase()}
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
