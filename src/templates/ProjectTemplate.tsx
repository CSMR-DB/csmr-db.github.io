import React from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { helmetJsonLdProp } from 'react-schemaorg'
import { CreativeWork } from 'schema-dts'

import { ProjectMarkdownRemark } from '../types/graphql.types'
import { StaticDataManager } from '../data/StaticDataManager'

import { SEO } from '../components/compositions/SEO'
import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import { ArticleTags } from '../components/compositions/ArticleTags'
import { DateFormatted } from '../components/DateFormatted'
import { ReadingTime } from '../components/ReadingTime'
import { FullPageH1 } from '../components/FullPageH1'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export interface IProjectTemplateProps {
  data: { mdx: ProjectMarkdownRemark }
}

// tslint:disable-next-line: no-default-export
export default function ProjectTemplate({
  data: {
    mdx: {
      generatedRoute,
      frontmatter: { featuredImage, tags, date, title, excerpt },
      body,
      timeToRead,
    },
  }, // this prop will be injected by the GraphQL query below.
}: IProjectTemplateProps): JSX.Element {
  return (
    <>
      <SEO
        title={`${title} · Project`}
        description={excerpt}
        siteMetadata={StaticDataManager.siteMetadata}
        route={generatedRoute}
        jsonLd={[
          helmetJsonLdProp<CreativeWork>({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            author: StaticDataManager.siteMetadata.author,
            name: title,
            about: excerpt,
            keywords: tags,
            dateCreated: date,
            image: featuredImage?.childImageSharp.fluid.src,
          }),
        ]}
      />
      <Layout>
        <CenteredBlock>
          <article data-testid="ProjectTemplateArticle">
            <header>
              {featuredImage && (
                <Image fluid={featuredImage.childImageSharp.fluid} />
              )}
              <FullPageH1>{title}</FullPageH1>
              <h6>
                <DateFormatted dateString={date} /> ·{' '}
                <ReadingTime timeToRead={timeToRead} />
              </h6>
            </header>
            <p>{excerpt}</p>
            {body && <MDXRenderer>{body}</MDXRenderer>}
            <footer>
              <ArticleTags tags={tags} />
            </footer>
          </article>
        </CenteredBlock>
      </Layout>
    </>
  )
}

// tslint:disable-next-line: no-void-expression
export const pageQuery: void = graphql`
  query($path: String!) {
    mdx(generatedRoute: { eq: $path }) {
      generatedRoute
      body
      frontmatter {
        date
        category
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
      timeToRead
    }
  }
`
