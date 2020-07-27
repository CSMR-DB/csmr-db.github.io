import React from 'react'
import { graphql } from 'gatsby'

import {
  IListItemData,
  ISingleItemData,
  ISkillsetFrontmatter,
  IProjectFrontmatter,
} from '../types/interfaces'
import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { Layout } from '../components/Layout'
import { Grid } from '../components/Grid'
import { ContentSeparator } from '../components/ContentSeparator'
import { SkillCard } from '../components/compositions/card/skillcard/SkillCard'
import { CenteredBlock } from '../components/CenteredBlock'
import { ProjectCards } from '../components/compositions/card/projectcard/ProjectCards'

// tslint:disable-next-line: no-default-export
export default function TagTemplate({
  data: {
    markdownRemark: {
      frontmatter: {
        skillColor = 'black',
        level = 0,
        title = 'Placeholder',
        excerpt: description = 'Description',
        time = 0,
      },
    },
    allMarkdownRemark: { edges },
  }, // this prop will be injected by the GraphQL query below.
}: IListItemData<IProjectFrontmatter> &
  ISingleItemData<ISkillsetFrontmatter>): JSX.Element {
  return (
    <>
      <SEO
        title={`${title} · Tag`}
        description={description}
        siteMetadata={StaticDataManager.siteMetadata}
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
  query($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredVideo
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
          html
        }
      }
    }

    markdownRemark(
      frontmatter: { title: { eq: $tag }, path: { eq: "/tag/" } }
    ) {
      frontmatter {
        path
        title
        excerpt
        level
        time
        skillColor
      }
    }
  }
`
