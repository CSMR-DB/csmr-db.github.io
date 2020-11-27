import React, { ReactNode } from 'react'

export function MDXRenderer({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return <>{children}</>
}
