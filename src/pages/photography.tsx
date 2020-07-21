import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Layout } from '../components/Layout'
import {
  PhotographyLayout,
  IPhotographyLayoutProps,
} from '../layouts/PhotographyLayout'

// tslint:disable-next-line: no-void-expression
const PAGE_QUERY: void = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)/" }
        relativeDirectory: { in: "photography" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 960, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

function PhotographyPage(): JSX.Element {
  return (
    <Layout>
      <StaticQuery
        query={PAGE_QUERY}
        render={(props: IPhotographyLayoutProps): JSX.Element => (
          <PhotographyLayout {...props} />
        )}
      />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default PhotographyPage
