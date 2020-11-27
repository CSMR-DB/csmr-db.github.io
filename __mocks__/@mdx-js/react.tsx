import React from 'react'
import { MDXProviderProps } from '@mdx-js/react'

export function MDXProvider({
  children,
}: // components,
MDXProviderProps): JSX.Element {
  // console.table(components)

  return <>{children}</>
}
