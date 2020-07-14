import React from 'react'
import {
  SEO,
  Grid,
  CenteredBlock,
  SkillCard,
  ProjectCard,
  Card,
  CardBody,
  CTAButton,
  CardHeader,
  CardHeaderText,
  ContentSeparator,
} from '../components'
import {
  ISkillsetAllMarkdownRemark,
  IProjectsAllMarkdownRemark,
  ISkillsetEdge,
  IProjectsEdge,
} from '../templates/interfaces'
import styled, { StyledComponent } from 'styled-components'
import { theme } from '../data/theme'

export interface ISiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }

  skillsetData: ISkillsetAllMarkdownRemark

  programmingData: IProjectsAllMarkdownRemark
}

const LiftedUpWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  margin: -8rem auto 0;

  @media ${theme.breakpoints.max.smartphone} {
    margin: 0 auto;
  }
`

export function IndexLayout({ data }: { data: ISiteMetadata }): JSX.Element {
  return (
    <>
      <SEO
        title={`Homepage`}
        description={data.site.siteMetadata.description}
      />
      <LiftedUpWrapper>
        <ContentSeparator>
          <CenteredBlock maxWidth={'110rem'}>
            <Grid columns={3}>
              <div>
                <Grid>
                  <Card>
                    <CardBody>
                      <h1>Why I make things</h1>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardHeaderText>
                        <h1>TL;WR</h1>
                      </CardHeaderText>
                    </CardHeader>
                    <CardBody>
                      <p>
                        I find the ability to create something out of nothing
                        but some text and symbols just absolutely fantastic.
                      </p>
                      <p>
                        I learned about programming at college, where it was
                        just part of the entire curriculum. During my time
                        there, I taught myself mostly CSS & HTML, but also a
                        decent amount of JavaScript. I played with React, Vue,
                        MeteorJS, CSS preprocessors like Stylus and SASS.
                      </p>
                      <p>
                        Post-college I started experimenting with Back-end
                        NodeJS, GraphQL, MongoDB and, most importantly,
                        TypeScript. I also dipped my toes in the Angular
                        framework and messed with some Svelte. But whatever
                        framework / library you want to work with honestly
                        doesn't matter. You can learn to use & master a
                        framework, yet understanding the underlying language is
                        what matters most.
                      </p>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <CTAButton to={'/about'}>Let me tell you...</CTAButton>
                    </CardBody>
                  </Card>
                </Grid>
              </div>
              <div>
                <Grid>
                  <Card>
                    <CardBody>
                      <h1>How I make things</h1>
                    </CardBody>
                  </Card>
                  {data.skillsetData.edges.map(
                    (
                      { node: { frontmatter } }: ISkillsetEdge,
                      i: number
                    ): JSX.Element => (
                      <SkillCard
                        level={frontmatter.level || 0}
                        title={frontmatter.title}
                        description={frontmatter.excerpt}
                        time={frontmatter.time}
                        key={i}
                        index={i}
                        skillColor={frontmatter.skillColor}
                      />
                    )
                  )}
                  <Card>
                    <CardBody>
                      <CTAButton to={'/skillset'}>
                        What else can I do?
                      </CTAButton>
                    </CardBody>
                  </Card>
                </Grid>
              </div>
              <div>
                <Grid>
                  <Card>
                    <CardBody>
                      <h1>What I have made</h1>
                    </CardBody>
                  </Card>
                  {data.programmingData.edges.map(
                    (
                      { node: { frontmatter, timeToRead } }: IProjectsEdge,
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
                  <Card>
                    <CardBody>
                      <CTAButton to={'/projects'}>
                        Read more about my projects
                      </CTAButton>
                    </CardBody>
                  </Card>
                </Grid>
              </div>
            </Grid>
          </CenteredBlock>
        </ContentSeparator>
      </LiftedUpWrapper>
    </>
  )
}
