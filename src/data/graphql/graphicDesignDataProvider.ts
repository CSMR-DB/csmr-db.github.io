// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IProjectsAllMarkdownRemark } from '../../types/interfaces'

export interface IGraphicDesignData {
  graphicDesignData: IProjectsAllMarkdownRemark
}

export function graphicDesignDataProvider(): IGraphicDesignData {
  const data: IGraphicDesignData = useStaticQuery(graphql`
    query {
      graphicDesignData: allMarkdownRemark(
        filter: {
          frontmatter: {
            path: { regex: "/projects/" }
            category: { eq: "Graphic Design" }
          }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
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
