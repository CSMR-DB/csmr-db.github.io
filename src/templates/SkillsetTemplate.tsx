import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import Img, { FluidObject } from 'gatsby-image'
import {
  ISingleItemData,
  IMarkdownRemark,
  IExtendedFrontmatter,
} from './interfaces'
import { ArticleTags } from '../components/ArticleTags'

// tslint:disable-next-line: no-default-export
export default function ProjectTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: ISingleItemData): JSX.Element {
  const { markdownRemark }: ISingleItemData['data'] = data // data.markdownRemark holds our post data
  const { frontmatter, html }: IMarkdownRemark = markdownRemark
  const { featuredImage, tags }: IExtendedFrontmatter = frontmatter
  const fluid: FluidObject | undefined =
    featuredImage && featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <CenteredBlock>
        <article>
          <footer>
            <ArticleTags tags={tags} />
          </footer>
          <header>
            <h1>{frontmatter.title}</h1>
            <h6>{frontmatter.date}</h6>
            {fluid && <Img fluid={fluid}></Img>}
            <p>{frontmatter.excerpt}</p>
          </header>
          <main dangerouslySetInnerHTML={{ __html: html }} />
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
