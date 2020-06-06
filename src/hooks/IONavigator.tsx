import React from 'react'
import { IRouteObject, routes } from '../data/routes';
import { navigate } from 'gatsby';
import { useKeyPressNavigation } from './useKeyPressNavigation.hook';

const SECRET_ROUTES: IRouteObject[] = [
  {
    path: '/photography',
    title: 'Photography',
    boundKeys: [ 'p', NaN ]
  },
  {
    path: '/onepage',
    title: 'Onepage',
    boundKeys: [ 'o', NaN ]
  }
]

const ALL_ROUTES: IRouteObject[] = [
  ...routes, 
  ...SECRET_ROUTES
]

const keyPressRouteBinds: Map<string, string> = new Map()
ALL_ROUTES.forEach((route: IRouteObject): void => { 
  route.boundKeys.forEach((key: string | number): void => { 
    keyPressRouteBinds.set( `${key}`, route.path )
  }) 
})

export function IONavigator({ children }: { children: React.ReactNode, routes?: IRouteObject[] }): JSX.Element {
  const currentPage: string = typeof window !== 'undefined' ? window.location.pathname : '';

  const navigationPage: string = useKeyPressNavigation(keyPressRouteBinds)
  if ( navigationPage !== '' && navigationPage !== currentPage ) {
    // tslint:disable-next-line: no-floating-promises
    navigate(navigationPage)
  } 

  return (
    <>
      {children}
    </>
  )
}