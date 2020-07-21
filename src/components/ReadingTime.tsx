import React from 'react'

interface IReadingTimeProps {
  timeToRead?: number
}

export function ReadingTime({
  timeToRead,
}: IReadingTimeProps): JSX.Element | null {
  return timeToRead ? (
    <span>
      Reading time: ~{timeToRead} minute{timeToRead !== 1 ? 's' : ''}
    </span>
  ) : null
}
