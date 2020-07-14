import { useState, useEffect } from 'react'

export function useKeyPressNavigation(
  keyPressRouteBinds: Map<string, string>
): string {
  const [navigationPath, setNavigationPath]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState('')

  useEffect((): (() => void) => {
    function downHandler({ key }: { key: string }): void {
      if (keyPressRouteBinds.has(key)) {
        setNavigationPath(`${keyPressRouteBinds.get(key)}`)
      }
    }

    function upHandler({ key }: { key: string }): void {
      if (keyPressRouteBinds.has(key)) {
        setNavigationPath('')
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', downHandler)
      window.addEventListener('keyup', upHandler)

      return (): void => {
        window.removeEventListener('keydown', downHandler)
        window.removeEventListener('keyup', upHandler)
      }
    }

    // tslint:disable-next-line: no-empty
    return (): void => {}
  }, [keyPressRouteBinds])

  return navigationPath
}
