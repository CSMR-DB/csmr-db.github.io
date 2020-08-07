import React from 'react'

import {
  ProjectsAllMarkdownRemark,
  ProjectMarkdownEdge,
} from '../../../../types/graphql.types'

import { ProjectCard } from './ProjectCard'

export function ProjectCards({
  edges,
}: ProjectsAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter, generatedRoute } }: ProjectMarkdownEdge,
          i: number
        ): JSX.Element => {
          return (
            <ProjectCard
              title={frontmatter.title}
              tags={frontmatter.tags}
              video={frontmatter.featuredVideo}
              image={frontmatter.featuredImage}
              body={frontmatter.excerpt}
              generatedRoute={generatedRoute}
              date={frontmatter.date}
              key={i}
              index={i}
            />
          )
        }
      )}
    </>
  )
}
