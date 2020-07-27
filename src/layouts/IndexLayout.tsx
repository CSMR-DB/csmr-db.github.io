import React from 'react'

import {
  ISkillsetAllMarkdownRemark,
  IProjectsAllMarkdownRemark,
} from '../types/interfaces'

import { Layout } from '../components/Layout'
import { CardHeader } from '../components/compositions/card/CardHeader'
import { CardBody } from '../components/compositions/card/CardBody'
import { CardHeaderText } from '../components/compositions/card/CardHeaderText'
import { SkillCards } from '../components/compositions/card/skillcard/SkillCards'
import { ProjectCards } from '../components/compositions/card/projectcard/ProjectCards'
import { LiftedUpWrapper } from '../components/LifedUpWrapper'
import { ContentSeparator } from '../components/ContentSeparator'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { Card } from '../components/compositions/card/Card'
import { ReadMore } from '../components/compositions/ReadMore'

export interface IIndexLayoutProps {
  skillsetData: ISkillsetAllMarkdownRemark

  programmingData: IProjectsAllMarkdownRemark
}

export function IndexLayout({
  skillsetData,
  programmingData,
}: IIndexLayoutProps): JSX.Element {
  return (
    <Layout isLandingPage={true}>
      <LiftedUpWrapper>
        <ContentSeparator>
          <CenteredBlock $maxWidth={'110rem'}>
            <Grid $columns={3}>
              <div>
                <Grid>
                  <ReadMore
                    title={'Why I make things'}
                    link={{ path: '/about', text: 'my story' }}
                  />
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
                </Grid>
              </div>
              <div>
                <Grid>
                  <ReadMore
                    title={'How I make things'}
                    link={{ path: '/skillset', text: 'my toolbelt' }}
                  />
                  <SkillCards edges={skillsetData.edges} />
                </Grid>
              </div>
              <div>
                <Grid>
                  <ReadMore
                    title={'What I have made'}
                    link={{ path: '/projects', text: 'my work / experiments' }}
                  />
                  <ProjectCards edges={programmingData.edges} />
                </Grid>
              </div>
            </Grid>
          </CenteredBlock>
        </ContentSeparator>
      </LiftedUpWrapper>
    </Layout>
  )
}
