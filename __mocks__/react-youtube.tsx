import React from 'react'

// tslint:disable-next-line: no-default-export
export default function Youtube({
  videoId,
  ...rest
}: {
  videoId: string
}): JSX.Element {
  return <div {...rest}>{videoId}</div>
}
