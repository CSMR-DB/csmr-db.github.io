import React from 'react'
import { SEO } from '../components/SEO'
import { SkillCard } from '../components/SkillCard'
import { ExperienceCard } from '../components/ExperienceCard'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import {
  IExperienceAllMarkdownRemark,
  IExperienceEdge,
  ISkillsetAllMarkdownRemark,
  ISkillsetEdge,
} from '../templates/interfaces'
import { ContentSeparator } from '../components/ContentSeparator'

export interface ISkillsetLayoutProps {
  skillsetData: ISkillsetAllMarkdownRemark
  experienceData: IExperienceAllMarkdownRemark
}

export function SkillsetLayout({
  skillsetData,
  experienceData,
}: ISkillsetLayoutProps): JSX.Element {
  return (
    <>
      <SEO
        title="Skillset"
        description="This is my trying to provide you with an indication about my capabilities & goals looking forward"
      />
      <CenteredBlock>
        <ContentSeparator>
          <h1>This is what I have worked with</h1>
          <p>
            A rough estimation of the total time I've spent on everything is
            included.
          </p>
        </ContentSeparator>
      </CenteredBlock>
      <ContentSeparator>
        <Grid columns="repeat(auto-fill, minmax(25rem, 1fr))" maxWidth="160rem">
          {skillsetData.edges.map(
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
            {experienceData.edges.map(
              (
                { node: { frontmatter } }: IExperienceEdge,
                i: number
              ): JSX.Element => (
                <ExperienceCard
                  name={frontmatter.title}
                  type={frontmatter.type}
                  description={frontmatter.excerpt}
                  icon={`icons/${frontmatter.title.toLocaleLowerCase()}_logo.png`}
                  backgroundColor={frontmatter.backgroundColor}
                  dateStart={frontmatter.dateStart}
                  dateEnd={frontmatter.dateEnd}
                  key={i}
                  index={i}
                />
              )
            )}
          </Grid>
        </ContentSeparator>
      </CenteredBlock>
    </>
  )
}
