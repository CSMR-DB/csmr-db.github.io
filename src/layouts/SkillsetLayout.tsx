import React from 'react'

import {
  ExperienceAllMarkdownRemark,
  SkillsetAllMarkdownRemark,
} from '../types/graphql.types'

import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { ContentSeparator } from '../components/ContentSeparator'
import { SkillCards } from '../components/compositions/card/skillcard/SkillCards'
import { ExperienceCards } from '../components/compositions/card/experiencecard/ExperienceCards'
import { ExperienceCard } from '../components/compositions/card/experiencecard/ExperienceCard'

export interface ISkillsetLayoutProps {
  programmingData: SkillsetAllMarkdownRemark
  graphicDesignData: SkillsetAllMarkdownRemark
  experienceData: ExperienceAllMarkdownRemark
}

export function SkillsetLayout({
  programmingData,
  graphicDesignData,
  experienceData,
}: ISkillsetLayoutProps): JSX.Element {
  return (
    <Layout>
      <CenteredBlock>
        <ContentSeparator>
          <h1>This is what I have developed with</h1>
          <p>
            A rough estimation of the total time I've spent on everything is
            included.
          </p>
        </ContentSeparator>
      </CenteredBlock>
      <ContentSeparator>
        <Grid
          $columns="repeat(auto-fill, minmax(25rem, 1fr))"
          $maxWidth="160rem"
        >
          <SkillCards edges={programmingData.edges} />
        </Grid>
      </ContentSeparator>
      <CenteredBlock>
        <ContentSeparator>
          <h1>I have also worked with graphic design</h1>
        </ContentSeparator>
      </CenteredBlock>
      <ContentSeparator>
        <Grid
          $columns="repeat(auto-fill, minmax(25rem, 1fr))"
          $maxWidth="160rem"
        >
          <SkillCards edges={graphicDesignData.edges} />
        </Grid>
      </ContentSeparator>
      <CenteredBlock>
        <ContentSeparator>
          <h1>Education</h1>
          <ExperienceCard
            name="Digital Media & Communication"
            type="HBO"
            icon="icons/hu_logo.jpg"
            dateStart="2015-09-05"
            dateEnd="2019-02-04"
            description="This is where my interest in programming started, as well as my first steps into graphic design. I learned about marketing and doing user research. Halfway through my final year I decided to drop out due to lack of motivation as I wanted to pursue learning more about programming."
            backgroundColor="#298CCD"
            index={0}
          />
        </ContentSeparator>
        <ContentSeparator>
          <h1>Professional experience</h1>
          <Grid>
            <ExperienceCards edges={experienceData.edges} />
          </Grid>
        </ContentSeparator>
      </CenteredBlock>
    </Layout>
  )
}
