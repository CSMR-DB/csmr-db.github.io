import { pipe } from './pipe_compose';
export const cleanString: (string: string) => string = (string: string): string => string.replace(/(_)/gi, ' ')

export const capitalizeString: (string: string) => string = (string: string): string => string.replace(/\b(\w)/g, (letter: string): string => letter.toLocaleUpperCase())

export const cleanAndCapitalize: (val: string) => string = pipe(
  cleanString,
  capitalizeString
)