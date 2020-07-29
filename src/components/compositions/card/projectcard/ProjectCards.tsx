import React from 'react'

import {
  IProjectsAllMarkdownRemark,
  IProjectsEdge,
} from '../../../../types/interfaces'
import { routeGenerator } from '../../../../utils/routeGenerator'

import { ProjectCard } from './ProjectCard'

export function ProjectCards({
  edges,
}: IProjectsAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter, fileAbsolutePath } }: IProjectsEdge,
          i: number
        ): JSX.Element => {
          return (
            <ProjectCard
              title={frontmatter.title}
              tags={frontmatter.tags}
              video={frontmatter.featuredVideo}
              image={frontmatter.featuredImage}
              body={frontmatter.excerpt}
              fileAbsolutePath={routeGenerator(fileAbsolutePath)}
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
