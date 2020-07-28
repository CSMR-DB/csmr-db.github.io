import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { SEO } from '../components/compositions/SEO'
import {
  PhotographyLayout,
  IPhotographyLayoutProps,
} from '../layouts/PhotographyLayout'

function PhotographyPage(): JSX.Element {
  const data: IPhotographyLayoutProps = {
    ...StaticDataManager.photographyData,
  }

  return (
    <>
      <SEO
        title="Photography"
        description="I like photography and I really should do it more often. Anyway, here are some shots!"
        siteMetadata={StaticDataManager.siteMetadata}
        route={'/photography'}
      />
      <PhotographyLayout {...data} />
    </>
  )
}

// tslint:disable-next-line: no-default-export
export default PhotographyPage
