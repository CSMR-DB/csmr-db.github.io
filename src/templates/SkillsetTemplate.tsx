import React from 'react'
import { graphql } from 'gatsby'

import {
  SkillsetMarkdownRemark,
  ProjectsAllMarkdownRemark,
} from '../types/graphql.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { SEO } from '../components/compositions/SEO'
import { Layout } from '../components/Layout'
import { Grid } from '../components/Grid'
import { ContentSeparator } from '../components/ContentSeparator'
import { SkillCard } from '../components/compositions/card/skillcard/SkillCard'
import { CenteredBlock } from '../components/CenteredBlock'
import { ProjectCards } from '../components/compositions/card/projectcard/ProjectCards'

export interface ISkillsetTemplateProps {
  data: {
    allMdx: ProjectsAllMarkdownRemark
    mdx: SkillsetMarkdownRemark
  }
}

// tslint:disable-next-line: no-default-export
export default function SkillsetTemplate({
  data: {
    mdx: {
      generatedRoute,
      frontmatter: {
        skillColor = 'black',
        level = 0,
        title = 'Placeholder',
        excerpt: description = 'Description',
        time = 0,
        icon,
      },
    },
    allMdx: { edges },
  }, // this prop will be injected by the GraphQL query below.
}: ISkillsetTemplateProps): JSX.Element {
  return (
    <>
      <SEO
        title={`${title} · Tag`}
        description={description}
        siteMetadata={StaticDataManager.siteMetadata}
        route={generatedRoute}
      />
      <Layout>
        <ContentSeparator>
          <CenteredBlock>
            <SkillCard
              skillColor={skillColor}
              level={level}
              title={title}
              description={description}
              time={time}
              index={0}
              generatedRoute={generatedRoute}
              icon={icon}
            />
          </CenteredBlock>
        </ContentSeparator>
        <ContentSeparator>
          <Grid
            $columns={'repeat(auto-fill,minmax(32rem,1fr))'}
            $maxWidth={'100rem'}
          >
            <ProjectCards edges={edges} />
          </Grid>
        </ContentSeparator>
      </Layout>
    </>
  )
}

// tslint:disable-next-line: no-void-expression
export const pageQuery: void = graphql`
  query($path: String!, $tag: String!) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          generatedRoute
          frontmatter {
            title
            excerpt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
            tags
          }
          wordCount {
            words
            sentences
            paragraphs
          }
          timeToRead
          excerpt
          id
        }
      }
    }

    mdx(generatedRoute: { eq: $path }) {
      generatedRoute
      frontmatter {
        title
        excerpt
        level
        time
        skillColor
        icon
      }
    }
  }
`
