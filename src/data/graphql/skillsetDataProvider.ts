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
          fileAbsolutePath
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
          fileAbsolutePath: { regex: "/skillset/" }
          frontmatter: { favorite: { eq: true } }
        }
        sort: { fields: frontmatter___time, order: DESC }
        limit: 3
      ) {
        ...SkillsetDataFragment
      }

      all: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/skillset/" } }
        sort: { fields: frontmatter___time, order: DESC }
      ) {
        ...SkillsetDataFragment
      }
    }
  `)

  return data
}
