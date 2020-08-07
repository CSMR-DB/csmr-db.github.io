import { pipe } from './pipe_compose'

export function breadCrumbJsonLdGenerator(
  siteName: string,
  path: string
): string[] {
  function splitBySlash(value: string): string[] {
    return value.split('/')
  }

  function removeEmptyStrings(value: string[]): string[] {
    return value.filter((part: string): boolean => part !== '')
  }

  function capitalizeFirstWord(value: string[]): string[] {
    return value.map(
      (part: string): string => part[0].toLocaleUpperCase() + part.slice(1)
    )
  }

  const breadCrumbPiper: (val: string[]) => string[] = pipe(
    removeEmptyStrings,
    capitalizeFirstWord
  )

  return [siteName, ...breadCrumbPiper(splitBySlash(path))]
}
