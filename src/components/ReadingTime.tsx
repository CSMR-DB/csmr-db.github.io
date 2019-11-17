import React from 'react'

export const ReadingTime: ({
  timeToRead,
}: {
  timeToRead?: number
}) => JSX.Element | null = ({
  timeToRead,
}: {
  timeToRead?: number
}): JSX.Element | null =>
  timeToRead ? (
    <span>
      Reading time: ~{timeToRead} minute{timeToRead !== 1 ? 's' : ''}
    </span>
  ) : null
