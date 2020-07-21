import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { IImageSharpAllFiles } from '../types/interfaces'

import { Layout } from '../components/Layout'
import { AboutLayout } from '../layouts/AboutLayout'

// tslint:disable-next-line: no-void-expression
const PAGE_QUERY: void = graphql`
  fragment ImagesFragment on FileConnection {
    edges {
      node {
        name
        relativePath
        childImageSharp {
          fluid(maxWidth: 240, maxHeight: 240, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }

  query {
    wallpapers: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { regex: "/bio/games/" }
      }
      limit: 14
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    squares: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { regex: "/photography/" }
      }
      limit: 9
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 240, maxHeight: 240, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    posters: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { regex: "/bio/series/" }
      }
      limit: 28
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 270, maxHeight: 480, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

function AboutMe(): JSX.Element {
  return (
    <Layout>
      {/* <AboutLayout /> */}
      <StaticQuery
        query={PAGE_QUERY}
        render={(data: {
          wallpapers: IImageSharpAllFiles
          squares: IImageSharpAllFiles
          posters: IImageSharpAllFiles
        }): JSX.Element => <AboutLayout {...data} />}
      />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default AboutMe
