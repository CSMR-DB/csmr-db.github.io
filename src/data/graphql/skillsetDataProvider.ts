// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ISkillsetAllMarkdownRemark } from '../../types/interfaces'

export interface ISkillsetData {
  top: ISkillsetAllMarkdownRemark
  all: ISkillsetAllMarkdownRemark
}

export function skillsetDataProvider(): ISkillsetData {
  const data: ISkillsetData = useStaticQuery(graphql`
    fragment SkillsetDataFragment on MarkdownRemarkConnection {
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

    query {
      top: allMarkdownRemark(
        filter: {
          frontmatter: { path: { regex: "/tag/" }, favorite: { eq: true } }
        }
        sort: { fields: frontmatter___time, order: DESC }
        limit: 3
      ) {
        ...SkillsetDataFragment
      }

      all: allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/tag/" } } }
        sort: { fields: frontmatter___time, order: DESC }
      ) {
        ...SkillsetDataFragment
      }
    }
  `)

  return data
}
