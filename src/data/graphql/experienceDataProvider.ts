// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { ExperienceAllMarkdownRemark } from '../../types/graphql.types'

export type ExperienceData = {
  experienceData: ExperienceAllMarkdownRemark
}

export function experienceDataProvider(): ExperienceData {
  const data: ExperienceData = useStaticQuery(graphql`
    query {
      experienceData: allMdx(
        filter: { generatedRoute: { regex: "/experiences/" } }
        sort: { fields: frontmatter___dateEnd, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              excerpt
              dateStart
              dateEnd
              backgroundColor
              type
            }
            excerpt
          }
        }
      }
    }
  `)

  return data
}
