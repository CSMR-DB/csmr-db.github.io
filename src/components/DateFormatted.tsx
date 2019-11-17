import React from 'react'
import { format, parseISO } from 'date-fns'

export const DateFormatted: ({
  dateString,
}: {
  dateString?: string
}) => JSX.Element | null = ({
  dateString,
}: {
  dateString?: string
}): JSX.Element | null =>
  (dateString && <span>{format(parseISO(dateString), 'dd MMM yyyy')}</span>) ||
  null
