import React from 'react'
import { IRouteObject } from '../data/routes';
import { navigate } from 'gatsby';
import { useKeyPressNavigation } from './useKeyPressNavigation.hook';

export function IONavigator({ children, routes }: { children: React.ReactNode, routes: IRouteObject[] }): JSX.Element {
  const currentPage: string = typeof window !== 'undefined' ? window.location.pathname : '';
  console.log(currentPage)

  const navigationPage: string = useKeyPressNavigation(routes)
  console.log(navigationPage)
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