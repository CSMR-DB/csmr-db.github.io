import React from 'react'
import { SEO } from '../components/SEO'
import { SkillCard } from '../components/SkillCard'
import { ExperienceCard } from '../components/ExperienceCard'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/Grid'
import { StyledLink } from '../components/StyledLink'
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

export function SkillsetLayout({ skillsetData, experienceData }: ISkillsetLayoutProps): JSX.Element {
  return (
    <>
      <SEO
        title="Skillset"
        description="This is my trying to provide you with an indication about my capabilities & goals looking forward"
      />
      <CenteredBlock>
        <ContentSeparator>
          <h1>So, you want to know more?</h1>
          <p>
            From my experience so far, programming is about 20% actually
            writing code and 80% "looking stuff up", gathering requirements,
            defining test scenarios. Obviously, this can vary on a daily
            basis. But when it comes to actually creating, how do I think I'd
            score? The time spent is a rough estimate and should be seen as a
            total of the 20 / 80 split.
            </p>
        </ContentSeparator>
      </CenteredBlock>
      <ContentSeparator>
        <Grid
          columns="repeat(auto-fill, minmax(25rem, 1fr))"
          maxWidth="160rem"
        >
          {skillsetData.edges.map(
            ({ node: { frontmatter } }: ISkillsetEdge, i: number): JSX.Element => (
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
        <p>
          I would like to point out that these scores are more "relative" to
          each other than "absolute". Whatever the subject, there's still a
          lot to learn. I also know that whatever problem I may face dealing
          with code, eventually a solution will come. I also know that
          becoming an expert in any field takes at least 10.000 hours of
          practise. More often than not, I'll be browsing Medium to look for
          new blogposts regarding JS. Always trying to improve. Most
          importantly investing more time in JavaScript / TypeScript than any
          specific framework, so that it'll be easier to pick up whatever
          comes next.
          </p>
        <p>
          But, as I also mention in the{' '}
          <StyledLink to="/about">about me section</StyledLink>, I have some
            experience with other programs outside of programming.
          </p>
      </CenteredBlock>
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
              ({ node: { frontmatter } }: IExperienceEdge, i: number): JSX.Element => (
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