// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ProjectsAllMarkdownRemark } from '../../types/graphql.types'

export type ProjectsData = {
  all: ProjectsAllMarkdownRemark
  top: ProjectsAllMarkdownRemark
  allProgramming: ProjectsAllMarkdownRemark
  allGraphicDesign: ProjectsAllMarkdownRemark
}

export function projectsDataProvider(): ProjectsData {
  const data: ProjectsData = useStaticQuery(graphql`
    fragment ProjectsDataFragment on MdxConnection {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            favorite
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
      top: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { favorite: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        ...ProjectsDataFragment
      }

      all: allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        ...ProjectsDataFragment
      }

      allProgramming: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { category: { eq: "Programming" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        ...ProjectsDataFragment
      }

      allGraphicDesign: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { category: { eq: "Graphic Design" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              favorite
              category
              title
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
    }
  `)

  return data
}
