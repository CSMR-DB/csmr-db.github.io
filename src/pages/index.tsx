import React from 'react'
import { helmetJsonLdProp } from 'react-schemaorg'
import { WebSite, ItemList } from 'schema-dts'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { IndexLayout, IIndexLayoutProps } from '../layouts/IndexLayout'
import { allMdxJsonLdGenerator } from '../utils/allMdxJsonLdGenerator'

function IndexPage(): JSX.Element {
  const data: IIndexLayoutProps = {
    skillsetData: StaticDataManager.skillsetData.top,
    programmingData: StaticDataManager.programmingData.top,
  }

  return (
    <>
      <SEO
        title={`Homepage`}
        description={
          StaticDataManager.siteMetadata.site.siteMetadata.description
        }
        siteMetadata={StaticDataManager.siteMetadata}
        route={'/'}
        jsonLd={[
          helmetJsonLdProp<WebSite>({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: StaticDataManager.siteMetadata.site.siteMetadata.title,
            url: StaticDataManager.siteMetadata.site.siteMetadata.url,
            description:
              StaticDataManager.siteMetadata.site.siteMetadata.description,
          }),
          helmetJsonLdProp<ItemList>({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            description: 'Primary skills',
            itemListElement: allMdxJsonLdGenerator({
              projectsData: data.skillsetData,
              siteMetadata: StaticDataManager.siteMetadata,
            }),
          }),
        ]}
      />
      <IndexLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default IndexPage
