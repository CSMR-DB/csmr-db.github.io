import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import {
  ISingleItemData,
  IMarkdownRemark,
  IExtendedFrontmatter,
} from './interfaces'
import { ArticleTags } from '../components/ArticleTags'
import { CardHeaderImageOrVideo } from '../components/CardHeaderImageOrVideo'
import { DateFormatted } from '../components/DateFormatted'
import styled, { StyledComponent } from 'styled-components'
import { ReadingTime } from '../components/ReadingTime'

const FullPageH1: StyledComponent<'h1', any, {}, never> = styled.h1`
  margin-top: 4rem;
`

// tslint:disable-next-line: no-default-export
export default function ProjectTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: ISingleItemData): JSX.Element {
  const { markdownRemark }: ISingleItemData['data'] = data // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead }: IMarkdownRemark = markdownRemark
  const {
    featuredImage,
    featuredVideo,
    tags,
  }: IExtendedFrontmatter = frontmatter

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
            <FullPageH1>{frontmatter.title}</FullPageH1>
            <h6>
              <DateFormatted dateString={frontmatter.date} /> ·{' '}
              <ReadingTime timeToRead={timeToRead} />
            </h6>
          </header>
          <p>{frontmatter.excerpt}</p>
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
