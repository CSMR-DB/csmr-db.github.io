import React from 'react'

// tslint:disable-next-line: no-default-export
export default function ({ fluid }: { fluid: { src: string } }): JSX.Element {
  return <>{fluid.src}</>
}
