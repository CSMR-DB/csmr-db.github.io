import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout, SEO } from '../components';

export interface ISiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

export function IndexLayout(): JSX.Element {
  // tslint:disable-next-line: no-void-expression
  const data: ISiteMetadata = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <SEO title={`Homepage • ${data.site.siteMetadata.description}`} description={data.site.siteMetadata.description} />
      <Layout isLandingPage />
    </>
  )
}