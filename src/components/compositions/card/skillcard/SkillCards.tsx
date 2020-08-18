import React from 'react'

import {
  SkillsetAllMarkdownRemark,
  SkillsetMarkdownEdge,
} from '../../../../types/graphql.types'

import { SkillCard } from './SkillCard'

export function SkillCards({ edges }: SkillsetAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter, generatedRoute } }: SkillsetMarkdownEdge,
          i: number
        ): JSX.Element => (
          <SkillCard
            title={frontmatter.title}
            body={frontmatter.excerpt}
            time={frontmatter.time}
            key={i}
            index={i}
            skillColor={frontmatter.skillColor || 'black'}
            generatedRoute={generatedRoute}
            icon={frontmatter.icon}
          />
        )
      )}
    </>
  )
}
