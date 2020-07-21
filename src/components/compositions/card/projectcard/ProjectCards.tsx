import React from 'react'

import { IProjectsAllMarkdownRemark, IEdge } from '../../../../types/interfaces'

import { ProjectCard } from './ProjectCard'

export function ProjectCards({
  edges,
}: IProjectsAllMarkdownRemark): JSX.Element {
  return (
    <>
      {edges.map(
        (
          { node: { frontmatter, timeToRead } }: IEdge,
          i: number
        ): JSX.Element => (
          <ProjectCard
            title={frontmatter.title}
            tags={frontmatter.tags}
            video={frontmatter.featuredVideo}
            image={frontmatter.featuredImage}
            body={frontmatter.excerpt}
            timeToRead={timeToRead}
            path={frontmatter.path}
            date={frontmatter.date}
            key={i}
            index={i}
          />
        )
      )}
    </>
  )
}
