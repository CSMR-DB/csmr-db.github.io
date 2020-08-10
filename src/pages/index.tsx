import React from 'react'
import { helmetJsonLdProp } from 'react-schemaorg'
import { WebSite, ItemList } from 'schema-dts'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { IndexLayout, IIndexLayoutProps } from '../layouts/IndexLayout'
import { allMdxProjectsJsonLdGenerator } from '../utils/allMdxProjectsJsonLdGenerator'

function IndexPage(): JSX.Element {
  const data: IIndexLayoutProps = {
    skillsetData: StaticDataManager.skillsetData.top,
    projectsData: StaticDataManager.projectsData.top,
  }

  return (
    <>
      <SEO
        title={`Homepage`}
        description={StaticDataManager.siteMetadata.description}
        siteMetadata={StaticDataManager.siteMetadata}
        route={'/'}
        jsonLd={[
          helmetJsonLdProp<WebSite>({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: StaticDataManager.siteMetadata.title,
            url: StaticDataManager.siteMetadata.url,
            description: StaticDataManager.siteMetadata.description,
          }),
          helmetJsonLdProp<ItemList>({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            description: 'Primary skills',
            itemListElement: allMdxProjectsJsonLdGenerator({
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
