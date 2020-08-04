// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { SkillsetAllMarkdownRemark } from '../../types/graphql.types'

export type SkillsetData = {
  top: SkillsetAllMarkdownRemark
  all: SkillsetAllMarkdownRemark
  allProgramming: SkillsetAllMarkdownRemark
  allGraphicDesign: SkillsetAllMarkdownRemark
}

export function skillsetDataProvider(): SkillsetData {
  const data: SkillsetData = useStaticQuery(graphql`
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

      allProgramming: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/skillset/" }
          frontmatter: { category: { eq: "Programming" } }
        }
        sort: { fields: frontmatter___time, order: DESC }
      ) {
        ...SkillsetDataFragment
      }

      allGraphicDesign: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/skillset/" }
          frontmatter: { category: { eq: "Graphic Design" } }
        }
        sort: { fields: frontmatter___time, order: DESC }
      ) {
        ...SkillsetDataFragment
      }
    }
  `)

  return data
}
