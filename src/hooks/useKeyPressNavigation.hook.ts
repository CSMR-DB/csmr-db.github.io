import { IRouteObject } from './../data/routes';
import { useState, useEffect } from 'react';

export function useKeyPressNavigation(routes: IRouteObject[]): string {
  const [navigationPath, setNavigationPath]: [ string, React.Dispatch<React.SetStateAction<string>> ] = useState('');

  const keyPressRouteBinds: Map<string, string> = new Map()
  routes.forEach((route: IRouteObject): void => { 
    route.boundKeys.forEach((key: string | number): void => { 
      keyPressRouteBinds.set( `${key}`, route.path )
    }) 
  })

  console.table(keyPressRouteBinds)

  useEffect((): (() => void) => {
    function downHandler({ key }: { key: string }): void {
      if (keyPressRouteBinds.has(key)) {
        setNavigationPath(`${keyPressRouteBinds.get(key)}`)
      }
    }

    function upHandler({ key }: { key: string }): void {
      if (keyPressRouteBinds.has(key)) {
        setNavigationPath('');
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return (): void => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [routes]);

  return navigationPath;
}
