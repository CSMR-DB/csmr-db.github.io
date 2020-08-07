import React from 'react'
import { graphql } from 'gatsby'
import { helmetJsonLdProp } from 'react-schemaorg'
import { CreativeWork } from 'schema-dts'

import { ProjectMarkdownRemark } from '../types/graphql.types'
import { StaticDataManager } from '../data/DataManager'
import { routeGenerator } from '../utils/routeGenerator'

import { SEO } from '../components/compositions/SEO'
import { Layout } from '../components/Layout'
import { CenteredBlock } from '../components/CenteredBlock'
import { ArticleTags } from '../components/ArticleTags'
import { CardHeaderImageOrVideo } from '../components/compositions/card/CardHeaderImageOrVideo'
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
      fileAbsolutePath,
      frontmatter: { featuredImage, featuredVideo, tags, date, title, excerpt },
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
        route={routeGenerator(fileAbsolutePath)}
        jsonLd={[
          helmetJsonLdProp<CreativeWork>({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            author: StaticDataManager.siteMetadata.site.siteMetadata.author,
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
    mdx(fileAbsolutePath: { regex: $path }) {
      fileAbsolutePath
      body
      frontmatter {
        date
        category
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
