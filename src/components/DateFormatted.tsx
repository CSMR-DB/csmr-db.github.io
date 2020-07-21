import React from 'react'
import { format, parseISO } from 'date-fns'

interface IDateFormattedProps {
  dateString?: string
}

export function DateFormatted({
  dateString,
}: IDateFormattedProps): JSX.Element | null {
  return (
    (dateString && (
      <span>{format(parseISO(dateString), 'dd MMM yyyy')}</span>
    )) ||
    null
  )
}
