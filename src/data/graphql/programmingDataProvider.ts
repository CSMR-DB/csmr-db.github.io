// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IProjectsAllMarkdownRemark } from '../../types/interfaces'

export interface IProgrammingData {
  all: IProjectsAllMarkdownRemark
  top: IProjectsAllMarkdownRemark
}

export function programmingDataProvider(): IProgrammingData {
  const data: IProgrammingData = useStaticQuery(graphql`
    fragment ProgrammingDataFragment on MarkdownRemarkConnection {
      edges {
        node {
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
          frontmatter: {
            path: { regex: "/projects/" }
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
          frontmatter: {
            path: { regex: "/projects/" }
            category: { eq: "Programming" }
          }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        ...ProgrammingDataFragment
      }
    }
  `)

  return data
}
