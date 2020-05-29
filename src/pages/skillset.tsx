import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { SkillsetLayout, ISkillsetLayoutProps } from '../layouts/SkillSetLayout'

// tslint:disable-next-line: no-void-expression
const PAGE_QUERY: void = graphql`
  query {
    experienceData: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/experiences/" } } }
      sort: { fields: frontmatter___dateEnd }
    ) {
      edges {
        node {
          frontmatter {
            path
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
    skillsetData: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/tag/" } } }
      sort: { fields: frontmatter___time, order: DESC  }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            level
            skillColor
            time
          }
          excerpt
        }
      }
    }
  }
`

const SkillsetPage: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <StaticQuery
      query={PAGE_QUERY}
      render={({
        experienceData,
        skillsetData,
      }: ISkillsetLayoutProps): JSX.Element => (
        <SkillsetLayout skillsetData={skillsetData} experienceData={experienceData} />
      )}
    />
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default SkillsetPage
