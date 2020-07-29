// tslint:disable: no-void-expression
import { graphql, useStaticQuery } from 'gatsby'

import { IExperienceAllMarkdownRemark } from '../../types/interfaces'

export interface IExperienceData {
  experienceData: IExperienceAllMarkdownRemark
}

export function experienceDataProvider(): IExperienceData {
  const data: IExperienceData = useStaticQuery(graphql`
    query {
      experienceData: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experiences/" } }
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
