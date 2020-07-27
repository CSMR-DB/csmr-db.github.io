import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { Layout } from '../components/Layout'
import {
  PhotographyLayout,
  IPhotographyLayoutProps,
} from '../layouts/PhotographyLayout'

function PhotographyPage(): JSX.Element {
  const data: IPhotographyLayoutProps = {
    ...StaticDataManager.photographyData,
  }

  return (
    <Layout>
      <PhotographyLayout {...data} />
    </Layout>
  )
}

// tslint:disable-next-line: no-default-export
export default PhotographyPage
