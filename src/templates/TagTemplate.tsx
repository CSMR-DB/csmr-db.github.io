import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import {
  IListItemData,
  IAllMarkdownRemark,
  IEdge,
  ISingleItemData,
  IProjectsAllMarkdownRemark,
} from './interfaces'
import { ProjectCard } from '../components/ProjectCard'
import { Grid } from '../components/Grid'
import { ContentSeparator } from '../components/ContentSeparator'
import { SkillCard } from '../components/SkillCard'
import { CenteredBlock } from '../components/CenteredBlock'

// tslint:disable-next-line: no-default-export
export default function ProjectTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: IListItemData<IProjectsAllMarkdownRemark> & ISingleItemData): JSX.Element {
  const {
    allMarkdownRemark,
    markdownRemark,
  }: IListItemData<IProjectsAllMarkdownRemark>['data'] &
    ISingleItemData['data'] = data // data.markdownRemark holds our post data
  const { edges }: IAllMarkdownRemark = allMarkdownRemark

  return (
    <Layout>
      <ContentSeparator>
        <CenteredBlock>
          {markdownRemark ? (
            <SkillCard
              level={markdownRemark.frontmatter.level || 0}
              title={markdownRemark.frontmatter.title}
              description={markdownRemark.frontmatter.excerpt}
              time={markdownRemark.frontmatter.time}
            />
          ) : (
            <SkillCard
              level={0}
              title={'Placeholder'}
              description="Description"
            />
          )}
        </CenteredBlock>
      </ContentSeparator>
      <ContentSeparator>
        <Grid
          columns={'repeat(auto-fill,minmax(32rem,1fr))'}
          maxWidth={'100rem'}
        >
          {edges.length > 0 &&
            edges.map(
              (
                {
                  node: {
                    frontmatter: {
                      tags,
                      title,
                      date,
                      excerpt,
                      featuredImage,
                      featuredVideo,
                      path,
                    },
                    timeToRead,
                  },
                }: IEdge,
                i: number
              ): JSX.Element => (
                <ProjectCard
                  body={excerpt}
                  title={title}
                  key={i}
                  tags={tags}
                  date={date}
                  image={featuredImage}
                  video={featuredVideo}
                  path={path}
                  timeToRead={timeToRead}
                />
              )
            )}
        </Grid>
      </ContentSeparator>
    </Layout>
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

    markdownRemark(frontmatter: { title: { eq: $tag } }) {
      frontmatter {
        path
        title
        excerpt
        level
        time
      }
    }
  }
`
