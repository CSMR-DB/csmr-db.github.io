import React from 'react'

import {
  ISkillsetAllMarkdownRemark,
  ISkillsetEdge,
} from '../../../../types/interfaces'
import { routeGenerator } from '../../../../utils/routeGenerator'

import { SkillCard } from './SkillCard'

export function SkillCards({ edges }: ISkillsetAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter, fileAbsolutePath } }: ISkillsetEdge,
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
