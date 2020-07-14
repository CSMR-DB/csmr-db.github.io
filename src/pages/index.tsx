import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IndexLayout, ISiteMetadata } from '../layouts/IndexLayout'
import { IProjectsLayoutProps } from '../layouts/ProjectsLayout'
import { ISkillsetLayoutProps } from '../layouts/SkillsetLayout'

const IndexPage: () => JSX.Element = (): JSX.Element => {
  const data: ISiteMetadata &
    IProjectsLayoutProps &
    // tslint:disable-next-line: no-void-expression
    ISkillsetLayoutProps = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }

      skillsetData: allMarkdownRemark(
        filter: {
          frontmatter: { path: { regex: "/tag/" }, favorite: { eq: true } }
        }
        sort: { fields: frontmatter___time, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              excerpt
              level
              skillColor
              time
              favorite
            }
            excerpt
          }
        }
      }

      programmingData: allMarkdownRemark(
        filter: {
          frontmatter: {
            path: { regex: "/projects/" }
            category: { eq: "Programming" }
            favorite: { eq: true }
          }
        }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        ...SharedOPQuery
      }
    }
  `)

  return <IndexLayout data={data} />
}

// tslint:disable-next-line: no-default-export
export default IndexPage
