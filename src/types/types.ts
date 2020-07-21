import React from 'react'

export type AnyExoticRefComponent<T> = React.ForwardRefExoticComponent<
  T & React.RefAttributes<any>
>

export type AnyExoticRefTargets =
  | ((instance: any) => void)
  | React.MutableRefObject<any>
  | null
