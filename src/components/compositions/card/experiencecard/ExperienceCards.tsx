import React from 'react'

import {
  IExperienceEdge,
  IExperienceAllMarkdownRemark,
} from '../../../../types/interfaces'

import { ExperienceCard } from './ExperienceCard'

export function ExperienceCards({
  edges,
}: IExperienceAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter } }: IExperienceEdge,
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
            index={i}
          />
        )
      )}
    </>
  )
}
