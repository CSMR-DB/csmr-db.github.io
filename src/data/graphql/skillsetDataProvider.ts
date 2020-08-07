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
    fragment SkillsetDataFragment on MdxConnection {
      edges {
        node {
          generatedRoute
          frontmatter {
            title
            excerpt
            level
            skillColor
            time
            favorite
            icon
          }
          body
          excerpt
        }
      }
    }

    query {
      top: allMdx(
        filter: {
          generatedRoute: { regex: "/skillset/" }
          frontmatter: { favorite: { eq: true } }
        }
        sort: { fields: frontmatter___time, order: DESC }
        limit: 3
      ) {
        ...SkillsetDataFragment
      }

      all: allMdx(
        filter: { generatedRoute: { regex: "/skillset/" } }
        sort: { fields: frontmatter___time, order: DESC }
      ) {
        ...SkillsetDataFragment
      }

      allProgramming: allMdx(
        filter: {
          generatedRoute: { regex: "/skillset/" }
          frontmatter: { category: { eq: "Programming" } }
        }
        sort: { fields: frontmatter___time, order: DESC }
      ) {
        ...SkillsetDataFragment
      }

      allGraphicDesign: allMdx(
        filter: {
          generatedRoute: { regex: "/skillset/" }
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
