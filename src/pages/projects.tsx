import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Layout } from '../components/Layout'
import { Grid } from '../components/Grid'
import { IEdge, IProjectsAllMarkdownRemark } from '../templates/interfaces'
import { ProjectCard } from '../components/ProjectCard'
import { SEO } from '../components/SEO'
import { CenteredBlock } from '../components/CenteredBlock'

// tslint:disable-next-line: no-void-expression
const PAGE_QUERY: void = graphql`
  query {
    projectsData: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/projects/" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
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
  }
`

const ProjectsList: () => JSX.Element = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Projects" description="These are some projects I did" />
      <CenteredBlock>
        <h1>Hey! These are some of my projects</h1>
        <p>
          In chronological order, from newest to oldest. These are some projects
          I worked on that I am proud of, that taught me a lot and / or got me
          some decent grades. Not everything in here has to do with programming.
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
            projectsData,
          }: {
            projectsData: IProjectsAllMarkdownRemark
          }): JSX.Element[] => {
            return projectsData.edges.map(
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
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ProjectsList
