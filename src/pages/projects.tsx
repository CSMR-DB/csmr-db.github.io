import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Layout } from '../components/Layout'
import { Grid } from '../components/Grid'
import { IEdge, IProjectsAllMarkdownRemark } from '../templates/interfaces'
import { ProjectCard } from '../components/ProjectCard'
import { SEO } from '../components/SEO'
import { CenteredBlock } from '../components/CenteredBlock'
import { ContentSeparator } from '../components/ContentSeparator'

// tslint:disable-next-line: no-void-expression
const PAGE_QUERY: void = graphql`
  fragment SharedQuery on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          path
          category
          title
          featuredVideo
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          excerpt
          tags
          date
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

  query {
    programmingData: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/projects/" }, category: { eq: "Programming" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      ...SharedQuery
    }

    graphicDesignData: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/projects/" }, category: { eq: "Graphic Design" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      ...SharedQuery
    }
  }
`

const ProjectsList: () => JSX.Element = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Projects" description="These are some projects I did" />
      <ContentSeparator>
        <CenteredBlock>
          <h1>Hey! These are some of my projects</h1>
          <p>
            In chronological order, from newest to oldest. These are some projects
            I worked on that I am proud of, that taught me a lot and / or got me
            some decent grades.
          </p>
        </CenteredBlock>
        <Grid
          columns={'repeat(auto-fill, minmax(32rem,1fr))'}
          maxWidth={'100rem'}
        >
          <StaticQuery
            query={PAGE_QUERY}
            render={({
              programmingData,
            }: {
              programmingData: IProjectsAllMarkdownRemark
            }): JSX.Element[] => {
              return programmingData.edges.map(
                ({ node: { frontmatter, timeToRead } }: IEdge, i: number) => (
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
              )
            }}
          />
        </Grid>
      </ContentSeparator>
      <ContentSeparator>
        <CenteredBlock>
          <h1>I have also done some Graphic Design stuff</h1>
          <p>
            Not everything in here has to do with programming.
            I also included some projects I made using Adobe Illustrator and After
            Effects. The first projects were part of courses in a timeframe of
            about 10 weeks. That meant going from 0 - 100 in roughly 10 weeks,
            allocating time for other courses as well (about 4 at a time).
          </p>
        </CenteredBlock>
        <Grid
          columns={'repeat(auto-fill, minmax(32rem,1fr))'}
          maxWidth={'100rem'}
        >
          <StaticQuery
            query={PAGE_QUERY}
            render={({
              graphicDesignData,
            }: {
              graphicDesignData: IProjectsAllMarkdownRemark
            }): JSX.Element[] => {
              return graphicDesignData.edges.map(
                ({ node: { frontmatter, timeToRead } }: IEdge, i: number) => (
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
              )
            }}
          />
        </Grid>
      </ContentSeparator>
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ProjectsList
