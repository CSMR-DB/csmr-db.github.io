import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { IndexLayout, IIndexLayoutProps } from '../layouts/IndexLayout'

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
      />
      <IndexLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default IndexPage
