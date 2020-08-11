import React from 'react'

import { StaticDataManager } from '../data/StaticDataManager'

import { SEO } from '../components/compositions/SEO'
import { FourOFourLayout } from '../layouts/FourOFourLayout'

function FourOFourPage(): JSX.Element {
  return (
    <>
      <SEO
        title="404: Not found"
        description="Should this even be SEO-able?"
        siteMetadata={StaticDataManager.siteMetadata}
        route={'/404'}
      />
      <FourOFourLayout />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default FourOFourPage
