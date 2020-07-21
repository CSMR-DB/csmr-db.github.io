import React from 'react'

import {
  ISkillsetAllMarkdownRemark,
  IProjectsAllMarkdownRemark,
} from '../types/interfaces'

import { CardHeader } from '../components/compositions/card/CardHeader'
import { CardBody } from '../components/compositions/card/CardBody'
import { CardHeaderText } from '../components/compositions/card/CardHeaderText'
import { SkillCards } from '../components/compositions/card/skillcard/SkillCards'
import { ProjectCards } from '../components/compositions/card/projectcard/ProjectCards'
import { LiftedUpWrapper } from '../components/LifedUpWrapper'
import { SEO } from '../components/compositions/SEO'
import { ContentSeparator } from '../components/ContentSeparator'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { Card } from '../components/compositions/card/Card'
import { CTAButton } from '../components/CTAButton'

export interface IIndexLayoutProps {
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

export function IndexLayout({
  site,
  skillsetData,
  programmingData,
}: IIndexLayoutProps): JSX.Element {
  return (
    <>
      <SEO title={`Homepage`} description={site.siteMetadata.description} />
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
                  <SkillCards edges={skillsetData.edges} />
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
                  <ProjectCards edges={programmingData.edges} />
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
