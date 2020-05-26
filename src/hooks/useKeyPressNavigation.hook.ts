// import { navigate } from 'gatsby';
import { IRouteObject } from './../data/routes';
import { useState, useEffect } from 'react';

// tslint:disable: typedef
export function useKeyPressNavigation(routes: IRouteObject[]): string {
  // State for keeping track of whether key is pressed
  const [navigationPath, setNavigationPath] = useState('');

  const keyPressRouteBinds = new Map<string, string>()
  routes.map(route => route.boundKeys.map( key => ( keyPressRouteBinds.set( `${key}`, route.path ))))

  console.table(keyPressRouteBinds)

  // Add event listeners
  useEffect(() => {

    // If pressed key is our target key then set to true
    function downHandler({ key }: { key: string }) {
      if (keyPressRouteBinds.has(key)) {
        // tslint:disable-next-line: no-floating-promises
        // navigate(`${keyPressRouteBinds.get(key)}`)
        setNavigationPath(`${keyPressRouteBinds.get(key)}`)
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }: { key: string }) => {
      if (keyPressRouteBinds.has(key)) {
        setNavigationPath('');
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [routes]); // Empty array ensures that effect is only run on mount and unmount

  return navigationPath;
}
