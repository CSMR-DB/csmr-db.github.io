import React from 'react'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { DynamicImage } from '../components/dynamicimage'
import { StyledIFrame } from '../components/StyledIFrame'
import { StyledA } from '../components/StyledLink'
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card'
import { Grid } from '../components/grid'
import { CenteredBlock } from '../components/CenteredBlock'
import { projects, IProject } from '../data/projects'
import styled, { StyledComponent } from 'styled-components'
import { StringOrUrlObject, StringOrUrlArray } from '../types/StringOrUrlObject'

interface IProfileCardProps {
  image?: string
  video?: string
  title: string
  body: StringOrUrlArray
  tags?: string[]
}

const StyledProjectCard: StyledComponent<'article', any, {}, never> = styled(
  Card
)`
  & header > :first-child {
    transition: all 0.25s ease-in-out;
  }

  &:hover header > :first-child {
    transform: scale(1.1);
  }
`

const ProjectCard: ({
  image,
  video,
  title,
  body,
  tags,
}: IProfileCardProps) => JSX.Element = ({
  image,
  video,
  title,
  body,
  tags,
}: IProfileCardProps): JSX.Element => (
  <StyledProjectCard>
    <CardHeader>
      {image && <DynamicImage path={image} />}
      {video && (
        <StyledIFrame
          width="960"
          height="340"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></StyledIFrame>
      )}
    </CardHeader>
    <CardBody>
      <h2>{title}</h2>
      <p>
        {Array.isArray(body)
          ? body.map((string: StringOrUrlObject, i: number) => {
              if (typeof string !== 'string' && string.url) {
                return (
                  <StyledA href={string.url} target="blank" key={i}>
                    {string.text}
                  </StyledA>
                )
              }

              return string
            })
          : body}
      </p>
    </CardBody>
    <CardFooter>
      <p>
        Tags:{' '}
        {tags &&
          tags.map((tag: string, i: number) => <span key={i}>{tag}</span>)}
      </p>
    </CardFooter>
  </StyledProjectCard>
)

const Projects: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <SEO title="Projects" description="These are some projects I did" />
    <CenteredBlock>
      <h1>Hey! These are some of my projects</h1>
      <p>
        In chronological order. These are some projects I worked on that I am
        proud of and / or got me some decent grades. Not everything in here has
        to do with programming. I also included some projects I made using Adobe
        Illustrator and After Effects. The first projects were part of courses
        in a timeframe of about 10 weeks. That meant going from 0 - 100 in
        roughly 10 weeks, allocating time for other courses as well (about 4 at
        a time).
      </p>
    </CenteredBlock>
    <Grid maxWidth="100rem" columns="repeat(auto-fill, minmax(32rem, 1fr))">
      {projects.map(
        ({ title, image, video, body, tags }: IProject, i: number) => (
          <ProjectCard
            title={title}
            image={image}
            video={video}
            body={body}
            tags={tags}
            key={i}
          />
        )
      )}
    </Grid>
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default Projects
