import React from 'react'
import { Tween } from 'react-gsap'

import { RouteObject } from '../../../data/objects/routesProvider'
import { capitalizeString } from '../../../utils/textTransformer'

import { WASDGrid } from './WASDGrid'
import { WASDLinkOrb } from './WASDLinkOrb'
import { WASDLinkOrbTitle } from './WASDLinkOrbTitle'
import { WASDLinkOrbKey } from './WASDLinkOrbKey'

interface IWASDNavProps {
  routes: RouteObject[]
  isLandingPage?: boolean
}

export function WASDNav({
  routes,
  isLandingPage = false,
}: IWASDNavProps): JSX.Element {
  return (
    <WASDGrid>
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
              $area={route.boundKeys[0].toLocaleLowerCase()}
              $_testid={`NavTo${capitalizeString(route.title)}`}
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
