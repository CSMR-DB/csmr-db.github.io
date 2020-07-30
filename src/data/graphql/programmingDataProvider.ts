// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ProjectsAllMarkdownRemark } from '../../types/graphql.types'

export type ProgrammingData = {
  all: ProjectsAllMarkdownRemark
  top: ProjectsAllMarkdownRemark
}

export function programmingDataProvider(): ProgrammingData {
  const data: ProgrammingData = useStaticQuery(graphql`
    fragment ProgrammingDataFragment on MarkdownRemarkConnection {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            favorite
            path
            category
            title
            featuredVideo
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER) {
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
          excerpt
          id
        }
      }
    }

    query {
      top: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: {
            category: { eq: "Programming" }
            favorite: { eq: true }
          }
        }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        ...ProgrammingDataFragment
      }

      all: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { category: { eq: "Programming" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        ...ProgrammingDataFragment
      }
    }
  `)

  return data
}
