import React from 'react'
import styled, { StyledComponent } from 'styled-components'

import { StyledLink } from '../StyledLink'

const StyledArticleTags: StyledComponent<'p', any, {}, never> = styled.p`
  text-align: left !important;
`

interface IArticleTagsProps {
  tags?: string[]
}

export function ArticleTags({ tags }: IArticleTagsProps): JSX.Element {
  return (
    <StyledArticleTags>
      Tags:{' '}
      {tags &&
        tags.map(
          (tag: string, i: number): JSX.Element => (
            <span key={i}>
              <StyledLink
                to={`/skillset/${tag.toLocaleLowerCase().replace(/\s/gi, '_')}`}
                $_testid={'SkillPageLink'}
              >
                {tag}
              </StyledLink>
              {i + 1 < tags.length ? ', ' : ''}
            </span>
          )
        )}
    </StyledArticleTags>
  )
}
