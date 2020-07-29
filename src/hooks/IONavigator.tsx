import React from 'react'
import { navigate } from 'gatsby'

import { AStaticDataManager, StaticDataManager } from '../data/DataManager'
import { IRouteObject } from '../data/objects/routesProvider'
import { useKeyPressNavigation } from './useKeyPressNavigation.hook'

export interface IIONavigatorProps {
  children: React.ReactNode
  routes?: IRouteObject[]
}

export function IONavigator({ children }: IIONavigatorProps): JSX.Element {
  const { routes: defaultRoutes }: typeof AStaticDataManager = StaticDataManager

  const ALL_ROUTES: IRouteObject[] = [
    ...defaultRoutes,
    {
      path: '/photography',
      title: 'Photography',
      boundKeys: ['p', NaN],
    },
    {
      path: '/onepage',
      title: 'Onepage',
      boundKeys: ['o', NaN],
    },
    {
      path: '/',
      title: 'Home',
      boundKeys: ['/', NaN],
    },
  ]

  const keyPressRouteBinds: Map<string, string> = new Map()
  ALL_ROUTES.forEach((route: IRouteObject): void => {
    route.boundKeys.forEach((key: string | number): void => {
      keyPressRouteBinds.set(`${key}`, route.path)
    })
  })

  const currentPage: string =
    typeof window !== 'undefined' ? window.location.pathname : '/'

  const navigationPage: string = useKeyPressNavigation(keyPressRouteBinds)
  if (navigationPage !== '' && navigationPage !== currentPage) {
    // tslint:disable-next-line: no-floating-promises
    navigate(navigationPage)
  }

  return <>{children}</>
}
