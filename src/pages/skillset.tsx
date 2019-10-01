import React from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { SkillCard } from '../components/SkillCard'
import styled, { StyledComponent } from 'styled-components'
import { ExperienceCard } from '../components/ExperienceCard'
import { CenteredBlock } from '../components/CenteredBlock'
import { Grid } from '../components/grid'
import { skills, ISkill } from '../data/skills'
import { StyledLink } from '../components/StyledLink'

const ContentSeparator: StyledComponent<'div', any, {}, never> = styled.div`
  padding-bottom: 4rem;
`

const SkillsetPage: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <SEO
      title="Skillset"
      description="This is my trying to provide you with an indication about my capabilities & goals looking forward"
    />
    <CenteredBlock>
      <ContentSeparator>
        <h1>Education</h1>
        <ExperienceCard
          name="Digital Media & Communication"
          type="HBO"
          icon="icons/hu_logo.jpg"
          dateRange="sep 2015 - feb 2019"
          description="This is where my interest in programming started, as well as my first steps into graphic design. I learned about marketing and doing user research. Halfway through my final year I decided to drop out due to lack of motivation as I wanted to pursue learning more about programming."
          backgroundColor="#298CCD"
        />
      </ContentSeparator>
      <ContentSeparator>
        <h1>Professional experience</h1>
        <ExperienceCard
          name="SmartHOTEL"
          type="Internship"
          icon="icons/smarthotel_logo.png"
          dateRange="sep 2017 - feb 2018"
          description="I worked on a data visualization dashboard to provide the company with
        insights in their key metrics, to see how their BHAG (Big, Hairy,
        Audacious Goal) was progressing. This project was built using MeteorJS,
        React (with styled-components), D3.js, GraphQL and the database of
        choice was MongoDB. It was deployed locally on an Ubuntu Server VM and
        had a C# application to collect the data running on a Windows Server VM.
        There is nothing to show for it, since it was an internal project. No
        access from outside."
          backgroundColor="#F18600"
        />
      </ContentSeparator>
      <ContentSeparator>
        <h1>So, you want to know more?</h1>
        <p>
          From my experience so far, programming is about 20% actually writing
          code and 80% "looking stuff up", gathering requirements, defining test
          scenarios. Obviously, this can vary on a daily basis. But when it
          comes to actually creating, how do I think I'd score? The time spent
          is a rough estimate and should be seen as a total of the 20 / 80
          split.
        </p>
      </ContentSeparator>
    </CenteredBlock>
    <ContentSeparator>
      <Grid columns="repeat(auto-fill, minmax(20rem, 1fr))" maxWidth="100rem">
        {skills.programming.map((code: ISkill, i: number) => (
          <SkillCard
            level={code.level}
            title={code.title}
            description={code.description}
            time={code.time}
            key={i}
          />
        ))}
      </Grid>
    </ContentSeparator>
    <ContentSeparator>
      <CenteredBlock>
        <p>
          I would like to point out that these scores are more "relative" to
          each other than "absolute". Whatever the subject, there's still a lot
          to learn. I also know that whatever problem I may face dealing with
          code, eventually a solution will come. I also know that becoming an
          expert in any field takes at least 10.000 hours of practise. More
          often than not, I'll be browsing Medium to look for new blogposts
          regarding JS. Always trying to imrpove. Most importantly investing
          more time in JavaScript / TypeScript than any specific framework, so
          that it'll be easier to pick up whatever comes next.
        </p>
        <p>
          But, as I also mention in the{' '}
          <StyledLink to="/about">about me section</StyledLink>, I have some
          experience with other programs outside of programming.
        </p>
      </CenteredBlock>
    </ContentSeparator>
    <Grid columns="repeat(auto-fill, minmax(20rem, 1fr))" maxWidth="100rem">
      {skills.graphics.map((graphic: ISkill, i: number) => (
        <SkillCard
          level={graphic.level}
          title={graphic.title}
          description={graphic.description}
          time={graphic.time}
          key={i}
        />
      ))}
    </Grid>
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default SkillsetPage
