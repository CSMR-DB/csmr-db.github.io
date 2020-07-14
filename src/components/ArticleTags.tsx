import React from 'react'
import { StyledLink } from './StyledLink'
import styled, { StyledComponent } from 'styled-components'

const StyledP: StyledComponent<'p', any, {}, never> = styled.p`
  text-align: left !important;
`

export const ArticleTags: ({ tags }: { tags?: string[] }) => JSX.Element = ({
  tags,
}: {
  tags?: string[]
}): JSX.Element => (
  <StyledP>
    Tags:{' '}
    {tags &&
      tags.map(
        (tag: string, i: number): JSX.Element => (
          <span key={i}>
            <StyledLink
              to={`/tag/${tag.toLocaleLowerCase().replace(/\s/gi, '_')}`}
            >
              {tag}
            </StyledLink>
            {i + 1 < tags.length ? ', ' : ''}
          </span>
        )
      )}
  </StyledP>
)
