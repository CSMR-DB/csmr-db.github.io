import React from 'react'
import { StringOrUrlObject, StringOrUrlArray } from '../types/StringOrUrlObject'
import { StyledA } from './StyledLink'

export function ArticleBody({
  body,
}: {
  body?: StringOrUrlArray
}): JSX.Element | null {
  return (
    (body && (
      <p>
        {Array.isArray(body)
          ? body.map((string: StringOrUrlObject, i: number) => {
              if (typeof string !== 'string' && string.url) {
                return (
                  <StyledA href={string.url} target="blank" key={i}>
                    {string.text}
                  </StyledA>
                )
              }

              return string
            })
          : body}
      </p>
    )) ||
    null
  )
}
