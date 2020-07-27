import React from 'react'

import { StaticDataManager } from '../data/DataManager'

import { IndexLayout, IIndexLayoutProps } from '../layouts/IndexLayout'

function IndexPage(): JSX.Element {
  const data: IIndexLayoutProps = {
    ...StaticDataManager.siteMetadata,
    skillsetData: StaticDataManager.skillsetData.top,
    programmingData: StaticDataManager.programmingData.top,
  }

  return <IndexLayout {...data} />
}

// tslint:disable-next-line: no-default-export
export default IndexPage
