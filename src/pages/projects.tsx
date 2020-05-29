import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Layout } from '../components/Layout'
import { ProjectsLayout, IProjectsLayoutProps } from '../layouts/ProjectsLayout'

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

const ProjectsPage: () => JSX.Element = (): JSX.Element => {
  return (
    <Layout>
      <StaticQuery
        query={PAGE_QUERY}
        render={({
          programmingData,
          graphicDesignData,
        }: IProjectsLayoutProps): JSX.Element => (
          <ProjectsLayout programmingData={programmingData} graphicDesignData={graphicDesignData} />
        )}
      />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default ProjectsPage
