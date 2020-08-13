import React from 'react'

import { StringOrUrlObject, StringOrUrlArray } from '../../types/common.types'

import { StyledA } from '../StyledLink'

interface IArticleBodyProps {
  body?: StringOrUrlArray
}

export function ArticleBody({ body }: IArticleBodyProps): JSX.Element | null {
  return (
    (body && (
      <p>
        {Array.isArray(body)
          ? body.map((string: StringOrUrlObject, i: number):
              | JSX.Element
              | string => {
              if (typeof string !== 'string' && string.url) {
                return (
                  <StyledA href={string.url} target="blank" key={i}>
                    {string.text}
                  </StyledA>
                )
              }

              return string as string
            })
          : body}
      </p>
    )) ||
    null
  )
}
