import React from 'react'
import { Reveal } from 'react-gsap'

import { Grid } from '../components/Grid'
import { IProjectsAllMarkdownRemark } from '../types/interfaces'
import { SEO } from '../components/compositions/SEO'
import { CenteredBlock } from '../components/CenteredBlock'
import { ContentSeparator } from '../components/ContentSeparator'
import { ProjectCards } from '../components/compositions/card/projectcard/ProjectCards'

export interface IProjectsLayoutProps {
  programmingData: IProjectsAllMarkdownRemark
  graphicDesignData: IProjectsAllMarkdownRemark
}

export function ProjectsLayout({
  programmingData,
  graphicDesignData,
}: IProjectsLayoutProps): JSX.Element {
  return (
    <>
      <SEO title="Projects" description="These are some projects I did" />
      <ContentSeparator>
        <CenteredBlock>
          <h1>Hey! These are some of my projects</h1>
          <p>
            In chronological order, from newest to oldest. These are some
            projects I worked on that I am proud of, that taught me a lot and /
            or got me some decent grades.
          </p>
        </CenteredBlock>
        <Grid
          $columns={'repeat(auto-fill, minmax(32rem,1fr))'}
          $maxWidth={'100rem'}
        >
          <Reveal>
            <ProjectCards edges={programmingData.edges} />
          </Reveal>
        </Grid>
      </ContentSeparator>
      <ContentSeparator>
        <CenteredBlock>
          <h1>I have also done some Graphic Design stuff</h1>
          <p>
            Not everything in here has to do with programming. I also included
            some projects I made using Adobe Illustrator and After Effects. The
            first projects were part of courses in a timeframe of about 10
            weeks. That meant going from 0 - 100 in roughly 10 weeks, allocating
            time for other courses as well (about 4 at a time).
          </p>
        </CenteredBlock>
        <Grid
          $columns={'repeat(auto-fill, minmax(32rem,1fr))'}
          $maxWidth={'100rem'}
        >
          <Reveal>
            <ProjectCards edges={graphicDesignData.edges} />
          </Reveal>
        </Grid>
      </ContentSeparator>
    </>
  )
}
