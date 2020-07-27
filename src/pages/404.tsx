import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import { Layout } from '../components/Layout'
import { FourOFourLayout } from '../layouts/FourOFourLayout'

function FourOFourPage(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="404: Not found"
        description="Should this even be SEO-able?"
        siteMetadata={StaticDataManager.siteMetadata}
      />
      <FourOFourLayout />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default FourOFourPage
