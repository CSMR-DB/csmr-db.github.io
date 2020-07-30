import React from 'react'

import {
  SkillsetAllMarkdownRemark,
  SkillsetMarkdownEdge,
} from '../../../../types/graphql.types'
import { routeGenerator } from '../../../../utils/routeGenerator'

import { SkillCard } from './SkillCard'

export function SkillCards({ edges }: SkillsetAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter, fileAbsolutePath } }: SkillsetMarkdownEdge,
          i: number
        ): JSX.Element => (
          <SkillCard
            level={frontmatter.level || 0}
            title={frontmatter.title}
            description={frontmatter.excerpt}
            time={frontmatter.time}
            key={i}
            index={i}
            skillColor={frontmatter.skillColor || 'black'}
            fileAbsolutePath={routeGenerator(fileAbsolutePath)}
          />
        )
      )}
    </>
  )
}
