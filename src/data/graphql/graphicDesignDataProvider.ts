// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ProjectsAllMarkdownRemark } from '../../types/graphql.types'

export type GraphicDesignData = {
  graphicDesignData: ProjectsAllMarkdownRemark
}

export function graphicDesignDataProvider(): GraphicDesignData {
  const data: GraphicDesignData = useStaticQuery(graphql`
    query {
      graphicDesignData: allMarkdownRemark(
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
              path
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
