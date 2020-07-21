import React from 'react'
import { graphql } from 'gatsby'

import { ISingleItemData, IProjectFrontmatter } from '../types/interfaces'

import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import { ArticleTags } from '../components/ArticleTags'
import { CardHeaderImageOrVideo } from '../components/compositions/card/CardHeaderImageOrVideo'
import { DateFormatted } from '../components/DateFormatted'
import { ReadingTime } from '../components/ReadingTime'
import { FullPageH1 } from '../components/FullPageH1'

// tslint:disable-next-line: no-default-export
export default function ArticleTemplate({
  data: {
    markdownRemark: {
      frontmatter: { featuredImage, featuredVideo, tags, date, title, excerpt },
      html,
      timeToRead,
    },
  }, // this prop will be injected by the GraphQL query below.
}: ISingleItemData<IProjectFrontmatter>): JSX.Element {
  return (
    <Layout>
      <CenteredBlock>
        <article>
          <header>
            <CardHeaderImageOrVideo
              video={featuredVideo}
              image={featuredImage}
              maxHeight="auto"
            />
            <FullPageH1>{title}</FullPageH1>
            <h6>
              <DateFormatted dateString={date} /> ·{' '}
              <ReadingTime timeToRead={timeToRead} />
            </h6>
          </header>
          <p>{excerpt}</p>
          <main dangerouslySetInnerHTML={{ __html: html }} />
          <footer>
            <ArticleTags tags={tags} />
          </footer>
        </article>
      </CenteredBlock>
    </Layout>
  )
}

// tslint:disable-next-line: no-void-expression
export const pageQuery: void = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        category
        path
        title
        tags
        excerpt
        featuredVideo
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
