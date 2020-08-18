import React from 'react'

import {
  ExperienceMarkdownEdge,
  ExperienceAllMarkdownRemark,
} from '../../../../types/graphql.types'

import { ExperienceCard } from './ExperienceCard'

export function ExperienceCards({
  edges,
}: ExperienceAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter } }: ExperienceMarkdownEdge,
          i: number
        ): JSX.Element => (
          <ExperienceCard
            name={frontmatter.title}
            type={frontmatter.type}
            description={frontmatter.excerpt}
            icon={`icons/${frontmatter.title.toLocaleLowerCase()}_logo.png`}
            backgroundColor={frontmatter.backgroundColor}
            dateStart={frontmatter.dateStart}
            dateEnd={frontmatter.dateEnd}
            key={i}
          />
        )
      )}
    </>
  )
}
